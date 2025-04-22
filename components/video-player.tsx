"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Play, Pause, Volume2, VolumeX, Maximize, Minimize, SkipBack, SkipForward } from "lucide-react"

interface VideoPlayerProps {
  videoUrl: string
  title: string
  poster?: string
}

export default function VideoPlayer({ videoUrl, title, poster }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [isControlsVisible, setIsControlsVisible] = useState(true)
  const [controlsTimeout, setControlsTimeout] = useState<NodeJS.Timeout | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const playerRef = useRef<HTMLDivElement>(null)

  // Handle play/pause
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  // Handle mute/unmute
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  // Handle fullscreen
  const toggleFullscreen = () => {
    if (!playerRef.current) return

    if (!isFullscreen) {
      if (playerRef.current.requestFullscreen) {
        playerRef.current.requestFullscreen()
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      }
    }
  }

  // Handle time update
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime)
    }
  }

  // Handle duration change
  const handleDurationChange = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration)
    }
  }

  // Handle seek
  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const seekTime = Number.parseFloat(e.target.value)
    if (videoRef.current) {
      videoRef.current.currentTime = seekTime
      setCurrentTime(seekTime)
    }
  }

  // Handle skip forward/backward
  const handleSkip = (seconds: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime = Math.max(
        0,
        Math.min(videoRef.current.duration, videoRef.current.currentTime + seconds),
      )
    }
  }

  // Format time (seconds to MM:SS)
  const formatTime = (timeInSeconds: number): string => {
    const minutes = Math.floor(timeInSeconds / 60)
    const seconds = Math.floor(timeInSeconds % 60)
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
  }

  // Show/hide controls on mouse movement
  const handleMouseMove = () => {
    setIsControlsVisible(true)

    if (controlsTimeout) {
      clearTimeout(controlsTimeout)
    }

    const timeout = setTimeout(() => {
      if (isPlaying) {
        setIsControlsVisible(false)
      }
    }, 3000)

    setControlsTimeout(timeout)
  }

  // Listen for fullscreen change
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }

    document.addEventListener("fullscreenchange", handleFullscreenChange)

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange)
    }
  }, [])

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (controlsTimeout) {
        clearTimeout(controlsTimeout)
      }
    }
  }, [controlsTimeout])

  return (
    <div ref={playerRef} className="relative bg-black rounded-lg overflow-hidden group" onMouseMove={handleMouseMove}>
      <video
        ref={videoRef}
        src={videoUrl}
        poster={poster}
        className="w-full h-full"
        onTimeUpdate={handleTimeUpdate}
        onDurationChange={handleDurationChange}
        onEnded={() => setIsPlaying(false)}
      />

      {/* Video title */}
      <div
        className={`absolute top-0 left-0 right-0 bg-gradient-to-b from-black/70 to-transparent p-4 transition-opacity duration-300 ${
          isControlsVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <h3 className="text-white font-medium">{title}</h3>
      </div>

      {/* Video controls */}
      <div
        className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 transition-opacity duration-300 ${
          isControlsVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Progress bar */}
        <div className="mb-2 flex items-center gap-2">
          <span className="text-white text-xs">{formatTime(currentTime)}</span>
          <input
            type="range"
            min="0"
            max={duration || 0}
            value={currentTime}
            onChange={handleSeek}
            className="w-full h-1 bg-zinc-600 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-red-600"
          />
          <span className="text-white text-xs">{formatTime(duration)}</span>
        </div>

        {/* Control buttons */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleSkip(-10)}
              className="text-white p-1 rounded-full hover:bg-white/20 transition-colors"
            >
              <SkipBack className="h-5 w-5" />
            </button>

            <button onClick={togglePlay} className="text-white p-2 rounded-full hover:bg-white/20 transition-colors">
              {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
            </button>

            <button
              onClick={() => handleSkip(10)}
              className="text-white p-1 rounded-full hover:bg-white/20 transition-colors"
            >
              <SkipForward className="h-5 w-5" />
            </button>

            <button onClick={toggleMute} className="text-white p-1 rounded-full hover:bg-white/20 transition-colors">
              {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
            </button>
          </div>

          <button
            onClick={toggleFullscreen}
            className="text-white p-1 rounded-full hover:bg-white/20 transition-colors"
          >
            {isFullscreen ? <Minimize className="h-5 w-5" /> : <Maximize className="h-5 w-5" />}
          </button>
        </div>
      </div>
    </div>
  )
}
