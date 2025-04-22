"use client"

import { useEffect, useState } from "react"
import { Trophy, Flag, Clock, Activity, AlertCircle, Calendar, Users, MapPin } from "lucide-react"
import Link from "next/link"
import DriverStandings from "./driver-standings"
import RaceInfo from "./race-info"
import LapTimes from "./lap-times"
import CircuitInfo from "./circuit-info"
import type { Driver, RaceStatus } from "@/lib/types"
import { generateRaceData } from "@/lib/race-simulation"

export default function RaceTracker() {
  const [raceData, setRaceData] = useState<{
    drivers: Driver[]
    currentLap: number
    totalLaps: number
    raceStatus: RaceStatus
    fastestLap: { driver: string; time: string; lap: number } | null
    lastUpdate: Date
  }>({
    drivers: [],
    currentLap: 0,
    totalLaps: 58,
    raceStatus: "not_started",
    fastestLap: null,
    lastUpdate: new Date(),
  })

  useEffect(() => {
    // Initial race data
    const initialData = generateRaceData(0, "not_started")
    setRaceData(initialData)

    // Simulate race start after 5 seconds
    const startTimer = setTimeout(() => {
      const startData = generateRaceData(1, "racing")
      setRaceData(startData)

      // Start the race simulation
      const raceInterval = setInterval(() => {
        setRaceData((prev) => {
          // If race is finished, clear interval
          if (prev.currentLap >= prev.totalLaps) {
            clearInterval(raceInterval)
            return {
              ...prev,
              raceStatus: "finished",
              lastUpdate: new Date(),
            }
          }

          // Update race data
          return generateRaceData(prev.currentLap + 1, prev.raceStatus, prev.drivers, prev.fastestLap)
        })
      }, 5000) // Update every 5 seconds

      return () => {
        clearInterval(raceInterval)
        clearTimeout(startTimer)
      }
    }, 5000)

    return () => clearTimeout(startTimer)
  }, [])

  const getStatusColor = (status: RaceStatus) => {
    switch (status) {
      case "not_started":
        return "bg-yellow-500"
      case "racing":
        return "bg-green-500"
      case "yellow_flag":
        return "bg-yellow-500"
      case "red_flag":
        return "bg-red-500"
      case "safety_car":
        return "bg-orange-500"
      case "finished":
        return "bg-blue-500"
      default:
        return "bg-gray-500"
    }
  }

  const getStatusIcon = (status: RaceStatus) => {
    switch (status) {
      case "not_started":
        return <Clock className="h-5 w-5" />
      case "racing":
        return <Activity className="h-5 w-5" />
      case "yellow_flag":
      case "red_flag":
        return <Flag className="h-5 w-5" />
      case "safety_car":
        return <AlertCircle className="h-5 w-5" />
      case "finished":
        return <Trophy className="h-5 w-5" />
      default:
        return <Clock className="h-5 w-5" />
    }
  }

  const getStatusText = (status: RaceStatus) => {
    switch (status) {
      case "not_started":
        return "Race Not Started"
      case "racing":
        return "Racing"
      case "yellow_flag":
        return "Yellow Flag"
      case "red_flag":
        return "Red Flag"
      case "safety_car":
        return "Safety Car Deployed"
      case "finished":
        return "Race Finished"
      default:
        return "Unknown Status"
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-red-600 mb-2">F1 LIVE TRACKER</h1>
        <div className="flex items-center gap-2">
          <div className={`${getStatusColor(raceData.raceStatus)} h-3 w-3 rounded-full animate-pulse`}></div>
          <div className="flex items-center gap-1">
            {getStatusIcon(raceData.raceStatus)}
            <span className="font-medium">{getStatusText(raceData.raceStatus)}</span>
          </div>
          <span className="text-zinc-400 ml-4">
            Lap {raceData.currentLap}/{raceData.totalLaps}
          </span>
          <span className="text-zinc-400 ml-auto text-sm">
            Last updated: {raceData.lastUpdate.toLocaleTimeString()}
          </span>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <DriverStandings drivers={raceData.drivers} fastestLap={raceData.fastestLap} />

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/schedule"
              className="bg-zinc-800 hover:bg-zinc-700 transition-colors rounded-lg p-4 flex items-center gap-3"
            >
              <div className="bg-red-600/20 p-3 rounded-full">
                <Calendar className="h-6 w-6 text-red-500" />
              </div>
              <div>
                <h3 className="font-bold">Race Calendar</h3>
                <p className="text-sm text-zinc-400">View upcoming races</p>
              </div>
            </Link>

            <Link
              href="/drivers"
              className="bg-zinc-800 hover:bg-zinc-700 transition-colors rounded-lg p-4 flex items-center gap-3"
            >
              <div className="bg-blue-600/20 p-3 rounded-full">
                <Users className="h-6 w-6 text-blue-500" />
              </div>
              <div>
                <h3 className="font-bold">Driver Profiles</h3>
                <p className="text-sm text-zinc-400">Explore driver stats</p>
              </div>
            </Link>

            <Link
              href="/circuits"
              className="bg-zinc-800 hover:bg-zinc-700 transition-colors rounded-lg p-4 flex items-center gap-3"
            >
              <div className="bg-green-600/20 p-3 rounded-full">
                <MapPin className="h-6 w-6 text-green-500" />
              </div>
              <div>
                <h3 className="font-bold">Circuit Map</h3>
                <p className="text-sm text-zinc-400">Explore F1 tracks</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="space-y-6">
          <RaceInfo currentLap={raceData.currentLap} totalLaps={raceData.totalLaps} raceStatus={raceData.raceStatus} />
          <LapTimes drivers={raceData.drivers.slice(0, 5)} fastestLap={raceData.fastestLap} />
          <CircuitInfo />
        </div>
      </div>
    </div>
  )
}
