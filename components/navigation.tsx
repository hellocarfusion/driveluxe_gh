"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="text-2xl font-bold tracking-tight">
              <span className="font-serif text-accent transition-all duration-300 group-hover:text-accent/80">
                DriveLuxe
              </span>
              <span className="text-foreground text-sm ml-1">GH</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              href="/showroom"
              className="text-sm font-medium text-foreground hover:text-accent transition-colors relative group"
            >
              Showroom
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link
              href="/services"
              className="text-sm font-medium text-foreground hover:text-accent transition-colors relative group"
            >
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-foreground hover:text-accent transition-colors relative group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-foreground hover:text-accent transition-colors relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="https://instagram.com/driveluxe_gh"
              target="_blank"
              className="text-foreground hover:text-accent transition-all duration-300 hover:scale-110"
            >
              <Instagram className="w-5 h-5" />
            </Link>
            <Button
              asChild
              className="bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/20"
            >
              <Link href="/booking">Book Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-foreground">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-6 space-y-4 border-t border-border animate-in fade-in slide-in-from-top-2 duration-300">
            <Link
              href="/showroom"
              className="block text-lg font-medium text-foreground hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Showroom
            </Link>
            <Link
              href="/services"
              className="block text-lg font-medium text-foreground hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/about"
              className="block text-lg font-medium text-foreground hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block text-lg font-medium text-foreground hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-4 flex items-center gap-4">
              <Link
                href="https://instagram.com/driveluxe_gh"
                target="_blank"
                className="text-foreground hover:text-accent transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </Link>
              <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 w-full">
                <Link href="/booking">Book Now</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
