import { Ruler, CornerDownRight, Gauge, ArrowRight } from "lucide-react"
import type { Circuit } from "@/lib/circuits-data"

interface CircuitFeaturesProps {
  circuit: Circuit
}

export default function CircuitFeatures({ circuit }: CircuitFeaturesProps) {
  if (!circuit.features) {
    return null
  }

  return (
    <div className="bg-zinc-800 rounded-lg overflow-hidden">
      <div className="p-4 bg-zinc-700">
        <h2 className="text-xl font-bold">Circuit Features</h2>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-zinc-700/30 p-3 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <div className="bg-red-600/20 p-1.5 rounded-full">
                <ArrowRight className="h-4 w-4 text-red-500" />
              </div>
              <span className="font-medium">DRS Zones</span>
            </div>
            <div className="text-lg font-bold">{circuit.features.drsZones}</div>
          </div>

          <div className="bg-zinc-700/30 p-3 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <div className="bg-blue-600/20 p-1.5 rounded-full">
                <Ruler className="h-4 w-4 text-blue-500" />
              </div>
              <span className="font-medium">Longest Straight</span>
            </div>
            <div className="text-lg font-bold">{circuit.features.longestStraight}</div>
          </div>

          <div className="bg-zinc-700/30 p-3 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <div className="bg-green-600/20 p-1.5 rounded-full">
                <Gauge className="h-4 w-4 text-green-500" />
              </div>
              <span className="font-medium">Fastest Corner</span>
            </div>
            <div className="text-lg font-bold">{circuit.features.fastestCorner}</div>
          </div>

          <div className="bg-zinc-700/30 p-3 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <div className="bg-yellow-600/20 p-1.5 rounded-full">
                <CornerDownRight className="h-4 w-4 text-yellow-500" />
              </div>
              <span className="font-medium">Slowest Corner</span>
            </div>
            <div className="text-lg font-bold">{circuit.features.slowestCorner}</div>
          </div>
        </div>

        <div className="mt-4 space-y-2">
          <div className="flex justify-between">
            <span className="text-zinc-400">Pit Lane Length:</span>
            <span>{circuit.features.pitLaneLength}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-zinc-400">Lap Distance:</span>
            <span>{circuit.features.lapDistance}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-zinc-400">Race Distance:</span>
            <span>{circuit.features.raceDistance}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
