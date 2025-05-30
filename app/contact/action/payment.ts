"use server";

import prisma from "@/lib/prisma";
import { CreateInvoice, MakePushUSSD } from "@/lib/ebiling/pay";

interface MobileMoneyPaymentData {
  fullName: string;
  email: string; // Email récupéré depuis l'input du formulaire
  phone: string;
  
  payerMsisdn : string;
  operator: "airtel" | "moov";
  pin: string; // Note: En production, le PIN ne devrait pas être stocké
  amount: number;
  productId?: string;
  description: string;
  reference: string;
}

export async function payment(data: MobileMoneyPaymentData) {
  try {
    console.log("Début du traitement du paiement Mobile Money:", data);

    // 1. Vérification/création du produit Appliga
    const productName = "Appliga";
    let product = data.productId 
      ? await prisma.product.findUnique({ where: { id: data.productId } })
      : await prisma.product.findFirst({ where: { name: productName } });

    if (!product) {
      product = await prisma.product.create({
        data: {
          name: productName,
          description: "Application E-commerce Appliga",
          price: data.amount,
        },
      });
      console.log("Produit Appliga créé:", product);
    }


    // 3. Création de la commande
    const order = await prisma.order.create({
      data: {
        reference: data.reference,
        fullName: data.fullName,          // ajouté
        payerEmail: data.email,
        payerPhone: data.phone,           // ajouté (ou un autre champ si besoin)

        payerMsisdn: data.phone,
        shortDescription: data.description || `Achat ${productName}`,
        amount: data.amount,
        paymentMethod: data.operator === "airtel" ? "AIRTEL_MONEY" : "MOOV_MONEY",
        status: "PENDING",
        productId: product.id,
      },
    });

    // 4. Création de la facture via l'API externe
    const invoiceResponse = await CreateInvoice({
      amount: data.amount,
      payer_msisdn: data.phone,
      payer_email: data.email,
      short_description: `Achat ${productName}`,
      external_reference: data.reference,
    });
    
    if (!invoiceResponse.server_transaction_id) {
      throw new Error("Échec de la création de la facture");
    }

    // 5. Mise à jour de la commande
    await prisma.order.update({
      where: { id: order.id },
      data: {
        server_transaction_id: invoiceResponse.server_transaction_id,
        bill_id: invoiceResponse.e_bill?.bill_id || "",
      },
    });

    // 6. Création de la facture dans Prisma
    await prisma.invoice.create({
      data: {
        invoiceNumber: `INV-${Date.now()}`,
        status: "PENDING",
        totalAmount: data.amount,
        taxAmount: 0,
        totalWithTax: data.amount,
        orderId: order.id,
        items: {
          create: [{
            description: productName,
            quantity: 1,
            unitPrice: data.amount,
            totalPrice: data.amount,
            productId: product.id,
          }]
        },
      },
    });

    // 7. Initiation du paiement USSD
    const paymentSystem = data.operator === "airtel" ? "airtelmoney" : "moovmoney";
    await MakePushUSSD({
      bill_id: invoiceResponse.e_bill?.bill_id || "",
      payment_system_name: paymentSystem,
      payer_msisdn: data.phone,
    });

    console.log("Paiement Mobile Money initié avec succès");
    return { 
      success: true, 
      message: "Paiement initié avec succès", 
      transactionId: invoiceResponse.server_transaction_id,
      billId: invoiceResponse.e_bill?.bill_id 
    };

  } catch (error) {
    console.error("Erreur lors du traitement du paiement:", error);
    return { 
      success: false, 
      message: error instanceof Error ? error.message : "Erreur lors du traitement du paiement" 
    };
  }
}