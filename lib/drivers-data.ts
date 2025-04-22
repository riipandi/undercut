import { drivers as initialDrivers } from "./constants"

export interface DriverProfile {
  id: string
  name: string
  number: number
  team: string
  nationality: string
  age: number
  bio: string
  stats: {
    championships: number
    wins: number
    podiums: number
    poles: number
    fastestLaps: number
  }
  careerHighlights: string[]
  currentSeason: {
    position: number
    points: number
    wins: number
    podiums: number
    bestResult: string
    recentResults: {
      race: string
      position: number
      grid: number
      fastestLap: boolean
    }[]
  }
}

const driversData: DriverProfile[] = [
  {
    id: "max-verstappen",
    name: "Max Verstappen",
    number: 1,
    team: "Red Bull Racing",
    nationality: "Dutch",
    age: 26,
    bio: "Max Verstappen is a Dutch racing driver and the 2021, 2022, and 2023 Formula One World Champion. He competes under the Dutch flag in Formula One for Red Bull Racing. He is the son of former Formula One driver Jos Verstappen. At the 2015 Australian Grand Prix, when he was aged 17 years and 166 days, he became the youngest driver to compete in Formula One.",
    stats: {
      championships: 3,
      wins: 58,
      podiums: 102,
      poles: 39,
      fastestLaps: 31,
    },
    careerHighlights: [
      "Youngest ever F1 race winner (18 years, 228 days)",
      "Three-time Formula One World Champion (2021, 2022, 2023)",
      "Most wins in a single season (19 wins in 2023)",
      "Longest consecutive race wins streak (10 races)",
      "Highest percentage of points available in a season (75.6% in 2023)",
    ],
    currentSeason: {
      position: 1,
      points: 161,
      wins: 4,
      podiums: 6,
      bestResult: "1st",
      recentResults: [
        {
          race: "Emilia Romagna Grand Prix",
          position: 1,
          grid: 1,
          fastestLap: false,
        },
        {
          race: "Miami Grand Prix",
          position: 2,
          grid: 1,
          fastestLap: false,
        },
        {
          race: "Chinese Grand Prix",
          position: 1,
          grid: 1,
          fastestLap: true,
        },
        {
          race: "Japanese Grand Prix",
          position: 1,
          grid: 1,
          fastestLap: true,
        },
        {
          race: "Australian Grand Prix",
          position: 0,
          grid: 1,
          fastestLap: false,
        },
      ],
    },
  },
  {
    id: "lewis-hamilton",
    name: "Lewis Hamilton",
    number: 44,
    team: "Mercedes",
    nationality: "British",
    age: 39,
    bio: "Sir Lewis Carl Davidson Hamilton is a British racing driver currently competing in Formula One for Mercedes. In Formula One, Hamilton has won a joint-record seven World Drivers' Championship titles (tied with Michael Schumacher), and holds the records for the most wins (103), pole positions (104), and podium finishes (197), among others.",
    stats: {
      championships: 7,
      wins: 103,
      podiums: 197,
      poles: 104,
      fastestLaps: 64,
    },
    careerHighlights: [
      "Seven-time Formula One World Champion (2008, 2014, 2015, 2017, 2018, 2019, 2020)",
      "Most Grand Prix wins in history (103)",
      "Most pole positions in history (104)",
      "Most podium finishes in history (197)",
      "Only driver to have won races in every season he has competed in",
    ],
    currentSeason: {
      position: 7,
      points: 58,
      wins: 0,
      podiums: 1,
      bestResult: "3rd",
      recentResults: [
        {
          race: "Emilia Romagna Grand Prix",
          position: 6,
          grid: 5,
          fastestLap: true,
        },
        {
          race: "Miami Grand Prix",
          position: 6,
          grid: 8,
          fastestLap: false,
        },
        {
          race: "Chinese Grand Prix",
          position: 9,
          grid: 18,
          fastestLap: false,
        },
        {
          race: "Japanese Grand Prix",
          position: 5,
          grid: 7,
          fastestLap: false,
        },
        {
          race: "Australian Grand Prix",
          position: 6,
          grid: 11,
          fastestLap: false,
        },
      ],
    },
  },
  {
    id: "charles-leclerc",
    name: "Charles Leclerc",
    number: 16,
    team: "Ferrari",
    nationality: "Monégasque",
    age: 26,
    bio: "Charles Leclerc is a Monégasque racing driver, currently racing in Formula One for Scuderia Ferrari. Leclerc won the GP3 Series championship in 2016 and the FIA Formula 2 Championship in 2017. He made his Formula One debut in 2018 for Sauber, a team affiliated with Ferrari, before joining Ferrari in 2019.",
    stats: {
      championships: 0,
      wins: 5,
      podiums: 30,
      poles: 23,
      fastestLaps: 7,
    },
    careerHighlights: [
      "First Monégasque driver to win a Formula One Grand Prix",
      "Youngest driver to win at Monza for Ferrari",
      "Most pole positions in the 2022 season (9)",
      "GP3 Series champion (2016)",
      "FIA Formula 2 champion (2017)",
    ],
    currentSeason: {
      position: 2,
      points: 113,
      wins: 0,
      podiums: 5,
      bestResult: "2nd",
      recentResults: [
        {
          race: "Emilia Romagna Grand Prix",
          position: 3,
          grid: 4,
          fastestLap: false,
        },
        {
          race: "Miami Grand Prix",
          position: 3,
          grid: 2,
          fastestLap: false,
        },
        {
          race: "Chinese Grand Prix",
          position: 4,
          grid: 6,
          fastestLap: false,
        },
        {
          race: "Japanese Grand Prix",
          position: 4,
          grid: 8,
          fastestLap: false,
        },
        {
          race: "Australian Grand Prix",
          position: 2,
          grid: 4,
          fastestLap: false,
        },
      ],
    },
  },
  {
    id: "lando-norris",
    name: "Lando Norris",
    number: 4,
    team: "McLaren",
    nationality: "British",
    age: 24,
    bio: "Lando Norris is a British-Belgian racing driver currently competing in Formula One for McLaren. He was the 2017 FIA Formula 3 European champion. He was a member of the McLaren Young Driver Programme, and in 2018 competed in the FIA Formula 2 Championship, finishing second in the championship.",
    stats: {
      championships: 0,
      wins: 2,
      podiums: 16,
      poles: 2,
      fastestLaps: 7,
    },
    careerHighlights: [
      "First F1 win at the 2024 Miami Grand Prix",
      "FIA Formula 3 European champion (2017)",
      "Runner-up in FIA Formula 2 Championship (2018)",
      "McLaren Young Driver Programme graduate",
      "Youngest British driver to achieve a podium in Formula One",
    ],
    currentSeason: {
      position: 3,
      points: 107,
      wins: 1,
      podiums: 3,
      bestResult: "1st",
      recentResults: [
        {
          race: "Emilia Romagna Grand Prix",
          position: 2,
          grid: 3,
          fastestLap: false,
        },
        {
          race: "Miami Grand Prix",
          position: 1,
          grid: 5,
          fastestLap: true,
        },
        {
          race: "Chinese Grand Prix",
          position: 2,
          grid: 4,
          fastestLap: false,
        },
        {
          race: "Japanese Grand Prix",
          position: 5,
          grid: 6,
          fastestLap: false,
        },
        {
          race: "Australian Grand Prix",
          position: 3,
          grid: 3,
          fastestLap: true,
        },
      ],
    },
  },
]

export function getAllDrivers(): DriverProfile[] {
  return driversData
}

export function getDriverById(id: string): DriverProfile | undefined {
  return driversData.find((driver) => driver.id === id)
}

// Convert initial drivers to driver profiles for the simulation
export function getDriverProfiles() {
  return initialDrivers.map((driver) => {
    const existingDriver = driversData.find((d) => d.name === driver.name)

    if (existingDriver) {
      return existingDriver
    }

    // Create a basic profile for drivers not in the detailed data
    return {
      id: driver.name.toLowerCase().replace(/\s+/g, "-"),
      name: driver.name,
      number: driver.number,
      team: driver.team,
      nationality: "Unknown",
      age: 25,
      bio: `${driver.name} is a Formula 1 driver currently racing for ${driver.team}.`,
      stats: {
        championships: 0,
        wins: 0,
        podiums: 0,
        poles: 0,
        fastestLaps: 0,
      },
      careerHighlights: ["Formula 1 driver"],
      currentSeason: {
        position: 10,
        points: 0,
        wins: 0,
        podiums: 0,
        bestResult: "N/A",
        recentResults: [],
      },
    }
  })
}
