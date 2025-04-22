import type { RaceStats } from "@/lib/race-stats-data"
import { Clock } from "lucide-react"

interface FastestLapsProps {
  fastestLaps: RaceStats["fastestLaps"]
}

export default function FastestLaps({ fastestLaps }: FastestLapsProps) {
  if (!fastestLaps || fastestLaps.length === 0) {
    return null
  }

  return (
    <div className="bg-zinc-800 rounded-lg overflow-hidden">
      <div className="p-4 bg-zinc-700 flex items-center gap-2">
        <Clock className="h-5 w-5 text-purple-400" />
        <h3 className="text-lg font-bold">Fastest Laps</h3>
      </div>
      <div className="p-4">
        <div className="space-y-3">
          {fastestLaps.map((lap, index) => (
            <div
              key={index}
              className={`p-3 rounded-lg ${
                index === 0 ? "bg-purple-900/30 border border-purple-800" : "bg-zinc-700/30"
              }`}
            >
              <div className="flex justify-between items-center mb-1">
                <div className="font-medium">{lap.driver}</div>
                <div className="font-mono font-bold text-purple-400">{lap.time}</div>
              </div>
              <div className="flex justify-between text-sm text-zinc-400">
                <div>Lap {lap.lap}</div>
                <div>{lap.averageSpeed}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
