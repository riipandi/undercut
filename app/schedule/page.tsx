import ScheduleTracker from "@/components/schedule-tracker"

export default function SchedulePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-red-600 mb-2">F1 RACE CALENDAR</h1>
        <p className="text-zinc-400">Upcoming races and past results for the 2024 Formula 1 season</p>
      </header>

      <ScheduleTracker />
    </div>
  )
}
