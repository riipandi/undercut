import type { RaceStatus } from "@/lib/types"
import { Flag, Clock, AlertCircle, CloudRain, Thermometer } from "lucide-react"

interface RaceInfoProps {
  currentLap: number
  totalLaps: number
  raceStatus: RaceStatus
}

export default function RaceInfo({ currentLap, totalLaps, raceStatus }: RaceInfoProps) {
  // Calculate progress percentage
  const progress = (currentLap / totalLaps) * 100

  return (
    <div className="bg-zinc-800 rounded-lg overflow-hidden">
      <div className="p-4 bg-zinc-700">
        <h2 className="text-xl font-bold">Race Information</h2>
      </div>
      <div className="p-4">
        <div className="mb-4">
          <div className="flex justify-between mb-1">
            <span>Race Progress</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-zinc-700 rounded-full h-2.5">
            <div className="bg-red-600 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Flag className="h-4 w-4 text-zinc-400" />
              <span>Race</span>
            </div>
            <span>Monaco Grand Prix</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-zinc-400" />
              <span>Elapsed</span>
            </div>
            <span>
              {Math.floor(currentLap * 1.5)}m {(((currentLap * 1.5) % 1) * 60).toFixed(0)}s
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <AlertCircle className="h-4 w-4 text-zinc-400" />
              <span>DRS</span>
            </div>
            <span className={raceStatus === "racing" && currentLap > 2 ? "text-green-500" : "text-red-500"}>
              {raceStatus === "racing" && currentLap > 2 ? "Enabled" : "Disabled"}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CloudRain className="h-4 w-4 text-zinc-400" />
              <span>Weather</span>
            </div>
            <span>Sunny, 0% chance of rain</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Thermometer className="h-4 w-4 text-zinc-400" />
              <span>Temperature</span>
            </div>
            <span>Air: 24°C, Track: 45°C</span>
          </div>
        </div>
      </div>
    </div>
  )
}
