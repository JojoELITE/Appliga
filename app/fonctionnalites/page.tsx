import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  ShoppingCart,
  CreditCard,
  Bell,
  Truck,
  BarChart,
  Users,
  Search,
  Smartphone,
  Globe,
  Shield,
  Tag,
  MessageSquare,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function FonctionnalitesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-12 md:py-24 bg-blue-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <Badge className="bg-amber-500 text-white hover:bg-amber-600 px-3 py-1">FONCTIONNALITÉS COMPLÈTES</Badge>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Toutes les Fonctionnalités dont Vous Avez Besoin
            </h1>
            <p className="max-w-[700px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Découvrez la puissance d&apos;Appliga, une solution e-commerce complète et prête à l&apos;emploi
            </p>
          </div>
        </div>
      </section>

      {/* Fonctionnalités Principales */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader className="pb-2">
                <ShoppingCart className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Panier d&apos;Achat Intelligent</CardTitle>
                <CardDescription>Optimisé pour maximiser les conversions</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Ajout au panier sans rechargement de page</li>
                  <li>• Sauvegarde automatique des paniers</li>
                  <li>• Suggestions de produits complémentaires</li>
                  <li>• Calcul dynamique des frais de livraison</li>
                  <li>• Codes promotionnels intégrés</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CreditCard className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Paiement Sécurisé</CardTitle>
                <CardDescription>Multiples options de paiement</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Intégration PayPal, Visa, Mastercard</li>
                  <li>• Support pour Mobile Money (Moov, Airtel)</li>
                  <li>• Paiement à la livraison</li>
                  <li>• Transactions cryptées et sécurisées</li>
                  <li>• Conformité PCI DSS</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <Bell className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Notifications Push</CardTitle>
                <CardDescription>Gardez vos clients informés</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Alertes de nouveaux produits</li>
                  <li>• Notifications de promotions</li>
                  <li>• Mises à jour de statut des commandes</li>
                  <li>• Rappels de paniers abandonnés</li>
                  <li>• Messages personnalisés</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <Truck className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Suivi de Commande</CardTitle>
                <CardDescription>Transparence totale pour vos clients</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Suivi en temps réel</li>
                  <li>• Notifications automatiques d&apos;étapes</li>
                  <li>• Intégration avec services de livraison</li>
                  <li>• Historique des commandes</li>
                  <li>• Estimation des délais de livraison</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <BarChart className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Interface d&apos;Administration</CardTitle>
                <CardDescription>Contrôle total de votre boutique</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Tableau de bord analytique</li>
                  <li>• Gestion des produits et catégories</li>
                  <li>• Suivi des commandes et inventaire</li>
                  <li>• Gestion des clients</li>
                  <li>• Rapports de vente et performance</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <Users className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Gestion des Clients</CardTitle>
                <CardDescription>Construisez des relations durables</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Profils clients détaillés</li>
                  <li>• Historique d&apos;achats</li>
                  <li>• Programme de fidélité intégré</li>
                  <li>• Segmentation pour marketing ciblé</li>
                  <li>• Support client intégré</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <Search className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Recherche Avancée</CardTitle>
                <CardDescription>Trouvez rapidement les produits</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Recherche instantanée</li>
                  <li>• Filtres multicritères</li>
                  <li>• Suggestions intelligentes</li>
                  <li>• Correction orthographique</li>
                  <li>• Historique de recherche</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <Smartphone className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Application Mobile</CardTitle>
                <CardDescription>Expérience native sur iOS et Android</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Design responsive</li>
                  <li>• Navigation intuitive</li>
                  <li>• Paiement mobile intégré</li>
                  <li>• Notifications push</li>
                  <li>• Mode hors ligne</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <Globe className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Multi-langues & Devises</CardTitle>
                <CardDescription>Vendez à l&apos;international</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Support pour multiples langues</li>
                  <li>• Conversion automatique des devises</li>
                  <li>• Adaptation aux taxes locales</li>
                  <li>• Options d&apos;expédition internationales</li>
                  <li>• Traduction automatique des descriptions</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <Shield className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Sécurité Renforcée</CardTitle>
                <CardDescription>Protection des données et transactions</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Certificat SSL inclus</li>
                  <li>• Protection contre la fraude</li>
                  <li>• Sauvegarde automatique des données</li>
                  <li>• Conformité RGPD</li>
                  <li>• Authentification à deux facteurs</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <Tag className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Marketing Intégré</CardTitle>
                <CardDescription>Outils pour booster vos ventes</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Coupons et promotions</li>
                  <li>• Ventes flash et compte à rebours</li>
                  <li>• Email marketing automatisé</li>
                  <li>• Intégration réseaux sociaux</li>
                  <li>• Programme d&apos;affiliation</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <MessageSquare className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Support Premium</CardTitle>
                <CardDescription>Assistance technique dédiée</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Support par email et chat</li>
                  <li>• Documentation complète</li>
                  <li>• Vidéos tutoriels</li>
                  <li>• Mises à jour régulières</li>
                  <li>• Personnalisation sur demande</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Capture d'écran */}
      <section className="py-16 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-900">
              Interface Utilisateur Intuitive
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Conçue pour offrir une expérience d&apos;achat fluide et agréable
            </p>
          </div>
          <div className="relative h-[500px] w-full rounded-xl overflow-hidden shadow-xl">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/01.jpg-dunymkNFyLWPnGZGYpPF0qoqOTVq0x.jpeg"
              alt="Interface de l'application Appliga"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <Badge className="bg-amber-500 text-white hover:bg-amber-600 px-3 py-1">OFFRE LIMITÉE -30%</Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Prêt à Lancer Votre E-commerce?
            </h2>
            <p className="max-w-[700px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Obtenez toutes ces fonctionnalités et plus encore avec notre offre spéciale à durée limitée
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-white">
                <Link href="/paiement">Acheter Maintenant</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link href="/demo">Voir la Démo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
