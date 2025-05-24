"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSignIcon as PaypalLogo, CreditCard, Phone, Check, AlertCircle } from "lucide-react"

export default function ChoixPaiementPage() {
  const router = useRouter()
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null)

  const handleContinue = () => {
    if (selectedMethod) {
      router.push(`/paiement-details?method=${selectedMethod}`)
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-blue-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <Badge className="bg-amber-500 text-white hover:bg-amber-600 px-3 py-1">PAIEMENT SÉCURISÉ</Badge>
            <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
              Choisissez votre méthode de paiement
            </h1>
            <p className="max-w-[700px] text-blue-100 md:text-lg">
              Sélectionnez la méthode de paiement qui vous convient le mieux
            </p>
          </div>
        </div>
      </section>

      {/* Choix de paiement */}
      <section className="py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card
                  className={`cursor-pointer hover:border-blue-600 transition-all ${
                    selectedMethod === "card" ? "border-blue-600 ring-2 ring-blue-600/20" : ""
                  }`}
                  onClick={() => setSelectedMethod("card")}
                >
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                        <CreditCard className="h-8 w-8 text-blue-600" />
                      </div>
                    </div>
                    <CardTitle className="text-center">Carte Bancaire</CardTitle>
                    <CardDescription className="text-center">Visa, Mastercard, etc.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>Paiement sécurisé</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>Confirmation immédiate</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>Reçu par email</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter className="flex justify-center pt-2">
                    <div className="flex gap-2">
                      <Image src="/placeholder.svg" alt="Visa" width={30} height={20} />
                      <Image src="/placeholder.svg" alt="Mastercard" width={30} height={20} />
                    </div>
                  </CardFooter>
                </Card>

                <Card
                  className={`cursor-pointer hover:border-blue-600 transition-all ${
                    selectedMethod === "paypal" ? "border-blue-600 ring-2 ring-blue-600/20" : ""
                  }`}
                  onClick={() => setSelectedMethod("paypal")}
                >
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                        <PaypalLogo className="h-8 w-8 text-[#0070ba]" />
                      </div>
                    </div>
                    <CardTitle className="text-center">PayPal</CardTitle>
                    <CardDescription className="text-center">Paiement en ligne sécurisé</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>Protection acheteur</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>Pas besoin de carte</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>Paiement rapide</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter className="flex justify-center pt-2">
                    <PaypalLogo className="h-6 w-6 text-[#0070ba]" />
                  </CardFooter>
                </Card>

                <Card
                  className={`cursor-pointer hover:border-blue-600 transition-all ${
                    selectedMethod === "mobile" ? "border-blue-600 ring-2 ring-blue-600/20" : ""
                  }`}
                  onClick={() => setSelectedMethod("mobile")}
                >
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                        <Phone className="h-8 w-8 text-blue-600" />
                      </div>
                    </div>
                    <CardTitle className="text-center">Mobile Money</CardTitle>
                    <CardDescription className="text-center">Airtel Money, Moov Money</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>Paiement local</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>Confirmation par SMS</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>Sans frais supplémentaires</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter className="flex justify-center pt-2">
                    <div className="flex gap-2">
                      <Image src="/placeholder.svg" alt="Airtel Money" width={30} height={20} />
                      <Image src="/placeholder.svg" alt="Moov Money" width={30} height={20} />
                    </div>
                  </CardFooter>
                </Card>
              </div>

              <div className="mt-8 flex justify-center">
                <Button
                  onClick={handleContinue}
                  disabled={!selectedMethod}
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 px-8"
                >
                  Continuer
                </Button>
              </div>
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
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
