import type { Driver } from "@/lib/types"
import { teamColors } from "@/lib/constants"

interface LapTimesProps {
  drivers: Driver[]
  fastestLap: { driver: string; time: string; lap: number } | null
}

export default function LapTimes({ drivers, fastestLap }: LapTimesProps) {
  return (
    <div className="bg-zinc-800 rounded-lg overflow-hidden">
      <div className="p-4 bg-zinc-700">
        <h2 className="text-xl font-bold">Recent Lap Times</h2>
      </div>
      <div className="p-4">
        <div className="space-y-3">
          {drivers.map((driver) => {
            const teamColor = teamColors[driver.team] || "border-gray-500"
            const isFastestLap = fastestLap?.driver === driver.name

            return (
              <div
                key={driver.number}
                className={`flex items-center justify-between p-2 border-l-4 ${teamColor} bg-zinc-700/20 rounded`}
              >
                <div className="flex items-center gap-2">
                  <span className="inline-block w-6 text-center font-mono bg-zinc-700 rounded">{driver.number}</span>
                  <span className="font-medium">{driver.name}</span>
                </div>
                <div className="font-mono">
                  <span className={isFastestLap ? "text-purple-400" : ""}>{driver.lastLapTime}</span>
                </div>
              </div>
            )
          })}
        </div>

        {fastestLap && (
          <div className="mt-4 p-3 bg-purple-900/30 rounded border border-purple-700">
            <div className="text-sm text-purple-300 mb-1">Fastest Lap</div>
            <div className="flex justify-between">
              <span className="font-medium">{fastestLap.driver}</span>
              <span className="font-mono text-purple-300">{fastestLap.time}</span>
            </div>
            <div className="text-xs text-zinc-400 mt-1">Lap {fastestLap.lap}</div>
          </div>
        )}
      </div>
    </div>
  )
}
