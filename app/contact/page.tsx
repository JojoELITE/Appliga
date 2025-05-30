"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  CreditCard,
  DollarSignIcon as PaypalLogo,
  Phone,
  Mail,
  MapPin,
  Check,
  Building,
  ArrowLeft,
  Lock,
} from "lucide-react"

export default function ContactPage() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string | null>(null)
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    // Simuler l'envoi du formulaire
    setFormSubmitted(true)
  }

  const handleBackToSelection = () => {
    setSelectedPaymentMethod(null)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-12 md:py-24 bg-blue-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <Badge className="bg-amber-500 text-white hover:bg-amber-600 px-3 py-1">OFFRE SPÉCIALE -30%</Badge>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Formulaire d&apos;Achat</h1>
            <p className="max-w-[700px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Complétez ce formulaire pour acquérir l&apos;application e-commerce Appliga
            </p>
          </div>
        </div>
      </section>

      {/* Formulaire et Paiement */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {formSubmitted ? (
                <Card className="border-green-500">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-2xl text-green-600 flex items-center gap-2">
                      <Check className="h-6 w-6" />
                      Demande Envoyée avec Succès!
                    </CardTitle>
                    <CardDescription>
                      Merci pour votre intérêt pour Appliga. Nous avons bien reçu votre demande.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <p className="mb-4">
                      Notre équipe va examiner votre demande et vous contactera dans les plus brefs délais, généralement
                      sous 24 heures ouvrables.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 mt-6">
                      <Button asChild className="bg-blue-600 hover:bg-blue-700">
                        <Link href="/demo">Voir la Démo</Link>
                      </Button>
                      <Button asChild variant="outline">
                        <Link href="/">Retour à l&apos;Accueil</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ) : !selectedPaymentMethod ? (
                // Sélection du mode de paiement
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Choisissez votre mode de paiement</CardTitle>
                      <CardDescription>Sélectionnez la méthode de paiement qui vous convient</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Carte Bancaire */}
                        <Card
                          className="cursor-pointer hover:border-blue-600 hover:shadow-md transition-all"
                          onClick={() => setSelectedPaymentMethod("card")}
                        >
                          <CardHeader className="text-center">
                            <div className="flex justify-center mb-4">
                              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                                <CreditCard className="h-8 w-8 text-blue-600" />
                              </div>
                            </div>
                            <CardTitle>Carte Bancaire</CardTitle>
                            <CardDescription>Visa, Mastercard, American Express</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <ul className="space-y-2 text-sm">
                              <li className="flex items-center gap-2">
                                <Check className="h-4 w-4 text-green-500" />
                                <span>Paiement sécurisé</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <Check className="h-4 w-4 text-green-500" />
                                <span>Confirmation immédiate</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <Check className="h-4 w-4 text-green-500" />
                                <span>Protection 3D Secure</span>
                              </li>
                            </ul>
                          </CardContent>
                          <CardFooter className="justify-center">
                            <div className="flex gap-2">
                              <Image src="/placeholder.svg" alt="Visa" width={30} height={20} />
                              <Image src="/placeholder.svg" alt="Mastercard" width={30} height={20} />
                            </div>
                          </CardFooter>
                        </Card>

                        {/* Mobile Money */}
                        <Card
                          className="cursor-pointer hover:border-blue-600 hover:shadow-md transition-all"
                          onClick={() => setSelectedPaymentMethod("mobile")}
                        >
                          <CardHeader className="text-center">
                            <div className="flex justify-center mb-4">
                              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                                <Phone className="h-8 w-8 text-blue-600" />
                              </div>
                            </div>
                            <CardTitle>Mobile Money</CardTitle>
                            <CardDescription>Airtel Money, Moov Money</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <ul className="space-y-2 text-sm">
                              <li className="flex items-center gap-2">
                                <Check className="h-4 w-4 text-green-500" />
                                <span>Paiement local</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <Check className="h-4 w-4 text-green-500" />
                                <span>Confirmation par SMS</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <Check className="h-4 w-4 text-green-500" />
                                <span>Sans frais supplémentaires</span>
                              </li>
                            </ul>
                          </CardContent>
                          <CardFooter className="justify-center">
                            <div className="flex gap-2">
                              <Image src="/placeholder.svg" alt="Airtel Money" width={30} height={20} />
                              <Image src="/placeholder.svg" alt="Moov Money" width={30} height={20} />
                            </div>
                          </CardFooter>
                        </Card>

                        {/* Virement Bancaire */}
                        <Card
                          className="cursor-pointer hover:border-blue-600 hover:shadow-md transition-all"
                          onClick={() => setSelectedPaymentMethod("virement")}
                        >
                          <CardHeader className="text-center">
                            <div className="flex justify-center mb-4">
                              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                                <Building className="h-8 w-8 text-blue-600" />
                              </div>
                            </div>
                            <CardTitle>Virement Bancaire</CardTitle>
                            <CardDescription>Transfert bancaire direct</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <ul className="space-y-2 text-sm">
                              <li className="flex items-center gap-2">
                                <Check className="h-4 w-4 text-green-500" />
                                <span>Paiement sécurisé</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <Check className="h-4 w-4 text-green-500" />
                                <span>Pas de frais supplémentaires</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <Check className="h-4 w-4 text-green-500" />
                                <span>Traçabilité bancaire</span>
                              </li>
                            </ul>
                          </CardContent>
                          <CardFooter className="justify-center">
                            <Building className="h-6 w-6 text-blue-600" />
                          </CardFooter>
                        </Card>

                        {/* PayPal */}
                        <Card
                          className="cursor-pointer hover:border-blue-600 hover:shadow-md transition-all"
                          onClick={() => setSelectedPaymentMethod("paypal")}
                        >
                          <CardHeader className="text-center">
                            <div className="flex justify-center mb-4">
                              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                                <PaypalLogo className="h-8 w-8 text-[#0070ba]" />
                              </div>
                            </div>
                            <CardTitle>PayPal</CardTitle>
                            <CardDescription>Paiement en ligne sécurisé</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <ul className="space-y-2 text-sm">
                              <li className="flex items-center gap-2">
                                <Check className="h-4 w-4 text-green-500" />
                                <span>Protection acheteur</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <Check className="h-4 w-4 text-green-500" />
                                <span>Paiement rapide</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <Check className="h-4 w-4 text-green-500" />
                                <span>Accepté mondialement</span>
                              </li>
                            </ul>
                          </CardContent>
                          <CardFooter className="justify-center">
                            <PaypalLogo className="h-6 w-6 text-[#0070ba]" />
                          </CardFooter>
                        </Card>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ) : (
                // Formulaire spécifique au mode de paiement sélectionné
                <div className="space-y-6">
                  <Button variant="outline" onClick={handleBackToSelection} className="flex items-center gap-2">
                    <ArrowLeft className="h-4 w-4" />
                    Retour aux modes de paiement
                  </Button>

                  <Card>
                    <CardHeader>
                      <CardTitle>
                        {selectedPaymentMethod === "card" && "Paiement par Carte Bancaire"}
                        {selectedPaymentMethod === "mobile" && "Paiement via Mobile Money"}
                        {selectedPaymentMethod === "virement" && "Paiement par Virement Bancaire"}
                        {selectedPaymentMethod === "paypal" && "Paiement via PayPal"}
                      </CardTitle>
                      <CardDescription>
                        Complétez les informations ci-dessous pour finaliser votre achat
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Informations personnelles communes */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="firstName">Prénom</Label>
                            <Input id="firstName" placeholder="Votre prénom" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="lastName">Nom</Label>
                            <Input id="lastName" placeholder="Votre nom" required />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="votre@email.com" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone">Téléphone</Label>
                            <Input id="phone" placeholder="+241 XX XX XX XX" required />
                          </div>
                        </div>

                        {/* Formulaires spécifiques par mode de paiement */}
                        {selectedPaymentMethod === "card" && (
                          <>
                            <div className="border-t pt-6">
                              <h3 className="text-lg font-semibold mb-4">Informations de la carte</h3>
                              <div className="space-y-4">
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
                                </div>
                              </div>
                            </div>
                          </>
                        )}

                        {selectedPaymentMethod === "mobile" && (
                          <>
                            <div className="border-t pt-6">
                              <h3 className="text-lg font-semibold mb-4">Informations Mobile Money</h3>
                              <div className="space-y-4">
                                <div className="space-y-2">
                                  <Label>Opérateur</Label>
                                  <RadioGroup defaultValue="airtel" className="grid grid-cols-2 gap-4">
                                    <div className="border rounded-lg p-3 cursor-pointer [&:has(:checked)]:bg-blue-50 [&:has(:checked)]:border-blue-600">
                                      <RadioGroupItem id="airtel" value="airtel" className="sr-only" />
                                      <Label htmlFor="airtel" className="flex items-center gap-2 cursor-pointer">
                                        <Image src="/placeholder.svg" alt="Airtel" width={24} height={24} />
                                        <span>Airtel Money</span>
                                      </Label>
                                    </div>
                                    <div className="border rounded-lg p-3 cursor-pointer [&:has(:checked)]:bg-blue-50 [&:has(:checked)]:border-blue-600">
                                      <RadioGroupItem id="moov" value="moov" className="sr-only" />
                                      <Label htmlFor="moov" className="flex items-center gap-2 cursor-pointer">
                                        <Image src="/placeholder.svg" alt="Moov" width={24} height={24} />
                                        <span>Moov Money</span>
                                      </Label>
                                    </div>
                                  </RadioGroup>
                                </div>
                                <div className="space-y-2">
                                  <Label htmlFor="mobileNumber">Numéro de téléphone</Label>
                                  <Input id="mobileNumber" placeholder="+241 XX XX XX XX" required />
                                </div>
                                <div className="space-y-2">
                                  <Label htmlFor="mobilePin">Code PIN</Label>
                                  <Input id="mobilePin" type="password" placeholder="Votre code PIN" required />
                                </div>
                              </div>
                            </div>
                          </>
                        )}

                        {selectedPaymentMethod === "virement" && (
                          <>
                            <div className="border-t pt-6">
                              <h3 className="text-lg font-semibold mb-4">Informations de virement</h3>
                              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                                <h4 className="font-semibold text-blue-800 mb-2">Nos coordonnées bancaires</h4>
                                <div className="space-y-1 text-sm">
                                  <p>
                                    <strong>Banque:</strong> BGFI Bank Gabon
                                  </p>
                                  <p>
                                    <strong>Titulaire:</strong> Appliga SARL
                                  </p>
                                  <p>
                                    <strong>IBAN:</strong> GA21 4002 1000 0123 4567 8901 234
                                  </p>
                                  <p>
                                    <strong>BIC/SWIFT:</strong> BGFIGALCXXX
                                  </p>
                                </div>
                              </div>
                              <div className="space-y-4">
                                <div className="space-y-2">
                                  <Label htmlFor="senderRIB">Votre RIB (compte émetteur)</Label>
                                  <Input id="senderRIB" placeholder="IBAN de votre compte" required />
                                </div>
                                <div className="space-y-2">
                                  <Label htmlFor="transferDate">Date prévue du virement</Label>
                                  <Input id="transferDate" type="date" required />
                                </div>
                              </div>
                            </div>
                          </>
                        )}

                        {selectedPaymentMethod === "paypal" && (
                          <>
                            <div className="border-t pt-6">
                              <h3 className="text-lg font-semibold mb-4">Informations PayPal</h3>
                              <div className="space-y-4">
                                <div className="space-y-2">
                                  <Label htmlFor="paypalEmail">Email PayPal</Label>
                                  <Input id="paypalEmail" type="email" placeholder="votre@paypal.com" required />
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
                              </div>
                            </div>
                          </>
                        )}

                        <div className="flex items-start space-x-2 pt-4">
                          <Checkbox id="terms" required />
                          <Label htmlFor="terms" className="text-sm">
                            J&apos;accepte les{" "}
                            <Link href="#" className="text-blue-600 hover:underline">
                              conditions générales de vente
                            </Link>{" "}
                            et la{" "}
                            <Link href="#" className="text-blue-600 hover:underline">
                              politique de confidentialité
                            </Link>
                          </Label>
                        </div>

                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Lock className="h-4 w-4" />
                          <span>Toutes vos informations sont sécurisées et cryptées</span>
                        </div>

                        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                          Finaliser l&apos;achat - 655 000 FCFA
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>

            {/* Récapitulatif */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Récapitulatif</CardTitle>
                  <CardDescription>Application E-commerce Appliga</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="relative aspect-video w-full rounded-lg overflow-hidden">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/01.jpg-dunymkNFyLWPnGZGYpPF0qoqOTVq0x.jpeg"
                      alt="Application Appliga"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Prix standard</span>
                      <span className="text-gray-500 line-through">983 000 FCFA</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Réduction</span>
                      <span className="text-amber-500">-30%</span>
                    </div>
                    <div className="flex justify-between font-bold text-lg">
                      <span>Prix final</span>
                      <span>655 000 FCFA</span>
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
                  </div>
                </CardContent>
                <CardFooter className="flex-col space-y-4">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <CreditCard className="h-4 w-4" />
                    <span>Paiement sécurisé</span>
                  </div>
                  <div className="flex justify-center gap-4">
                    <Image src="/placeholder.svg" alt="Visa" width={40} height={25} />
                    <Image src="/placeholder.svg" alt="Mastercard" width={40} height={25} />
                    <Image src="/placeholder.svg" alt="PayPal" width={40} height={25} />
                    <Image src="/placeholder.svg" alt="Mobile Money" width={40} height={25} />
                  </div>
                </CardFooter>
              </Card>

              <div className="mt-6 space-y-6">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle>Besoin d&apos;aide?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-blue-600 mt-0.5" />
                      <div>
                        <h4 className="font-semibold">Téléphone</h4>
                        <p className="text-sm text-gray-500">+241 77 12 34 56</p>
                        <p className="text-xs text-gray-500">Lun-Ven, 8h-17h</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-blue-600 mt-0.5" />
                      <div>
                        <h4 className="font-semibold">Email</h4>
                        <p className="text-sm text-gray-500">contact@appliga.com</p>
                        <p className="text-xs text-gray-500">Réponse sous 24h</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-blue-600 mt-0.5" />
                      <div>
                        <h4 className="font-semibold">Adresse</h4>
                        <p className="text-sm text-gray-500">123 Boulevard Triomphal</p>
                        <p className="text-xs text-gray-500">Libreville, Gabon</p>
                      </div>
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
