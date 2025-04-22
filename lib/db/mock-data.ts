import type { LapTime, Video } from "./schema"

// Mock lap times data
const mockLapTimes: Record<number, Record<string, LapTime[]>> = {
  1: {
    "VER-1": [
      {
        id: 1,
        race_id: 1,
        driver_id: "VER-1",
        lap: 1,
        position: 1,
        time: "1:26.321",
        sector_1: "28.123",
        sector_2: "30.456",
        sector_3: "27.742",
        speed_trap: 312,
        created_at: "",
        updated_at: "",
      },
      {
        id: 2,
        race_id: 1,
        driver_id: "VER-1",
        lap: 2,
        position: 1,
        time: "1:25.876",
        sector_1: "27.982",
        sector_2: "30.211",
        sector_3: "27.683",
        speed_trap: 315,
        created_at: "",
        updated_at: "",
      },
      {
        id: 3,
        race_id: 1,
        driver_id: "VER-1",
        lap: 3,
        position: 1,
        time: "1:25.543",
        sector_1: "27.876",
        sector_2: "30.102",
        sector_3: "27.565",
        speed_trap: 318,
        created_at: "",
        updated_at: "",
      },
    ],
    "HAM-44": [
      {
        id: 4,
        race_id: 1,
        driver_id: "HAM-44",
        lap: 1,
        position: 2,
        time: "1:26.543",
        sector_1: "28.234",
        sector_2: "30.567",
        sector_3: "27.742",
        speed_trap: 310,
        created_at: "",
        updated_at: "",
      },
      {
        id: 5,
        race_id: 1,
        driver_id: "HAM-44",
        lap: 2,
        position: 2,
        time: "1:26.123",
        sector_1: "28.102",
        sector_2: "30.321",
        sector_3: "27.700",
        speed_trap: 312,
        created_at: "",
        updated_at: "",
      },
      {
        id: 6,
        race_id: 1,
        driver_id: "HAM-44",
        lap: 3,
        position: 2,
        time: "1:25.876",
        sector_1: "27.987",
        sector_2: "30.234",
        sector_3: "27.655",
        speed_trap: 314,
        created_at: "",
        updated_at: "",
      },
    ],
    "LEC-16": [
      {
        id: 7,
        race_id: 1,
        driver_id: "LEC-16",
        lap: 1,
        position: 3,
        time: "1:26.765",
        sector_1: "28.345",
        sector_2: "30.654",
        sector_3: "27.766",
        speed_trap: 309,
        created_at: "",
        updated_at: "",
      },
      {
        id: 8,
        race_id: 1,
        driver_id: "LEC-16",
        lap: 2,
        position: 3,
        time: "1:26.432",
        sector_1: "28.234",
        sector_2: "30.543",
        sector_3: "27.655",
        speed_trap: 311,
        created_at: "",
        updated_at: "",
      },
      {
        id: 9,
        race_id: 1,
        driver_id: "LEC-16",
        lap: 3,
        position: 3,
        time: "1:26.123",
        sector_1: "28.102",
        sector_2: "30.432",
        sector_3: "27.589",
        speed_trap: 313,
        created_at: "",
        updated_at: "",
      },
    ],
  },
  // Add more races as needed
}

// Mock videos data
const mockVideos: Video[] = [
  {
    id: 1,
    video_id: "bahrain-gp-highlights",
    title: "2024 Bahrain Grand Prix Highlights",
    description: "Watch the highlights from the 2024 Bahrain Grand Prix, the season opener.",
    race_id: 1,
    thumbnail_url: "/placeholder.svg?height=720&width=1280",
    video_url: "https://example.com/videos/bahrain-gp-highlights.mp4",
    duration: "10:32",
    type: "highlight",
    created_at: "2024-03-02T18:30:00Z",
    updated_at: "2024-03-02T18:30:00Z",
  },
  {
    id: 2,
    video_id: "bahrain-gp-full-race",
    title: "2024 Bahrain Grand Prix Full Race",
    description: "Watch the full race replay of the 2024 Bahrain Grand Prix.",
    race_id: 1,
    thumbnail_url: "/placeholder.svg?height=720&width=1280",
    video_url: "https://example.com/videos/bahrain-gp-full-race.mp4",
    duration: "1:45:21",
    type: "full_race",
    created_at: "2024-03-02T20:00:00Z",
    updated_at: "2024-03-02T20:00:00Z",
  },
  {
    id: 3,
    video_id: "saudi-gp-highlights",
    title: "2024 Saudi Arabian Grand Prix Highlights",
    description: "Watch the highlights from the 2024 Saudi Arabian Grand Prix.",
    race_id: 2,
    thumbnail_url: "/placeholder.svg?height=720&width=1280",
    video_url: "https://example.com/videos/saudi-gp-highlights.mp4",
    duration: "9:45",
    type: "highlight",
    created_at: "2024-03-09T18:30:00Z",
    updated_at: "2024-03-09T18:30:00Z",
  },
  {
    id: 4,
    video_id: "f1-live-stream",
    title: "F1 Live: Miami Grand Prix",
    description: "Watch the live stream of the 2024 Miami Grand Prix.",
    race_id: 6,
    thumbnail_url: "/placeholder.svg?height=720&width=1280",
    video_url: "https://example.com/videos/miami-gp-live.mp4",
    duration: "LIVE",
    type: "live",
    created_at: "2024-05-05T18:00:00Z",
    updated_at: "2024-05-05T18:00:00Z",
  },
  {
    id: 5,
    video_id: "qualifying-highlights-australia",
    title: "2024 Australian Grand Prix Qualifying Highlights",
    description: "Watch the highlights from qualifying for the 2024 Australian Grand Prix.",
    race_id: 3,
    thumbnail_url: "/placeholder.svg?height=720&width=1280",
    video_url: "https://example.com/videos/australia-qualifying-highlights.mp4",
    duration: "8:21",
    type: "qualifying",
    created_at: "2024-03-23T08:30:00Z",
    updated_at: "2024-03-23T08:30:00Z",
  },
  {
    id: 6,
    video_id: "practice-highlights-japan",
    title: "2024 Japanese Grand Prix Practice Highlights",
    description: "Watch the highlights from practice sessions for the 2024 Japanese Grand Prix.",
    race_id: 4,
    thumbnail_url: "/placeholder.svg?height=720&width=1280",
    video_url: "https://example.com/videos/japan-practice-highlights.mp4",
    duration: "7:15",
    type: "practice",
    created_at: "2024-04-05T06:30:00Z",
    updated_at: "2024-04-05T06:30:00Z",
  },
]

// Mock data access functions
export async function getDriversWithLapTimes(raceId: number): Promise<string[]> {
  const raceData = mockLapTimes[raceId]
  if (!raceData) return []
  return Object.keys(raceData)
}

export async function getLapTimesByDriver(raceId: number, driverId: string): Promise<LapTime[]> {
  const raceData = mockLapTimes[raceId]
  if (!raceData || !raceData[driverId]) return []
  return raceData[driverId]
}

export async function getAllVideos(): Promise<Video[]> {
  return [...mockVideos]
}

export async function getVideosByType(type: string): Promise<Video[]> {
  if (type === "all") return [...mockVideos]
  return mockVideos.filter((video) => video.type === type)
}

export async function getVideoById(videoId: string): Promise<Video | null> {
  const video = mockVideos.find((v) => v.video_id === videoId)
  return video || null
}

export async function getVideosByRace(raceId: number): Promise<Video[]> {
  return mockVideos.filter((video) => video.race_id === raceId)
}

export async function searchVideos(query: string): Promise<Video[]> {
  const lowerQuery = query.toLowerCase()
  return mockVideos.filter(
    (video) => video.title.toLowerCase().includes(lowerQuery) || video.description.toLowerCase().includes(lowerQuery),
  )
}
