import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Gauge } from "lucide-react"
import type { Vehicle } from "@/lib/vehicles"

interface VehicleCardProps {
  vehicle: Vehicle
}

export function VehicleCard({ vehicle }: VehicleCardProps) {
  return (
    <Card className="group overflow-hidden border-border hover:border-accent/50 transition-all duration-500 hover:shadow-xl hover:shadow-accent/10 hover:-translate-y-1">
      <div className="relative h-64 overflow-hidden bg-muted">
        <img
          src={vehicle.image || "/placeholder.svg"}
          alt={`${vehicle.brand} ${vehicle.name}`}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        {!vehicle.available && (
          <div className="absolute top-4 right-4 px-3 py-1 bg-destructive text-destructive-foreground text-xs font-semibold rounded-full backdrop-blur-sm">
            Unavailable
          </div>
        )}
        {vehicle.available && (
          <div className="absolute top-4 right-4 px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full backdrop-blur-sm">
            Available
          </div>
        )}
      </div>

      <div className="p-6 space-y-4">
        <div>
          <p className="text-sm text-muted-foreground mb-1">{vehicle.brand}</p>
          <h3 className="text-2xl font-semibold font-serif text-foreground group-hover:text-accent transition-colors duration-300">
            {vehicle.name}
          </h3>
          <p className="text-xs text-muted-foreground mt-1">{vehicle.year}</p>
        </div>

        <div className="flex items-center gap-4 text-sm text-foreground">
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4 text-accent" />
            <span>{vehicle.specs.seats} Seats</span>
          </div>
          <div className="flex items-center gap-1">
            <Gauge className="w-4 h-4 text-accent" />
            <span>{vehicle.specs.horsepower}</span>
          </div>
        </div>

        <div className="pt-4 border-t border-border">
          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-3xl font-bold text-accent">${vehicle.price.daily}</span>
            <span className="text-sm text-foreground">/day</span>
          </div>

          <Button
            asChild
            className="w-full bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-accent/20"
          >
            <Link href={`/showroom/${vehicle.id}`} className="flex items-center justify-center">
              View Details
              <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </Card>
  )
}
