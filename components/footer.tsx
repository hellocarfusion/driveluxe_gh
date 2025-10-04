import Link from "next/link"
import { Instagram, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-bold tracking-tight">
              <span className="font-[family-name:var(--font-playfair)] text-accent">DriveLuxe</span>
              <span className="text-muted-foreground text-sm ml-1">GH</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Ghana's premier luxury car rental and dealership. Experience automotive excellence.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="https://instagram.com/driveluxe_gh"
                target="_blank"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/showroom" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Vehicle Showroom
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/booking" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Book Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Services</h3>
            <ul className="space-y-3">
              <li className="text-sm text-muted-foreground">Curated Luxury Rental</li>
              <li className="text-sm text-muted-foreground">Airport Transfers</li>
              <li className="text-sm text-muted-foreground">City to City Rides</li>
              <li className="text-sm text-muted-foreground">In-City Rides</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Accra, Ghana</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+233 XX XXX XXXX</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>info@driveluxe.gh</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} DriveLuxe GH. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
