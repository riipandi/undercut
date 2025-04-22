import Link from "next/link"
import { MapPin, BarChart3 } from "lucide-react"
import { getAllCircuits } from "@/lib/circuits-data"

export default function CircuitsList() {
  const circuits = getAllCircuits()

  return (
    <div className="bg-zinc-800 rounded-lg overflow-hidden">
      <div className="p-4 bg-zinc-700 flex justify-between items-center">
        <h2 className="text-xl font-bold">All Circuits</h2>
        <Link href="/circuits/compare" className="text-sm flex items-center gap-1 text-zinc-300 hover:text-white">
          <BarChart3 className="h-4 w-4" />
          <span>Compare Circuits</span>
        </Link>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {circuits.map((circuit) => (
            <Link
              key={circuit.id}
              href={`/circuits/${circuit.id}`}
              className="bg-zinc-700/30 hover:bg-zinc-700/50 transition-colors rounded-lg p-4 flex items-start gap-3"
            >
              <div className="bg-red-600/20 p-2 rounded-full mt-1">
                <MapPin className="h-5 w-5 text-red-500" />
              </div>
              <div>
                <h3 className="font-bold">{circuit.name}</h3>
                <p className="text-sm text-zinc-400">
                  {circuit.city}, {circuit.country}
                </p>
                <div className="mt-1 text-xs flex gap-2">
                  <span className="bg-zinc-700 px-2 py-0.5 rounded">{circuit.length}</span>
                  <span className="bg-zinc-700 px-2 py-0.5 rounded">{circuit.turns} turns</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
