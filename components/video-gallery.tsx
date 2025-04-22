"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Play, Calendar, Clock } from "lucide-react"
import Link from "next/link"
import { getAllVideos, getVideosByType, searchVideos } from "@/lib/db/repositories/videos-repository"
import type { Video } from "@/lib/db/schema"

interface VideoGalleryProps {
  initialVideos?: Video[]
  title?: string
  showFilters?: boolean
}

export default function VideoGallery({ initialVideos, title = "Videos", showFilters = true }: VideoGalleryProps) {
  const [videos, setVideos] = useState<Video[]>(initialVideos || [])
  const [isLoading, setIsLoading] = useState(!initialVideos)
  const [activeFilter, setActiveFilter] = useState<string>("all")
  const [searchQuery, setSearchQuery] = useState("")

  // Fetch videos if not provided
  useEffect(() => {
    if (!initialVideos) {
      fetchVideos()
    }
  }, [initialVideos])

  // Fetch videos based on filter
  const fetchVideos = async (filter = "all") => {
    setIsLoading(true)

    try {
      let fetchedVideos: Video[]

      if (filter === "all") {
        fetchedVideos = await getAllVideos()
      } else {
        fetchedVideos = await getVideosByType(filter)
      }

      setVideos(fetchedVideos)
      setActiveFilter(filter)
    } catch (error) {
      console.error("Error fetching videos:", error)
    } finally {
      setIsLoading(false)
    }
  }

  // Handle search
  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!searchQuery.trim()) {
      fetchVideos(activeFilter)
      return
    }

    setIsLoading(true)

    try {
      const results = await searchVideos(searchQuery)
      setVideos(results)
    } catch (error) {
      console.error("Error searching videos:", error)
    } finally {
      setIsLoading(false)
    }
  }

  // Filter options
  const filterOptions = [
    { id: "all", label: "All Videos" },
    { id: "live", label: "Live" },
    { id: "highlight", label: "Highlights" },
    { id: "full_race", label: "Full Races" },
    { id: "qualifying", label: "Qualifying" },
    { id: "practice", label: "Practice" },
  ]

  return (
    <div className="bg-zinc-800 rounded-lg overflow-hidden">
      <div className="p-4 bg-zinc-700">
        <h2 className="text-xl font-bold">{title}</h2>
      </div>

      {showFilters && (
        <div className="p-4 border-b border-zinc-700">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Filter tabs */}
            <div className="flex flex-wrap gap-2">
              {filterOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => fetchVideos(option.id)}
                  className={`px-3 py-1 rounded-full text-sm ${
                    activeFilter === option.id ? "bg-red-600 text-white" : "bg-zinc-700 text-zinc-300 hover:bg-zinc-600"
                  } transition-colors`}
                >
                  {option.label}
                </button>
              ))}
            </div>

            {/* Search form */}
            <form onSubmit={handleSearch} className="flex w-full md:w-auto">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search videos..."
                className="bg-zinc-700 text-white rounded-l px-3 py-1 w-full md:w-64 focus:outline-none focus:ring-1 focus:ring-red-600"
              />
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-r transition-colors"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      )}

      <div className="p-4">
        {isLoading ? (
          <div className="flex justify-center items-center h-40">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-red-600"></div>
          </div>
        ) : videos.length === 0 ? (
          <div className="text-center py-8 text-zinc-400">
            <Play className="h-12 w-12 mx-auto mb-2 opacity-50" />
            <p>No videos found</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {videos.map((video) => (
              <Link
                key={video.video_id}
                href={`/videos/${video.video_id}`}
                className="bg-zinc-700/30 rounded-lg overflow-hidden hover:bg-zinc-700/50 transition-colors"
              >
                <div className="relative aspect-video">
                  <img
                    src={video.thumbnail_url || "/placeholder.svg"}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100 transition-opacity">
                    <div className="bg-red-600 rounded-full p-3">
                      <Play className="h-6 w-6" />
                    </div>
                  </div>
                  {video.type === "live" && (
                    <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded">LIVE</div>
                  )}
                </div>
                <div className="p-3">
                  <h3 className="font-medium mb-1 line-clamp-2">{video.title}</h3>
                  <div className="flex items-center justify-between text-xs text-zinc-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{new Date(video.created_at).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{video.duration}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
