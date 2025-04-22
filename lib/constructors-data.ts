export interface Constructor {
  id: string
  name: string
  fullName: string
  base: string
  teamPrincipal: string
  chassis: string
  powerUnit: string
  firstTeamEntry: number
  worldChampionships: number
  highestRaceFinish: string
  polePositions: number
  fastestLaps: number
  color: string
  logo: string
  countryCode: string
}

export interface ConstructorStanding {
  position: number
  constructor: Constructor
  points: number
  wins: number
  podiums: number
  history: {
    round: number
    position: number
    points: number
  }[]
}

export const constructors: Constructor[] = [
  {
    id: "red-bull",
    name: "Red Bull",
    fullName: "Oracle Red Bull Racing",
    base: "Milton Keynes, United Kingdom",
    teamPrincipal: "Christian Horner",
    chassis: "RB20",
    powerUnit: "Honda RBPT",
    firstTeamEntry: 2005,
    worldChampionships: 6,
    highestRaceFinish: "1 (x113)",
    polePositions: 98,
    fastestLaps: 95,
    color: "#3671C6",
    logo: "/placeholder.svg?height=50&width=100",
    countryCode: "at",
  },
  {
    id: "ferrari",
    name: "Ferrari",
    fullName: "Scuderia Ferrari",
    base: "Maranello, Italy",
    teamPrincipal: "Frédéric Vasseur",
    chassis: "SF-24",
    powerUnit: "Ferrari",
    firstTeamEntry: 1950,
    worldChampionships: 16,
    highestRaceFinish: "1 (x243)",
    polePositions: 244,
    fastestLaps: 259,
    color: "#F91536",
    logo: "/placeholder.svg?height=50&width=100",
    countryCode: "it",
  },
  {
    id: "mercedes",
    name: "Mercedes",
    fullName: "Mercedes-AMG PETRONAS F1 Team",
    base: "Brackley, United Kingdom",
    teamPrincipal: "Toto Wolff",
    chassis: "W15",
    powerUnit: "Mercedes",
    firstTeamEntry: 1970,
    worldChampionships: 8,
    highestRaceFinish: "1 (x125)",
    polePositions: 129,
    fastestLaps: 95,
    color: "#27F4D2",
    logo: "/placeholder.svg?height=50&width=100",
    countryCode: "de",
  },
  {
    id: "mclaren",
    name: "McLaren",
    fullName: "McLaren Formula 1 Team",
    base: "Woking, United Kingdom",
    teamPrincipal: "Andrea Stella",
    chassis: "MCL38",
    powerUnit: "Mercedes",
    firstTeamEntry: 1966,
    worldChampionships: 8,
    highestRaceFinish: "1 (x183)",
    polePositions: 156,
    fastestLaps: 163,
    color: "#FF8000",
    logo: "/placeholder.svg?height=50&width=100",
    countryCode: "gb",
  },
  {
    id: "aston-martin",
    name: "Aston Martin",
    fullName: "Aston Martin Aramco F1 Team",
    base: "Silverstone, United Kingdom",
    teamPrincipal: "Mike Krack",
    chassis: "AMR24",
    powerUnit: "Mercedes",
    firstTeamEntry: 2021,
    worldChampionships: 0,
    highestRaceFinish: "2 (x1)",
    polePositions: 0,
    fastestLaps: 1,
    color: "#358C75",
    logo: "/placeholder.svg?height=50&width=100",
    countryCode: "gb",
  },
  {
    id: "alpine",
    name: "Alpine",
    fullName: "BWT Alpine F1 Team",
    base: "Enstone, United Kingdom",
    teamPrincipal: "Bruno Famin",
    chassis: "A524",
    powerUnit: "Renault",
    firstTeamEntry: 1986,
    worldChampionships: 2,
    highestRaceFinish: "1 (x21)",
    polePositions: 20,
    fastestLaps: 15,
    color: "#2293D1",
    logo: "/placeholder.svg?height=50&width=100",
    countryCode: "fr",
  },
  {
    id: "williams",
    name: "Williams",
    fullName: "Williams Racing",
    base: "Grove, United Kingdom",
    teamPrincipal: "James Vowles",
    chassis: "FW46",
    powerUnit: "Mercedes",
    firstTeamEntry: 1978,
    worldChampionships: 9,
    highestRaceFinish: "1 (x114)",
    polePositions: 128,
    fastestLaps: 133,
    color: "#37BEDD",
    logo: "/placeholder.svg?height=50&width=100",
    countryCode: "gb",
  },
  {
    id: "rb",
    name: "RB",
    fullName: "Visa Cash App RB Formula One Team",
    base: "Faenza, Italy",
    teamPrincipal: "Laurent Mekies",
    chassis: "VCARB 01",
    powerUnit: "Honda RBPT",
    firstTeamEntry: 2020,
    worldChampionships: 0,
    highestRaceFinish: "1 (x1)",
    polePositions: 1,
    fastestLaps: 2,
    color: "#5E8FAA",
    logo: "/placeholder.svg?height=50&width=100",
    countryCode: "it",
  },
  {
    id: "sauber",
    name: "Sauber",
    fullName: "Stake F1 Team Kick Sauber",
    base: "Hinwil, Switzerland",
    teamPrincipal: "Alessandro Alunni Bravi",
    chassis: "C44",
    powerUnit: "Ferrari",
    firstTeamEntry: 1993,
    worldChampionships: 0,
    highestRaceFinish: "1 (x1)",
    polePositions: 1,
    fastestLaps: 5,
    color: "#52E252",
    logo: "/placeholder.svg?height=50&width=100",
    countryCode: "ch",
  },
  {
    id: "haas",
    name: "Haas",
    fullName: "MoneyGram Haas F1 Team",
    base: "Kannapolis, United States",
    teamPrincipal: "Ayao Komatsu",
    chassis: "VF-24",
    powerUnit: "Ferrari",
    firstTeamEntry: 2016,
    worldChampionships: 0,
    highestRaceFinish: "4 (x1)",
    polePositions: 1,
    fastestLaps: 2,
    color: "#B6BABD",
    logo: "/placeholder.svg?height=50&width=100",
    countryCode: "us",
  },
]

export const constructorStandings: ConstructorStanding[] = [
  {
    position: 1,
    constructor: constructors.find((c) => c.id === "red-bull")!,
    points: 239,
    wins: 5,
    podiums: 11,
    history: [
      { round: 1, position: 1, points: 43 },
      { round: 2, position: 1, points: 87 },
      { round: 3, position: 1, points: 97 },
      { round: 4, position: 1, points: 140 },
      { round: 5, position: 1, points: 180 },
      { round: 6, position: 1, points: 210 },
      { round: 7, position: 1, points: 239 },
    ],
  },
  {
    position: 2,
    constructor: constructors.find((c) => c.id === "ferrari")!,
    points: 187,
    wins: 1,
    podiums: 9,
    history: [
      { round: 1, position: 2, points: 25 },
      { round: 2, position: 2, points: 41 },
      { round: 3, position: 2, points: 91 },
      { round: 4, position: 2, points: 120 },
      { round: 5, position: 2, points: 143 },
      { round: 6, position: 2, points: 167 },
      { round: 7, position: 2, points: 187 },
    ],
  },
  {
    position: 3,
    constructor: constructors.find((c) => c.id === "mclaren")!,
    points: 124,
    wins: 1,
    podiums: 4,
    history: [
      { round: 1, position: 5, points: 0 },
      { round: 2, position: 5, points: 12 },
      { round: 3, position: 4, points: 27 },
      { round: 4, position: 4, points: 55 },
      { round: 5, position: 3, points: 79 },
      { round: 6, position: 3, points: 104 },
      { round: 7, position: 3, points: 124 },
    ],
  },
  {
    position: 4,
    constructor: constructors.find((c) => c.id === "mercedes")!,
    points: 64,
    wins: 0,
    podiums: 0,
    history: [
      { round: 1, position: 4, points: 16 },
      { round: 2, position: 4, points: 26 },
      { round: 3, position: 3, points: 34 },
      { round: 4, position: 3, points: 34 },
      { round: 5, position: 4, points: 42 },
      { round: 6, position: 4, points: 52 },
      { round: 7, position: 4, points: 64 },
    ],
  },
  {
    position: 5,
    constructor: constructors.find((c) => c.id === "aston-martin")!,
    points: 33,
    wins: 0,
    podiums: 0,
    history: [
      { round: 1, position: 3, points: 16 },
      { round: 2, position: 3, points: 26 },
      { round: 3, position: 5, points: 26 },
      { round: 4, position: 5, points: 28 },
      { round: 5, position: 5, points: 33 },
      { round: 6, position: 5, points: 33 },
      { round: 7, position: 5, points: 33 },
    ],
  },
  {
    position: 6,
    constructor: constructors.find((c) => c.id === "rb")!,
    points: 26,
    wins: 0,
    podiums: 0,
    history: [
      { round: 1, position: 6, points: 6 },
      { round: 2, position: 6, points: 7 },
      { round: 3, position: 6, points: 7 },
      { round: 4, position: 6, points: 10 },
      { round: 5, position: 6, points: 17 },
      { round: 6, position: 6, points: 20 },
      { round: 7, position: 6, points: 26 },
    ],
  },
  {
    position: 7,
    constructor: constructors.find((c) => c.id === "haas")!,
    points: 7,
    wins: 0,
    podiums: 0,
    history: [
      { round: 1, position: 7, points: 1 },
      { round: 2, position: 7, points: 1 },
      { round: 3, position: 7, points: 1 },
      { round: 4, position: 7, points: 1 },
      { round: 5, position: 7, points: 7 },
      { round: 6, position: 7, points: 7 },
      { round: 7, position: 7, points: 7 },
    ],
  },
  {
    position: 8,
    constructor: constructors.find((c) => c.id === "alpine")!,
    points: 1,
    wins: 0,
    podiums: 0,
    history: [
      { round: 1, position: 10, points: 0 },
      { round: 2, position: 10, points: 0 },
      { round: 3, position: 10, points: 0 },
      { round: 4, position: 10, points: 0 },
      { round: 5, position: 8, points: 1 },
      { round: 6, position: 8, points: 1 },
      { round: 7, position: 8, points: 1 },
    ],
  },
  {
    position: 9,
    constructor: constructors.find((c) => c.id === "williams")!,
    points: 0,
    wins: 0,
    podiums: 0,
    history: [
      { round: 1, position: 8, points: 0 },
      { round: 2, position: 8, points: 0 },
      { round: 3, position: 8, points: 0 },
      { round: 4, position: 8, points: 0 },
      { round: 5, position: 9, points: 0 },
      { round: 6, position: 9, points: 0 },
      { round: 7, position: 9, points: 0 },
    ],
  },
  {
    position: 10,
    constructor: constructors.find((c) => c.id === "sauber")!,
    points: 0,
    wins: 0,
    podiums: 0,
    history: [
      { round: 1, position: 9, points: 0 },
      { round: 2, position: 9, points: 0 },
      { round: 3, position: 9, points: 0 },
      { round: 4, position: 9, points: 0 },
      { round: 5, position: 10, points: 0 },
      { round: 6, position: 10, points: 0 },
      { round: 7, position: 10, points: 0 },
    ],
  },
]

export function getAllConstructors() {
  return constructors
}

export function getConstructorById(id: string) {
  return constructors.find((constructor) => constructor.id === id)
}

export function getConstructorStandings() {
  return constructorStandings
}
