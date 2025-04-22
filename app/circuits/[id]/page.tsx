import Link from "next/link"
import { ChevronLeft, MapPin, Trophy, Ruler, CornerDownRight, BarChart3 } from "lucide-react"
import { getCircuitById } from "@/lib/circuits-data"
import { notFound } from "next/navigation"

export default function CircuitPage({ params }: { params: { id: string } }) {
  const circuit = getCircuitById(params.id)

  if (!circuit) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <Link href="/circuits" className="flex items-center gap-1 text-zinc-400 hover:text-white">
          <ChevronLeft className="h-4 w-4" />
          <span>Back to Circuits</span>
        </Link>

        <Link
          href={`/circuits/compare?circuits=${circuit.id}`}
          className="flex items-center gap-1 text-zinc-400 hover:text-white"
        >
          <BarChart3 className="h-4 w-4" />
          <span>Compare with other circuits</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-zinc-800 rounded-lg overflow-hidden">
            <div className="aspect-video bg-zinc-700 relative">
              <img
                src={circuit.image || "/placeholder.svg"}
                alt={`${circuit.name} layout`}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <h1 className="text-2xl md:text-3xl font-bold">{circuit.name}</h1>
                <div className="flex items-center gap-2 text-zinc-300">
                  <MapPin className="h-4 w-4" />
                  <span>
                    {circuit.city}, {circuit.country}
                  </span>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-zinc-700/30 p-3 rounded-lg text-center">
                  <Ruler className="h-5 w-5 mx-auto mb-1 text-zinc-400" />
                  <div className="text-lg font-bold">{circuit.length}</div>
                  <div className="text-zinc-400 text-xs">Track Length</div>
                </div>
                <div className="bg-zinc-700/30 p-3 rounded-lg text-center">
                  <CornerDownRight className="h-5 w-5 mx-auto mb-1 text-zinc-400" />
                  <div className="text-lg font-bold">{circuit.turns}</div>
                  <div className="text-zinc-400 text-xs">Turns</div>
                </div>
                <div className="bg-zinc-700/30 p-3 rounded-lg text-center">
                  <Trophy className="h-5 w-5 mx-auto mb-1 text-zinc-400" />
                  <div className="text-lg font-bold">{circuit.firstGrandPrix}</div>
                  <div className="text-zinc-400 text-xs">First Grand Prix</div>
                </div>
              </div>

              <h2 className="text-xl font-bold mb-3">About the Circuit</h2>
              <p className="text-zinc-300 mb-6">{circuit.description}</p>

              <h2 className="text-xl font-bold mb-3">Lap Record</h2>
              <div className="bg-zinc-700/30 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-zinc-400">Time:</span>
                  <span className="font-mono font-bold">{circuit.lapRecord.time}</span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-zinc-400">Driver:</span>
                  <span>{circuit.lapRecord.driver}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-400">Year:</span>
                  <span>{circuit.lapRecord.year}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-zinc-800 rounded-lg overflow-hidden">
            <div className="p-4 bg-zinc-700">
              <h2 className="text-xl font-bold">Circuit Location</h2>
            </div>
            <div className="p-4">
              <div className="aspect-square bg-zinc-700 rounded-lg relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <MapPin className="h-12 w-12 text-red-500" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-3 text-center">
                  {circuit.city}, {circuit.country}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-zinc-800 rounded-lg overflow-hidden">
            <div className="p-4 bg-zinc-700">
              <h2 className="text-xl font-bold">Race Weekend</h2>
            </div>
            <div className="p-4">
              <div className="space-y-3">
                <div className="bg-zinc-700/30 p-3 rounded-lg">
                  <div className="text-sm font-medium mb-1">Practice 1</div>
                  <div className="text-xs text-zinc-400">Friday, 12:30 - 13:30</div>
                </div>
                <div className="bg-zinc-700/30 p-3 rounded-lg">
                  <div className="text-sm font-medium mb-1">Practice 2</div>
                  <div className="text-xs text-zinc-400">Friday, 16:00 - 17:00</div>
                </div>
                <div className="bg-zinc-700/30 p-3 rounded-lg">
                  <div className="text-sm font-medium mb-1">Practice 3</div>
                  <div className="text-xs text-zinc-400">Saturday, 11:30 - 12:30</div>
                </div>
                <div className="bg-zinc-700/30 p-3 rounded-lg">
                  <div className="text-sm font-medium mb-1">Qualifying</div>
                  <div className="text-xs text-zinc-400">Saturday, 15:00 - 16:00</div>
                </div>
                <div className="bg-red-900/30 p-3 rounded-lg border border-red-800">
                  <div className="text-sm font-medium mb-1">Race</div>
                  <div className="text-xs text-zinc-400">Sunday, 15:00</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
