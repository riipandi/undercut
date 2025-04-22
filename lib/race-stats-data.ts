export interface SessionTime {
  position: number
  driver: string
  driverId: string
  team: string
  time: string
  gap?: string
  laps: number
}

export interface QualifyingResult {
  position: number
  driver: string
  driverId: string
  team: string
  q1?: string
  q2?: string
  q3?: string
  gap?: string
}

export interface SprintResult {
  position: number
  driver: string
  driverId: string
  team: string
  time: string
  gap?: string
  laps: number
  points: number
}

export interface RaceStats {
  raceId: number
  practice1?: SessionTime[]
  practice2?: SessionTime[]
  practice3?: SessionTime[]
  qualifying?: QualifyingResult[]
  sprint?: SprintResult[]
  fastestLaps: {
    driver: string
    driverId: string
    lap: number
    time: string
    averageSpeed: string
  }[]
  pitStops: {
    driver: string
    driverId: string
    lap: number
    time: string
    duration: string
    totalStops: number
  }[]
  lapChart: {
    lap: number
    positions: {
      driver: string
      driverId: string
      position: number
    }[]
  }[]
}

export const raceStats: Record<number, RaceStats> = {
  7: {
    raceId: 7,
    practice1: [
      {
        position: 1,
        driver: "Max Verstappen",
        driverId: "max-verstappen",
        team: "Red Bull Racing",
        time: "1:16.253",
        laps: 25,
      },
      {
        position: 2,
        driver: "Charles Leclerc",
        driverId: "charles-leclerc",
        team: "Ferrari",
        time: "1:16.462",
        gap: "+0.209s",
        laps: 28,
      },
      {
        position: 3,
        driver: "Yuki Tsunoda",
        driverId: "yuki-tsunoda",
        team: "RB",
        time: "1:16.808",
        gap: "+0.555s",
        laps: 30,
      },
      {
        position: 4,
        driver: "Carlos Sainz",
        driverId: "carlos-sainz",
        team: "Ferrari",
        time: "1:16.978",
        gap: "+0.725s",
        laps: 27,
      },
      {
        position: 5,
        driver: "Sergio Perez",
        driverId: "sergio-perez",
        team: "Red Bull Racing",
        time: "1:17.233",
        gap: "+0.980s",
        laps: 24,
      },
    ],
    practice2: [
      {
        position: 1,
        driver: "Charles Leclerc",
        driverId: "charles-leclerc",
        team: "Ferrari",
        time: "1:15.906",
        laps: 30,
      },
      {
        position: 2,
        driver: "Oscar Piastri",
        driverId: "oscar-piastri",
        team: "McLaren",
        time: "1:16.098",
        gap: "+0.192s",
        laps: 32,
      },
      {
        position: 3,
        driver: "Lewis Hamilton",
        driverId: "lewis-hamilton",
        team: "Mercedes",
        time: "1:16.175",
        gap: "+0.269s",
        laps: 31,
      },
      {
        position: 4,
        driver: "Max Verstappen",
        driverId: "max-verstappen",
        team: "Red Bull Racing",
        time: "1:16.243",
        gap: "+0.337s",
        laps: 29,
      },
      {
        position: 5,
        driver: "Carlos Sainz",
        driverId: "carlos-sainz",
        team: "Ferrari",
        time: "1:16.410",
        gap: "+0.504s",
        laps: 31,
      },
    ],
    practice3: [
      {
        position: 1,
        driver: "Max Verstappen",
        driverId: "max-verstappen",
        team: "Red Bull Racing",
        time: "1:15.217",
        laps: 18,
      },
      {
        position: 2,
        driver: "Lando Norris",
        driverId: "lando-norris",
        team: "McLaren",
        time: "1:15.559",
        gap: "+0.342s",
        laps: 20,
      },
      {
        position: 3,
        driver: "Oscar Piastri",
        driverId: "oscar-piastri",
        team: "McLaren",
        time: "1:15.633",
        gap: "+0.416s",
        laps: 19,
      },
      {
        position: 4,
        driver: "Charles Leclerc",
        driverId: "charles-leclerc",
        team: "Ferrari",
        time: "1:15.699",
        gap: "+0.482s",
        laps: 21,
      },
      {
        position: 5,
        driver: "Carlos Sainz",
        driverId: "carlos-sainz",
        team: "Ferrari",
        time: "1:15.723",
        gap: "+0.506s",
        laps: 20,
      },
    ],
    qualifying: [
      {
        position: 1,
        driver: "Max Verstappen",
        driverId: "max-verstappen",
        team: "Red Bull Racing",
        q1: "1:15.771",
        q2: "1:15.181",
        q3: "1:14.746",
      },
      {
        position: 2,
        driver: "Oscar Piastri",
        driverId: "oscar-piastri",
        team: "McLaren",
        q1: "1:16.008",
        q2: "1:15.435",
        q3: "1:14.820",
        gap: "+0.074s",
      },
      {
        position: 3,
        driver: "Lando Norris",
        driverId: "lando-norris",
        team: "McLaren",
        q1: "1:15.978",
        q2: "1:15.340",
        q3: "1:14.837",
        gap: "+0.091s",
      },
      {
        position: 4,
        driver: "Charles Leclerc",
        driverId: "charles-leclerc",
        team: "Ferrari",
        q1: "1:15.723",
        q2: "1:15.292",
        q3: "1:14.970",
        gap: "+0.224s",
      },
      {
        position: 5,
        driver: "Carlos Sainz",
        driverId: "carlos-sainz",
        team: "Ferrari",
        q1: "1:15.846",
        q2: "1:15.390",
        q3: "1:15.233",
        gap: "+0.487s",
      },
    ],
    fastestLaps: [
      {
        driver: "Lewis Hamilton",
        driverId: "lewis-hamilton",
        lap: 63,
        time: "1:19.060",
        averageSpeed: "222.530 km/h",
      },
      {
        driver: "Max Verstappen",
        driverId: "max-verstappen",
        lap: 60,
        time: "1:19.232",
        averageSpeed: "221.998 km/h",
      },
      {
        driver: "Lando Norris",
        driverId: "lando-norris",
        lap: 61,
        time: "1:19.303",
        averageSpeed: "221.798 km/h",
      },
    ],
    pitStops: [
      {
        driver: "Max Verstappen",
        driverId: "max-verstappen",
        lap: 15,
        time: "15:32:24",
        duration: "2.4s",
        totalStops: 1,
      },
      {
        driver: "Lando Norris",
        driverId: "lando-norris",
        lap: 16,
        time: "15:33:41",
        duration: "2.2s",
        totalStops: 1,
      },
      {
        driver: "Charles Leclerc",
        driverId: "charles-leclerc",
        lap: 17,
        time: "15:34:58",
        duration: "2.3s",
        totalStops: 1,
      },
      {
        driver: "Oscar Piastri",
        driverId: "oscar-piastri",
        lap: 18,
        time: "15:36:15",
        duration: "2.5s",
        totalStops: 1,
      },
      {
        driver: "Carlos Sainz",
        driverId: "carlos-sainz",
        lap: 19,
        time: "15:37:32",
        duration: "2.6s",
        totalStops: 1,
      },
    ],
    lapChart: [
      {
        lap: 1,
        positions: [
          { driver: "Max Verstappen", driverId: "max-verstappen", position: 1 },
          { driver: "Oscar Piastri", driverId: "oscar-piastri", position: 2 },
          { driver: "Lando Norris", driverId: "lando-norris", position: 3 },
          { driver: "Charles Leclerc", driverId: "charles-leclerc", position: 4 },
          { driver: "Carlos Sainz", driverId: "carlos-sainz", position: 5 },
        ],
      },
      {
        lap: 10,
        positions: [
          { driver: "Max Verstappen", driverId: "max-verstappen", position: 1 },
          { driver: "Oscar Piastri", driverId: "oscar-piastri", position: 2 },
          { driver: "Lando Norris", driverId: "lando-norris", position: 3 },
          { driver: "Charles Leclerc", driverId: "charles-leclerc", position: 4 },
          { driver: "Carlos Sainz", driverId: "carlos-sainz", position: 5 },
        ],
      },
      {
        lap: 20,
        positions: [
          { driver: "Max Verstappen", driverId: "max-verstappen", position: 1 },
          { driver: "Lando Norris", driverId: "lando-norris", position: 2 },
          { driver: "Charles Leclerc", driverId: "charles-leclerc", position: 3 },
          { driver: "Oscar Piastri", driverId: "oscar-piastri", position: 4 },
          { driver: "Carlos Sainz", driverId: "carlos-sainz", position: 5 },
        ],
      },
      {
        lap: 30,
        positions: [
          { driver: "Max Verstappen", driverId: "max-verstappen", position: 1 },
          { driver: "Lando Norris", driverId: "lando-norris", position: 2 },
          { driver: "Charles Leclerc", driverId: "charles-leclerc", position: 3 },
          { driver: "Oscar Piastri", driverId: "oscar-piastri", position: 4 },
          { driver: "Carlos Sainz", driverId: "carlos-sainz", position: 5 },
        ],
      },
      {
        lap: 40,
        positions: [
          { driver: "Max Verstappen", driverId: "max-verstappen", position: 1 },
          { driver: "Lando Norris", driverId: "lando-norris", position: 2 },
          { driver: "Charles Leclerc", driverId: "charles-leclerc", position: 3 },
          { driver: "Oscar Piastri", driverId: "oscar-piastri", position: 4 },
          { driver: "Carlos Sainz", driverId: "carlos-sainz", position: 5 },
        ],
      },
      {
        lap: 50,
        positions: [
          { driver: "Max Verstappen", driverId: "max-verstappen", position: 1 },
          { driver: "Lando Norris", driverId: "lando-norris", position: 2 },
          { driver: "Charles Leclerc", driverId: "charles-leclerc", position: 3 },
          { driver: "Oscar Piastri", driverId: "oscar-piastri", position: 4 },
          { driver: "Carlos Sainz", driverId: "carlos-sainz", position: 5 },
        ],
      },
      {
        lap: 63,
        positions: [
          { driver: "Max Verstappen", driverId: "max-verstappen", position: 1 },
          { driver: "Lando Norris", driverId: "lando-norris", position: 2 },
          { driver: "Charles Leclerc", driverId: "charles-leclerc", position: 3 },
          { driver: "Oscar Piastri", driverId: "oscar-piastri", position: 4 },
          { driver: "Carlos Sainz", driverId: "carlos-sainz", position: 5 },
        ],
      },
    ],
  },
  6: {
    raceId: 6,
    practice1: [
      {
        position: 1,
        driver: "Charles Leclerc",
        driverId: "charles-leclerc",
        team: "Ferrari",
        time: "1:28.781",
        laps: 23,
      },
      {
        position: 2,
        driver: "Max Verstappen",
        driverId: "max-verstappen",
        team: "Red Bull Racing",
        time: "1:28.891",
        gap: "+0.110s",
        laps: 21,
      },
      {
        position: 3,
        driver: "Carlos Sainz",
        driverId: "carlos-sainz",
        team: "Ferrari",
        time: "1:29.206",
        gap: "+0.425s",
        laps: 22,
      },
      {
        position: 4,
        driver: "George Russell",
        driverId: "george-russell",
        team: "Mercedes",
        time: "1:29.485",
        gap: "+0.704s",
        laps: 20,
      },
      {
        position: 5,
        driver: "Fernando Alonso",
        driverId: "fernando-alonso",
        team: "Aston Martin",
        time: "1:29.583",
        gap: "+0.802s",
        laps: 19,
      },
    ],
    qualifying: [
      {
        position: 1,
        driver: "Max Verstappen",
        driverId: "max-verstappen",
        team: "Red Bull Racing",
        q1: "1:28.984",
        q2: "1:28.612",
        q3: "1:27.241",
      },
      {
        position: 2,
        driver: "Charles Leclerc",
        driverId: "charles-leclerc",
        team: "Ferrari",
        q1: "1:28.976",
        q2: "1:28.272",
        q3: "1:27.382",
        gap: "+0.141s",
      },
      {
        position: 3,
        driver: "Carlos Sainz",
        driverId: "carlos-sainz",
        team: "Ferrari",
        q1: "1:29.155",
        q2: "1:28.339",
        q3: "1:27.455",
        gap: "+0.214s",
      },
      {
        position: 4,
        driver: "Sergio Perez",
        driverId: "sergio-perez",
        team: "Red Bull Racing",
        q1: "1:29.461",
        q2: "1:28.625",
        q3: "1:27.460",
        gap: "+0.219s",
      },
      {
        position: 5,
        driver: "Lando Norris",
        driverId: "lando-norris",
        team: "McLaren",
        q1: "1:29.426",
        q2: "1:28.755",
        q3: "1:27.594",
        gap: "+0.353s",
      },
    ],
    sprint: [
      {
        position: 1,
        driver: "Max Verstappen",
        driverId: "max-verstappen",
        team: "Red Bull Racing",
        time: "30:26.993",
        laps: 19,
        points: 8,
      },
      {
        position: 2,
        driver: "Charles Leclerc",
        driverId: "charles-leclerc",
        team: "Ferrari",
        time: "30:27.693",
        gap: "+0.700s",
        laps: 19,
        points: 7,
      },
      {
        position: 3,
        driver: "Sergio Perez",
        driverId: "sergio-perez",
        team: "Red Bull Racing",
        time: "30:28.979",
        gap: "+1.986s",
        laps: 19,
        points: 6,
      },
      {
        position: 4,
        driver: "Carlos Sainz",
        driverId: "carlos-sainz",
        team: "Ferrari",
        time: "30:30.005",
        gap: "+3.012s",
        laps: 19,
        points: 5,
      },
      {
        position: 5,
        driver: "Lewis Hamilton",
        driverId: "lewis-hamilton",
        team: "Mercedes",
        time: "30:33.494",
        gap: "+6.501s",
        laps: 19,
        points: 4,
      },
    ],
    fastestLaps: [
      {
        driver: "Lando Norris",
        driverId: "lando-norris",
        lap: 56,
        time: "1:30.257",
        averageSpeed: "215.602 km/h",
      },
      {
        driver: "Max Verstappen",
        driverId: "max-verstappen",
        lap: 54,
        time: "1:30.456",
        averageSpeed: "215.132 km/h",
      },
      {
        driver: "Charles Leclerc",
        driverId: "charles-leclerc",
        lap: 55,
        time: "1:30.543",
        averageSpeed: "214.927 km/h",
      },
    ],
    pitStops: [
      {
        driver: "Max Verstappen",
        driverId: "max-verstappen",
        lap: 18,
        time: "20:32:24",
        duration: "2.5s",
        totalStops: 1,
      },
      {
        driver: "Lando Norris",
        driverId: "lando-norris",
        lap: 19,
        time: "20:33:41",
        duration: "2.3s",
        totalStops: 1,
      },
      {
        driver: "Charles Leclerc",
        driverId: "charles-leclerc",
        lap: 20,
        time: "20:34:58",
        duration: "2.4s",
        totalStops: 1,
      },
      {
        driver: "Sergio Perez",
        driverId: "sergio-perez",
        lap: 21,
        time: "20:36:15",
        duration: "2.6s",
        totalStops: 1,
      },
      {
        driver: "Carlos Sainz",
        driverId: "carlos-sainz",
        lap: 22,
        time: "20:37:32",
        duration: "2.7s",
        totalStops: 1,
      },
    ],
    lapChart: [
      {
        lap: 1,
        positions: [
          { driver: "Max Verstappen", driverId: "max-verstappen", position: 1 },
          { driver: "Charles Leclerc", driverId: "charles-leclerc", position: 2 },
          { driver: "Carlos Sainz", driverId: "carlos-sainz", position: 3 },
          { driver: "Sergio Perez", driverId: "sergio-perez", position: 4 },
          { driver: "Lando Norris", driverId: "lando-norris", position: 5 },
        ],
      },
      {
        lap: 10,
        positions: [
          { driver: "Max Verstappen", driverId: "max-verstappen", position: 1 },
          { driver: "Charles Leclerc", driverId: "charles-leclerc", position: 2 },
          { driver: "Carlos Sainz", driverId: "carlos-sainz", position: 3 },
          { driver: "Sergio Perez", driverId: "sergio-perez", position: 4 },
          { driver: "Lando Norris", driverId: "lando-norris", position: 5 },
        ],
      },
      {
        lap: 20,
        positions: [
          { driver: "Lando Norris", driverId: "lando-norris", position: 1 },
          { driver: "Max Verstappen", driverId: "max-verstappen", position: 2 },
          { driver: "Charles Leclerc", driverId: "charles-leclerc", position: 3 },
          { driver: "Carlos Sainz", driverId: "carlos-sainz", position: 4 },
          { driver: "Sergio Perez", driverId: "sergio-perez", position: 5 },
        ],
      },
      {
        lap: 30,
        positions: [
          { driver: "Lando Norris", driverId: "lando-norris", position: 1 },
          { driver: "Max Verstappen", driverId: "max-verstappen", position: 2 },
          { driver: "Charles Leclerc", driverId: "charles-leclerc", position: 3 },
          { driver: "Carlos Sainz", driverId: "carlos-sainz", position: 4 },
          { driver: "Sergio Perez", driverId: "sergio-perez", position: 5 },
        ],
      },
      {
        lap: 40,
        positions: [
          { driver: "Lando Norris", driverId: "lando-norris", position: 1 },
          { driver: "Max Verstappen", driverId: "max-verstappen", position: 2 },
          { driver: "Charles Leclerc", driverId: "charles-leclerc", position: 3 },
          { driver: "Carlos Sainz", driverId: "carlos-sainz", position: 4 },
          { driver: "Sergio Perez", driverId: "sergio-perez", position: 5 },
        ],
      },
      {
        lap: 50,
        positions: [
          { driver: "Lando Norris", driverId: "lando-norris", position: 1 },
          { driver: "Max Verstappen", driverId: "max-verstappen", position: 2 },
          { driver: "Charles Leclerc", driverId: "charles-leclerc", position: 3 },
          { driver: "Carlos Sainz", driverId: "carlos-sainz", position: 4 },
          { driver: "Sergio Perez", driverId: "sergio-perez", position: 5 },
        ],
      },
      {
        lap: 57,
        positions: [
          { driver: "Lando Norris", driverId: "lando-norris", position: 1 },
          { driver: "Max Verstappen", driverId: "max-verstappen", position: 2 },
          { driver: "Charles Leclerc", driverId: "charles-leclerc", position: 3 },
          { driver: "Sergio Perez", driverId: "sergio-perez", position: 4 },
          { driver: "Carlos Sainz", driverId: "carlos-sainz", position: 5 },
        ],
      },
    ],
  },
}

export function getRaceStats(raceId: number): RaceStats | undefined {
  return raceStats[raceId]
}
