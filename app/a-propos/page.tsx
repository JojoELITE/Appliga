import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Award, Users, Clock, Zap, Heart } from "lucide-react"

export default function AProposPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-12 md:py-24 bg-blue-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <Badge className="bg-amber-500 text-white hover:bg-amber-600 px-3 py-1">À PROPOS DE NOUS</Badge>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              L&apos;Équipe Derrière Appliga
            </h1>
            <p className="max-w-[700px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Découvrez notre histoire et notre mission pour révolutionner le e-commerce
            </p>
          </div>
        </div>
      </section>

      {/* Notre Histoire */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter text-blue-900 mb-6">Notre Histoire</h2>
              <div className="space-y-4 text-gray-500">
                <p>
                  Fondée en 2018, Appliga est née d&apos;une vision simple mais ambitieuse : rendre le commerce
                  électronique accessible à tous, quelle que soit leur expertise technique.
                </p>
                <p>
                  Notre équipe de développeurs passionnés a travaillé sans relâche pour créer une solution e-commerce
                  complète qui combine puissance, flexibilité et facilité d&apos;utilisation.
                </p>
                <p>
                  Après des années de développement et de tests rigoureux, nous sommes fiers de proposer
                  aujourd&apos;hui une application qui répond aux besoins des entrepreneurs et des entreprises de toutes
                  tailles.
                </p>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-blue-600 hover:bg-blue-700">
                  <Link href="/contact">Nous Contacter</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/demo">Voir Notre Produit</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/01.jpg-dunymkNFyLWPnGZGYpPF0qoqOTVq0x.jpeg"
                alt="L'équipe Appliga"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="py-16 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-900">Nos Valeurs</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Les principes qui guident notre travail au quotidien
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <Zap className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Innovation</h3>
                <p className="text-gray-500">
                  Nous repoussons constamment les limites pour offrir des solutions e-commerce à la pointe de la
                  technologie.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Users className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Accessibilité</h3>
                <p className="text-gray-500">
                  Nous croyons que la technologie e-commerce devrait être accessible à tous, quelle que soit leur
                  expertise technique.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Award className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Excellence</h3>
                <p className="text-gray-500">
                  Nous nous engageons à fournir des produits de la plus haute qualité, testés rigoureusement pour
                  garantir performance et fiabilité.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Heart className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Passion</h3>
                <p className="text-gray-500">
                  Notre équipe est animée par une passion commune pour la création de solutions qui transforment les
                  entreprises.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Clock className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Réactivité</h3>
                <p className="text-gray-500">
                  Nous valorisons le temps de nos clients et nous nous engageons à fournir un support rapide et
                  efficace.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <CheckCircle className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Fiabilité</h3>
                <p className="text-gray-500">
                  Nos clients peuvent compter sur nous pour des solutions stables et sécurisées qui fonctionnent comme
                  promis.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Notre Équipe */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-900">Notre Équipe</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Les talents passionnés qui font d&apos;Appliga une réalité
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="relative w-40 h-40 rounded-full overflow-hidden mb-4">
                <Image src="/placeholder.svg" alt="Photo de Thomas Martin" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold">Thomas Martin</h3>
              <p className="text-blue-600">Fondateur & CEO</p>
              <p className="text-sm text-gray-500 mt-2">
                Visionnaire tech avec 15 ans d&apos;expérience dans le e-commerce
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="relative w-40 h-40 rounded-full overflow-hidden mb-4">
                <Image src="/placeholder.svg" alt="Photo de Sophie Dubois" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold">Sophie Dubois</h3>
              <p className="text-blue-600">Directrice Technique</p>
              <p className="text-sm text-gray-500 mt-2">Experte en développement mobile et architectures cloud</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="relative w-40 h-40 rounded-full overflow-hidden mb-4">
                <Image src="/placeholder.svg" alt="Photo de Marc Leroy" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold">Marc Leroy</h3>
              <p className="text-blue-600">Responsable UX/UI</p>
              <p className="text-sm text-gray-500 mt-2">
                Designer passionné par la création d&apos;expériences utilisateur intuitives
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="relative w-40 h-40 rounded-full overflow-hidden mb-4">
                <Image src="/placeholder.svg" alt="Photo de Julie Moreau" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold">Julie Moreau</h3>
              <p className="text-blue-600">Responsable Support Client</p>
              <p className="text-sm text-gray-500 mt-2">
                Dévouée à assurer la satisfaction et le succès de nos clients
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-16 bg-blue-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-900">Ce que Nos Clients Disent</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Des témoignages de ceux qui ont fait confiance à notre solution
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="#FFB800"
                      stroke="#FFB800"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="italic text-gray-500 mb-4">
                  "Appliga a transformé notre entreprise. La mise en place a été rapide et l&apos;interface est
                  incroyablement intuitive. Nos ventes ont augmenté de 40% en seulement deux mois!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image src="/placeholder.svg" alt="Photo de client" fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Pierre Moussavou</h4>
                    <p className="text-sm text-gray-500">PDG, TechStore Gabon</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="#FFB800"
                      stroke="#FFB800"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="italic text-gray-500 mb-4">
                  "Le support client d&apos;Appliga est exceptionnel. Chaque fois que nous avons eu besoin d&apos;aide,
                  l&apos;équipe a répondu rapidement et efficacement. Une solution e-commerce vraiment complète."
                </p>
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image src="/placeholder.svg" alt="Photo de client" fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Marie Ogoula</h4>
                    <p className="text-sm text-gray-500">Fondatrice, Mode Express Libreville</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="#FFB800"
                      stroke="#FFB800"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="italic text-gray-500 mb-4">
                  "La flexibilité d&apos;Appliga est impressionnante. Nous avons pu personnaliser l&apos;application
                  selon nos besoins spécifiques sans aucune difficulté. Un investissement qui en vaut vraiment la
                  peine."
                </p>
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image src="/placeholder.svg" alt="Photo de client" fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Jean Ndong</h4>
                    <p className="text-sm text-gray-500">Directeur Digital, Électro Plus Gabon</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <Badge className="bg-amber-500 text-white hover:bg-amber-600 px-3 py-1">OFFRE LIMITÉE -30%</Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Rejoignez la Famille Appliga
            </h2>
            <p className="max-w-[700px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Profitez de notre offre spéciale et transformez votre business dès aujourd&apos;hui
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
