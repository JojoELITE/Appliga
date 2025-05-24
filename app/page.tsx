import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ShoppingCart, Shield, Bell, Truck, Settings } from "lucide-react"
import HeroSection from "@/components/hero-section"
import FeatureCard from "@/components/feature-card"
import TestimonialCard from "@/components/testimonial-card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />

      {/* Avantages clés */}
      <section className="py-16 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-900">
              Pourquoi Choisir Appliga?
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Une solution e-commerce complète et prête à l&apos;emploi pour votre entreprise
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <FeatureCard
              icon={<ShoppingCart className="h-10 w-10 text-blue-600" />}
              title="Panier d'Achat Intuitif"
              description="Interface utilisateur optimisée pour maximiser les conversions et simplifier le processus d'achat."
            />
            <FeatureCard
              icon={<Shield className="h-10 w-10 text-blue-600" />}
              title="Paiements Sécurisés"
              description="Intégration avec les principales plateformes de paiement pour des transactions sûres et fiables."
            />
            <FeatureCard
              icon={<Bell className="h-10 w-10 text-blue-600" />}
              title="Notifications Push"
              description="Gardez vos clients informés des promotions, nouveaux produits et statut de leurs commandes."
            />
            <FeatureCard
              icon={<Truck className="h-10 w-10 text-blue-600" />}
              title="Suivi de Commande"
              description="Système de suivi en temps réel pour une expérience client transparente et rassurante."
            />
            <FeatureCard
              icon={<Settings className="h-10 w-10 text-blue-600" />}
              title="Interface d'Administration"
              description="Tableau de bord complet pour gérer produits, commandes, clients et statistiques."
            />
            <FeatureCard
              icon={<CheckCircle className="h-10 w-10 text-blue-600" />}
              title="Prêt à l'Emploi"
              description="Solution clé en main, personnalisable selon vos besoins spécifiques."
            />
          </div>
          <div className="flex justify-center mt-12">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              <Link href="/fonctionnalites">Découvrir toutes les fonctionnalités</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Aperçu de l'application */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-100 px-3 py-1 text-sm">OFFRE SPÉCIALE</Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-900">
              Application E-commerce <span className="text-amber-500">Clé en Main</span>
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Lancez votre boutique en ligne en quelques jours, pas en quelques mois
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12 items-center">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-blue-900">Une Solution Complète</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-500 mt-0.5" />
                  <span>Interface utilisateur moderne et responsive</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-500 mt-0.5" />
                  <span>Système de paiement en FCFA et multi-devises</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-500 mt-0.5" />
                  <span>Gestion des stocks et des commandes</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-500 mt-0.5" />
                  <span>Analyses et rapports détaillés</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-500 mt-0.5" />
                  <span>Support technique inclus</span>
                </li>
              </ul>
              <div className="pt-4">
                <Badge className="bg-blue-600 text-white hover:bg-blue-700 text-lg px-4 py-2">RÉDUCTION -30%</Badge>
                <div className="mt-6 flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-white">
                    <Link href="/contact">Acheter Maintenant</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-blue-600 text-blue-600 hover:bg-blue-50"
                  >
                    <Link href="/demo">Voir la Démo</Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] w-full">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/01.jpg-dunymkNFyLWPnGZGYpPF0qoqOTVq0x.jpeg"
                alt="Application E-commerce Appliga"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-16 bg-blue-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-900">
              Ce que nos clients disent
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Découvrez les témoignages de ceux qui ont déjà adopté notre solution
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <TestimonialCard
              name="Thomas Dubois"
              role="Directeur E-commerce, TechShop"
              content="Nous avons pu lancer notre boutique en ligne en seulement deux semaines grâce à Appliga. L'interface d'administration est intuitive et les options de personnalisation sont impressionnantes."
            />
            <TestimonialCard
              name="Marie Laurent"
              role="Fondatrice, Mode Express"
              content="La transition vers Appliga a été sans faille. Nos ventes ont augmenté de 45% le premier mois grâce aux fonctionnalités de marketing intégrées et à l'expérience utilisateur optimisée."
            />
            <TestimonialCard
              name="Jean Moreau"
              role="Responsable Digital, Électro Plus"
              content="Le support technique est exceptionnel. Chaque fois que nous avons eu besoin d'aide pour personnaliser une fonctionnalité, l'équipe a répondu rapidement et efficacement."
            />
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <Badge className="bg-amber-500 text-white hover:bg-amber-600 px-3 py-1">OFFRE LIMITÉE</Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Prêt à Révolutionner Votre Commerce?
            </h2>
            <p className="max-w-[700px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Profitez de notre offre spéciale -30% et lancez votre e-commerce dès aujourd'hui
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-white">
                <Link href="/contact">Demander une Démo</Link>
              </Button>
              <Button asChild  size="lg" className="border-white text-white hover:bg-white/10">
                <Link href="/contact">Nous Contacter</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
