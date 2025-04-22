"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { ChevronLeft, Plus, X, BarChart3, Ruler, CornerDownRight, Trophy, Clock } from "lucide-react"
import { getAllCircuits, getCircuitById, type Circuit } from "@/lib/circuits-data"
import CircuitComparisonChart from "@/components/circuit-comparison-chart"
import CircuitRadarChart from "@/components/circuit-radar-chart"
import ShareComparison from "@/components/share-comparison"

export default function CircuitComparePage() {
  const [selectedCircuits, setSelectedCircuits] = useState<Circuit[]>([])
  const allCircuits = getAllCircuits()
  const searchParams = useSearchParams()

  // Initialize selected circuits from URL parameters
  useEffect(() => {
    const circuitParam = searchParams.get("circuits")
    if (circuitParam) {
      const circuitIds = circuitParam.split(",")
      const circuits = circuitIds
        .map((id) => getCircuitById(id))
        .filter((circuit): circuit is Circuit => circuit !== undefined)
        .slice(0, 4) // Limit to 4 circuits

      setSelectedCircuits(circuits)
    }
  }, [searchParams])

  const addCircuit = (circuit: Circuit) => {
    if (selectedCircuits.length < 4 && !selectedCircuits.some((c) => c.id === circuit.id)) {
      setSelectedCircuits([...selectedCircuits, circuit])
    }
  }

  const removeCircuit = (circuitId: string) => {
    setSelectedCircuits(selectedCircuits.filter((c) => c.id !== circuitId))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/circuits" className="flex items-center gap-1 text-zinc-400 hover:text-white mb-6">
        <ChevronLeft className="h-4 w-4" />
        <span>Back to Circuits</span>
      </Link>

      <header className="mb-8">
        <h1 className="text-4xl font-bold text-red-600 mb-2">Circuit Comparison</h1>
        <p className="text-zinc-400">Select up to 4 circuits to compare their statistics side by side</p>
      </header>

      {selectedCircuits.length === 0 ? (
        <div className="bg-zinc-800 rounded-lg p-8 text-center">
          <div className="mb-4">
            <BarChart3 className="h-12 w-12 mx-auto text-zinc-500" />
          </div>
          <h2 className="text-xl font-bold mb-2">No Circuits Selected</h2>
          <p className="text-zinc-400 mb-6">Select circuits from the list below to start comparing</p>
        </div>
      ) : (
        <div className="space-y-8">
          {/* Share Comparison */}
          {selectedCircuits.length >= 2 && <ShareComparison circuits={selectedCircuits} />}

          {/* Comparison Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {selectedCircuits.map((circuit) => (
              <div key={circuit.id} className="bg-zinc-800 rounded-lg overflow-hidden relative">
                <button
                  onClick={() => removeCircuit(circuit.id)}
                  className="absolute top-2 right-2 bg-zinc-700 rounded-full p-1 hover:bg-zinc-600 transition-colors"
                  aria-label={`Remove ${circuit.name} from comparison`}
                >
                  <X className="h-4 w-4" />
                </button>

                <div className="h-32 bg-zinc-700 relative">
                  <img
                    src={circuit.image || "/placeholder.svg"}
                    alt={circuit.name}
                    className="w-full h-full object-cover opacity-60"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-lg font-bold text-center px-4">{circuit.name}</h3>
                  </div>
                </div>

                <div className="p-4">
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-zinc-400">Length:</span>
                      <span>{circuit.length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-400">Turns:</span>
                      <span>{circuit.turns}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-400">Lap Record:</span>
                      <span>{circuit.lapRecord.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {selectedCircuits.length < 4 && (
              <button
                onClick={() => document.getElementById("circuit-selector")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-zinc-800 rounded-lg border-2 border-dashed border-zinc-700 flex flex-col items-center justify-center h-full min-h-[240px] hover:bg-zinc-700/30 transition-colors"
              >
                <Plus className="h-8 w-8 mb-2 text-zinc-500" />
                <span className="text-zinc-500">Add Circuit</span>
              </button>
            )}
          </div>

          {selectedCircuits.length >= 2 && (
            <>
              {/* Comparison Charts */}
              <div className="bg-zinc-800 rounded-lg overflow-hidden">
                <div className="p-4 bg-zinc-700">
                  <h2 className="text-xl font-bold">Circuit Statistics Comparison</h2>
                </div>
                <div className="p-6">
                  {/* Add Radar Chart */}
                  <CircuitRadarChart circuits={selectedCircuits} />

                  <div className="mt-8">
                    <CircuitComparisonChart
                      circuits={selectedCircuits}
                      dataKey="turns"
                      title="Number of Turns"
                      icon={<CornerDownRight className="h-5 w-5" />}
                    />
                  </div>

                  <div className="mt-8">
                    <CircuitComparisonChart
                      circuits={selectedCircuits}
                      dataKey="length"
                      title="Circuit Length"
                      icon={<Ruler className="h-5 w-5" />}
                      valueFormatter={(value) => value.replace(" km", "")}
                      unit="km"
                    />
                  </div>

                  <div className="mt-8">
                    <CircuitComparisonChart
                      circuits={selectedCircuits}
                      dataKey="firstGrandPrix"
                      title="First Grand Prix Year"
                      icon={<Trophy className="h-5 w-5" />}
                    />
                  </div>

                  <div className="mt-8">
                    <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                      <Clock className="h-5 w-5" />
                      Lap Record Comparison
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-zinc-700">
                            <th className="text-left p-2">Circuit</th>
                            <th className="text-left p-2">Lap Record</th>
                            <th className="text-left p-2">Driver</th>
                            <th className="text-left p-2">Year</th>
                          </tr>
                        </thead>
                        <tbody>
                          {selectedCircuits.map((circuit) => (
                            <tr key={circuit.id} className="border-b border-zinc-700/50">
                              <td className="p-2 font-medium">{circuit.name}</td>
                              <td className="p-2 font-mono">{circuit.lapRecord.time}</td>
                              <td className="p-2">{circuit.lapRecord.driver}</td>
                              <td className="p-2">{circuit.lapRecord.year}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Comparison Details */}
              <div className="bg-zinc-800 rounded-lg overflow-hidden">
                <div className="p-4 bg-zinc-700">
                  <h2 className="text-xl font-bold">Detailed Comparison</h2>
                </div>
                <div className="p-4 overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-zinc-700">
                        <th className="text-left p-2">Feature</th>
                        {selectedCircuits.map((circuit) => (
                          <th key={circuit.id} className="text-left p-2">
                            {circuit.name}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-zinc-700/50">
                        <td className="p-2 text-zinc-400">Country</td>
                        {selectedCircuits.map((circuit) => (
                          <td key={circuit.id} className="p-2">
                            {circuit.country}
                          </td>
                        ))}
                      </tr>
                      <tr className="border-b border-zinc-700/50">
                        <td className="p-2 text-zinc-400">City</td>
                        {selectedCircuits.map((circuit) => (
                          <td key={circuit.id} className="p-2">
                            {circuit.city}
                          </td>
                        ))}
                      </tr>
                      <tr className="border-b border-zinc-700/50">
                        <td className="p-2 text-zinc-400">Length</td>
                        {selectedCircuits.map((circuit) => (
                          <td key={circuit.id} className="p-2">
                            {circuit.length}
                          </td>
                        ))}
                      </tr>
                      <tr className="border-b border-zinc-700/50">
                        <td className="p-2 text-zinc-400">Turns</td>
                        {selectedCircuits.map((circuit) => (
                          <td key={circuit.id} className="p-2">
                            {circuit.turns}
                          </td>
                        ))}
                      </tr>
                      <tr className="border-b border-zinc-700/50">
                        <td className="p-2 text-zinc-400">First Grand Prix</td>
                        {selectedCircuits.map((circuit) => (
                          <td key={circuit.id} className="p-2">
                            {circuit.firstGrandPrix}
                          </td>
                        ))}
                      </tr>
                      <tr className="border-b border-zinc-700/50">
                        <td className="p-2 text-zinc-400">Lap Record</td>
                        {selectedCircuits.map((circuit) => (
                          <td key={circuit.id} className="p-2 font-mono">
                            {circuit.lapRecord.time}
                          </td>
                        ))}
                      </tr>
                      <tr className="border-b border-zinc-700/50">
                        <td className="p-2 text-zinc-400">Record Holder</td>
                        {selectedCircuits.map((circuit) => (
                          <td key={circuit.id} className="p-2">
                            {circuit.lapRecord.driver}
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <td className="p-2 text-zinc-400">Record Year</td>
                        {selectedCircuits.map((circuit) => (
                          <td key={circuit.id} className="p-2">
                            {circuit.lapRecord.year}
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}
        </div>
      )}

      {/* Circuit Selector */}
      <div id="circuit-selector" className="mt-8">
        <div className="bg-zinc-800 rounded-lg overflow-hidden">
          <div className="p-4 bg-zinc-700">
            <h2 className="text-xl font-bold">Select Circuits to Compare</h2>
            <p className="text-sm text-zinc-400">Choose up to 4 circuits</p>
          </div>
          <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {allCircuits.map((circuit) => {
                const isSelected = selectedCircuits.some((c) => c.id === circuit.id)
                const isDisabled = selectedCircuits.length >= 4 && !isSelected

                return (
                  <button
                    key={circuit.id}
                    onClick={() => (isSelected ? removeCircuit(circuit.id) : addCircuit(circuit))}
                    disabled={isDisabled}
                    className={`text-left p-4 rounded-lg transition-colors ${
                      isSelected
                        ? "bg-red-900/30 border border-red-800"
                        : isDisabled
                          ? "bg-zinc-700/30 opacity-50 cursor-not-allowed"
                          : "bg-zinc-700/30 hover:bg-zinc-700/50"
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold">{circuit.name}</h3>
                        <p className="text-sm text-zinc-400">
                          {circuit.city}, {circuit.country}
                        </p>
                      </div>
                      {isSelected && <span className="bg-red-800 text-white text-xs px-2 py-1 rounded">Selected</span>}
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
