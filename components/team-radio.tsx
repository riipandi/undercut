"use client"

import { useState, useRef } from "react"
import { Mic, Play, Pause } from "lucide-react"
import { getTeamRadioByRace } from "@/lib/team-radio-data"
import { teamColors } from "@/lib/constants"

interface TeamRadioProps {
  raceId: number
}

export default function TeamRadio({ raceId }: TeamRadioProps) {
  const [currentAudio, setCurrentAudio] = useState<string | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)
  const teamRadioMessages = getTeamRadioByRace(raceId)

  if (!teamRadioMessages || teamRadioMessages.length === 0) {
    return (
      <div className="bg-zinc-800 rounded-lg p-4">
        <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
          <Mic className="h-5 w-5" />
          Team Radio
        </h3>
        <p className="text-zinc-400">No team radio messages available for this race.</p>
      </div>
    )
  }

  const handlePlay = (audioUrl: string | undefined) => {
    if (!audioUrl) return

    if (currentAudio === audioUrl && isPlaying) {
      // Pause current audio
      audioRef.current?.pause()
      setIsPlaying(false)
    } else {
      // Play new audio or resume current
      setCurrentAudio(audioUrl)
      if (audioRef.current) {
        audioRef.current.src = audioUrl
        audioRef.current.play().catch((e) => console.error("Error playing audio:", e))
        setIsPlaying(true)
      }
    }
  }

  return (
    <div className="bg-zinc-800 rounded-lg overflow-hidden">
      <div className="p-4 bg-zinc-700 flex items-center gap-2">
        <Mic className="h-5 w-5" />
        <h3 className="text-lg font-bold">Team Radio</h3>
      </div>
      <div className="p-4">
        <div className="space-y-4">
          {teamRadioMessages.map((message) => {
            const teamColor = teamColors[message.team] || "border-gray-500"
            const isCurrentlyPlaying = currentAudio === message.audioUrl && isPlaying

            return (
              <div
                key={message.id}
                className={`p-3 rounded-lg border-l-4 ${teamColor} bg-zinc-700/30 hover:bg-zinc-700/50 transition-colors`}
              >
                <div className="flex justify-between items-center mb-2">
                  <div className="font-medium">{message.driver}</div>
                  <div className="text-sm text-zinc-400">
                    Lap {message.lap} • {message.timestamp}
                  </div>
                </div>
                <div className="mb-2">{message.message}</div>
                {message.audioUrl && (
                  <button
                    onClick={() => handlePlay(message.audioUrl)}
                    className="flex items-center gap-1 text-sm text-zinc-400 hover:text-white transition-colors"
                  >
                    {isCurrentlyPlaying ? (
                      <>
                        <Pause className="h-4 w-4" />
                        <span>Pause</span>
                      </>
                    ) : (
                      <>
                        <Play className="h-4 w-4" />
                        <span>Play</span>
                      </>
                    )}
                  </button>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Hidden audio element for playing team radio */}
      <audio ref={audioRef} onEnded={() => setIsPlaying(false)} className="hidden" />
    </div>
  )
}
