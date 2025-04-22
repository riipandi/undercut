import Link from "next/link"
import { ChevronLeft, Trophy, Flag, Clock } from "lucide-react"
import { getDriverById } from "@/lib/drivers-data"
import { notFound } from "next/navigation"
import { teamColors } from "@/lib/constants"

export default function DriverProfile({ params }: { params: { id: string } }) {
  const driver = getDriverById(params.id)

  if (!driver) {
    notFound()
  }

  const teamColor = teamColors[driver.team] || "border-gray-500"
  const teamColorClass = teamColor.replace("border-", "bg-")

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/drivers" className="flex items-center gap-1 text-zinc-400 hover:text-white mb-6">
        <ChevronLeft className="h-4 w-4" />
        <span>Back to Drivers</span>
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <div className={`bg-zinc-800 rounded-lg overflow-hidden border-t-8 ${teamColor}`}>
            <div className="p-6 text-center">
              <div className="w-32 h-32 rounded-full bg-zinc-700 mx-auto mb-4 flex items-center justify-center overflow-hidden">
                <img
                  src="/placeholder.svg?height=128&width=128"
                  alt={driver.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <h1 className="text-2xl font-bold mb-1">{driver.name}</h1>
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className={`w-3 h-3 rounded-full ${teamColorClass}`}></div>
                <span className="text-zinc-300">{driver.team}</span>
              </div>

              <div className="inline-block bg-zinc-700 px-3 py-1 rounded-full text-2xl font-bold">{driver.number}</div>
            </div>

            <div className="bg-zinc-700/50 p-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-zinc-400 text-sm">Nationality</div>
                  <div>{driver.nationality}</div>
                </div>
                <div className="text-center">
                  <div className="text-zinc-400 text-sm">Age</div>
                  <div>{driver.age}</div>
                </div>
              </div>
            </div>

            <div className="p-4">
              <h2 className="font-bold mb-2">Career Statistics</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-zinc-400">Championships</span>
                  <span>{driver.stats.championships}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Race Wins</span>
                  <span>{driver.stats.wins}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Podiums</span>
                  <span>{driver.stats.podiums}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Pole Positions</span>
                  <span>{driver.stats.poles}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Fastest Laps</span>
                  <span>{driver.stats.fastestLaps}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-2 space-y-6">
          <div className="bg-zinc-800 rounded-lg overflow-hidden">
            <div className="p-4 bg-zinc-700">
              <h2 className="text-xl font-bold">Driver Profile</h2>
            </div>
            <div className="p-4">
              <p className="mb-4">{driver.bio}</p>

              <h3 className="font-bold mb-2">Career Highlights</h3>
              <ul className="space-y-2">
                {driver.careerHighlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Trophy className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-zinc-800 rounded-lg overflow-hidden">
            <div className="p-4 bg-zinc-700">
              <h2 className="text-xl font-bold">Current Season</h2>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="bg-zinc-700/30 p-3 rounded-lg text-center">
                  <div className="text-3xl font-bold mb-1">{driver.currentSeason.position}</div>
                  <div className="text-zinc-400 text-sm">Championship Position</div>
                </div>
                <div className="bg-zinc-700/30 p-3 rounded-lg text-center">
                  <div className="text-3xl font-bold mb-1">{driver.currentSeason.points}</div>
                  <div className="text-zinc-400 text-sm">Points</div>
                </div>
                <div className="bg-zinc-700/30 p-3 rounded-lg text-center">
                  <div className="text-3xl font-bold mb-1">{driver.currentSeason.bestResult}</div>
                  <div className="text-zinc-400 text-sm">Best Result</div>
                </div>
              </div>

              <h3 className="font-bold mb-3">Recent Results</h3>
              <div className="space-y-3">
                {driver.currentSeason.recentResults.map((result, index) => (
                  <div key={index} className="bg-zinc-700/20 p-3 rounded-lg">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium">{result.race}</span>
                      <div
                        className={`px-2 py-0.5 rounded text-sm ${
                          result.position <= 3
                            ? "bg-yellow-500/20 text-yellow-300"
                            : result.position <= 10
                              ? "bg-green-500/20 text-green-300"
                              : "bg-zinc-500/20 text-zinc-300"
                        }`}
                      >
                        P{result.position}
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-zinc-400">
                      <Flag className="h-3 w-3 mr-1" />
                      <span>{result.grid > 0 ? `Started P${result.grid}` : "DNQ"}</span>
                      {result.fastestLap && (
                        <span className="ml-auto flex items-center text-purple-400">
                          <Clock className="h-3 w-3 mr-1" />
                          Fastest Lap
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
