import { getDriverById } from "./drivers-data"

export interface DriverStanding {
  position: number
  driver: {
    id: string
    name: string
    number: number
    team: string
  }
  points: number
  wins: number
  podiums: number
  history: {
    round: number
    position: number
    points: number
  }[]
}

export const driverStandings: DriverStanding[] = [
  {
    position: 1,
    driver: {
      id: "max-verstappen",
      name: "Max Verstappen",
      number: 1,
      team: "Red Bull Racing",
    },
    points: 161,
    wins: 4,
    podiums: 6,
    history: [
      { round: 1, position: 1, points: 25 },
      { round: 2, position: 1, points: 50 },
      { round: 3, position: 0, points: 50 },
      { round: 4, position: 1, points: 75 },
      { round: 5, position: 1, points: 100 },
      { round: 6, position: 2, points: 118 },
      { round: 7, position: 1, points: 143 },
    ],
  },
  {
    position: 2,
    driver: {
      id: "charles-leclerc",
      name: "Charles Leclerc",
      number: 16,
      team: "Ferrari",
    },
    points: 113,
    wins: 0,
    podiums: 5,
    history: [
      { round: 1, position: 4, points: 12 },
      { round: 2, position: 3, points: 27 },
      { round: 3, position: 2, points: 47 },
      { round: 4, position: 4, points: 59 },
      { round: 5, position: 4, points: 71 },
      { round: 6, position: 3, points: 86 },
      { round: 7, position: 3, points: 101 },
    ],
  },
  {
    position: 3,
    driver: {
      id: "lando-norris",
      name: "Lando Norris",
      number: 4,
      team: "McLaren",
    },
    points: 107,
    wins: 1,
    podiums: 3,
    history: [
      { round: 1, position: 0, points: 0 },
      { round: 2, position: 0, points: 0 },
      { round: 3, position: 3, points: 15 },
      { round: 4, position: 5, points: 25 },
      { round: 5, position: 2, points: 43 },
      { round: 6, position: 1, points: 68 },
      { round: 7, position: 2, points: 86 },
    ],
  },
  {
    position: 4,
    driver: {
      id: "sergio-perez",
      name: "Sergio Perez",
      number: 11,
      team: "Red Bull Racing",
    },
    points: 103,
    wins: 0,
    podiums: 5,
    history: [
      { round: 1, position: 2, points: 18 },
      { round: 2, position: 2, points: 36 },
      { round: 3, position: 5, points: 46 },
      { round: 4, position: 2, points: 64 },
      { round: 5, position: 3, points: 79 },
      { round: 6, position: 4, points: 91 },
      { round: 7, position: 8, points: 91 },
    ],
  },
  {
    position: 5,
    driver: {
      id: "carlos-sainz",
      name: "Carlos Sainz",
      number: 55,
      team: "Ferrari",
    },
    points: 93,
    wins: 1,
    podiums: 4,
    history: [
      { round: 1, position: 3, points: 15 },
      { round: 2, position: 0, points: 15 },
      { round: 3, position: 1, points: 40 },
      { round: 4, position: 3, points: 55 },
      { round: 5, position: 5, points: 65 },
      { round: 6, position: 5, points: 75 },
      { round: 7, position: 5, points: 85 },
    ],
  },
  {
    position: 6,
    driver: {
      id: "oscar-piastri",
      name: "Oscar Piastri",
      number: 81,
      team: "McLaren",
    },
    points: 59,
    wins: 0,
    podiums: 0,
    history: [
      { round: 1, position: 8, points: 4 },
      { round: 2, position: 4, points: 16 },
      { round: 3, position: 4, points: 28 },
      { round: 4, position: 0, points: 28 },
      { round: 5, position: 8, points: 34 },
      { round: 6, position: 7, points: 40 },
      { round: 7, position: 4, points: 52 },
    ],
  },
  {
    position: 7,
    driver: {
      id: "lewis-hamilton",
      name: "Lewis Hamilton",
      number: 44,
      team: "Mercedes",
    },
    points: 42,
    wins: 0,
    podiums: 0,
    history: [
      { round: 1, position: 7, points: 6 },
      { round: 2, position: 9, points: 8 },
      { round: 3, position: 6, points: 16 },
      { round: 4, position: 9, points: 18 },
      { round: 5, position: 9, points: 19 },
      { round: 6, position: 6, points: 27 },
      { round: 7, position: 6, points: 35 },
    ],
  },
  {
    position: 8,
    driver: {
      id: "george-russell",
      name: "George Russell",
      number: 63,
      team: "Mercedes",
    },
    points: 36,
    wins: 0,
    podiums: 0,
    history: [
      { round: 1, position: 5, points: 10 },
      { round: 2, position: 6, points: 18 },
      { round: 3, position: 0, points: 18 },
      { round: 4, position: 0, points: 18 },
      { round: 5, position: 6, points: 26 },
      { round: 6, position: 0, points: 26 },
      { round: 7, position: 7, points: 30 },
    ],
  },
  {
    position: 9,
    driver: {
      id: "fernando-alonso",
      name: "Fernando Alonso",
      number: 14,
      team: "Aston Martin",
    },
    points: 33,
    wins: 0,
    podiums: 0,
    history: [
      { round: 1, position: 9, points: 2 },
      { round: 2, position: 5, points: 12 },
      { round: 3, position: 0, points: 12 },
      { round: 4, position: 6, points: 20 },
      { round: 5, position: 7, points: 26 },
      { round: 6, position: 8, points: 30 },
      { round: 7, position: 0, points: 30 },
    ],
  },
  {
    position: 10,
    driver: {
      id: "lance-stroll",
      name: "Lance Stroll",
      number: 18,
      team: "Aston Martin",
    },
    points: 9,
    wins: 0,
    podiums: 0,
    history: [
      { round: 1, position: 10, points: 1 },
      { round: 2, position: 0, points: 1 },
      { round: 3, position: 7, points: 7 },
      { round: 4, position: 0, points: 7 },
      { round: 5, position: 0, points: 7 },
      { round: 6, position: 0, points: 7 },
      { round: 7, position: 0, points: 7 },
    ],
  },
]

export function getDriverStandings() {
  return driverStandings
}

export function getDriverStandingById(id: string) {
  return driverStandings.find((standing) => standing.driver.id === id)
}

export function getFullDriverStandings() {
  return driverStandings.map((standing) => {
    const driver = getDriverById(standing.driver.id)
    return {
      ...standing,
      driver: driver || standing.driver,
    }
  })
}
