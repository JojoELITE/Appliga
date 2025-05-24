import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Download, Calendar, Mail, Phone } from "lucide-react"

export default function PaiementConfirmationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-green-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <Badge className="bg-white text-green-600 hover:bg-white/90 px-3 py-1">PAIEMENT RÉUSSI</Badge>
            <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">Merci pour votre achat!</h1>
            <p className="max-w-[700px] text-green-50 md:text-lg">Votre commande a été traitée avec succès</p>
          </div>
        </div>
      </section>

      {/* Confirmation */}
      <section className="py-12">
        <div className="container px-4 md:px-6 max-w-3xl">
          <Card className="border-green-500">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <Check className="h-8 w-8 text-green-600" />
                </div>
              </div>
              <CardTitle className="text-2xl text-center text-green-600">Paiement Confirmé</CardTitle>
              <CardDescription className="text-center">
                Un email de confirmation a été envoyé à <strong>client@example.com</strong>
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-green-800">
                  Nous vous remercions pour votre confiance. Notre équipe va vous contacter dans les plus brefs délais
                  pour planifier l&apos;installation de votre application e-commerce.
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
                <div className="flex justify-between">
                  <span className="font-semibold">Statut:</span>
                  <span className="text-green-600 font-semibold">Payé</span>
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="font-semibold text-lg mb-4">Prochaines étapes:</h3>
                <ol className="space-y-2 list-decimal list-inside">
                  <li>Vous recevrez un email avec vos identifiants d&apos;accès</li>
                  <li>Notre équipe vous contactera pour planifier l&apos;installation</li>
                  <li>Vous pourrez personnaliser votre application selon vos besoins</li>
                  <li>Lancement de votre e-commerce!</li>
                </ol>
              </div>

              <div className="border-t pt-6">
                <h3 className="font-semibold text-lg mb-4">Besoin d&apos;aide?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex flex-col items-center text-center p-4 border rounded-lg">
                    <Mail className="h-6 w-6 text-blue-600 mb-2" />
                    <p className="font-semibold">Email</p>
                    <p className="text-sm text-gray-500">contact@appliga.com</p>
                  </div>
                  <div className="flex flex-col items-center text-center p-4 border rounded-lg">
                    <Phone className="h-6 w-6 text-blue-600 mb-2" />
                    <p className="font-semibold">Téléphone</p>
                    <p className="text-sm text-gray-500">+241 77 12 34 56</p>
                  </div>
                  <div className="flex flex-col items-center text-center p-4 border rounded-lg">
                    <Calendar className="h-6 w-6 text-blue-600 mb-2" />
                    <p className="font-semibold">Horaires</p>
                    <p className="text-sm text-gray-500">Lun-Ven, 8h-17h</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button asChild className="bg-blue-600 hover:bg-blue-700">
                  <Link href="/">Retour à l&apos;Accueil</Link>
                </Button>
                <Button asChild variant="outline" className="gap-2">
                  <Link href="#">
                    <Download className="h-4 w-4" />
                    Télécharger la facture
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
