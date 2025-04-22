import Link from "next/link"
import { ChevronLeft, Calendar, MapPin, Trophy, Clock, Activity } from "lucide-react"
import { notFound } from "next/navigation"
import { races, pastRaces } from "@/lib/schedule-data"
import { getRaceStats } from "@/lib/race-stats-data"
import PracticeSessionResults from "@/components/practice-session-results"
import QualifyingResults from "@/components/qualifying-results"
import SprintResults from "@/components/sprint-results"
import FastestLaps from "@/components/fastest-laps"
import PitStops from "@/components/pit-stops"
import TeamRadio from "@/components/team-radio"
import LiveTimingComparison from "@/components/live-timing-comparison"
import VideoGallery from "@/components/video-gallery"
import { getVideosByRace } from "@/lib/db/actions"

export default async function RacePage({ params }: { params: { id: string } }) {
  const raceId = Number.parseInt(params.id)

  // Find race in either upcoming or past races
  const race = [...races, ...pastRaces].find((r) => r.id === raceId)

  if (!race) {
    notFound()
  }

  const raceStats = getRaceStats(raceId)
  const isPastRace = "results" in race

  // Get race videos
  const raceVideos = await getVideosByRace(raceId)

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/schedule" className="flex items-center gap-1 text-zinc-400 hover:text-white mb-6">
        <ChevronLeft className="h-4 w-4" />
        <span>Back to Schedule</span>
      </Link>

      <div className="bg-zinc-800 rounded-lg overflow-hidden mb-6">
        <div className="bg-zinc-700 p-6">
          <h1 className="text-3xl font-bold mb-2">{race.name}</h1>
          <div className="flex flex-wrap gap-4 text-zinc-300">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4 text-zinc-400" />
              <span>{race.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4 text-zinc-400" />
              <span>{race.time} GMT</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4 text-zinc-400" />
              <span>
                {race.location} ({race.circuit})
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Trophy className="h-4 w-4 text-zinc-400" />
              <span>Round {race.round}</span>
            </div>
            {race.sprintRace && (
              <div className="flex items-center gap-1">
                <Activity className="h-4 w-4 text-yellow-400" />
                <span className="text-yellow-400">Sprint Race</span>
              </div>
            )}
          </div>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <h2 className="text-xl font-bold mb-3">Race Weekend Schedule</h2>
              <div className="space-y-2">
                {race.practice1Date && (
                  <div className="flex justify-between items-center bg-zinc-700/30 p-2 rounded">
                    <span className="text-sm">Practice 1</span>
                    <div className="text-sm text-zinc-400">
                      {new Date(race.practice1Date).toLocaleDateString("en-US", {
                        weekday: "short",
                        month: "short",
                        day: "numeric",
                      })}{" "}
                      - {race.practice1Time} GMT
                    </div>
                  </div>
                )}

                {race.practice2Date && (
                  <div className="flex justify-between items-center bg-zinc-700/30 p-2 rounded">
                    <span className="text-sm">Practice 2</span>
                    <div className="text-sm text-zinc-400">
                      {new Date(race.practice2Date).toLocaleDateString("en-US", {
                        weekday: "short",
                        month: "short",
                        day: "numeric",
                      })}{" "}
                      - {race.practice2Time} GMT
                    </div>
                  </div>
                )}

                {race.practice3Date && (
                  <div className="flex justify-between items-center bg-zinc-700/30 p-2 rounded">
                    <span className="text-sm">Practice 3</span>
                    <div className="text-sm text-zinc-400">
                      {new Date(race.practice3Date).toLocaleDateString("en-US", {
                        weekday: "short",
                        month: "short",
                        day: "numeric",
                      })}{" "}
                      - {race.practice3Time} GMT
                    </div>
                  </div>
                )}

                {race.qualifyingDate && (
                  <div className="flex justify-between items-center bg-zinc-700/30 p-2 rounded">
                    <span className="text-sm font-medium">Qualifying</span>
                    <div className="text-sm text-zinc-400">
                      {new Date(race.qualifyingDate).toLocaleDateString("en-US", {
                        weekday: "short",
                        month: "short",
                        day: "numeric",
                      })}{" "}
                      - {race.qualifyingTime} GMT
                    </div>
                  </div>
                )}

                {race.sprintDate && (
                  <div className="flex justify-between items-center bg-yellow-900/30 p-2 rounded">
                    <span className="text-sm font-medium text-yellow-400">Sprint Race</span>
                    <div className="text-sm text-zinc-400">
                      {new Date(race.sprintDate).toLocaleDateString("en-US", {
                        weekday: "short",
                        month: "short",
                        day: "numeric",
                      })}{" "}
                      - {race.sprintTime} GMT
                    </div>
                  </div>
                )}

                <div className="flex justify-between items-center bg-red-900/30 p-2 rounded">
                  <span className="text-sm font-medium text-red-400">Race</span>
                  <div className="text-sm text-zinc-400">
                    {new Date(race.fullDate).toLocaleDateString("en-US", {
                      weekday: "short",
                      month: "short",
                      day: "numeric",
                    })}{" "}
                    - {race.time} GMT
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3">Circuit Information</h2>
              <Link
                href={`/circuits/${race.circuitId}`}
                className="block bg-zinc-700/30 p-4 rounded hover:bg-zinc-700/50 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">{race.circuit}</span>
                  <MapPin className="h-4 w-4 text-zinc-400" />
                </div>
                <div className="text-sm text-zinc-400 mb-2">{race.location}</div>
                <div className="text-xs bg-zinc-700 inline-block px-2 py-0.5 rounded">View Circuit Details</div>
              </Link>
            </div>
          </div>

          {isPastRace && (
            <div className="mb-6">
              <h2 className="text-xl font-bold mb-3">Race Results</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-zinc-700/50 text-left">
                      <th className="p-3 w-12">Pos</th>
                      <th className="p-3">Driver</th>
                      <th className="p-3">Team</th>
                      <th className="p-3 text-right">Time</th>
                      <th className="p-3 text-right">Points</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(race as any).results.map((result: any, index: number) => (
                      <tr key={index} className="hover:bg-zinc-700/30 transition-colors">
                        <td className="p-3 font-bold">
                          {result.position === 1 && (
                            <span className="inline-block bg-yellow-500 text-black w-6 h-6 rounded-full text-center mr-2">
                              {result.position}
                            </span>
                          )}
                          {result.position === 2 && (
                            <span className="inline-block bg-zinc-300 text-black w-6 h-6 rounded-full text-center mr-2">
                              {result.position}
                            </span>
                          )}
                          {result.position === 3 && (
                            <span className="inline-block bg-amber-700 text-white w-6 h-6 rounded-full text-center mr-2">
                              {result.position}
                            </span>
                          )}
                          {result.position > 3 && (
                            <span className="inline-block bg-zinc-700 w-6 h-6 rounded-full text-center mr-2">
                              {result.position}
                            </span>
                          )}
                        </td>
                        <td className="p-3 font-medium">{result.driver}</td>
                        <td className="p-3">{result.team}</td>
                        <td className="p-3 text-right font-mono">{result.time}</td>
                        <td className="p-3 text-right">{result.points}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Live Timing Comparison */}
      <div className="mb-6">
        <LiveTimingComparison raceId={raceId} />
      </div>

      {/* Race Videos */}
      {raceVideos.length > 0 && (
        <div className="mb-6">
          <VideoGallery initialVideos={raceVideos} title="Race Videos" showFilters={false} />
        </div>
      )}

      {raceStats && (
        <div className="space-y-6">
          {/* Practice Sessions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {raceStats.practice1 && (
              <PracticeSessionResults sessionData={raceStats.practice1} sessionName="Practice 1" />
            )}
            {raceStats.practice2 && (
              <PracticeSessionResults sessionData={raceStats.practice2} sessionName="Practice 2" />
            )}
            {raceStats.practice3 && (
              <PracticeSessionResults sessionData={raceStats.practice3} sessionName="Practice 3" />
            )}
          </div>

          {/* Qualifying */}
          {raceStats.qualifying && <QualifyingResults qualifyingData={raceStats.qualifying} />}

          {/* Sprint Race */}
          {raceStats.sprint && <SprintResults sprintData={raceStats.sprint} />}

          {/* Race Stats */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {raceStats.fastestLaps && <FastestLaps fastestLaps={raceStats.fastestLaps} />}
            {raceStats.pitStops && <PitStops pitStops={raceStats.pitStops} />}
          </div>

          {/* Team Radio */}
          <TeamRadio raceId={raceId} />
        </div>
      )}
    </div>
  )
}
