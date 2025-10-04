export interface Vehicle {
  id: string
  name: string
  brand: string
  category: "luxury-sedan" | "suv" | "sports-car" | "exotic"
  year: number
  price: {
    daily: number
    weekly: number
    monthly: number
  }
  image: string
  images: string[]
  specs: {
    engine: string
    horsepower: string
    transmission: string
    acceleration: string
    topSpeed: string
    seats: number
    fuelType: string
  }
  features: string[]
  description: string
  available: boolean
}

export const vehicles: Vehicle[] = [
  {
    id: "mercedes-s-class",
    name: "S-Class",
    brand: "Mercedes-Benz",
    category: "luxury-sedan",
    year: 2024,
    price: {
      daily: 800,
      weekly: 5000,
      monthly: 18000,
    },
    image: "/black-mercedes-s-class.png",
    images: ["/black-mercedes-s-class-luxury-sedan-front.jpg", "/black-mercedes-s-class-interior.jpg", "/black-mercedes-s-class-side-view.jpg"],
    specs: {
      engine: "3.0L Inline-6 Turbo",
      horsepower: "429 hp",
      transmission: "9-Speed Automatic",
      acceleration: "0-60 mph in 4.9s",
      topSpeed: "155 mph",
      seats: 5,
      fuelType: "Premium Gasoline",
    },
    features: [
      "Massaging Front Seats",
      "Burmester 3D Surround Sound",
      "MBUX Infotainment System",
      "Panoramic Sunroof",
      "Ambient Lighting (64 colors)",
      "Advanced Driver Assistance",
      "Wireless Charging",
      "Premium Leather Interior",
    ],
    description:
      "The epitome of luxury and sophistication. The Mercedes-Benz S-Class delivers unparalleled comfort, cutting-edge technology, and refined performance for the most discerning clients.",
    available: true,
  },
  {
    id: "range-rover-autobiography",
    name: "Range Rover Autobiography",
    brand: "Land Rover",
    category: "suv",
    year: 2024,
    price: {
      daily: 900,
      weekly: 5500,
      monthly: 20000,
    },
    image: "/white-range-rover-autobiography-luxury-suv.jpg",
    images: ["/white-range-rover-autobiography-front.jpg", "/range-rover-autobiography-interior.jpg", "/white-range-rover-autobiography-side.jpg"],
    specs: {
      engine: "4.4L V8 Twin-Turbo",
      horsepower: "523 hp",
      transmission: "8-Speed Automatic",
      acceleration: "0-60 mph in 4.4s",
      topSpeed: "155 mph",
      seats: 5,
      fuelType: "Premium Gasoline",
    },
    features: [
      "Executive Class Rear Seating",
      "Meridian Signature Sound System",
      "Terrain Response 2",
      "Air Suspension",
      "Configurable Ambient Lighting",
      "Heated & Cooled Seats",
      "Panoramic Roof",
      "Premium Windsor Leather",
    ],
    description:
      "Command attention with the Range Rover Autobiography. This flagship SUV combines legendary off-road capability with supreme luxury and modern technology.",
    available: true,
  },
  {
    id: "porsche-911-turbo",
    name: "911 Turbo S",
    brand: "Porsche",
    category: "sports-car",
    year: 2024,
    price: {
      daily: 1200,
      weekly: 7500,
      monthly: 28000,
    },
    image: "/red-porsche-911-turbo-s-sports-car.jpg",
    images: ["/red-porsche-911-turbo-front.jpg", "/porsche-911-turbo-interior.jpg", "/red-porsche-911-turbo-side.jpg"],
    specs: {
      engine: "3.8L Twin-Turbo Flat-6",
      horsepower: "640 hp",
      transmission: "8-Speed PDK",
      acceleration: "0-60 mph in 2.6s",
      topSpeed: "205 mph",
      seats: 4,
      fuelType: "Premium Gasoline",
    },
    features: [
      "Sport Chrono Package",
      "Active Suspension Management",
      "Porsche Communication Management",
      "Sport Exhaust System",
      "Carbon Ceramic Brakes",
      "Adaptive Sport Seats Plus",
      "Bose Surround Sound",
      "LED Matrix Headlights",
    ],
    description:
      "Experience pure adrenaline with the Porsche 911 Turbo S. This iconic sports car delivers breathtaking performance, precision handling, and timeless design.",
    available: true,
  },
  {
    id: "bmw-7-series",
    name: "7 Series",
    brand: "BMW",
    category: "luxury-sedan",
    year: 2024,
    price: {
      daily: 750,
      weekly: 4800,
      monthly: 17000,
    },
    image: "/silver-bmw-7-series-luxury-sedan.jpg",
    images: ["/silver-bmw-7-series-front.jpg", "/bmw-7-series-interior.jpg", "/silver-bmw-7-series-side.jpg"],
    specs: {
      engine: "3.0L Inline-6 Turbo",
      horsepower: "375 hp",
      transmission: "8-Speed Automatic",
      acceleration: "0-60 mph in 5.3s",
      topSpeed: "155 mph",
      seats: 5,
      fuelType: "Premium Gasoline",
    },
    features: [
      "Executive Lounge Seating",
      "Bowers & Wilkins Diamond Sound",
      "iDrive 8 with Curved Display",
      "Sky Lounge Panoramic Roof",
      "Gesture Control",
      "Laser Headlights",
      "Heated & Ventilated Seats",
      "Nappa Leather Interior",
    ],
    description:
      "The BMW 7 Series redefines luxury with innovative technology, exceptional comfort, and dynamic performance. Perfect for executives and special occasions.",
    available: true,
  },
  {
    id: "bentley-continental-gt",
    name: "Continental GT",
    brand: "Bentley",
    category: "exotic",
    year: 2024,
    price: {
      daily: 1500,
      weekly: 9500,
      monthly: 35000,
    },
    image: "/placeholder.svg?height=600&width=900",
    images: [
      "/placeholder.svg?height=600&width=900",
      "/placeholder.svg?height=600&width=900",
      "/placeholder.svg?height=600&width=900",
    ],
    specs: {
      engine: "6.0L W12 Twin-Turbo",
      horsepower: "650 hp",
      transmission: "8-Speed Dual-Clutch",
      acceleration: "0-60 mph in 3.6s",
      topSpeed: "207 mph",
      seats: 4,
      fuelType: "Premium Gasoline",
    },
    features: [
      "Rotating Display",
      "Naim for Bentley Audio",
      "Diamond Quilted Leather",
      "Handcrafted Wood Veneers",
      "Bentley Dynamic Ride",
      "Mulliner Driving Specification",
      "Mood Lighting",
      "Heated & Cooled Seats",
    ],
    description:
      "The Bentley Continental GT is the ultimate grand tourer. Handcrafted luxury meets exhilarating performance in this British masterpiece.",
    available: true,
  },
  {
    id: "g-wagon",
    name: "G 63 AMG",
    brand: "Mercedes-Benz",
    category: "suv",
    year: 2024,
    price: {
      daily: 1100,
      weekly: 7000,
      monthly: 25000,
    },
    image: "/placeholder.svg?height=600&width=900",
    images: [
      "/placeholder.svg?height=600&width=900",
      "/placeholder.svg?height=600&width=900",
      "/placeholder.svg?height=600&width=900",
    ],
    specs: {
      engine: "4.0L V8 Biturbo",
      horsepower: "577 hp",
      transmission: "9-Speed Automatic",
      acceleration: "0-60 mph in 4.5s",
      topSpeed: "149 mph",
      seats: 5,
      fuelType: "Premium Gasoline",
    },
    features: [
      "AMG Performance Exhaust",
      "Burmester 3D Surround Sound",
      "AMG Ride Control Suspension",
      "Off-Road Package",
      "Designo Leather Interior",
      "AMG Night Package",
      "Multibeam LED Headlights",
      "Widescreen Cockpit",
    ],
    description:
      "The iconic G-Wagon combines rugged capability with AMG performance and luxury. Make a bold statement wherever you go.",
    available: true,
  },
  {
    id: "rolls-royce-ghost",
    name: "Ghost",
    brand: "Rolls-Royce",
    category: "exotic",
    year: 2024,
    price: {
      daily: 2000,
      weekly: 12500,
      monthly: 45000,
    },
    image: "/placeholder.svg?height=600&width=900",
    images: [
      "/placeholder.svg?height=600&width=900",
      "/placeholder.svg?height=600&width=900",
      "/placeholder.svg?height=600&width=900",
    ],
    specs: {
      engine: "6.75L V12 Twin-Turbo",
      horsepower: "563 hp",
      transmission: "8-Speed Automatic",
      acceleration: "0-60 mph in 4.6s",
      topSpeed: "155 mph",
      seats: 5,
      fuelType: "Premium Gasoline",
    },
    features: [
      "Starlight Headliner",
      "Bespoke Audio System",
      "Magic Carpet Ride",
      "Illuminated Grille",
      "Handcrafted Interior",
      "Rear Theatre Configuration",
      "Spirit of Ecstasy",
      "Champagne Cooler",
    ],
    description:
      "The Rolls-Royce Ghost represents the pinnacle of automotive luxury. Experience unparalleled refinement, whisper-quiet comfort, and bespoke craftsmanship.",
    available: true,
  },
  {
    id: "lamborghini-urus",
    name: "Urus",
    brand: "Lamborghini",
    category: "suv",
    year: 2024,
    price: {
      daily: 1400,
      weekly: 8500,
      monthly: 32000,
    },
    image: "/placeholder.svg?height=600&width=900",
    images: [
      "/placeholder.svg?height=600&width=900",
      "/placeholder.svg?height=600&width=900",
      "/placeholder.svg?height=600&width=900",
    ],
    specs: {
      engine: "4.0L V8 Twin-Turbo",
      horsepower: "657 hp",
      transmission: "8-Speed Automatic",
      acceleration: "0-60 mph in 3.5s",
      topSpeed: "190 mph",
      seats: 5,
      fuelType: "Premium Gasoline",
    },
    features: [
      "ANIMA Drive Mode Selector",
      "Carbon Ceramic Brakes",
      "Active Roll Stabilization",
      "Sport Exhaust System",
      "Alcantara Interior",
      "Lamborghini Infotainment",
      "Adaptive Air Suspension",
      "Full LED Lighting",
    ],
    description:
      "The Lamborghini Urus is the world's first Super SUV. Combining supercar performance with SUV versatility and unmistakable Italian design.",
    available: true,
  },
]

export const categories = [
  { id: "all", name: "All Vehicles" },
  { id: "luxury-sedan", name: "Luxury Sedans" },
  { id: "suv", name: "SUVs" },
  { id: "sports-car", name: "Sports Cars" },
  { id: "exotic", name: "Exotic" },
]
