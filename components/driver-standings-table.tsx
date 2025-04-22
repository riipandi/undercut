"use client"

import { useState } from "react"
import Link from "next/link"
import { Trophy, ArrowUpDown, ChevronUp, ChevronDown } from "lucide-react"
import { getFullDriverStandings } from "@/lib/driver-standings"
import { teamColors } from "@/lib/constants"

export default function DriverStandingsTable() {
  const [sortColumn, setSortColumn] = useState<string>("position")
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc")

  const driverStandings = getFullDriverStandings()

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortColumn(column)
      setSortDirection("asc")
    }
  }

  const sortedStandings = [...driverStandings].sort((a, b) => {
    let aValue, bValue

    switch (sortColumn) {
      case "position":
        aValue = a.position
        bValue = b.position
        break
      case "name":
        aValue = a.driver.name
        bValue = b.driver.name
        break
      case "team":
        aValue = a.driver.team
        bValue = b.driver.team
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
        <h2 className="text-xl font-bold">2024 Driver Standings</h2>
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
                  <span>Driver</span>
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
                className="p-4 cursor-pointer hover:bg-zinc-700/80 transition-colors"
                onClick={() => handleSort("team")}
              >
                <div className="flex items-center gap-1">
                  <span>Team</span>
                  {sortColumn === "team" ? (
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
              const teamColor = teamColors[standing.driver.team] || "border-gray-500"

              return (
                <tr
                  key={standing.driver.id}
                  className={`border-l-4 ${teamColor} hover:bg-zinc-700/30 transition-colors`}
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
                    <Link
                      href={`/drivers/${standing.driver.id}`}
                      className="flex items-center gap-2 hover:text-red-500 transition-colors"
                    >
                      <span className="inline-block w-6 text-center font-mono bg-zinc-700 rounded">
                        {standing.driver.number}
                      </span>
                      <span className="font-medium">{standing.driver.name}</span>
                    </Link>
                  </td>
                  <td className="p-4">{standing.driver.team}</td>
                  <td className="p-4 text-right font-bold">{standing.points}</td>
                  <td className="p-4 text-right">{standing.wins}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <div className="p-4 bg-zinc-700/30 text-sm text-zinc-400">
        Points are awarded to the top 10 finishers in the order 25-18-15-12-10-8-6-4-2-1. One additional point is
        awarded to the driver who sets the fastest lap, provided they finish in the top 10.
      </div>
    </div>
  )
}
