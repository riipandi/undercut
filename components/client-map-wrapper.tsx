"use client"

import dynamic from "next/dynamic"
import StaticCircuitMap from "@/components/static-circuit-map"

// Dynamically import the map component with no SSR
const InteractiveCircuitMap = dynamic(() => import("@/components/interactive-circuit-map"), {
  ssr: false,
  loading: () => <StaticCircuitMap />,
})

export default function ClientMapWrapper() {
  return <InteractiveCircuitMap />
}
