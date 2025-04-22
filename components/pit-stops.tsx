import type { RaceStats } from "@/lib/race-stats-data"
import { Timer } from "lucide-react"

interface PitStopsProps {
  pitStops: RaceStats["pitStops"]
}

export default function PitStops({ pitStops }: PitStopsProps) {
  if (!pitStops || pitStops.length === 0) {
    return null
  }

  return (
    <div className="bg-zinc-800 rounded-lg overflow-hidden">
      <div className="p-4 bg-zinc-700 flex items-center gap-2">
        <Timer className="h-5 w-5" />
        <h3 className="text-lg font-bold">Pit Stops</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-zinc-700/50 text-left">
              <th className="p-3">Driver</th>
              <th className="p-3 text-center">Lap</th>
              <th className="p-3 text-right">Time</th>
              <th className="p-3 text-right">Duration</th>
              <th className="p-3 text-center">Total Stops</th>
            </tr>
          </thead>
          <tbody>
            {pitStops.map((stop, index) => (
              <tr key={index} className="hover:bg-zinc-700/30 transition-colors">
                <td className="p-3 font-medium">{stop.driver}</td>
                <td className="p-3 text-center">{stop.lap}</td>
                <td className="p-3 text-right">{stop.time}</td>
                <td className="p-3 text-right font-mono">{stop.duration}</td>
                <td className="p-3 text-center">{stop.totalStops}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
