"use client"

import { useState } from "react"
import { MapPin, X } from "lucide-react"
import { type Circuit, getAllCircuits } from "@/lib/circuits-data"

export default function CircuitsMap() {
  const [selectedCircuit, setSelectedCircuit] = useState<Circuit | null>(null)
  const circuits = getAllCircuits()

  return (
    <div className="bg-zinc-800 rounded-lg overflow-hidden">
      <div className="p-4 bg-zinc-700">
        <h2 className="text-xl font-bold">F1 Circuits Map</h2>
        <p className="text-sm text-zinc-400">Click on a circuit marker to view details</p>
      </div>

      <div className="relative">
        {/* World Map Container */}
        <div className="p-4 relative">
          <div className="relative w-full h-[500px] bg-zinc-900 rounded-lg overflow-hidden">
            {/* Simple world map background image */}
            <div className="absolute inset-0 opacity-40 bg-zinc-800">
              <div className="absolute w-[70%] h-[30%] bg-zinc-700 rounded-full top-[20%] left-[15%]"></div>
              <div className="absolute w-[25%] h-[25%] bg-zinc-700 rounded-full top-[15%] left-[5%]"></div>
              <div className="absolute w-[20%] h-[20%] bg-zinc-700 rounded-full top-[25%] left-[75%]"></div>
              <div className="absolute w-[15%] h-[15%] bg-zinc-700 rounded-full top-[60%] left-[30%]"></div>
              <div className="absolute w-[10%] h-[10%] bg-zinc-700 rounded-full top-[65%] left-[85%]"></div>
            </div>

            {/* Circuit markers */}
            {circuits.map((circuit) => (
              <button
                key={circuit.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
                style={{ left: `${circuit.coordinates.x}%`, top: `${circuit.coordinates.y}%` }}
                onClick={() => setSelectedCircuit(circuit)}
                aria-label={`View details for ${circuit.name}`}
              >
                <div className="relative">
                  <MapPin className="h-6 w-6 text-red-500 group-hover:text-red-400 transition-colors" />
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full animate-ping"></div>
                </div>
                <div className="opacity-0 group-hover:opacity-100 absolute top-full left-1/2 transform -translate-x-1/2 mt-1 bg-zinc-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap transition-opacity">
                  {circuit.name}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Circuit details modal */}
        {selectedCircuit && (
          <div className="absolute inset-0 bg-black/70 flex items-center justify-center p-4 z-10">
            <div className="bg-zinc-800 rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
              <div className="p-4 bg-zinc-700 flex justify-between items-center sticky top-0">
                <h3 className="text-xl font-bold">{selectedCircuit.name}</h3>
                <button
                  onClick={() => setSelectedCircuit(null)}
                  className="text-zinc-400 hover:text-white"
                  aria-label="Close details"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="p-4">
                <div className="aspect-video bg-zinc-700 rounded-lg mb-4 overflow-hidden">
                  <img
                    src={selectedCircuit.image || "/placeholder.svg"}
                    alt={`${selectedCircuit.name} layout`}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-medium mb-2">Circuit Information</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-zinc-400">Location:</span>
                        <span>
                          {selectedCircuit.city}, {selectedCircuit.country}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zinc-400">Length:</span>
                        <span>{selectedCircuit.length}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zinc-400">Turns:</span>
                        <span>{selectedCircuit.turns}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zinc-400">First Grand Prix:</span>
                        <span>{selectedCircuit.firstGrandPrix}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Lap Record</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-zinc-400">Time:</span>
                        <span>{selectedCircuit.lapRecord.time}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zinc-400">Driver:</span>
                        <span>{selectedCircuit.lapRecord.driver}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zinc-400">Year:</span>
                        <span>{selectedCircuit.lapRecord.year}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <h4 className="font-medium mb-2">About the Circuit</h4>
                <p className="text-sm text-zinc-300">{selectedCircuit.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
