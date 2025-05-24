"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSignIcon as PaypalLogo, Check, Lock, AlertCircle, CreditCard, Phone } from "lucide-react"

export default function PaiementDetailsPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const paymentMethod = searchParams.get("method") || "card"
  const [paymentStatus, setPaymentStatus] = useState<"pending" | "processing" | "success" | "error">("pending")

  const handleSubmit = (e) => {
    e.preventDefault()
    setPaymentStatus("processing")

    // Simuler un traitement de paiement
    setTimeout(() => {
      router.push("/paiement-confirmation")
    }, 2000)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-blue-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <Badge className="bg-amber-500 text-white hover:bg-amber-600 px-3 py-1">PAIEMENT SÉCURISÉ</Badge>
            <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
              {paymentMethod === "card"
                ? "Paiement par Carte Bancaire"
                : paymentMethod === "paypal"
                  ? "Paiement via PayPal"
                  : "Paiement via Mobile Money"}
            </h1>
            <p className="max-w-[700px] text-blue-100 md:text-lg">
              Complétez les informations ci-dessous pour finaliser votre achat
            </p>
          </div>
        </div>
      </section>

      {/* Formulaire de paiement */}
      <section className="py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>
                    {paymentMethod === "card"
                      ? "Paiement par Carte Bancaire"
                      : paymentMethod === "paypal"
                        ? "Paiement via PayPal"
                        : "Paiement via Mobile Money"}
                  </CardTitle>
                  <CardDescription>Veuillez remplir tous les champs pour procéder au paiement</CardDescription>
                </CardHeader>
                <CardContent>
                  {paymentStatus === "processing" ? (
                    <div className="flex flex-col items-center justify-center py-8">
                      <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mb-4"></div>
                      <p className="text-lg font-medium">Traitement du paiement en cours...</p>
                      <p className="text-sm text-gray-500 mt-2">Veuillez ne pas fermer cette page</p>
                    </div>
                  ) : paymentMethod === "card" ? (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="cardName">Nom sur la carte</Label>
                        <Input id="cardName" placeholder="Nom complet" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cardNumber">Numéro de carte</Label>
                        <Input id="cardNumber" placeholder="1234 5678 9012 3456" required />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="expiry">Date d&apos;expiration</Label>
                          <Input id="expiry" placeholder="MM/AA" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cvc">CVC</Label>
                          <Input id="cvc" placeholder="123" required />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cardEmail">Email (pour reçu)</Label>
                        <Input id="cardEmail" type="email" placeholder="votre@email.com" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cardAddress">Adresse de facturation</Label>
                        <Textarea id="cardAddress" placeholder="Votre adresse complète" required />
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Lock className="h-4 w-4" />
                        <span>Vos informations de paiement sont sécurisées</span>
                      </div>
                      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                        Payer 655 000 FCFA
                      </Button>
                    </form>
                  ) : paymentMethod === "paypal" ? (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="paypalEmail">Email PayPal</Label>
                        <Input id="paypalEmail" type="email" placeholder="votre@email.com" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="paypalName">Nom complet</Label>
                        <Input id="paypalName" placeholder="Nom et prénom" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="paypalPhone">Numéro de téléphone</Label>
                        <Input id="paypalPhone" placeholder="+241 XX XX XX XX" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="paypalAddress">Adresse de facturation</Label>
                        <Textarea id="paypalAddress" placeholder="Votre adresse complète" required />
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Lock className="h-4 w-4" />
                        <span>Vous serez redirigé vers PayPal pour finaliser votre paiement en toute sécurité</span>
                      </div>
                      <Button type="submit" className="w-full bg-[#0070ba] hover:bg-[#005ea6]">
                        Continuer vers PayPal
                      </Button>
                    </form>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label>Opérateur Mobile Money</Label>
                        <RadioGroup defaultValue="airtel" className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="border rounded-lg p-4 cursor-pointer [&:has(:checked)]:bg-blue-50 [&:has(:checked)]:border-blue-600">
                            <RadioGroupItem id="airtel" value="airtel" className="sr-only" />
                            <Label htmlFor="airtel" className="flex items-center gap-2 cursor-pointer">
                              <div className="relative w-8 h-8">
                                <Image src="/placeholder.svg" alt="Airtel Money" fill className="object-contain" />
                              </div>
                              <span>Airtel Money</span>
                            </Label>
                          </div>
                          <div className="border rounded-lg p-4 cursor-pointer [&:has(:checked)]:bg-blue-50 [&:has(:checked)]:border-blue-600">
                            <RadioGroupItem id="moov" value="moov" className="sr-only" />
                            <Label htmlFor="moov" className="flex items-center gap-2 cursor-pointer">
                              <div className="relative w-8 h-8">
                                <Image src="/placeholder.svg" alt="Moov Money" fill className="object-contain" />
                              </div>
                              <span>Moov Money</span>
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="mobileNumber">Numéro de téléphone Mobile Money</Label>
                        <Input id="mobileNumber" placeholder="+241 XX XX XX XX" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="mobileName">Nom du titulaire du compte</Label>
                        <Input id="mobileName" placeholder="Nom complet" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="mobileEmail">Email (pour reçu)</Label>
                        <Input id="mobileEmail" type="email" placeholder="votre@email.com" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="mobileAddress">Adresse de facturation</Label>
                        <Textarea id="mobileAddress" placeholder="Votre adresse complète" required />
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Lock className="h-4 w-4" />
                        <span>Vous recevrez un code de confirmation par SMS pour valider votre paiement</span>
                      </div>
                      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                        Procéder au Paiement
                      </Button>
                    </form>
                  )}
                </CardContent>
                <CardFooter className="flex justify-center border-t pt-6">
                  <div className="flex gap-4">
                    {paymentMethod === "card" ? (
                      <>
                        <Image src="/placeholder.svg" alt="Visa" width={40} height={25} />
                        <Image src="/placeholder.svg" alt="Mastercard" width={40} height={25} />
                        <Image src="/placeholder.svg" alt="American Express" width={40} height={25} />
                      </>
                    ) : paymentMethod === "paypal" ? (
                      <PaypalLogo className="h-10 w-10 text-[#0070ba]" />
                    ) : (
                      <>
                        <Image src="/placeholder.svg" alt="Airtel Money" width={40} height={25} />
                        <Image src="/placeholder.svg" alt="Moov Money" width={40} height={25} />
                      </>
                    )}
                  </div>
                </CardFooter>
              </Card>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Récapitulatif de la Commande</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="relative w-20 h-20 rounded-md overflow-hidden">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/01.jpg-dunymkNFyLWPnGZGYpPF0qoqOTVq0x.jpeg"
                        alt="Application Appliga"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold">Appliga - Application E-commerce</h3>
                      <p className="text-sm text-gray-500">Forfait Standard</p>
                    </div>
                  </div>
                  <div className="space-y-3 pt-4 border-t">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Prix standard</span>
                      <span className="text-gray-500 line-through">983 000 FCFA</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Réduction</span>
                      <span className="text-amber-500">-328 000 FCFA</span>
                    </div>
                    <div className="flex justify-between font-bold text-lg pt-2 border-t">
                      <span>Total</span>
                      <span>655 000 FCFA</span>
                    </div>
                  </div>
                  <div className="pt-4 border-t">
                    <h3 className="font-semibold mb-2">Ce qui est inclus:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                        <span>Application complète (iOS & Android)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                        <span>Interface d&apos;administration</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                        <span>Intégration des paiements</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                        <span>Support technique (3 mois)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                        <span>Mises à jour gratuites (1 an)</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="flex-col space-y-4 border-t">
                  <div className="flex items-center gap-2 text-sm text-gray-500 w-full">
                    <AlertCircle className="h-4 w-4" />
                    <span>
                      Besoin d&apos;aide?{" "}
                      <Link href="/contact" className="text-blue-600 hover:underline">
                        Contactez-nous
                      </Link>
                    </span>
                  </div>
                </CardFooter>
              </Card>

              <div className="mt-6">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">Changer de méthode de paiement</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 gap-2">
                      <Button
                        variant={paymentMethod === "card" ? "default" : "outline"}
                        className={`justify-start ${paymentMethod === "card" ? "bg-blue-600 hover:bg-blue-700" : ""}`}
                        onClick={() => router.push("/paiement-details?method=card")}
                      >
                        <CreditCard className="mr-2 h-4 w-4" />
                        Carte Bancaire
                      </Button>
                      <Button
                        variant={paymentMethod === "paypal" ? "default" : "outline"}
                        className={`justify-start ${
                          paymentMethod === "paypal" ? "bg-[#0070ba] hover:bg-[#005ea6]" : ""
                        }`}
                        onClick={() => router.push("/paiement-details?method=paypal")}
                      >
                        <PaypalLogo className="mr-2 h-4 w-4" />
                        PayPal
                      </Button>
                      <Button
                        variant={paymentMethod === "mobile" ? "default" : "outline"}
                        className={`justify-start ${paymentMethod === "mobile" ? "bg-blue-600 hover:bg-blue-700" : ""}`}
                        onClick={() => router.push("/paiement-details?method=mobile")}
                      >
                        <Phone className="mr-2 h-4 w-4" />
                        Mobile Money
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
