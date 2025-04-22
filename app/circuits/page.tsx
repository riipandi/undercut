import CircuitsMap from "@/components/circuits-map"
import CircuitsList from "@/components/circuits-list"
import Link from "next/link"
import { BarChart3 } from "lucide-react"

export default function CircuitsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-red-600 mb-2">F1 CIRCUITS</h1>
        <p className="text-zinc-400">Explore Formula 1 race tracks around the world</p>
      </header>

      <div className="mb-6 flex justify-end">
        <Link
          href="/circuits/compare"
          className="bg-zinc-800 hover:bg-zinc-700 transition-colors rounded-lg px-4 py-2 flex items-center gap-2"
        >
          <BarChart3 className="h-4 w-4" />
          <span>Compare Circuits</span>
        </Link>
      </div>

      <div className="space-y-8">
        <CircuitsMap />
        <CircuitsList />
      </div>
    </div>
  )
}
