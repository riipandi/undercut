import type { Driver, RaceStatus } from "./types"
import { drivers as initialDrivers } from "./constants"

// Helper function to generate a random lap time
function generateLapTime(baseTime: number, variance: number): string {
  const randomVariance = Math.random() * variance * 2 - variance
  const totalTimeInSeconds = baseTime + randomVariance

  const minutes = Math.floor(totalTimeInSeconds / 60)
  const seconds = Math.floor(totalTimeInSeconds % 60)
  const milliseconds = Math.floor((totalTimeInSeconds % 1) * 1000)

  return `${minutes}:${seconds.toString().padStart(2, "0")}.${milliseconds.toString().padStart(3, "0")}`
}

// Helper function to generate a gap string
function generateGap(leaderTime: number, driverTime: number): string {
  const gapInSeconds = driverTime - leaderTime

  if (gapInSeconds < 1) {
    // If less than a second, show in milliseconds
    return `+${(gapInSeconds).toFixed(3)}s`
  } else {
    return `+${gapInSeconds.toFixed(1)}s`
  }
}

// Main function to generate race data
export function generateRaceData(
  currentLap: number,
  raceStatus: RaceStatus,
  previousDrivers: Driver[] = [],
  previousFastestLap: { driver: string; time: string; lap: number } | null = null,
) {
  // If we have previous drivers, use them as a base, otherwise initialize
  let drivers: Driver[] = []

  if (previousDrivers.length === 0) {
    // Initialize drivers for the first time
    drivers = initialDrivers.map((driver, index) => {
      // Base lap time around 80 seconds (1:20.000)
      const baseTime = 80 + index * 0.1 // Slight performance difference based on initial position

      return {
        ...driver,
        position: index + 1,
        gap: index === 0 ? "LEADER" : "+0.0s",
        lastLapTime: "0:00.000",
        bestLapTime: "0:00.000",
        pitStops: 0,
        sector1: "0:00.000",
        sector2: "0:00.000",
        sector3: "0:00.000",
        tireCompound: Math.random() > 0.5 ? "soft" : "medium",
        tiresAge: 0,
      }
    })
  } else {
    // Use previous drivers and update their data
    drivers = [...previousDrivers]
  }

  // If race has started, update lap times and positions
  if (raceStatus === "racing" || raceStatus === "yellow_flag" || raceStatus === "safety_car") {
    // Track the fastest lap overall
    let fastestLap = previousFastestLap
    let fastestLapTime = previousFastestLap ? Number.parseFloat(previousFastestLap.time.replace(":", "")) : 999

    // Generate new lap times for each driver
    const driverTimes: { driver: Driver; lapTimeInSeconds: number }[] = []

    drivers.forEach((driver, index) => {
      // Base time depends on the driver's skill (represented by their initial position)
      const baseTime = 80 + index * 0.05

      // More variance in lap times for lower-ranked drivers
      const variance = 0.5 + index * 0.02

      // Random events (like mistakes) are more likely for lower-ranked drivers
      const randomEvent = Math.random()
      let lapTimeInSeconds = baseTime

      if (randomEvent > 0.95) {
        // Big mistake (rare)
        lapTimeInSeconds += 2 + Math.random() * 3
      } else if (randomEvent > 0.85) {
        // Small mistake
        lapTimeInSeconds += 0.5 + Math.random() * 1
      } else if (randomEvent < 0.1 && index < 5) {
        // Exceptional lap (more likely for top drivers)
        lapTimeInSeconds -= 0.3 + Math.random() * 0.5
      }

      // Convert to string format for display
      const lapTimeString = generateLapTime(lapTimeInSeconds, variance)

      // Update driver data
      driver.lastLapTime = lapTimeString

      // Update best lap time if this is better
      const lapTimeValue = lapTimeInSeconds
      const bestLapTimeValue =
        driver.bestLapTime === "0:00.000" ? 999 : Number.parseFloat(driver.bestLapTime.replace(":", ""))

      if (lapTimeValue < bestLapTimeValue) {
        driver.bestLapTime = lapTimeString

        // Check if this is the fastest lap overall
        if (lapTimeValue < fastestLapTime) {
          fastestLap = {
            driver: driver.name,
            time: lapTimeString,
            lap: currentLap,
          }
          fastestLapTime = lapTimeValue
        }
      }

      // Random pit stop (more likely as the race progresses and tires age)
      if (currentLap > 10 && Math.random() > 0.95 - driver.tiresAge * 0.01) {
        driver.pitStops += 1
        driver.tireCompound = Math.random() > 0.5 ? "medium" : "hard"
        driver.tiresAge = 0
        lapTimeInSeconds += 20 // Pit stop penalty
      } else {
        driver.tiresAge += 1
      }

      driverTimes.push({ driver, lapTimeInSeconds })
    })

    // Sort drivers by cumulative race time
    driverTimes.sort((a, b) => a.lapTimeInSeconds - b.lapTimeInSeconds)

    // Update positions and gaps
    driverTimes.forEach((item, index) => {
      item.driver.position = index + 1

      if (index === 0) {
        item.driver.gap = "LEADER"
      } else {
        item.driver.gap = generateGap(driverTimes[0].lapTimeInSeconds, item.lapTimeInSeconds)
      }
    })

    // Update the drivers array with the new sorted order
    drivers = driverTimes.map((item) => item.driver)

    return {
      drivers,
      currentLap,
      totalLaps: 58,
      raceStatus,
      fastestLap,
      lastUpdate: new Date(),
    }
  }

  // If race hasn't started or is finished, just return the current state
  return {
    drivers,
    currentLap,
    totalLaps: 58,
    raceStatus,
    fastestLap: previousFastestLap,
    lastUpdate: new Date(),
  }
}
