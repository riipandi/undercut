"use client"

import { useState } from "react"
import { Calendar, Clock, MapPin, Flag, ChevronDown, ChevronUp } from "lucide-react"
import { races } from "@/lib/schedule-data"
import Link from "next/link"

export default function DetailedSchedule() {
  const [expandedRace, setExpandedRace] = useState<number | null>(null)

  const toggleRaceDetails = (raceId: number) => {
    if (expandedRace === raceId) {
      setExpandedRace(null)
    } else {
      setExpandedRace(raceId)
    }
  }

  return (
    <div className="bg-zinc-800 rounded-lg overflow-hidden">
      <div className="p-4 bg-zinc-700">
        <h2 className="text-xl font-bold">2024 F1 Race Calendar</h2>
      </div>
      <div className="p-4">
        <div className="space-y-4">
          {races.map((race) => {
            const isExpanded = expandedRace === race.id
            const isPast = race.isPast

            return (
              <div
                key={race.id}
                className={`bg-zinc-700/30 rounded-lg overflow-hidden border-l-4 ${
                  isPast ? "border-zinc-600" : "border-red-600"
                }`}
              >
                <div
                  className="p-4 cursor-pointer hover:bg-zinc-700/50 transition-colors"
                  onClick={() => toggleRaceDetails(race.id)}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold text-lg">{race.name}</h3>
                        {race.sprintRace && (
                          <span className="bg-yellow-600 text-white text-xs px-2 py-0.5 rounded">SPRINT</span>
                        )}
                        {isPast && (
                          <span className="bg-zinc-600 text-white text-xs px-2 py-0.5 rounded">COMPLETED</span>
                        )}
                      </div>
                      <p className="text-zinc-400 text-sm">{race.circuit}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="bg-zinc-700 px-2 py-1 rounded text-xs">Round {race.round}</div>
                      {isExpanded ? (
                        <ChevronUp className="h-5 w-5 text-zinc-400" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-zinc-400" />
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 text-zinc-400" />
                      <span>{race.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-zinc-400" />
                      <span>{race.time} GMT</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-zinc-400" />
                      <span>{race.location}</span>
                    </div>
                  </div>

                  {!isPast && race.daysUntil <= 7 && (
                    <div className="mt-3 bg-red-900/30 text-red-300 p-2 rounded text-sm">
                      {race.daysUntil === 0
                        ? "Race day today!"
                        : race.daysUntil === 1
                          ? "Race tomorrow!"
                          : `${race.daysUntil} days until race`}
                    </div>
                  )}
                </div>

                {isExpanded && (
                  <div className="bg-zinc-800/50 p-4 border-t border-zinc-700/50">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium mb-3 flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-zinc-400" />
                          Race Weekend Schedule
                        </h4>
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
                        <h4 className="font-medium mb-3 flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-zinc-400" />
                          Circuit Information
                        </h4>

                        <Link
                          href={`/circuits/${race.circuitId}`}
                          className="block bg-zinc-700/30 p-3 rounded hover:bg-zinc-700/50 transition-colors"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-medium">{race.circuit}</span>
                            <Flag className="h-4 w-4 text-zinc-400" />
                          </div>
                          <div className="text-sm text-zinc-400 mb-2">{race.location}</div>
                          <div className="text-xs bg-zinc-700 inline-block px-2 py-0.5 rounded">
                            View Circuit Details
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
