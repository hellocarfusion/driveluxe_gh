import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Award, Users, Target, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-32 pb-24">
        {/* Hero Section */}
        <section className="container mx-auto px-4 lg:px-8 mb-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-playfair)] mb-6 text-balance">
              Redefining Luxury Transportation in Ghana
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              DriveLuxe GH was founded with a singular vision: to bring world-class luxury car experiences to Ghana.
              We're more than a rental service—we're curators of unforgettable journeys.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="container mx-auto px-4 lg:px-8 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 lg:h-[600px] rounded-lg overflow-hidden">
              <img
                src="/about.jpg"
                alt="DriveLuxe Story"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] text-foreground">
                Our Story
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Founded in 2020, DriveLuxe GH emerged from a passion for automotive excellence and a desire to elevate
                Ghana's luxury transportation landscape. What started as a small collection of premium vehicles has
                grown into the country's most trusted luxury car service.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We believe that every journey should be an experience. Whether you're arriving at the airport, heading
                to an important meeting, or celebrating a special occasion, we ensure you travel in unparalleled style
                and comfort.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our commitment to excellence extends beyond our vehicles. We've built a team of professional chauffeurs,
                meticulous maintenance specialists, and dedicated customer service representatives who share our passion
                for delivering exceptional experiences.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-card py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-playfair)] mb-4 text-balance">
                Our Values
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="p-8 bg-background border-border text-center">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Excellence</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We maintain the highest standards in every aspect of our service, from vehicle selection to customer
                  care.
                </p>
              </Card>

              <Card className="p-8 bg-background border-border text-center">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Trust</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Building lasting relationships through reliability, transparency, and consistent delivery on our
                  promises.
                </p>
              </Card>

              <Card className="p-8 bg-background border-border text-center">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Innovation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Continuously evolving our services and fleet to exceed expectations and set new industry standards.
                </p>
              </Card>

              <Card className="p-8 bg-background border-border text-center">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Passion</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our love for automotive excellence drives us to create memorable experiences for every client.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="container mx-auto px-4 lg:px-8 py-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">500+</div>
              <p className="text-muted-foreground">Happy Clients</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">15+</div>
              <p className="text-muted-foreground">Luxury Vehicles</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">24/7</div>
              <p className="text-muted-foreground">Customer Support</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">100%</div>
              <p className="text-muted-foreground">Satisfaction Rate</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 lg:px-8">
          <Card className="p-12 bg-card border-border text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] mb-4 text-balance">
              Experience the DriveLuxe Difference
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
              Join hundreds of satisfied clients who trust us for their luxury transportation needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-8">
                <Link href="/booking">
                  Book Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="px-8 bg-transparent">
                <Link href="/showroom">View Fleet</Link>
              </Button>
            </div>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  )
}
