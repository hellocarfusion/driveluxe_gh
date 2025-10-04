"use client"

import { Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BookingForm } from "@/components/booking-form"
import { Card } from "@/components/ui/card"
import { Shield, Clock, Check } from "lucide-react"

function BookingContent() {
  const searchParams = useSearchParams()
  const preselectedVehicle = searchParams.get("vehicle") || undefined
  const preselectedService = searchParams.get("service") || undefined

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-playfair)] mb-4 text-balance">
                Book Your Experience
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Complete the form below to reserve your luxury vehicle or service. Our team will confirm your booking
                shortly.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="p-6 bg-card border-border text-center">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold mb-1 text-foreground">Secure Booking</h3>
                <p className="text-sm text-muted-foreground">Your information is protected</p>
              </Card>

              <Card className="p-6 bg-card border-border text-center">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold mb-1 text-foreground">Quick Response</h3>
                <p className="text-sm text-muted-foreground">Confirmation within 2 hours</p>
              </Card>

              <Card className="p-6 bg-card border-border text-center">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3">
                  <Check className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold mb-1 text-foreground">Easy Process</h3>
                <p className="text-sm text-muted-foreground">Simple 3-step booking</p>
              </Card>
            </div>

            {/* Booking Form */}
            <BookingForm preselectedVehicle={preselectedVehicle} preselectedService={preselectedService} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default function BookingPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BookingContent />
    </Suspense>
  )
}
