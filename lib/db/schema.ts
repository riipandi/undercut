import type { ColumnType, Generated, Insertable, Selectable, Updateable } from "kysely"

// Define the database schema
export interface Database {
  drivers: DriversTable
  teams: TeamsTable
  circuits: CircuitsTable
  races: RacesTable
  lap_times: LapTimesTable
  practice_sessions: PracticeSessionsTable
  qualifying_results: QualifyingResultsTable
  race_results: RaceResultsTable
  team_radio: TeamRadioTable
  videos: VideosTable
}

// Define the tables
export interface DriversTable {
  id: Generated<number>
  driver_id: string
  name: string
  number: number
  team_id: string
  nationality: string
  age: number
  created_at: ColumnType<Date, string | undefined, never>
  updated_at: ColumnType<Date, string | undefined, never>
}

export interface TeamsTable {
  id: Generated<number>
  team_id: string
  name: string
  full_name: string
  color: string
  created_at: ColumnType<Date, string | undefined, never>
  updated_at: ColumnType<Date, string | undefined, never>
}

export interface CircuitsTable {
  id: Generated<number>
  circuit_id: string
  name: string
  country: string
  country_code: string
  city: string
  length: string
  turns: number
  lap_record_time: string
  lap_record_driver: string
  lap_record_year: number
  first_grand_prix: number
  created_at: ColumnType<Date, string | undefined, never>
  updated_at: ColumnType<Date, string | undefined, never>
}

export interface RacesTable {
  id: Generated<number>
  race_id: number
  name: string
  circuit_id: string
  date: string
  time: string
  round: number
  sprint_race: boolean
  is_past: boolean
  created_at: ColumnType<Date, string | undefined, never>
  updated_at: ColumnType<Date, string | undefined, never>
}

export interface LapTimesTable {
  id: Generated<number>
  race_id: number
  driver_id: string
  lap: number
  position: number
  time: string
  sector_1: string
  sector_2: string
  sector_3: string
  speed_trap: number
  created_at: ColumnType<Date, string | undefined, never>
  updated_at: ColumnType<Date, string | undefined, never>
}

export interface PracticeSessionsTable {
  id: Generated<number>
  race_id: number
  session_type: "FP1" | "FP2" | "FP3"
  driver_id: string
  position: number
  time: string
  laps: number
  created_at: ColumnType<Date, string | undefined, never>
  updated_at: ColumnType<Date, string | undefined, never>
}

export interface QualifyingResultsTable {
  id: Generated<number>
  race_id: number
  driver_id: string
  position: number
  q1: string | null
  q2: string | null
  q3: string | null
  created_at: ColumnType<Date, string | undefined, never>
  updated_at: ColumnType<Date, string | undefined, never>
}

export interface RaceResultsTable {
  id: Generated<number>
  race_id: number
  driver_id: string
  position: number
  points: number
  time: string
  laps: number
  created_at: ColumnType<Date, string | undefined, never>
  updated_at: ColumnType<Date, string | undefined, never>
}

export interface TeamRadioTable {
  id: Generated<number>
  race_id: number
  driver_id: string
  timestamp: string
  lap: number
  message: string
  audio_url: string | null
  created_at: ColumnType<Date, string | undefined, never>
  updated_at: ColumnType<Date, string | undefined, never>
}

export interface VideosTable {
  id: Generated<number>
  video_id: string
  title: string
  description: string
  race_id: number | null
  thumbnail_url: string
  video_url: string
  duration: string
  type: "live" | "highlight" | "full_race" | "qualifying" | "practice" | "other"
  created_at: ColumnType<Date, string | undefined, never>
  updated_at: ColumnType<Date, string | undefined, never>
}

// Define types for CRUD operations
export type Driver = Selectable<DriversTable>
export type NewDriver = Insertable<DriversTable>
export type DriverUpdate = Updateable<DriversTable>

export type Team = Selectable<TeamsTable>
export type NewTeam = Insertable<TeamsTable>
export type TeamUpdate = Updateable<TeamsTable>

export type Circuit = Selectable<CircuitsTable>
export type NewCircuit = Insertable<CircuitsTable>
export type CircuitUpdate = Updateable<CircuitsTable>

export type Race = Selectable<RacesTable>
export type NewRace = Insertable<RacesTable>
export type RaceUpdate = Updateable<RacesTable>

export type LapTime = Selectable<LapTimesTable>
export type NewLapTime = Insertable<LapTimesTable>
export type LapTimeUpdate = Updateable<LapTimesTable>

export type PracticeSession = Selectable<PracticeSessionsTable>
export type NewPracticeSession = Insertable<PracticeSessionsTable>
export type PracticeSessionUpdate = Updateable<PracticeSessionsTable>

export type QualifyingResult = Selectable<QualifyingResultsTable>
export type NewQualifyingResult = Insertable<QualifyingResultsTable>
export type QualifyingResultUpdate = Updateable<QualifyingResultsTable>

export type RaceResult = Selectable<RaceResultsTable>
export type NewRaceResult = Insertable<RaceResultsTable>
export type RaceResultUpdate = Updateable<RaceResultsTable>

export type TeamRadio = Selectable<TeamRadioTable>
export type NewTeamRadio = Insertable<TeamRadioTable>
export type TeamRadioUpdate = Updateable<TeamRadioTable>

export type Video = Selectable<VideosTable>
export type NewVideo = Insertable<VideosTable>
export type VideoUpdate = Updateable<VideosTable>
