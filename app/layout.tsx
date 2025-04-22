import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Link from "next/link"
import { Flag, Calendar, Users, MapPin, BarChart3, Video } from "lucide-react"
import RaceCountdownBanner from "@/components/race-countdown-banner"
import GlobalSearch from "@/components/global-search"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "F1 Live Tracker",
  description: "Track Formula 1 races, drivers, and results in real-time",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-zinc-900 text-white flex flex-col">
          <RaceCountdownBanner />
          <nav className="bg-zinc-800 border-b border-zinc-700">
            <div className="container mx-auto px-4">
              <div className="flex items-center h-16">
                <Link href="/" className="text-xl font-bold text-red-600 mr-8">
                  F1 LIVE TRACKER
                </Link>
                <div className="flex space-x-4 overflow-x-auto flex-1">
                  <Link
                    href="/"
                    className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-zinc-700 whitespace-nowrap"
                  >
                    <Flag className="h-4 w-4 mr-2" />
                    Live Race
                  </Link>
                  <Link
                    href="/schedule"
                    className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-zinc-700 whitespace-nowrap"
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule
                  </Link>
                  <Link
                    href="/standings"
                    className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-zinc-700 whitespace-nowrap"
                  >
                    <BarChart3 className="h-4 w-4 mr-2" />
                    Standings
                  </Link>
                  <Link
                    href="/drivers"
                    className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-zinc-700 whitespace-nowrap"
                  >
                    <Users className="h-4 w-4 mr-2" />
                    Drivers
                  </Link>
                  <Link
                    href="/circuits"
                    className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-zinc-700 whitespace-nowrap"
                  >
                    <MapPin className="h-4 w-4 mr-2" />
                    Circuits
                  </Link>
                  <Link
                    href="/videos"
                    className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-zinc-700 whitespace-nowrap"
                  >
                    <Video className="h-4 w-4 mr-2" />
                    Videos
                  </Link>
                </div>
                <div className="ml-auto">
                  <Suspense>
                    <GlobalSearch />
                  </Suspense>
                </div>
              </div>
            </div>
          </nav>
          <main className="flex-1">{children}</main>
          <footer className="bg-zinc-800 border-t border-zinc-700 py-6">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="text-zinc-400 text-sm mb-4 md:mb-0">
                  &copy; {new Date().getFullYear()} F1 Live Tracker. Not affiliated with Formula 1.
                </div>
                <div className="flex space-x-4">
                  <Link href="/privacy-policy" className="text-zinc-400 hover:text-white text-sm">
                    Privacy Policy
                  </Link>
                  <Link href="/terms-of-service" className="text-zinc-400 hover:text-white text-sm">
                    Terms of Service
                  </Link>
                  <Link href="/contact" className="text-zinc-400 hover:text-white text-sm">
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
