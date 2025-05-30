import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Play } from "lucide-react"

export default function DemoPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-12 md:py-24 bg-blue-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <Badge className="bg-amber-500 text-white hover:bg-amber-600 px-3 py-1">DÉMO INTERACTIVE</Badge>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Découvrez Appliga en Action</h1>
            <p className="max-w-[700px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explorez l&apos;interface utilisateur et les fonctionnalités de notre application e-commerce
            </p>
          </div>
        </div>
      </section>

      {/* Galerie de Mockups */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="mobile" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="mobile">Mobile</TabsTrigger>
                <TabsTrigger value="tablet">Tablette</TabsTrigger>
                <TabsTrigger value="desktop">Desktop</TabsTrigger>
                <TabsTrigger value="admin">Administration</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="mobile" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative aspect-[9/16] w-full">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/01.jpg-dunymkNFyLWPnGZGYpPF0qoqOTVq0x.jpeg"
                        alt="Interface mobile - Accueil"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold">Écran d&apos;Accueil</h3>
                      <p className="text-sm text-gray-500">
                        Interface principale avec catégories et produits populaires
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative aspect-[9/16] w-full">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/01.jpg-dunymkNFyLWPnGZGYpPF0qoqOTVq0x.jpeg"
                        alt="Interface mobile - Catégories"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold">Navigation par Catégories</h3>
                      <p className="text-sm text-gray-500">Exploration facile des produits par catégorie</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative aspect-[9/16] w-full">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/01.jpg-dunymkNFyLWPnGZGYpPF0qoqOTVq0x.jpeg"
                        alt="Interface mobile - Panier"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold">Panier d&apos;Achat</h3>
                      <p className="text-sm text-gray-500">Gestion intuitive du panier et processus de commande</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="tablet" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative aspect-[4/3] w-full">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/01.jpg-dunymkNFyLWPnGZGYpPF0qoqOTVq0x.jpeg"
                        alt="Interface tablette - Accueil"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold">Vue Tablette - Accueil</h3>
                      <p className="text-sm text-gray-500">Expérience optimisée pour tablettes</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative aspect-[4/3] w-full">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/01.jpg-dunymkNFyLWPnGZGYpPF0qoqOTVq0x.jpeg"
                        alt="Interface tablette - Produit"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold">Détail Produit</h3>
                      <p className="text-sm text-gray-500">Présentation détaillée des produits</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="desktop" className="mt-0">
              <div className="grid grid-cols-1 gap-8">
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative aspect-[16/9] w-full">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/01.jpg-dunymkNFyLWPnGZGYpPF0qoqOTVq0x.jpeg"
                        alt="Interface desktop - Boutique"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold">Version Desktop</h3>
                      <p className="text-sm text-gray-500">Expérience complète sur grand écran</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="admin" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative aspect-[16/9] w-full">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/01.jpg-dunymkNFyLWPnGZGYpPF0qoqOTVq0x.jpeg"
                        alt="Interface admin - Tableau de bord"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold">Tableau de Bord Admin</h3>
                      <p className="text-sm text-gray-500">Gestion complète de votre boutique</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative aspect-[16/9] w-full">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/01.jpg-dunymkNFyLWPnGZGYpPF0qoqOTVq0x.jpeg"
                        alt="Interface admin - Produits"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold">Gestion des Produits</h3>
                      <p className="text-sm text-gray-500">Interface d&apos;administration des produits</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Vidéo Démo */}
      <section className="py-16 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-900">
              Voir l&apos;Application en Action
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Découvrez comment Appliga peut transformer votre expérience e-commerce
            </p>
          </div>
          <div className="relative aspect-video w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-xl bg-black/5">
            <div className="absolute inset-0 flex items-center justify-center">
              <Button size="lg" className="rounded-full w-16 h-16 bg-blue-600 hover:bg-blue-700">
                <Play className="h-8 w-8 text-white" />
                <span className="sr-only">Lire la vidéo</span>
              </Button>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/01.jpg-dunymkNFyLWPnGZGYpPF0qoqOTVq0x.jpeg"
              alt="Vidéo démo de l'application"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Accès Test */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 px-3 py-1">ESSAI GRATUIT</Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-900">
              Essayez Appliga Gratuitement
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Accédez à une version de démonstration complète pour explorer toutes les fonctionnalités
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 w-full max-w-3xl">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-2">Accès Client</h3>
                  <p className="text-sm text-gray-500 mb-4">Explorez l&apos;interface utilisateur</p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-semibold">URL:</p>
                      <p className="text-gray-500">demo.appliga.com</p>
                    </div>
                    <div>
                      <p className="font-semibold">Identifiant:</p>
                      <p className="text-gray-500">demo@appliga.com</p>
                    </div>
                    <div>
                      <p className="font-semibold">Mot de passe:</p>
                      <p className="text-gray-500">demo123</p>
                    </div>
                  </div>
                  <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700">Accéder à la Démo Client</Button>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-2">Accès Admin</h3>
                  <p className="text-sm text-gray-500 mb-4">Testez le panneau d&apos;administration</p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-semibold">URL:</p>
                      <p className="text-gray-500">admin.appliga.com</p>
                    </div>
                    <div>
                      <p className="font-semibold">Identifiant:</p>
                      <p className="text-gray-500">admin@appliga.com</p>
                    </div>
                    <div>
                      <p className="font-semibold">Mot de passe:</p>
                      <p className="text-gray-500">admin123</p>
                    </div>
                  </div>
                  <Button className="w-full mt-6 bg-amber-500 hover:bg-amber-600">Accéder à la Démo Admin</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <Badge className="bg-amber-500 text-white hover:bg-amber-600 px-3 py-1">OFFRE LIMITÉE -30%</Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Convaincu? Passez à l&apos;Action!
            </h2>
            <p className="max-w-[700px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Profitez de notre offre spéciale et lancez votre e-commerce dès aujourd&apos;hui
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-white">
                <Link href="/paiement">Acheter Maintenant</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link href="/paiement">Demander Plus d&apos;Informations</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
