"use client"

import { useState, useEffect } from "react"
import { Clock, BarChart2, Zap, ChevronDown, ChevronUp } from "lucide-react"
import { teamColors } from "@/lib/constants"
import { getDriversWithLapTimes, getLapTimesByDriver } from "@/lib/db/actions"
import type { LapTime } from "@/lib/db/schema"

interface LiveTimingComparisonProps {
  raceId: number
}

export default function LiveTimingComparison({ raceId }: LiveTimingComparisonProps) {
  const [selectedDrivers, setSelectedDrivers] = useState<string[]>([])
  const [availableDrivers, setAvailableDrivers] = useState<string[]>([])
  const [lapTimes, setLapTimes] = useState<Record<string, LapTime[]>>({})
  const [isLoading, setIsLoading] = useState(true)
  const [currentLap, setCurrentLap] = useState(1)
  const [maxLap, setMaxLap] = useState(1)
  const [isDriverSelectorOpen, setIsDriverSelectorOpen] = useState(false)

  // Fetch available drivers
  useEffect(() => {
    async function fetchDrivers() {
      try {
        const drivers = await getDriversWithLapTimes(raceId)
        setAvailableDrivers(drivers)

        // Auto-select first two drivers if available
        if (drivers.length >= 2) {
          setSelectedDrivers([drivers[0], drivers[1]])
        } else if (drivers.length === 1) {
          setSelectedDrivers([drivers[0]])
        }
      } catch (error) {
        console.error("Error fetching drivers:", error)
      }
    }

    fetchDrivers()
  }, [raceId])

  // Fetch lap times for selected drivers
  useEffect(() => {
    async function fetchLapTimes() {
      setIsLoading(true)

      try {
        const lapTimesData: Record<string, LapTime[]> = {}
        let maxLapFound = 1

        for (const driverId of selectedDrivers) {
          const driverLapTimes = await getLapTimesByDriver(raceId, driverId)
          lapTimesData[driverId] = driverLapTimes

          // Find the maximum lap number
          const driverMaxLap = Math.max(...driverLapTimes.map((lt) => lt.lap), 0)
          maxLapFound = Math.max(maxLapFound, driverMaxLap)
        }

        setLapTimes(lapTimesData)
        setMaxLap(maxLapFound)
        setCurrentLap(maxLapFound) // Set to the latest lap
      } catch (error) {
        console.error("Error fetching lap times:", error)
      } finally {
        setIsLoading(false)
      }
    }

    if (selectedDrivers.length > 0) {
      fetchLapTimes()
    }
  }, [raceId, selectedDrivers])

  // Toggle driver selection
  const toggleDriverSelection = (driverId: string) => {
    if (selectedDrivers.includes(driverId)) {
      setSelectedDrivers(selectedDrivers.filter((id) => id !== driverId))
    } else {
      setSelectedDrivers([...selectedDrivers, driverId])
    }
  }

  // Get lap time for a specific driver and lap
  const getLapTime = (driverId: string, lap: number): LapTime | undefined => {
    return lapTimes[driverId]?.find((lt) => lt.lap === lap)
  }

  // Calculate time difference between drivers
  const getTimeDifference = (driverId: string, referenceLapTime: LapTime): string => {
    const driverLapTime = getLapTime(driverId, referenceLapTime.lap)

    if (!driverLapTime) return "-"

    // Convert lap times to milliseconds for comparison
    const referenceTimeMs = convertLapTimeToMs(referenceLapTime.time)
    const driverTimeMs = convertLapTimeToMs(driverLapTime.time)

    const diffMs = driverTimeMs - referenceTimeMs

    if (diffMs === 0) return "+0.000"

    const sign = diffMs > 0 ? "+" : "-"
    const absDiffMs = Math.abs(diffMs)

    // Format to seconds.milliseconds
    const seconds = Math.floor(absDiffMs / 1000)
    const milliseconds = absDiffMs % 1000

    return `${sign}${seconds}.${milliseconds.toString().padStart(3, "0")}`
  }

  // Convert lap time string (mm:ss.sss) to milliseconds
  const convertLapTimeToMs = (lapTime: string): number => {
    const parts = lapTime.split(":")
    const seconds =
      parts.length > 1 ? Number.parseInt(parts[0]) * 60 + Number.parseFloat(parts[1]) : Number.parseFloat(parts[0])

    return seconds * 1000
  }

  // Find the fastest lap time for the current lap
  const getFastestLapTime = (): LapTime | null => {
    let fastest: LapTime | null = null
    let fastestTimeMs = Number.MAX_SAFE_INTEGER

    for (const driverId of selectedDrivers) {
      const lapTime = getLapTime(driverId, currentLap)

      if (lapTime) {
        const timeMs = convertLapTimeToMs(lapTime.time)

        if (timeMs < fastestTimeMs) {
          fastestTimeMs = timeMs
          fastest = lapTime
        }
      }
    }

    return fastest
  }

  const fastestLapTime = getFastestLapTime()

  // Navigate through laps
  const goToPreviousLap = () => {
    if (currentLap > 1) {
      setCurrentLap(currentLap - 1)
    }
  }

  const goToNextLap = () => {
    if (currentLap < maxLap) {
      setCurrentLap(currentLap + 1)
    }
  }

  if (isLoading) {
    return (
      <div className="bg-zinc-800 rounded-lg p-6">
        <div className="flex items-center gap-2 mb-4">
          <Clock className="h-5 w-5" />
          <h2 className="text-xl font-bold">Live Timing Comparison</h2>
        </div>
        <div className="flex justify-center items-center h-40">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-red-600"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-zinc-800 rounded-lg overflow-hidden">
      <div className="p-4 bg-zinc-700 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Clock className="h-5 w-5" />
          <h2 className="text-xl font-bold">Live Timing Comparison</h2>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsDriverSelectorOpen(!isDriverSelectorOpen)}
            className="bg-zinc-600 hover:bg-zinc-500 transition-colors rounded px-3 py-1 text-sm flex items-center gap-1"
          >
            Select Drivers
            {isDriverSelectorOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {isDriverSelectorOpen && (
        <div className="p-4 bg-zinc-700/50 border-b border-zinc-600">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
            {availableDrivers.map((driverId) => (
              <button
                key={driverId}
                onClick={() => toggleDriverSelection(driverId)}
                className={`px-3 py-2 rounded text-sm ${
                  selectedDrivers.includes(driverId) ? "bg-red-600 hover:bg-red-700" : "bg-zinc-600 hover:bg-zinc-500"
                } transition-colors`}
              >
                {driverId}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="p-4">
        {selectedDrivers.length === 0 ? (
          <div className="text-center py-8 text-zinc-400">
            <BarChart2 className="h-12 w-12 mx-auto mb-2 opacity-50" />
            <p>Select drivers to compare lap times</p>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <button
                  onClick={goToPreviousLap}
                  disabled={currentLap <= 1}
                  className="bg-zinc-700 hover:bg-zinc-600 disabled:opacity-50 transition-colors rounded p-1"
                >
                  <ChevronDown className="h-5 w-5" />
                </button>
                <span className="font-mono bg-zinc-700 px-3 py-1 rounded">Lap {currentLap}</span>
                <button
                  onClick={goToNextLap}
                  disabled={currentLap >= maxLap}
                  className="bg-zinc-700 hover:bg-zinc-600 disabled:opacity-50 transition-colors rounded p-1"
                >
                  <ChevronUp className="h-5 w-5" />
                </button>
              </div>
              <div className="text-sm text-zinc-400">{maxLap} laps total</div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-zinc-700/50 text-left">
                    <th className="p-3">Driver</th>
                    <th className="p-3 text-right">Lap Time</th>
                    <th className="p-3 text-right">Gap</th>
                    <th className="p-3 text-right">S1</th>
                    <th className="p-3 text-right">S2</th>
                    <th className="p-3 text-right">S3</th>
                    <th className="p-3 text-right">Speed Trap</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedDrivers.map((driverId) => {
                    const lapTime = getLapTime(driverId, currentLap)
                    const isFastest = fastestLapTime && lapTime && lapTime.driver_id === fastestLapTime.driver_id
                    const teamColor = teamColors[driverId.split("-")[0]] || "border-gray-500"

                    return (
                      <tr
                        key={driverId}
                        className={`border-l-4 ${teamColor} ${isFastest ? "bg-purple-900/20" : "hover:bg-zinc-700/30"} transition-colors`}
                      >
                        <td className="p-3 font-medium">{driverId}</td>
                        <td className={`p-3 text-right font-mono ${isFastest ? "text-purple-400 font-bold" : ""}`}>
                          {lapTime ? lapTime.time : "-"}
                        </td>
                        <td className="p-3 text-right font-mono text-zinc-400">
                          {fastestLapTime && lapTime
                            ? fastestLapTime.driver_id === driverId
                              ? "Fastest"
                              : getTimeDifference(driverId, fastestLapTime)
                            : "-"}
                        </td>
                        <td className="p-3 text-right font-mono">{lapTime ? lapTime.sector_1 : "-"}</td>
                        <td className="p-3 text-right font-mono">{lapTime ? lapTime.sector_2 : "-"}</td>
                        <td className="p-3 text-right font-mono">{lapTime ? lapTime.sector_3 : "-"}</td>
                        <td className="p-3 text-right font-mono">
                          {lapTime ? (
                            <div className="flex items-center justify-end gap-1">
                              <Zap className="h-3 w-3 text-yellow-500" />
                              <span>{lapTime.speed_trap} km/h</span>
                            </div>
                          ) : (
                            "-"
                          )}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
