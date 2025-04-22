"use client"

import { useEffect, useRef, useState } from "react"
import { getAllCircuits } from "@/lib/circuits-data"
import { useRouter } from "next/navigation"

// Define a type for the Leaflet library to avoid TypeScript errors
type LeafletType = typeof import("leaflet")

export default function InteractiveCircuitMap() {
  const mapRef = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const circuits = getAllCircuits()
  const [isMapInitialized, setIsMapInitialized] = useState(false)

  useEffect(() => {
    // Dynamically import Leaflet only on the client side
    const initializeMap = async () => {
      if (!mapRef.current || isMapInitialized) return

      try {
        // Dynamically import Leaflet
        const L = (await import("leaflet")).default as LeafletType

        // Import Leaflet CSS
        await import("leaflet/dist/leaflet.css")

        // Initialize map
        const map = L.map(mapRef.current).setView([30, 0], 2)

        // Add OpenStreetMap tiles
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          maxZoom: 19,
        }).addTo(map)

        // Custom icon for F1 circuits
        const circuitIcon = L.icon({
          iconUrl: "/f1-marker.svg",
          iconSize: [30, 30],
          iconAnchor: [15, 30],
          popupAnchor: [0, -30],
        })

        // Add markers for each circuit
        circuits.forEach((circuit) => {
          // Convert coordinates to actual latitude and longitude
          // Note: In a real application, you would store actual lat/long in your data
          // This is a placeholder conversion based on the existing coordinate system
          const lat = (50 - circuit.coordinates.y / 2) * 1.8
          const lng = (circuit.coordinates.x - 50) * 3.6

          const marker = L.marker([lat, lng], { icon: circuitIcon })
            .addTo(map)
            .bindPopup(
              `
              <div style="width: 200px">
                <h3 style="font-weight: bold; margin-bottom: 5px">${circuit.name}</h3>
                <p style="margin-bottom: 5px">${circuit.city}, ${circuit.country}</p>
                <p style="margin-bottom: 10px">Round: ${circuits.findIndex((c) => c.id === circuit.id) + 1}</p>
                <button 
                  style="background-color: #e10600; color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer; width: 100%"
                  onclick="window.open('/circuits/${circuit.id}', '_self')"
                >
                  View Circuit
                </button>
              </div>
            `,
              {
                closeButton: false,
              },
            )

          // Open popup on hover
          marker.on("mouseover", function () {
            this.openPopup()
          })
        })

        setIsMapInitialized(true)

        // Cleanup on unmount
        return () => {
          map.remove()
        }
      } catch (error) {
        console.error("Error initializing map:", error)
      }
    }

    initializeMap()
  }, [circuits, router, isMapInitialized])

  return <div ref={mapRef} className="h-[500px] w-full rounded-lg overflow-hidden" />
}
