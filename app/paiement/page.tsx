"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DollarSignIcon as PaypalLogo, Check, Lock, AlertCircle, CreditCard, Phone, Building } from "lucide-react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function PaiementPage() {
  const [paymentStatus, setPaymentStatus] = useState<"pending" | "processing" | "success" | "error">("pending")

  const handleSubmit = (e) => {
    e.preventDefault()
    setPaymentStatus("processing")

    // Simuler un traitement de paiement
    setTimeout(() => {
      setPaymentStatus("success")
    }, 2000)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-blue-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <Badge className="bg-amber-500 text-white hover:bg-amber-600 px-3 py-1">PAIEMENT SÉCURISÉ</Badge>
            <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">Finaliser Votre Achat</h1>
            <p className="max-w-[700px] text-blue-100 md:text-lg">
              Vous êtes à un pas de lancer votre e-commerce avec Appliga
            </p>
          </div>
        </div>
      </section>

      {/* Paiement */}
      <section className="py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {paymentStatus === "success" ? (
                <Card className="border-green-500">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-2xl text-green-600 flex items-center gap-2">
                      <Check className="h-6 w-6" />
                      Paiement Réussi!
                    </CardTitle>
                    <CardDescription>Votre commande a été traitée avec succès.</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                      <p className="text-green-800">
                        Un email de confirmation a été envoyé à <strong>client@example.com</strong> avec tous les
                        détails de votre achat et les prochaines étapes.
                      </p>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="font-semibold">Numéro de commande:</span>
                        <span>#APP-20240522-1234</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-semibold">Date:</span>
                        <span>22/05/2024</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-semibold">Montant:</span>
                        <span>655 000 FCFA</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-semibold">Méthode de paiement:</span>
                        <span>Carte bancaire</span>
                      </div>
                    </div>
                    <div className="mt-8">
                      <h3 className="font-semibold text-lg mb-4">Prochaines étapes:</h3>
                      <ol className="space-y-2 list-decimal list-inside">
                        <li>Vous recevrez un email avec vos identifiants d&apos;accès</li>
                        <li>Notre équipe vous contactera pour planifier l&apos;installation</li>
                        <li>Vous pourrez personnaliser votre application selon vos besoins</li>
                        <li>Lancement de votre e-commerce!</li>
                      </ol>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 mt-8">
                      <Button asChild className="bg-blue-600 hover:bg-blue-700">
                        <Link href="/">Retour à l&apos;Accueil</Link>
                      </Button>
                      <Button asChild variant="outline">
                        <Link href="/contact">Contacter le Support</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Tabs defaultValue="card" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="card" className="flex items-center gap-2">
                      <CreditCard className="h-4 w-4" />
                      <span>Carte Bancaire</span>
                    </TabsTrigger>
                    <TabsTrigger value="mobile" className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      <span>Mobile Money</span>
                    </TabsTrigger>
                    <TabsTrigger value="virement" className="flex items-center gap-2">
                      <Building className="h-4 w-4" />
                      <span>Virement</span>
                    </TabsTrigger>
                    <TabsTrigger value="paypal" className="flex items-center gap-2">
                      <PaypalLogo className="h-4 w-4" />
                      <span>PayPal</span>
                    </TabsTrigger>
                  </TabsList>

                  {/* CARTE BANCAIRE */}
                  <TabsContent value="card" className="mt-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Paiement par Carte Bancaire</CardTitle>
                        <CardDescription>Toutes les transactions sont sécurisées et cryptées</CardDescription>
                      </CardHeader>
                      <CardContent>
                        {paymentStatus === "processing" ? (
                          <div className="flex flex-col items-center justify-center py-8">
                            <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mb-4"></div>
                            <p className="text-lg font-medium">Traitement du paiement en cours...</p>
                            <p className="text-sm text-gray-500 mt-2">Veuillez ne pas fermer cette page</p>
                          </div>
                        ) : (
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
                              <Label htmlFor="cardPassword">Mot de passe 3D Secure</Label>
                              <Input
                                id="cardPassword"
                                type="password"
                                placeholder="Votre mot de passe 3D Secure"
                                required
                              />
                              <p className="text-xs text-gray-500 mt-1">
                                Le mot de passe 3D Secure est fourni par votre banque pour sécuriser vos paiements en
                                ligne
                              </p>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                              <Lock className="h-4 w-4" />
                              <span>Vos informations de paiement sont sécurisées</span>
                            </div>
                            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                              Payer 655 000 FCFA
                            </Button>
                          </form>
                        )}
                      </CardContent>
                      <CardFooter className="flex justify-center border-t pt-6">
                        <div className="flex gap-4">
                          <Image src="/placeholder.svg" alt="Visa" width={40} height={25} />
                          <Image src="/placeholder.svg" alt="Mastercard" width={40} height={25} />
                          <Image src="/placeholder.svg" alt="American Express" width={40} height={25} />
                        </div>
                      </CardFooter>
                    </Card>
                  </TabsContent>

                  {/* MOBILE MONEY */}
                  <TabsContent value="mobile" className="mt-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Paiement via Mobile Money</CardTitle>
                        <CardDescription>Payez facilement avec votre compte Mobile Money</CardDescription>
                      </CardHeader>
                      <CardContent>
                        {paymentStatus === "processing" ? (
                          <div className="flex flex-col items-center justify-center py-8">
                            <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mb-4"></div>
                            <p className="text-lg font-medium">Traitement du paiement en cours...</p>
                            <p className="text-sm text-gray-500 mt-2">Veuillez ne pas fermer cette page</p>
                          </div>
                        ) : (
                          <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                              <Label>Opérateur Mobile Money</Label>
                              <RadioGroup defaultValue="airtel" className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="border rounded-lg p-4 cursor-pointer [&:has(:checked)]:bg-blue-50 [&:has(:checked)]:border-blue-600">
                                  <RadioGroupItem id="airtel" value="airtel" className="sr-only" />
                                  <Label htmlFor="airtel" className="flex items-center gap-2 cursor-pointer">
                                    <div className="relative w-8 h-8">
                                      <Image
                                        src="/placeholder.svg"
                                        alt="Airtel Money"
                                        fill
                                        className="object-contain"
                                      />
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
                              <Label htmlFor="mobilePassword">Code secret / PIN</Label>
                              <Input id="mobilePassword" type="password" placeholder="Votre code secret" required />
                              <p className="text-xs text-gray-500 mt-1">
                                Le code secret est celui que vous utilisez habituellement pour vos transactions Mobile
                                Money
                              </p>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                              <Lock className="h-4 w-4" />
                              <span>Vous recevrez un SMS de confirmation pour valider votre paiement</span>
                            </div>
                            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                              Procéder au Paiement
                            </Button>
                          </form>
                        )}
                      </CardContent>
                      <CardFooter className="flex justify-center border-t pt-6">
                        <div className="flex gap-4">
                          <Image src="/placeholder.svg" alt="Airtel Money" width={40} height={25} />
                          <Image src="/placeholder.svg" alt="Moov Money" width={40} height={25} />
                        </div>
                      </CardFooter>
                    </Card>
                  </TabsContent>

                  {/* VIREMENT BANCAIRE */}
                  <TabsContent value="virement" className="mt-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Paiement par Virement Bancaire</CardTitle>
                        <CardDescription>Effectuez un virement vers notre compte bancaire</CardDescription>
                      </CardHeader>
                      <CardContent>
                        {paymentStatus === "processing" ? (
                          <div className="flex flex-col items-center justify-center py-8">
                            <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mb-4"></div>
                            <p className="text-lg font-medium">Traitement du paiement en cours...</p>
                            <p className="text-sm text-gray-500 mt-2">Veuillez ne pas fermer cette page</p>
                          </div>
                        ) : (
                          <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                              <h3 className="font-semibold text-blue-800 mb-2">Coordonnées bancaires</h3>
                              <div className="space-y-2 text-sm">
                                <div className="grid grid-cols-3 gap-2">
                                  <span className="font-medium">Banque:</span>
                                  <span className="col-span-2">BGFI Bank Gabon</span>
                                </div>
                                <div className="grid grid-cols-3 gap-2">
                                  <span className="font-medium">Titulaire:</span>
                                  <span className="col-span-2">Appliga SARL</span>
                                </div>
                                <div className="grid grid-cols-3 gap-2">
                                  <span className="font-medium">IBAN:</span>
                                  <span className="col-span-2">GA21 4002 1000 0123 4567 8901 234</span>
                                </div>
                                <div className="grid grid-cols-3 gap-2">
                                  <span className="font-medium">BIC/SWIFT:</span>
                                  <span className="col-span-2">BGFIGALCXXX</span>
                                </div>
                                <div className="grid grid-cols-3 gap-2">
                                  <span className="font-medium">Référence:</span>
                                  <span className="col-span-2">APP-{new Date().getTime().toString().slice(-8)}</span>
                                </div>
                              </div>
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="transferName">Nom de l&apos;émetteur du virement</Label>
                              <Input id="transferName" placeholder="Votre nom complet ou raison sociale" required />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="transferRIB">Votre RIB (pour vérification)</Label>
                              <Input id="transferRIB" placeholder="IBAN de votre compte" required />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="transferDate">Date prévue du virement</Label>
                              <Input id="transferDate" type="date" required />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="transferEmail">Email (pour confirmation)</Label>
                              <Input id="transferEmail" type="email" placeholder="votre@email.com" required />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="transferProof">Justificatif de virement (optionnel)</Label>
                              <Input id="transferProof" type="file" />
                              <p className="text-xs text-gray-500 mt-1">
                                Vous pouvez télécharger une preuve de virement ou l&apos;envoyer plus tard par email
                              </p>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                              <AlertCircle className="h-4 w-4" />
                              <span>Votre commande sera validée après réception du paiement</span>
                            </div>
                            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                              Confirmer ma commande
                            </Button>
                          </form>
                        )}
                      </CardContent>
                      <CardFooter className="flex justify-center border-t pt-6">
                        <div className="flex gap-4">
                          <Building className="h-6 w-6 text-blue-600" />
                        </div>
                      </CardFooter>
                    </Card>
                  </TabsContent>

                  {/* PAYPAL */}
                  <TabsContent value="paypal" className="mt-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Paiement via PayPal</CardTitle>
                        <CardDescription>Payez en toute sécurité avec votre compte PayPal</CardDescription>
                      </CardHeader>
                      <CardContent>
                        {paymentStatus === "processing" ? (
                          <div className="flex flex-col items-center justify-center py-8">
                            <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mb-4"></div>
                            <p className="text-lg font-medium">Traitement du paiement en cours...</p>
                            <p className="text-sm text-gray-500 mt-2">Veuillez ne pas fermer cette page</p>
                          </div>
                        ) : (
                          <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                              <Label htmlFor="paypalEmail">Email PayPal</Label>
                              <Input id="paypalEmail" type="email" placeholder="votre@email.com" required />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="paypalPassword">Mot de passe PayPal</Label>
                              <Input
                                id="paypalPassword"
                                type="password"
                                placeholder="Votre mot de passe PayPal"
                                required
                              />
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                              <Lock className="h-4 w-4" />
                              <span>Connexion sécurisée à PayPal pour finaliser votre paiement</span>
                            </div>
                            <Button type="submit" className="w-full bg-[#0070ba] hover:bg-[#005ea6]">
                              Se connecter et payer
                            </Button>
                            <div className="text-center text-sm text-gray-500">ou</div>
                            <Button type="button" variant="outline" className="w-full">
                              Payer sans compte PayPal
                            </Button>
                          </form>
                        )}
                      </CardContent>
                      <CardFooter className="flex justify-center border-t pt-6">
                        <PaypalLogo className="h-10 w-10 text-[#0070ba]" />
                      </CardFooter>
                    </Card>
                  </TabsContent>
                </Tabs>
              )}
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
