import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Star, Shield, Clock, Sparkles } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

     {/* Hero Section */}
<section className="relative h-screen flex items-center justify-center overflow-hidden">
  {/* Background Video */}
  <div className="absolute inset-0 z-0">
    <video
      src="/hero.mp4" // Replace with your video path
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-full object-cover opacity-50"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
  </div>



        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              <span>Ghana's Premier Luxury Car Experience</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight font-[family-name:var(--font-playfair)] text-balance">
              Drive the
              <span className="block text-accent mt-2">Extraordinary</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
              Experience curated luxury rentals, seamless airport transfers, and premium city rides. Your journey
              deserves excellence.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-base px-8">
                <Link href="/showroom">
                  Explore Showroom
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base px-8 bg-transparent">
                <Link href="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-accent/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-accent rounded-full" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-playfair)] mb-4 text-balance">
              Why Choose DriveLuxe
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
              We redefine luxury transportation with unmatched service and premium vehicles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-8 bg-background border-border hover:border-accent/50 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <Star className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Curated Fleet</h3>
              <p className="text-muted-foreground leading-relaxed">
                Hand-picked luxury vehicles maintained to perfection
              </p>
            </Card>

            <Card className="p-8 bg-background border-border hover:border-accent/50 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Fully Insured</h3>
              <p className="text-muted-foreground leading-relaxed">Comprehensive coverage for complete peace of mind</p>
            </Card>

            <Card className="p-8 bg-background border-border hover:border-accent/50 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">24/7 Service</h3>
              <p className="text-muted-foreground leading-relaxed">Round-the-clock support for your convenience</p>
            </Card>

            <Card className="p-8 bg-background border-border hover:border-accent/50 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <Sparkles className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Premium Experience</h3>
              <p className="text-muted-foreground leading-relaxed">White-glove service from booking to drop-off</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-playfair)] mb-4 text-balance">
              Curated Services
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
              Tailored luxury transportation solutions for every occasion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="group overflow-hidden border-border hover:border-accent/50 transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="/airport.jpg"
                  alt="Airport Transfer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-3 font-[family-name:var(--font-playfair)] text-foreground">
                  Airport Transfers
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Seamless pickups and drop-offs with professional chauffeurs. Start your journey in style.
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent transition-colors bg-transparent"
                >
                  <Link href="/services#airport">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </Card>

            <Card className="group overflow-hidden border-border hover:border-accent/50 transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="/citydrive.jpg"
                  alt="City Rides"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-3 font-[family-name:var(--font-playfair)] text-foreground">
                  City to City Rides
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Travel between cities in comfort and luxury. Your premium intercity transportation solution.
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent transition-colors bg-transparent"
                >
                  <Link href="/services#city">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/services">
                View All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-playfair)] text-balance">
              Ready to Experience Luxury?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Book your premium vehicle today and discover why DriveLuxe is Ghana's most trusted luxury car service.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-base px-8">
                <Link href="/booking">
                  Book Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base px-8 bg-transparent">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
