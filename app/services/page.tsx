import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Plane, MapPin, Navigation2, Sparkles, Check, Clock, Shield, Star } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-32 pb-24">
        {/* Hero Section */}
        <section className="container mx-auto px-4 lg:px-8 mb-24">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-playfair)] mb-6 text-balance">
              Curated Luxury Services
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              Experience premium transportation tailored to your needs. From airport transfers to city tours, we deliver
              excellence at every turn.
            </p>
          </div>
        </section>

        {/* Main Services */}
        <section className="container mx-auto px-4 lg:px-8 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Curated Luxury Rental */}
            <Card
              id="luxury-rental"
              className="group overflow-hidden border-border hover:border-accent/50 transition-all duration-300"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src="/luxury-black-sports-car-in-modern-showroom-with-dr.jpg"
                  alt="Luxury Rental"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-10 h-10 rounded-full bg-accent/20 backdrop-blur-sm flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-accent" />
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold font-[family-name:var(--font-playfair)] text-foreground mb-2">
                    Curated Luxury Rental
                  </h2>
                </div>
              </div>
              <div className="p-8 space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  Choose from our hand-picked collection of the world's finest vehicles. Whether for a special occasion,
                  business trip, or extended stay, experience automotive excellence with flexible rental periods.
                </p>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Daily, weekly, and monthly rental options</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Premium vehicles from top luxury brands</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Comprehensive insurance coverage included</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Flexible pickup and drop-off locations</span>
                  </div>
                </div>

                <div className="pt-4">
                  <Button asChild size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                    <Link href="/showroom">
                      Browse Fleet
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>

            {/* Airport Transfers */}
            <Card
              id="airport"
              className="group overflow-hidden border-border hover:border-accent/50 transition-all duration-300"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src="/airport.jpg"
                  alt="Airport Transfer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-10 h-10 rounded-full bg-accent/20 backdrop-blur-sm flex items-center justify-center">
                      <Plane className="w-5 h-5 text-accent" />
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold font-[family-name:var(--font-playfair)] text-foreground mb-2">
                    Airport Transfers
                  </h2>
                </div>
              </div>
              <div className="p-8 space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  Start and end your journey in style with our premium airport transfer service. Professional
                  chauffeurs, flight tracking, and seamless coordination ensure a stress-free experience.
                </p>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Professional chauffeur service</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Real-time flight tracking and monitoring</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Meet and greet at arrivals</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Complimentary wait time for delays</span>
                  </div>
                </div>

                <div className="pt-4">
                  <Button asChild size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                    <Link href="/booking?service=airport">
                      Book Transfer
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>

            {/* City to City Rides */}
            <Card
              id="city"
              className="group overflow-hidden border-border hover:border-accent/50 transition-all duration-300"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src="/interior.jpg"
                  alt="City to City"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-10 h-10 rounded-full bg-accent/20 backdrop-blur-sm flex items-center justify-center">
                      <Navigation2 className="w-5 h-5 text-accent" />
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold font-[family-name:var(--font-playfair)] text-foreground mb-2">
                    City to City Rides
                  </h2>
                </div>
              </div>
              <div className="p-8 space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  Travel between cities in comfort and luxury. Perfect for business trips, weekend getaways, or visiting
                  family. Enjoy a premium intercity transportation experience.
                </p>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Comfortable long-distance travel</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Experienced drivers with route knowledge</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Rest stops and refreshments available</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Competitive fixed pricing</span>
                  </div>
                </div>

                <div className="pt-4">
                  <Button asChild size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                    <Link href="/booking?service=city-to-city">
                      Book Ride
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>

            {/* In-City Rides */}
            <Card
              id="in-city"
              className="group overflow-hidden border-border hover:border-accent/50 transition-all duration-300"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src="/citydrive.jpg"
                  alt="In-City Rides"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-10 h-10 rounded-full bg-accent/20 backdrop-blur-sm flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold font-[family-name:var(--font-playfair)] text-foreground mb-2">
                    In-City Rides
                  </h2>
                </div>
              </div>
              <div className="p-8 space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  Navigate the city in style with our premium in-city transportation. Perfect for business meetings,
                  events, shopping, or exploring Accra's finest destinations.
                </p>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Hourly or point-to-point service</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Professional chauffeurs with local knowledge</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Multiple stops and flexible itineraries</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Same-day booking available</span>
                  </div>
                </div>

                <div className="pt-4">
                  <Button asChild size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                    <Link href="/booking?service=in-city">
                      Book Ride
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-card py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-playfair)] mb-4 text-balance">
                The DriveLuxe Difference
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
                Experience unmatched service quality and attention to detail
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                  <Star className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Premium Fleet</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Hand-selected luxury vehicles maintained to the highest standards
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                  <Shield className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Fully Insured</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Comprehensive coverage for complete peace of mind on every journey
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                  <Clock className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">24/7 Support</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Round-the-clock assistance and customer service whenever you need us
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                  <Sparkles className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">White-Glove Service</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Exceptional attention to detail from booking to drop-off
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 lg:px-8 mt-24">
          <Card className="p-12 bg-card border-border text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] mb-4 text-balance">
              Ready to Experience Luxury?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
              Book your premium service today and discover why DriveLuxe is Ghana's most trusted luxury transportation
              provider.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-8">
                <Link href="/booking">
                  Book Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="px-8 bg-transparent">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  )
}
