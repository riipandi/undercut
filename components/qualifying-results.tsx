import type { QualifyingResult } from "@/lib/race-stats-data"
import { teamColors } from "@/lib/constants"

interface QualifyingResultsProps {
  qualifyingData: QualifyingResult[]
}

export default function QualifyingResults({ qualifyingData }: QualifyingResultsProps) {
  if (!qualifyingData || qualifyingData.length === 0) {
    return (
      <div className="bg-zinc-800 rounded-lg p-4">
        <h3 className="text-lg font-bold mb-2">Qualifying</h3>
        <p className="text-zinc-400">No data available for qualifying.</p>
      </div>
    )
  }

  return (
    <div className="bg-zinc-800 rounded-lg overflow-hidden">
      <div className="p-4 bg-zinc-700">
        <h3 className="text-lg font-bold">Qualifying Results</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-zinc-700/50 text-left">
              <th className="p-3 w-12">Pos</th>
              <th className="p-3">Driver</th>
              <th className="p-3">Team</th>
              <th className="p-3 text-right">Q1</th>
              <th className="p-3 text-right">Q2</th>
              <th className="p-3 text-right">Q3</th>
              <th className="p-3 text-right">Gap</th>
            </tr>
          </thead>
          <tbody>
            {qualifyingData.map((result, index) => {
              const teamColor = teamColors[result.team] || "border-gray-500"

              return (
                <tr key={index} className={`border-l-4 ${teamColor} hover:bg-zinc-700/30 transition-colors`}>
                  <td className="p-3 font-bold">{result.position}</td>
                  <td className="p-3 font-medium">{result.driver}</td>
                  <td className="p-3">{result.team}</td>
                  <td className="p-3 text-right font-mono">{result.q1 || "-"}</td>
                  <td className="p-3 text-right font-mono">{result.q2 || "-"}</td>
                  <td className="p-3 text-right font-mono">{result.q3 || "-"}</td>
                  <td className="p-3 text-right font-mono text-zinc-400">{result.gap || "-"}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
