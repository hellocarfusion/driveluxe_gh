"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { vehicles } from "@/lib/vehicles"
import Link from "next/link"
import { ArrowLeft, Check, Calendar, Shield, Clock, Sparkles } from "lucide-react"

export default function VehicleDetailPage() {
  const params = useParams()
  const vehicle = vehicles.find((v) => v.id === params.id)
  const [selectedImage, setSelectedImage] = useState(0)

  if (!vehicle) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Vehicle not found</h1>
          <Button asChild>
            <Link href="/showroom">Back to Showroom</Link>
          </Button>
        </div>
      </div>
    )
  }

  const allImages = [vehicle.image, ...vehicle.images]

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <Button
            asChild
            variant="ghost"
            className="mb-8 hover:bg-accent/10 hover:text-accent transition-all duration-300"
          >
            <Link href="/showroom" className="flex items-center">
              <ArrowLeft className="mr-2 w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
              Back to Showroom
            </Link>
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-4">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-muted group">
                <img
                  src={allImages[selectedImage] || "/placeholder.svg"}
                  alt={`${vehicle.brand} ${vehicle.name}`}
                  className="w-full h-full object-cover transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {allImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative aspect-[4/3] rounded-lg overflow-hidden bg-muted border-2 transition-all duration-300 hover:scale-105 ${
                      selectedImage === index
                        ? "border-accent shadow-lg shadow-accent/20"
                        : "border-transparent hover:border-accent/50"
                    }`}
                  >
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`View ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                <p className="text-muted-foreground mb-2 text-sm uppercase tracking-wider">{vehicle.brand}</p>
                <h1 className="text-4xl md:text-5xl font-bold font-serif mb-2 text-foreground">{vehicle.name}</h1>
                <p className="text-foreground/80">{vehicle.year} Model</p>
              </div>

              <p className="text-lg text-foreground/80 leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
                {vehicle.description}
              </p>

              <Card className="p-6 bg-gradient-to-br from-card to-card/50 border-accent/20 shadow-lg shadow-accent/5 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-5 h-5 text-accent" />
                  <h3 className="text-lg font-semibold text-foreground">Rental Rates</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-background/50 hover:bg-background/80 transition-colors duration-300">
                    <span className="text-foreground/80">Daily Rate</span>
                    <span className="text-2xl font-bold text-accent">${vehicle.price.daily}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-background/50 hover:bg-background/80 transition-colors duration-300">
                    <span className="text-foreground/80">Weekly Rate</span>
                    <span className="text-xl font-semibold text-foreground">${vehicle.price.weekly}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-background/50 hover:bg-background/80 transition-colors duration-300">
                    <span className="text-foreground/80">Monthly Rate</span>
                    <span className="text-xl font-semibold text-foreground">${vehicle.price.monthly}</span>
                  </div>
                </div>
              </Card>

              <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
                <h3 className="text-2xl font-semibold font-serif mb-4 text-foreground">Specifications</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Engine", value: vehicle.specs.engine },
                    { label: "Horsepower", value: vehicle.specs.horsepower },
                    { label: "Transmission", value: vehicle.specs.transmission },
                    { label: "0-60 mph", value: vehicle.specs.acceleration },
                    { label: "Top Speed", value: vehicle.specs.topSpeed },
                    { label: "Seating", value: `${vehicle.specs.seats} Passengers` },
                  ].map((spec, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-lg bg-card border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5"
                    >
                      <p className="text-sm text-muted-foreground mb-1">{spec.label}</p>
                      <p className="font-semibold text-foreground">{spec.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400">
                <h3 className="text-2xl font-semibold font-serif mb-4 text-foreground">Premium Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {vehicle.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-2 p-2 rounded-lg hover:bg-accent/5 transition-colors duration-300"
                    >
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/90">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Card className="p-6 bg-gradient-to-br from-card to-card/50 border-accent/20 shadow-lg shadow-accent/5 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
                <h3 className="text-lg font-semibold mb-4 text-foreground">Included with Every Rental</h3>
                <div className="space-y-3">
                  {[
                    {
                      icon: Shield,
                      title: "Full Insurance Coverage",
                      description: "Comprehensive protection",
                    },
                    {
                      icon: Clock,
                      title: "24/7 Roadside Assistance",
                      description: "Always here to help",
                    },
                    {
                      icon: Calendar,
                      title: "Flexible Booking",
                      description: "Easy modifications",
                    },
                  ].map((service, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-background/50 transition-all duration-300 group"
                    >
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                        <service.icon className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{service.title}</p>
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-600">
                <Button
                  asChild
                  size="lg"
                  className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-accent/20"
                >
                  <Link href={`/booking?vehicle=${vehicle.id}`}>Book This Vehicle</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="flex-1 bg-transparent border-accent/50 hover:bg-accent/10 hover:border-accent transition-all duration-300 hover:scale-105"
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
