export interface Circuit {
  id: string
  name: string
  country: string
  city: string
  length: string
  turns: number
  lapRecord: {
    time: string
    driver: string
    year: number
  }
  firstGrandPrix: number
  coordinates: {
    x: number // percentage position on the map (0-100)
    y: number // percentage position on the map (0-100)
  }
  description: string
  image: string
}

export const circuits: Circuit[] = [
  {
    id: "bahrain",
    name: "Bahrain International Circuit",
    country: "Bahrain",
    city: "Sakhir",
    length: "5.412 km",
    turns: 15,
    lapRecord: {
      time: "1:31.447",
      driver: "Pedro de la Rosa",
      year: 2005,
    },
    firstGrandPrix: 2004,
    coordinates: {
      x: 56.5,
      y: 42.5,
    },
    description:
      "The Bahrain International Circuit is a motorsport venue opened in 2004 and used for drag racing, GP2, and the annual Bahrain Grand Prix. The first Bahrain Grand Prix was held on April 4, 2004.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "jeddah",
    name: "Jeddah Corniche Circuit",
    country: "Saudi Arabia",
    city: "Jeddah",
    length: "6.174 km",
    turns: 27,
    lapRecord: {
      time: "1:30.734",
      driver: "Lewis Hamilton",
      year: 2021,
    },
    firstGrandPrix: 2021,
    coordinates: {
      x: 54.5,
      y: 43.5,
    },
    description:
      "The Jeddah Corniche Circuit is a street circuit in Jeddah, Saudi Arabia. It was constructed to host the inaugural Saudi Arabian Grand Prix in 2021. It is the second-longest circuit on the current Formula One calendar.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "albert-park",
    name: "Albert Park Circuit",
    country: "Australia",
    city: "Melbourne",
    length: "5.278 km",
    turns: 14,
    lapRecord: {
      time: "1:20.260",
      driver: "Charles Leclerc",
      year: 2022,
    },
    firstGrandPrix: 1996,
    coordinates: {
      x: 84.5,
      y: 68.5,
    },
    description:
      "The Albert Park Circuit is a street circuit around Albert Park Lake, south of central Melbourne. It is used annually as a racetrack for the Formula One Australian Grand Prix and associated support races.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "suzuka",
    name: "Suzuka International Racing Course",
    country: "Japan",
    city: "Suzuka",
    length: "5.807 km",
    turns: 18,
    lapRecord: {
      time: "1:30.983",
      driver: "Lewis Hamilton",
      year: 2019,
    },
    firstGrandPrix: 1987,
    coordinates: {
      x: 85.5,
      y: 39.5,
    },
    description:
      "The Suzuka International Racing Course is a motorsport race track located in Ino, Suzuka City, Mie Prefecture, Japan. It has a unique figure-eight layout with a long 1.2 km back straight that passes over the front section by means of an overpass.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "shanghai",
    name: "Shanghai International Circuit",
    country: "China",
    city: "Shanghai",
    length: "5.451 km",
    turns: 16,
    lapRecord: {
      time: "1:32.238",
      driver: "Michael Schumacher",
      year: 2004,
    },
    firstGrandPrix: 2004,
    coordinates: {
      x: 79.5,
      y: 41.5,
    },
    description:
      "The Shanghai International Circuit is a motorsport race track in the Jiading District, Shanghai. The circuit was designed as the race course for the Formula One Chinese Grand Prix and is shaped like the Chinese character 'shang' which stands for 'high' or 'above'.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "miami",
    name: "Miami International Autodrome",
    country: "United States",
    city: "Miami",
    length: "5.412 km",
    turns: 19,
    lapRecord: {
      time: "1:31.361",
      driver: "Max Verstappen",
      year: 2022,
    },
    firstGrandPrix: 2022,
    coordinates: {
      x: 25.5,
      y: 42.5,
    },
    description:
      "The Miami International Autodrome is a temporary circuit around Hard Rock Stadium in Miami Gardens, Florida. It was constructed to host the Miami Grand Prix, which was first held in 2022.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "imola",
    name: "Autodromo Enzo e Dino Ferrari",
    country: "Italy",
    city: "Imola",
    length: "4.909 km",
    turns: 19,
    lapRecord: {
      time: "1:15.484",
      driver: "Lewis Hamilton",
      year: 2020,
    },
    firstGrandPrix: 1980,
    coordinates: {
      x: 48.5,
      y: 37.5,
    },
    description:
      "The Autodromo Internazionale Enzo e Dino Ferrari, better known as Imola, is a motor racing circuit in the town of Imola, near Bologna. It is named after Ferrari's founder, Enzo Ferrari, and his son, Dino, who died in 1956.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "monaco",
    name: "Circuit de Monaco",
    country: "Monaco",
    city: "Monte Carlo",
    length: "3.337 km",
    turns: 19,
    lapRecord: {
      time: "1:12.909",
      driver: "Lewis Hamilton",
      year: 2021,
    },
    firstGrandPrix: 1950,
    coordinates: {
      x: 47.5,
      y: 37.5,
    },
    description:
      "The Circuit de Monaco is a street circuit laid out on the city streets of Monte Carlo and La Condamine around the harbor of the Principality of Monaco. It is commonly referred to as 'Monte Carlo' because it is largely inside the Monte Carlo neighborhood of Monaco.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "montreal",
    name: "Circuit Gilles Villeneuve",
    country: "Canada",
    city: "Montreal",
    length: "4.361 km",
    turns: 14,
    lapRecord: {
      time: "1:13.078",
      driver: "Valtteri Bottas",
      year: 2019,
    },
    firstGrandPrix: 1978,
    coordinates: {
      x: 27.5,
      y: 36.5,
    },
    description:
      "The Circuit Gilles Villeneuve is a motor racing circuit in Montreal, Quebec, Canada. It is the venue for the Formula One Canadian Grand Prix. It is named after Canadian Formula One driver Gilles Villeneuve, father of Jacques Villeneuve.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "barcelona",
    name: "Circuit de Barcelona-Catalunya",
    country: "Spain",
    city: "Barcelona",
    length: "4.675 km",
    turns: 16,
    lapRecord: {
      time: "1:18.149",
      driver: "Max Verstappen",
      year: 2021,
    },
    firstGrandPrix: 1991,
    coordinates: {
      x: 45.5,
      y: 38.5,
    },
    description:
      "The Circuit de Barcelona-Catalunya is a motorsport race track in Montmeló, Catalonia, Spain. The track has been the home of the Formula One Spanish Grand Prix since 1991 and also hosts the Catalan motorcycle Grand Prix.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "spielberg",
    name: "Red Bull Ring",
    country: "Austria",
    city: "Spielberg",
    length: "4.318 km",
    turns: 10,
    lapRecord: {
      time: "1:05.619",
      driver: "Carlos Sainz",
      year: 2020,
    },
    firstGrandPrix: 1970,
    coordinates: {
      x: 49.5,
      y: 36.5,
    },
    description:
      "The Red Bull Ring is a motorsport race track in Spielberg, Styria, Austria. It was founded as Österreichring and later named A1-Ring before being renamed to its current name in 2011 when Red Bull purchased and renovated the circuit.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "silverstone",
    name: "Silverstone Circuit",
    country: "United Kingdom",
    city: "Silverstone",
    length: "5.891 km",
    turns: 18,
    lapRecord: {
      time: "1:27.097",
      driver: "Max Verstappen",
      year: 2020,
    },
    firstGrandPrix: 1950,
    coordinates: {
      x: 45.5,
      y: 34.5,
    },
    description:
      "The Silverstone Circuit is a motor racing circuit in England, near the Northamptonshire villages of Silverstone and Whittlebury. It is the current home of the British Grand Prix, which it first hosted in 1948.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "hungaroring",
    name: "Hungaroring",
    country: "Hungary",
    city: "Mogyoród",
    length: "4.381 km",
    turns: 14,
    lapRecord: {
      time: "1:16.627",
      driver: "Lewis Hamilton",
      year: 2020,
    },
    firstGrandPrix: 1986,
    coordinates: {
      x: 51.5,
      y: 35.5,
    },
    description:
      "The Hungaroring is a motorsport race track in Mogyoród, Hungary where the Formula One Hungarian Grand Prix is held. It was the first Formula One race to be held behind the Iron Curtain in 1986.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "spa",
    name: "Circuit de Spa-Francorchamps",
    country: "Belgium",
    city: "Stavelot",
    length: "7.004 km",
    turns: 19,
    lapRecord: {
      time: "1:46.286",
      driver: "Valtteri Bottas",
      year: 2018,
    },
    firstGrandPrix: 1950,
    coordinates: {
      x: 47.5,
      y: 34.5,
    },
    description:
      "The Circuit de Spa-Francorchamps is a motor-racing circuit located in Stavelot, Belgium. It is the venue of the Formula One Belgian Grand Prix and is known for its challenging fast corners, dramatic elevation changes, and beautiful forest setting.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "zandvoort",
    name: "Circuit Zandvoort",
    country: "Netherlands",
    city: "Zandvoort",
    length: "4.259 km",
    turns: 14,
    lapRecord: {
      time: "1:11.097",
      driver: "Lewis Hamilton",
      year: 2021,
    },
    firstGrandPrix: 1952,
    coordinates: {
      x: 47.5,
      y: 33.5,
    },
    description:
      "Circuit Zandvoort is a motorsport race track located in the dunes north of Zandvoort, Netherlands. It is the venue for the Formula One Dutch Grand Prix, which returned to the Formula One calendar in 2021 after a 36-year absence.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "monza",
    name: "Autodromo Nazionale di Monza",
    country: "Italy",
    city: "Monza",
    length: "5.793 km",
    turns: 11,
    lapRecord: {
      time: "1:21.046",
      driver: "Rubens Barrichello",
      year: 2004,
    },
    firstGrandPrix: 1950,
    coordinates: {
      x: 48.5,
      y: 36.5,
    },
    description:
      "The Autodromo Nazionale di Monza is a historic race track located near the city of Monza, north of Milan, in Italy. Built in 1922, it is the world's third purpose-built motor racing circuit and the oldest in mainland Europe.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "baku",
    name: "Baku City Circuit",
    country: "Azerbaijan",
    city: "Baku",
    length: "6.003 km",
    turns: 20,
    lapRecord: {
      time: "1:43.009",
      driver: "Charles Leclerc",
      year: 2019,
    },
    firstGrandPrix: 2016,
    coordinates: {
      x: 58.5,
      y: 37.5,
    },
    description:
      "The Baku City Circuit is a street circuit in Baku, Azerbaijan. It is the venue for the Azerbaijan Grand Prix. The track is 6.003 km (3.730 mi) long and features the characteristics of a street circuit with its narrow sections.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "singapore",
    name: "Marina Bay Street Circuit",
    country: "Singapore",
    city: "Singapore",
    length: "4.940 km",
    turns: 19,
    lapRecord: {
      time: "1:41.905",
      driver: "Kevin Magnussen",
      year: 2018,
    },
    firstGrandPrix: 2008,
    coordinates: {
      x: 75.5,
      y: 51.5,
    },
    description:
      "The Marina Bay Street Circuit is a street circuit around Marina Bay in Singapore. It is the venue for the Singapore Grand Prix. The track is 5.063 km (3.146 mi) long and features 19 corners. It was the first night race in Formula One history.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "austin",
    name: "Circuit of the Americas",
    country: "United States",
    city: "Austin",
    length: "5.513 km",
    turns: 20,
    lapRecord: {
      time: "1:36.169",
      driver: "Charles Leclerc",
      year: 2019,
    },
    firstGrandPrix: 2012,
    coordinates: {
      x: 22.5,
      y: 42.5,
    },
    description:
      "The Circuit of the Americas is a grade 1 FIA-specification motorsport race track in Austin, Texas. It is the first purpose-built Formula One facility in the United States designed for any and all classes of racing.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "mexico-city",
    name: "Autódromo Hermanos Rodríguez",
    country: "Mexico",
    city: "Mexico City",
    length: "4.304 km",
    turns: 17,
    lapRecord: {
      time: "1:17.774",
      driver: "Valtteri Bottas",
      year: 2021,
    },
    firstGrandPrix: 1963,
    coordinates: {
      x: 21.5,
      y: 45.5,
    },
    description:
      "The Autódromo Hermanos Rodríguez is a motorsport race track in Mexico City, Mexico. Named after the racing drivers Ricardo and Pedro Rodríguez, it is the main Mexican motorsport venue and hosts the Formula One Mexican Grand Prix.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "interlagos",
    name: "Autódromo José Carlos Pace",
    country: "Brazil",
    city: "São Paulo",
    length: "4.309 km",
    turns: 15,
    lapRecord: {
      time: "1:10.540",
      driver: "Valtteri Bottas",
      year: 2018,
    },
    firstGrandPrix: 1973,
    coordinates: {
      x: 33.5,
      y: 62.5,
    },
    description:
      "The Autódromo José Carlos Pace, better known as Interlagos, is a motorsport circuit located in the city of São Paulo, Brazil. It is named after Brazilian Formula One driver José Carlos Pace, who died in a plane crash in 1977.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "las-vegas",
    name: "Las Vegas Strip Circuit",
    country: "United States",
    city: "Las Vegas",
    length: "6.120 km",
    turns: 17,
    lapRecord: {
      time: "1:35.490",
      driver: "Oscar Piastri",
      year: 2023,
    },
    firstGrandPrix: 2023,
    coordinates: {
      x: 18.5,
      y: 39.5,
    },
    description:
      "The Las Vegas Strip Circuit is a street circuit in Las Vegas, Nevada. It is the venue for the Las Vegas Grand Prix, which was first held in 2023. The track features a long straight along the famous Las Vegas Strip.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "losail",
    name: "Losail International Circuit",
    country: "Qatar",
    city: "Lusail",
    length: "5.380 km",
    turns: 16,
    lapRecord: {
      time: "1:23.196",
      driver: "Max Verstappen",
      year: 2023,
    },
    firstGrandPrix: 2021,
    coordinates: {
      x: 58.5,
      y: 43.5,
    },
    description:
      "The Losail International Circuit is a motorsport race track located just outside the city of Lusail, Qatar. It is the venue for the Qatar Grand Prix, which was first held in 2021.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "yas-marina",
    name: "Yas Marina Circuit",
    country: "United Arab Emirates",
    city: "Abu Dhabi",
    length: "5.281 km",
    turns: 16,
    lapRecord: {
      time: "1:26.103",
      driver: "Max Verstappen",
      year: 2021,
    },
    firstGrandPrix: 2009,
    coordinates: {
      x: 59.5,
      y: 43.5,
    },
    description:
      "The Yas Marina Circuit is a motorsport race track on Yas Island in Abu Dhabi, UAE. It is the venue for the Abu Dhabi Grand Prix. The circuit was designed by Hermann Tilke and is known for its unique features, including a section that runs underneath the Yas Hotel.",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export function getAllCircuits(): Circuit[] {
  return circuits
}

export function getCircuitById(id: string): Circuit | undefined {
  return circuits.find((circuit) => circuit.id === id)
}
