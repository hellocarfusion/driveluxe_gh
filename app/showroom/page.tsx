"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { VehicleCard } from "@/components/vehicle-card"
import { vehicles, categories } from "@/lib/vehicles"
import { Button } from "@/components/ui/button"

export default function ShowroomPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredVehicles =
    selectedCategory === "all" ? vehicles : vehicles.filter((v) => v.category === selectedCategory)

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-playfair)] mb-4 text-balance">
              Our Curated Collection
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Explore our hand-picked selection of the world's finest luxury vehicles. Each car is meticulously
              maintained to perfection.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={
                  selectedCategory === category.id ? "bg-accent text-accent-foreground hover:bg-accent/90" : ""
                }
              >
                {category.name}
              </Button>
            ))}
          </div>

          {/* Vehicle Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVehicles.map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>

          {filteredVehicles.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No vehicles found in this category.</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
