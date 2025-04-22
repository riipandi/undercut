import type { SprintResult } from "@/lib/race-stats-data"
import { teamColors } from "@/lib/constants"

interface SprintResultsProps {
  sprintData: SprintResult[]
}

export default function SprintResults({ sprintData }: SprintResultsProps) {
  if (!sprintData || sprintData.length === 0) {
    return null
  }

  return (
    <div className="bg-zinc-800 rounded-lg overflow-hidden">
      <div className="p-4 bg-zinc-700">
        <h3 className="text-lg font-bold">Sprint Race Results</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-zinc-700/50 text-left">
              <th className="p-3 w-12">Pos</th>
              <th className="p-3">Driver</th>
              <th className="p-3">Team</th>
              <th className="p-3 text-right">Time</th>
              <th className="p-3 text-right">Gap</th>
              <th className="p-3 text-center">Laps</th>
              <th className="p-3 text-center">Points</th>
            </tr>
          </thead>
          <tbody>
            {sprintData.map((result, index) => {
              const teamColor = teamColors[result.team] || "border-gray-500"

              return (
                <tr key={index} className={`border-l-4 ${teamColor} hover:bg-zinc-700/30 transition-colors`}>
                  <td className="p-3 font-bold">{result.position}</td>
                  <td className="p-3 font-medium">{result.driver}</td>
                  <td className="p-3">{result.team}</td>
                  <td className="p-3 text-right font-mono">{result.time}</td>
                  <td className="p-3 text-right font-mono text-zinc-400">{result.gap || "-"}</td>
                  <td className="p-3 text-center">{result.laps}</td>
                  <td className="p-3 text-center font-bold">{result.points}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
