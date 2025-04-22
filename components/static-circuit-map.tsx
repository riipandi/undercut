import { MapPin } from "lucide-react"
import { getAllCircuits } from "@/lib/circuits-data"
import Link from "next/link"

export default function StaticCircuitMap() {
  const circuits = getAllCircuits()

  return (
    <div className="h-[500px] w-full rounded-lg overflow-hidden bg-zinc-800 p-4">
      <h2 className="text-xl font-bold mb-4">Circuit Locations</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 overflow-y-auto max-h-[420px]">
        {circuits.map((circuit) => (
          <Link
            key={circuit.id}
            href={`/circuits/${circuit.id}`}
            className="bg-zinc-700/30 hover:bg-zinc-700/50 transition-colors rounded-lg p-3 flex items-center gap-2"
          >
            <MapPin className="h-5 w-5 text-red-500 flex-shrink-0" />
            <div className="min-w-0">
              <h3 className="font-medium text-sm truncate">{circuit.name}</h3>
              <p className="text-xs text-zinc-400 truncate">
                {circuit.city}, {circuit.country}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
