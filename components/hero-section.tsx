import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function HeroSection() {
  return (
    <section className="py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 px-3 py-1">APPLICATION E-COMMERCE</Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-blue-900">
                Votre E-commerce <span className="text-amber-500">Clé en Main</span>
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl">
                Lancez votre boutique en ligne en quelques jours avec notre application e-commerce complète et
                personnalisable.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 min-[400px]:items-start">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link href="/contact">Acheter Maintenant</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                <Link href="/demo">Voir la Démo</Link>
              </Button>
            </div>
            <div className="flex items-center gap-4 mt-4">
              <Badge className="bg-amber-500 text-white hover:bg-amber-600 text-lg px-4 py-2">RÉDUCTION -30%</Badge>
              <p className="text-sm text-gray-500">Offre à durée limitée</p>
            </div>
          </div>
          <div className="relative h-[400px] lg:h-[500px] w-full">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/01.jpg-dunymkNFyLWPnGZGYpPF0qoqOTVq0x.jpeg"
              alt="Application E-commerce Appliga"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
