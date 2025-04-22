"use client"

import { useState } from "react"
import { Calendar, Clock, MapPin, Trophy } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { races, pastRaces } from "@/lib/schedule-data"

export default function ScheduleTracker() {
  const [activeTab, setActiveTab] = useState("upcoming")

  return (
    <div className="bg-zinc-800 rounded-lg overflow-hidden">
      <div className="p-4 bg-zinc-700">
        <h2 className="text-xl font-bold">F1 Race Calendar</h2>
      </div>

      <Tabs defaultValue="upcoming" onValueChange={setActiveTab}>
        <div className="px-4 pt-4">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="upcoming">Upcoming Races</TabsTrigger>
            <TabsTrigger value="archive">Race Archive</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="upcoming" className="p-4">
          <div className="space-y-4">
            {races.map((race) => (
              <div key={race.id} className="bg-zinc-700/30 rounded-lg p-4 border-l-4 border-red-600">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-bold text-lg">{race.name}</h3>
                    <p className="text-zinc-400 text-sm">{race.circuit}</p>
                  </div>
                  <div className="bg-zinc-700 px-2 py-1 rounded text-xs">Round {race.round}</div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-zinc-400" />
                    <span>{race.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-zinc-400" />
                    <span>{race.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-zinc-400" />
                    <span>{race.location}</span>
                  </div>
                  {race.sprintRace && (
                    <div className="flex items-center gap-2 text-sm">
                      <Trophy className="h-4 w-4 text-yellow-500" />
                      <span className="text-yellow-500">Sprint Race</span>
                    </div>
                  )}
                </div>

                {race.daysUntil <= 7 && (
                  <div className="mt-3 bg-red-900/30 text-red-300 p-2 rounded text-sm">
                    {race.daysUntil === 0
                      ? "Race day today!"
                      : race.daysUntil === 1
                        ? "Race tomorrow!"
                        : `${race.daysUntil} days until race`}
                  </div>
                )}
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="archive" className="p-4">
          <div className="space-y-4">
            {pastRaces.map((race) => (
              <div key={race.id} className="bg-zinc-700/30 rounded-lg p-4 border-l-4 border-zinc-600">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-bold text-lg">{race.name}</h3>
                    <p className="text-zinc-400 text-sm">{race.circuit}</p>
                  </div>
                  <div className="bg-zinc-700 px-2 py-1 rounded text-xs">Round {race.round}</div>
                </div>

                <div className="flex items-center gap-2 text-sm mb-3">
                  <Calendar className="h-4 w-4 text-zinc-400" />
                  <span>{race.date}</span>
                </div>

                <div className="bg-zinc-800/50 rounded p-3">
                  <h4 className="text-sm font-medium mb-2">Podium Results</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="bg-yellow-500 text-black font-bold rounded-full w-5 h-5 flex items-center justify-center text-xs">
                        1
                      </div>
                      <span>{race.results[0].driver}</span>
                      <span className="text-zinc-400 text-xs ml-auto">{race.results[0].time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="bg-zinc-300 text-black font-bold rounded-full w-5 h-5 flex items-center justify-center text-xs">
                        2
                      </div>
                      <span>{race.results[1].driver}</span>
                      <span className="text-zinc-400 text-xs ml-auto">{race.results[1].time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="bg-amber-700 text-white font-bold rounded-full w-5 h-5 flex items-center justify-center text-xs">
                        3
                      </div>
                      <span>{race.results[2].driver}</span>
                      <span className="text-zinc-400 text-xs ml-auto">{race.results[2].time}</span>
                    </div>
                  </div>
                  <div className="mt-2 text-xs text-zinc-400">
                    Fastest Lap: {race.fastestLap.driver} ({race.fastestLap.time})
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
