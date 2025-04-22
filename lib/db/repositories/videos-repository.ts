import { db, formatDate } from "../index"
import type { Video, NewVideo } from "../schema"

export async function getAllVideos(): Promise<Video[]> {
  return db.selectFrom("videos").selectAll().orderBy("created_at", "desc").execute()
}

export async function getVideosByType(type: string): Promise<Video[]> {
  return db.selectFrom("videos").where("type", "=", type).selectAll().orderBy("created_at", "desc").execute()
}

export async function getVideosByRace(raceId: number): Promise<Video[]> {
  return db.selectFrom("videos").where("race_id", "=", raceId).selectAll().orderBy("created_at", "desc").execute()
}

export async function getVideoById(videoId: string): Promise<Video | undefined> {
  return db.selectFrom("videos").where("video_id", "=", videoId).selectAll().executeTakeFirst()
}

export async function createVideo(video: NewVideo): Promise<Video> {
  return db
    .insertInto("videos")
    .values({
      ...video,
      created_at: formatDate(),
      updated_at: formatDate(),
    })
    .returningAll()
    .executeTakeFirstOrThrow()
}

export async function searchVideos(query: string): Promise<Video[]> {
  return db
    .selectFrom("videos")
    .where("title", "like", `%${query}%`)
    .orWhere("description", "like", `%${query}%`)
    .selectAll()
    .orderBy("created_at", "desc")
    .execute()
}
