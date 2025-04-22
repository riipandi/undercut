import Link from "next/link"
import { getAllDrivers } from "@/lib/drivers-data"
import { teamColors } from "@/lib/constants"

export default function DriversPage() {
  const drivers = getAllDrivers()

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-red-600 mb-2">F1 DRIVERS</h1>
        <p className="text-zinc-400">Current Formula 1 drivers for the 2023 season</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {drivers.map((driver) => {
          const teamColor = teamColors[driver.team] || "border-gray-500"

          return (
            <Link
              key={driver.id}
              href={`/drivers/${driver.id}`}
              className="bg-zinc-800 rounded-lg overflow-hidden border-t-4 hover:bg-zinc-700/50 transition-colors"
              style={{
                borderColor: teamColor
                  .replace("border-", "")
                  .replace("-500", "")
                  .replace("-600", "")
                  .replace("-400", ""),
              }}
            >
              <div className="p-4 text-center">
                <div className="w-20 h-20 rounded-full bg-zinc-700 mx-auto mb-3 flex items-center justify-center overflow-hidden">
                  <img
                    src="/placeholder.svg?height=80&width=80"
                    alt={driver.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h2 className="font-bold text-lg mb-1">{driver.name}</h2>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-zinc-400 text-sm">{driver.team}</span>
                </div>

                <div className="inline-block bg-zinc-700 px-2 py-0.5 rounded-full text-lg font-bold">
                  {driver.number}
                </div>
              </div>

              <div className="bg-zinc-700/30 p-3 flex justify-between text-sm">
                <div>
                  <div className="text-zinc-400">Position</div>
                  <div className="font-medium">{driver.currentSeason.position}</div>
                </div>
                <div>
                  <div className="text-zinc-400">Points</div>
                  <div className="font-medium">{driver.currentSeason.points}</div>
                </div>
                <div>
                  <div className="text-zinc-400">Wins</div>
                  <div className="font-medium">{driver.currentSeason.wins}</div>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
