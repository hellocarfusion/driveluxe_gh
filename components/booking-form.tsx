"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, Clock, MapPin, User, Mail, Phone, Check } from "lucide-react"
import { vehicles } from "@/lib/vehicles"

interface BookingFormProps {
  preselectedVehicle?: string
  preselectedService?: string
}

export function BookingForm({ preselectedVehicle, preselectedService }: BookingFormProps) {
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    serviceType: preselectedService || "",
    vehicleId: preselectedVehicle || "",
    pickupDate: "",
    pickupTime: "",
    returnDate: "",
    returnTime: "",
    pickupLocation: "",
    dropoffLocation: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    specialRequests: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    console.log("[v0] Booking submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  if (submitted) {
    return (
      <Card className="p-12 text-center bg-card border-border">
        <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
          <Check className="w-8 h-8 text-accent" />
        </div>
        <h2 className="text-3xl font-bold font-[family-name:var(--font-playfair)] mb-4 text-foreground">
          Booking Request Received
        </h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto leading-relaxed">
          Thank you for choosing DriveLuxe! Our team will contact you shortly to confirm your reservation and finalize
          the details.
        </p>
        <Button
          onClick={() => {
            setSubmitted(false)
            setStep(1)
            setFormData({
              serviceType: "",
              vehicleId: "",
              pickupDate: "",
              pickupTime: "",
              returnDate: "",
              returnTime: "",
              pickupLocation: "",
              dropoffLocation: "",
              firstName: "",
              lastName: "",
              email: "",
              phone: "",
              specialRequests: "",
            })
          }}
          variant="outline"
          className="bg-transparent"
        >
          Make Another Booking
        </Button>
      </Card>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Progress Indicator */}
      <div className="flex items-center justify-center gap-2 mb-8">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
            step >= 1 ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground"
          }`}
        >
          1
        </div>
        <div className={`w-16 h-0.5 ${step >= 2 ? "bg-accent" : "bg-muted"}`} />
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
            step >= 2 ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground"
          }`}
        >
          2
        </div>
        <div className={`w-16 h-0.5 ${step >= 3 ? "bg-accent" : "bg-muted"}`} />
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
            step >= 3 ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground"
          }`}
        >
          3
        </div>
      </div>

      {/* Step 1: Service & Vehicle Selection */}
      {step === 1 && (
        <Card className="p-8 bg-card border-border space-y-6">
          <div>
            <h2 className="text-2xl font-bold font-[family-name:var(--font-playfair)] mb-2 text-foreground">
              Select Service
            </h2>
            <p className="text-muted-foreground">Choose your preferred service type</p>
          </div>

          <div className="space-y-4">
            <div>
              <Label htmlFor="serviceType" className="text-foreground">
                Service Type
              </Label>
              <select
                id="serviceType"
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                required
                className="w-full mt-2 px-4 py-3 rounded-lg bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <option value="">Select a service</option>
                <option value="luxury-rental">Curated Luxury Rental</option>
                <option value="airport">Airport Transfer</option>
                <option value="city-to-city">City to City Ride</option>
                <option value="in-city">In-City Ride</option>
              </select>
            </div>

            {formData.serviceType === "luxury-rental" && (
              <div>
                <Label htmlFor="vehicleId" className="text-foreground">
                  Select Vehicle
                </Label>
                <select
                  id="vehicleId"
                  name="vehicleId"
                  value={formData.vehicleId}
                  onChange={handleChange}
                  required
                  className="w-full mt-2 px-4 py-3 rounded-lg bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <option value="">Choose a vehicle</option>
                  {vehicles.map((vehicle) => (
                    <option key={vehicle.id} value={vehicle.id}>
                      {vehicle.brand} {vehicle.name} - ${vehicle.price.daily}/day
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>

          <Button
            type="button"
            onClick={() => setStep(2)}
            disabled={!formData.serviceType || (formData.serviceType === "luxury-rental" && !formData.vehicleId)}
            className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
          >
            Continue
          </Button>
        </Card>
      )}

      {/* Step 2: Date & Location */}
      {step === 2 && (
        <Card className="p-8 bg-card border-border space-y-6">
          <div>
            <h2 className="text-2xl font-bold font-[family-name:var(--font-playfair)] mb-2 text-foreground">
              Date & Location
            </h2>
            <p className="text-muted-foreground">When and where do you need our service?</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="pickupDate" className="text-foreground flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Pickup Date
              </Label>
              <Input
                id="pickupDate"
                name="pickupDate"
                type="date"
                value={formData.pickupDate}
                onChange={handleChange}
                required
                className="mt-2 bg-background border-border text-foreground"
              />
            </div>

            <div>
              <Label htmlFor="pickupTime" className="text-foreground flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Pickup Time
              </Label>
              <Input
                id="pickupTime"
                name="pickupTime"
                type="time"
                value={formData.pickupTime}
                onChange={handleChange}
                required
                className="mt-2 bg-background border-border text-foreground"
              />
            </div>

            {formData.serviceType === "luxury-rental" && (
              <>
                <div>
                  <Label htmlFor="returnDate" className="text-foreground flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Return Date
                  </Label>
                  <Input
                    id="returnDate"
                    name="returnDate"
                    type="date"
                    value={formData.returnDate}
                    onChange={handleChange}
                    required
                    className="mt-2 bg-background border-border text-foreground"
                  />
                </div>

                <div>
                  <Label htmlFor="returnTime" className="text-foreground flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Return Time
                  </Label>
                  <Input
                    id="returnTime"
                    name="returnTime"
                    type="time"
                    value={formData.returnTime}
                    onChange={handleChange}
                    required
                    className="mt-2 bg-background border-border text-foreground"
                  />
                </div>
              </>
            )}

            <div>
              <Label htmlFor="pickupLocation" className="text-foreground flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Pickup Location
              </Label>
              <Input
                id="pickupLocation"
                name="pickupLocation"
                type="text"
                value={formData.pickupLocation}
                onChange={handleChange}
                placeholder="Enter pickup address"
                required
                className="mt-2 bg-background border-border text-foreground"
              />
            </div>

            <div>
              <Label htmlFor="dropoffLocation" className="text-foreground flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Drop-off Location
              </Label>
              <Input
                id="dropoffLocation"
                name="dropoffLocation"
                type="text"
                value={formData.dropoffLocation}
                onChange={handleChange}
                placeholder="Enter drop-off address"
                required
                className="mt-2 bg-background border-border text-foreground"
              />
            </div>
          </div>

          <div className="flex gap-4">
            <Button type="button" onClick={() => setStep(1)} variant="outline" className="flex-1 bg-transparent">
              Back
            </Button>
            <Button
              type="button"
              onClick={() => setStep(3)}
              disabled={
                !formData.pickupDate ||
                !formData.pickupTime ||
                !formData.pickupLocation ||
                !formData.dropoffLocation ||
                (formData.serviceType === "luxury-rental" && (!formData.returnDate || !formData.returnTime))
              }
              className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90"
            >
              Continue
            </Button>
          </div>
        </Card>
      )}

      {/* Step 3: Personal Information */}
      {step === 3 && (
        <Card className="p-8 bg-card border-border space-y-6">
          <div>
            <h2 className="text-2xl font-bold font-[family-name:var(--font-playfair)] mb-2 text-foreground">
              Your Information
            </h2>
            <p className="text-muted-foreground">Please provide your contact details</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="firstName" className="text-foreground flex items-center gap-2">
                <User className="w-4 h-4" />
                First Name
              </Label>
              <Input
                id="firstName"
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="John"
                required
                className="mt-2 bg-background border-border text-foreground"
              />
            </div>

            <div>
              <Label htmlFor="lastName" className="text-foreground flex items-center gap-2">
                <User className="w-4 h-4" />
                Last Name
              </Label>
              <Input
                id="lastName"
                name="lastName"
                type="text"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Doe"
                required
                className="mt-2 bg-background border-border text-foreground"
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-foreground flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email Address
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
                className="mt-2 bg-background border-border text-foreground"
              />
            </div>

            <div>
              <Label htmlFor="phone" className="text-foreground flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Phone Number
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+233 XX XXX XXXX"
                required
                className="mt-2 bg-background border-border text-foreground"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="specialRequests" className="text-foreground">
              Special Requests (Optional)
            </Label>
            <Textarea
              id="specialRequests"
              name="specialRequests"
              value={formData.specialRequests}
              onChange={handleChange}
              placeholder="Any special requirements or requests?"
              rows={4}
              className="mt-2 bg-background border-border text-foreground"
            />
          </div>

          <div className="flex gap-4">
            <Button type="button" onClick={() => setStep(2)} variant="outline" className="flex-1 bg-transparent">
              Back
            </Button>
            <Button
              type="submit"
              disabled={!formData.firstName || !formData.lastName || !formData.email || !formData.phone}
              className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90"
            >
              Submit Booking
            </Button>
          </div>
        </Card>
      )}
    </form>
  )
}
