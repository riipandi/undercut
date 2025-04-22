import Link from "next/link"
import type { Driver } from "@/lib/types"
import { teamColors } from "@/lib/constants"

interface DriverStandingsProps {
  drivers: Driver[]
  fastestLap: { driver: string; time: string; lap: number } | null
}

export default function DriverStandings({ drivers, fastestLap }: DriverStandingsProps) {
  return (
    <div className="bg-zinc-800 rounded-lg overflow-hidden">
      <div className="p-4 bg-zinc-700">
        <h2 className="text-xl font-bold">Driver Standings</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-zinc-700/50 text-left">
              <th className="p-3 w-12">Pos</th>
              <th className="p-3">Driver</th>
              <th className="p-3">Team</th>
              <th className="p-3 text-right">Gap</th>
              <th className="p-3 text-right">Last Lap</th>
              <th className="p-3 text-right">Best Lap</th>
              <th className="p-3 text-center w-16">Pits</th>
            </tr>
          </thead>
          <tbody>
            {drivers.map((driver, index) => {
              const teamColor = teamColors[driver.team] || "border-gray-500"
              const isFastestLap = fastestLap?.driver === driver.name
              const driverId = driver.name.toLowerCase().replace(/\s+/g, "-")

              return (
                <tr key={driver.number} className={`border-l-4 ${teamColor} hover:bg-zinc-700/30 transition-colors`}>
                  <td className="p-3 font-bold">{index + 1}</td>
                  <td className="p-3">
                    <Link
                      href={`/drivers/${driverId}`}
                      className="flex items-center gap-2 hover:text-red-500 transition-colors"
                    >
                      <span className="inline-block w-6 text-center font-mono bg-zinc-700 rounded">
                        {driver.number}
                      </span>
                      <span className="font-medium">{driver.name}</span>
                      {isFastestLap && (
                        <span className="ml-2 text-purple-400 text-xs font-bold bg-purple-900/30 px-1 py-0.5 rounded">
                          FL
                        </span>
                      )}
                    </Link>
                  </td>
                  <td className="p-3">{driver.team}</td>
                  <td className="p-3 text-right font-mono">{index === 0 ? "LEADER" : driver.gap}</td>
                  <td className="p-3 text-right font-mono">{driver.lastLapTime}</td>
                  <td className="p-3 text-right font-mono">
                    <span className={isFastestLap ? "text-purple-400" : ""}>{driver.bestLapTime}</span>
                  </td>
                  <td className="p-3 text-center">{driver.pitStops}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
