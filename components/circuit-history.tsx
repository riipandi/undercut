import { Trophy } from "lucide-react"
import type { Circuit } from "@/lib/circuits-data"

interface CircuitHistoryProps {
  circuit: Circuit
}

export default function CircuitHistory({ circuit }: CircuitHistoryProps) {
  if (!circuit.history || circuit.history.length === 0) {
    return null
  }

  return (
    <div className="bg-zinc-800 rounded-lg overflow-hidden">
      <div className="p-4 bg-zinc-700">
        <h2 className="text-xl font-bold">Circuit History</h2>
      </div>
      <div className="p-4">
        <div className="space-y-4">
          {circuit.history.map((result) => (
            <div key={result.year} className="bg-zinc-700/30 p-3 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <div className="font-bold text-lg">{result.year}</div>
                <div className="flex items-center gap-2">
                  <Trophy className="h-4 w-4 text-yellow-500" />
                  <span className="font-medium">{result.winner}</span>
                </div>
              </div>
              <div className="flex justify-between text-sm text-zinc-400">
                <div>{result.team}</div>
                <div>
                  {result.laps} laps • {result.time}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
