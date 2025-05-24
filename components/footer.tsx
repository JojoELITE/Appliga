import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="relative w-8 h-8">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/01.jpg-dunymkNFyLWPnGZGYpPF0qoqOTVq0x.jpeg"
                  alt="Appliga Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold">Appliga</span>
            </Link>
            <p className="text-blue-100 mb-4">
              Application e-commerce clé en main pour lancer votre boutique en ligne rapidement et efficacement.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-blue-100 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-blue-100 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-blue-100 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-blue-100 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-blue-100 hover:text-white transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/fonctionnalites" className="text-blue-100 hover:text-white transition-colors">
                  Fonctionnalités
                </Link>
              </li>
              <li>
                <Link href="/demo" className="text-blue-100 hover:text-white transition-colors">
                  Démo
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="text-blue-100 hover:text-white transition-colors">
                  À Propos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-blue-100 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Légal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-blue-100 hover:text-white transition-colors">
                  Conditions Générales
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-100 hover:text-white transition-colors">
                  Politique de Confidentialité
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-100 hover:text-white transition-colors">
                  Mentions Légales
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-100 hover:text-white transition-colors">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-0.5 text-blue-100" />
                <span className="text-blue-100">contact@appliga.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 mt-0.5 text-blue-100" />
                <span className="text-blue-100">+241 77 12 34 56</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 text-blue-100" />
                <span className="text-blue-100">
                  123 Boulevard Triomphal
                  <br />
                  Libreville, Gabon
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-blue-800 mt-12 pt-6 text-center text-blue-100">
          <p>&copy; {new Date().getFullYear()} Appliga. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
