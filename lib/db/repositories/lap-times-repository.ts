import { db, formatDate } from "../index"
import type { LapTime, NewLapTime } from "../schema"

export async function getLapTimesByRace(raceId: number): Promise<LapTime[]> {
  return db.selectFrom("lap_times").where("race_id", "=", raceId).selectAll().execute()
}

export async function getLapTimesByDriver(raceId: number, driverId: string): Promise<LapTime[]> {
  return db
    .selectFrom("lap_times")
    .where("race_id", "=", raceId)
    .where("driver_id", "=", driverId)
    .selectAll()
    .execute()
}

export async function getDriversWithLapTimes(raceId: number): Promise<string[]> {
  const results = await db
    .selectFrom("lap_times")
    .where("race_id", "=", raceId)
    .select("driver_id")
    .distinct()
    .execute()

  return results.map((result) => result.driver_id)
}

export async function createLapTime(lapTime: NewLapTime): Promise<LapTime> {
  return db
    .insertInto("lap_times")
    .values({
      ...lapTime,
      created_at: formatDate(),
      updated_at: formatDate(),
    })
    .returningAll()
    .executeTakeFirstOrThrow()
}
