"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Calendar, ChevronRight } from "lucide-react"
import { getNextRace } from "@/lib/schedule-data"

export default function RaceCountdownBanner() {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [nextRace, setNextRace] = useState(getNextRace())

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const race = getNextRace()
      setNextRace(race)

      if (!race) return

      // Parse race date and time
      const [year, month, day] = race.fullDate.split("-").map(Number)
      const [hour, minute] = race.time.split(":").map(Number)

      const raceDate = new Date(year, month - 1, day, hour, minute)
      const now = new Date()

      const diff = raceDate.getTime() - now.getTime()

      if (diff <= 0) {
        setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((diff % (1000 * 60)) / 1000)

      setTimeRemaining({ days, hours, minutes, seconds })
    }

    calculateTimeRemaining()
    const interval = setInterval(calculateTimeRemaining, 1000)

    return () => clearInterval(interval)
  }, [])

  if (!nextRace) return null

  return (
    <div className="bg-zinc-800 border-b border-zinc-700">
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-2 md:mb-0">
            <div className="bg-red-600 text-white px-3 py-1 rounded text-sm font-bold mr-3">NEXT RACE</div>
            <h3 className="font-bold mr-2">{nextRace.name}</h3>
            <div className="text-zinc-400 flex items-center text-sm">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{nextRace.date}</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="grid grid-cols-4 gap-2 text-center">
              <div className="bg-zinc-700 px-2 py-1 rounded">
                <div className="text-xl font-bold">{timeRemaining.days}</div>
                <div className="text-xs text-zinc-400">DAYS</div>
              </div>
              <div className="bg-zinc-700 px-2 py-1 rounded">
                <div className="text-xl font-bold">{timeRemaining.hours}</div>
                <div className="text-xs text-zinc-400">HRS</div>
              </div>
              <div className="bg-zinc-700 px-2 py-1 rounded">
                <div className="text-xl font-bold">{timeRemaining.minutes}</div>
                <div className="text-xs text-zinc-400">MINS</div>
              </div>
              <div className="bg-zinc-700 px-2 py-1 rounded">
                <div className="text-xl font-bold">{timeRemaining.seconds}</div>
                <div className="text-xs text-zinc-400">SECS</div>
              </div>
            </div>

            <Link
              href={`/circuits/${nextRace.circuitId}`}
              className="bg-red-600 hover:bg-red-700 transition-colors text-white px-3 py-2 rounded text-sm font-bold flex items-center"
            >
              View Circuit
              <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
