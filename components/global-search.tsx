"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Search, X, Calendar, MapPin, User, Video, Clock } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

interface SearchResult {
  id: string
  title: string
  type: "driver" | "circuit" | "race" | "video"
  url: string
  subtitle?: string
  date?: string
}

export default function GlobalSearch() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const searchRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Open search with Ctrl+K or Cmd+K
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault()
        setIsOpen(true)
        setTimeout(() => {
          inputRef.current?.focus()
        }, 100)
      }

      if (!isOpen) return

      // Close with Escape
      if (e.key === "Escape") {
        setIsOpen(false)
      }

      // Navigate results with arrow keys
      if (e.key === "ArrowDown") {
        e.preventDefault()
        setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : prev))
      }

      if (e.key === "ArrowUp") {
        e.preventDefault()
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev))
      }

      // Select result with Enter
      if (e.key === "Enter" && selectedIndex >= 0) {
        e.preventDefault()
        const selected = results[selectedIndex]
        if (selected) {
          router.push(selected.url)
          setIsOpen(false)
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen, results, selectedIndex, router])

  // Search function
  const performSearch = async (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([])
      return
    }

    setIsLoading(true)

    try {
      // In a real app, this would be an API call
      // For now, we'll simulate some results
      await new Promise((resolve) => setTimeout(resolve, 300))

      const mockResults: SearchResult[] = [
        {
          id: "driver-1",
          title: "Max Verstappen",
          type: "driver",
          url: "/drivers/max-verstappen",
          subtitle: "Red Bull Racing",
        },
        {
          id: "driver-2",
          title: "Lewis Hamilton",
          type: "driver",
          url: "/drivers/lewis-hamilton",
          subtitle: "Mercedes",
        },
        {
          id: "circuit-1",
          title: "Monaco Grand Prix",
          type: "circuit",
          url: "/circuits/monaco",
          subtitle: "Monte Carlo, Monaco",
        },
        {
          id: "race-1",
          title: "Emilia Romagna Grand Prix",
          type: "race",
          url: "/races/7",
          date: "May 19, 2024",
        },
        {
          id: "video-1",
          title: "2024 Miami Grand Prix Highlights",
          type: "video",
          url: "/videos/miami-gp-highlights",
          date: "May 5, 2024",
        },
      ].filter(
        (result) =>
          result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (result.subtitle && result.subtitle.toLowerCase().includes(searchQuery.toLowerCase())),
      )

      setResults(mockResults)
    } catch (error) {
      console.error("Search error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setQuery(value)
    performSearch(value)
  }

  // Get icon for result type
  const getResultIcon = (type: string) => {
    switch (type) {
      case "driver":
        return <User className="h-4 w-4 text-blue-400" />
      case "circuit":
        return <MapPin className="h-4 w-4 text-green-400" />
      case "race":
        return <Calendar className="h-4 w-4 text-red-400" />
      case "video":
        return <Video className="h-4 w-4 text-purple-400" />
      default:
        return <Clock className="h-4 w-4 text-zinc-400" />
    }
  }

  return (
    <div ref={searchRef} className="relative">
      {/* Search trigger button */}
      <button
        onClick={() => {
          setIsOpen(true)
          setTimeout(() => {
            inputRef.current?.focus()
          }, 100)
        }}
        className="bg-zinc-800 hover:bg-zinc-700 transition-colors rounded-full p-2"
        aria-label="Search"
      >
        <Search className="h-5 w-5" />
      </button>

      {/* Search modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-20">
          <div className="bg-zinc-800 rounded-lg w-full max-w-2xl shadow-xl">
            {/* Search input */}
            <div className="p-4 flex items-center gap-2 border-b border-zinc-700">
              <Search className="h-5 w-5 text-zinc-400" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={handleSearchChange}
                placeholder="Search for drivers, circuits, races..."
                className="bg-transparent border-none outline-none flex-1 text-white"
                autoFocus
              />
              {query && (
                <button
                  onClick={() => {
                    setQuery("")
                    setResults([])
                    inputRef.current?.focus()
                  }}
                  className="text-zinc-400 hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              )}
            </div>

            {/* Search results */}
            <div className="max-h-96 overflow-y-auto">
              {isLoading ? (
                <div className="flex justify-center items-center py-8">
                  <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-red-600"></div>
                </div>
              ) : results.length > 0 ? (
                <div className="p-2">
                  {results.map((result, index) => (
                    <Link
                      key={result.id}
                      href={result.url}
                      className={`flex items-center gap-3 p-3 rounded-lg ${
                        selectedIndex === index ? "bg-zinc-700" : "hover:bg-zinc-700/50"
                      } transition-colors`}
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="bg-zinc-700 p-2 rounded-full">{getResultIcon(result.type)}</div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium truncate">{result.title}</div>
                        {result.subtitle && <div className="text-sm text-zinc-400 truncate">{result.subtitle}</div>}
                      </div>
                      {result.date && (
                        <div className="text-xs text-zinc-500 flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>{result.date}</span>
                        </div>
                      )}
                    </Link>
                  ))}
                </div>
              ) : query ? (
                <div className="text-center py-8 text-zinc-400">
                  <Search className="h-12 w-12 mx-auto mb-2 opacity-50" />
                  <p>No results found for "{query}"</p>
                </div>
              ) : (
                <div className="text-center py-8 text-zinc-400">
                  <Search className="h-12 w-12 mx-auto mb-2 opacity-50" />
                  <p>Start typing to search</p>
                  <p className="text-xs mt-2">Press ESC to close</p>
                </div>
              )}
            </div>

            {/* Search tips */}
            <div className="p-4 border-t border-zinc-700 text-xs text-zinc-500 flex justify-between">
              <div>
                <span className="bg-zinc-700 px-1.5 py-0.5 rounded text-zinc-300 mr-1">↑</span>
                <span className="bg-zinc-700 px-1.5 py-0.5 rounded text-zinc-300 mr-1">↓</span>
                <span>to navigate</span>
              </div>
              <div>
                <span className="bg-zinc-700 px-1.5 py-0.5 rounded text-zinc-300 mr-1">Enter</span>
                <span>to select</span>
              </div>
              <div>
                <span className="bg-zinc-700 px-1.5 py-0.5 rounded text-zinc-300 mr-1">Esc</span>
                <span>to close</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
