"use server"

import type { LapTime, Video } from "./schema"
import {
  getDriversWithLapTimes as getMockDriversWithLapTimes,
  getLapTimesByDriver as getMockLapTimesByDriver,
  getAllVideos as getMockAllVideos,
  getVideosByType as getMockVideosByType,
  getVideoById as getMockVideoById,
  getVideosByRace as getMockVideosByRace,
  searchVideos as mockSearchVideos,
} from "./mock-data"

// Lap times actions
export async function getDriversWithLapTimes(raceId: number): Promise<string[]> {
  return getMockDriversWithLapTimes(raceId)
}

export async function getLapTimesByDriver(raceId: number, driverId: string): Promise<LapTime[]> {
  return getMockLapTimesByDriver(raceId, driverId)
}

// Videos actions
export async function getAllVideos(): Promise<Video[]> {
  return getMockAllVideos()
}

export async function getVideosByType(type: string): Promise<Video[]> {
  return getMockVideosByType(type)
}

export async function getVideoById(videoId: string): Promise<Video | null> {
  return getMockVideoById(videoId)
}

export async function getVideosByRace(raceId: number): Promise<Video[]> {
  return getMockVideosByRace(raceId)
}

export async function searchVideos(query: string): Promise<Video[]> {
  return mockSearchVideos(query)
}
