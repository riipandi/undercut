export type RaceStatus = "not_started" | "racing" | "yellow_flag" | "red_flag" | "safety_car" | "finished"

export interface Driver {
  name: string
  number: number
  team: string
  position: number
  gap: string
  lastLapTime: string
  bestLapTime: string
  pitStops: number
  sector1: string
  sector2: string
  sector3: string
  tireCompound: "soft" | "medium" | "hard" | "intermediate" | "wet"
  tiresAge: number
}
