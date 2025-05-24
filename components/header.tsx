"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-8 h-8">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/01.jpg-dunymkNFyLWPnGZGYpPF0qoqOTVq0x.jpeg"
              alt="Appliga Logo"
              fill
              className="object-contain"
            />
          </div>
          <span className="text-xl font-bold text-blue-900">Appliga</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Accueil
          </Link>
          <Link href="/fonctionnalites" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Fonctionnalités
          </Link>
          <Link href="/demo" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Démo
          </Link>
          <Link href="/a-propos" className="text-sm font-medium hover:text-blue-600 transition-colors">
            À Propos
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button asChild className="hidden md:flex bg-blue-600 hover:bg-blue-700">
            <Link href="/contact">Acheter Maintenant</Link>
          </Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon" aria-label="Menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-6 mt-8">
                <Link
                  href="/"
                  className="text-lg font-medium hover:text-blue-600 transition-colors"
                  onClick={closeMenu}
                >
                  Accueil
                </Link>
                <Link
                  href="/fonctionnalites"
                  className="text-lg font-medium hover:text-blue-600 transition-colors"
                  onClick={closeMenu}
                >
                  Fonctionnalités
                </Link>
                <Link
                  href="/demo"
                  className="text-lg font-medium hover:text-blue-600 transition-colors"
                  onClick={closeMenu}
                >
                  Démo
                </Link>
                <Link
                  href="/a-propos"
                  className="text-lg font-medium hover:text-blue-600 transition-colors"
                  onClick={closeMenu}
                >
                  À Propos
                </Link>
                <Link
                  href="/contact"
                  className="text-lg font-medium hover:text-blue-600 transition-colors"
                  onClick={closeMenu}
                >
                  Contact
                </Link>
                <Button asChild className="mt-4 bg-blue-600 hover:bg-blue-700">
                  <Link href="/contact" onClick={closeMenu}>
                    Acheter Maintenant
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
