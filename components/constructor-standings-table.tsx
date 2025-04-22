"use client"

import { useState } from "react"
import { Trophy, ArrowUpDown, ChevronUp, ChevronDown } from "lucide-react"
import { getConstructorStandings } from "@/lib/constructors-data"

export default function ConstructorStandingsTable() {
  const [sortColumn, setSortColumn] = useState<string>("position")
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc")

  const constructorStandings = getConstructorStandings()

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortColumn(column)
      setSortDirection("asc")
    }
  }

  const sortedStandings = [...constructorStandings].sort((a, b) => {
    let aValue, bValue

    switch (sortColumn) {
      case "position":
        aValue = a.position
        bValue = b.position
        break
      case "name":
        aValue = a.constructor.name
        bValue = b.constructor.name
        break
      case "points":
        aValue = a.points
        bValue = b.points
        break
      case "wins":
        aValue = a.wins
        bValue = b.wins
        break
      default:
        aValue = a.position
        bValue = b.position
    }

    if (typeof aValue === "string" && typeof bValue === "string") {
      return sortDirection === "asc" ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue)
    }

    return sortDirection === "asc" ? (aValue as number) - (bValue as number) : (bValue as number) - (aValue as number)
  })

  return (
    <div className="bg-zinc-800 rounded-lg overflow-hidden">
      <div className="p-4 bg-zinc-700 flex items-center gap-2">
        <Trophy className="h-5 w-5" />
        <h2 className="text-xl font-bold">2024 Constructor Standings</h2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-zinc-700/50 text-left">
              <th
                className="p-4 cursor-pointer hover:bg-zinc-700/80 transition-colors"
                onClick={() => handleSort("position")}
              >
                <div className="flex items-center gap-1">
                  <span>Pos</span>
                  {sortColumn === "position" ? (
                    sortDirection === "asc" ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )
                  ) : (
                    <ArrowUpDown className="h-4 w-4 opacity-50" />
                  )}
                </div>
              </th>
              <th
                className="p-4 cursor-pointer hover:bg-zinc-700/80 transition-colors"
                onClick={() => handleSort("name")}
              >
                <div className="flex items-center gap-1">
                  <span>Team</span>
                  {sortColumn === "name" ? (
                    sortDirection === "asc" ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )
                  ) : (
                    <ArrowUpDown className="h-4 w-4 opacity-50" />
                  )}
                </div>
              </th>
              <th
                className="p-4 text-right cursor-pointer hover:bg-zinc-700/80 transition-colors"
                onClick={() => handleSort("points")}
              >
                <div className="flex items-center justify-end gap-1">
                  <span>Points</span>
                  {sortColumn === "points" ? (
                    sortDirection === "asc" ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )
                  ) : (
                    <ArrowUpDown className="h-4 w-4 opacity-50" />
                  )}
                </div>
              </th>
              <th
                className="p-4 text-right cursor-pointer hover:bg-zinc-700/80 transition-colors"
                onClick={() => handleSort("wins")}
              >
                <div className="flex items-center justify-end gap-1">
                  <span>Wins</span>
                  {sortColumn === "wins" ? (
                    sortDirection === "asc" ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )
                  ) : (
                    <ArrowUpDown className="h-4 w-4 opacity-50" />
                  )}
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedStandings.map((standing) => {
              return (
                <tr
                  key={standing.constructor.id}
                  className={`border-l-4 hover:bg-zinc-700/30 transition-colors`}
                  style={{ borderColor: standing.constructor.color }}
                >
                  <td className="p-4 font-bold">
                    {standing.position === 1 && (
                      <span className="inline-block bg-yellow-500 text-black w-6 h-6 rounded-full text-center mr-2">
                        {standing.position}
                      </span>
                    )}
                    {standing.position === 2 && (
                      <span className="inline-block bg-zinc-300 text-black w-6 h-6 rounded-full text-center mr-2">
                        {standing.position}
                      </span>
                    )}
                    {standing.position === 3 && (
                      <span className="inline-block bg-amber-700 text-white w-6 h-6 rounded-full text-center mr-2">
                        {standing.position}
                      </span>
                    )}
                    {standing.position > 3 && (
                      <span className="inline-block bg-zinc-700 w-6 h-6 rounded-full text-center mr-2">
                        {standing.position}
                      </span>
                    )}
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-sm" style={{ backgroundColor: standing.constructor.color }}></div>
                      <span className="font-medium">{standing.constructor.fullName}</span>
                    </div>
                  </td>
                  <td className="p-4 text-right font-bold">{standing.points}</td>
                  <td className="p-4 text-right">{standing.wins}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <div className="p-4 bg-zinc-700/30 text-sm text-zinc-400">
        Constructor points are the sum of points scored by a team's drivers in each race.
      </div>
    </div>
  )
}
