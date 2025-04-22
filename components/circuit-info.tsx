export default function CircuitInfo() {
  return (
    <div className="bg-zinc-800 rounded-lg overflow-hidden">
      <div className="p-4 bg-zinc-700">
        <h2 className="text-xl font-bold">Circuit Information</h2>
      </div>
      <div className="p-4">
        <div className="flex justify-center mb-4">
          <div className="relative w-full max-w-xs">
            <img src="/placeholder.svg?height=200&width=300" alt="Monaco Circuit" className="w-full rounded-lg" />
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-2 text-center">Circuit de Monaco</div>
          </div>
        </div>

        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-zinc-400">Length:</span>
            <span>3.337 km</span>
          </div>
          <div className="flex justify-between">
            <span className="text-zinc-400">Turns:</span>
            <span>19 (8 left, 11 right)</span>
          </div>
          <div className="flex justify-between">
            <span className="text-zinc-400">Race Distance:</span>
            <span>260.286 km (78 laps)</span>
          </div>
          <div className="flex justify-between">
            <span className="text-zinc-400">Lap Record:</span>
            <span>1:12.909 - Lewis Hamilton (2021)</span>
          </div>
        </div>
      </div>
    </div>
  )
}
