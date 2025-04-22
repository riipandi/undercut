"use client"

import { useEffect, useRef } from "react"
import type { Circuit } from "@/lib/circuits-data"

interface CircuitRadarChartProps {
  circuits: Circuit[]
}

export default function CircuitRadarChart({ circuits }: CircuitRadarChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current || circuits.length === 0) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Set dimensions
    const width = canvas.width
    const height = canvas.height
    const centerX = width / 2
    const centerY = height / 2
    const radius = Math.min(centerX, centerY) - 50

    // Define metrics for comparison
    const metrics = [
      { name: "Length", getValue: (c: Circuit) => Number.parseFloat(c.length.replace(" km", "")) / 7 },
      { name: "Turns", getValue: (c: Circuit) => c.turns / 30 },
      { name: "Age", getValue: (c: Circuit) => (2024 - c.firstGrandPrix) / 80 },
      {
        name: "Speed",
        getValue: (c: Circuit) => {
          // Estimate speed based on lap record (lower time = higher speed)
          // Convert lap time to seconds
          const timeStr = c.lapRecord.time
          const [minutes, rest] = timeStr.split(":")
          const [seconds, milliseconds] = rest.split(".")
          const timeInSeconds =
            Number.parseFloat(minutes) * 60 + Number.parseFloat(seconds) + Number.parseFloat(milliseconds) / 1000

          // Normalize: shorter lap times (faster circuits) get higher values
          // Using a reference of 60 seconds as minimum and 120 seconds as maximum
          return 1 - (timeInSeconds - 60) / 60
        },
      },
      { name: "Technical", getValue: (c: Circuit) => c.turns / Number.parseFloat(c.length.replace(" km", "")) / 10 },
    ]

    const numMetrics = metrics.length
    const angleStep = (Math.PI * 2) / numMetrics

    // Draw radar background
    ctx.beginPath()
    for (let i = 0; i < numMetrics; i++) {
      const angle = i * angleStep - Math.PI / 2 // Start from top
      const x = centerX + radius * Math.cos(angle)
      const y = centerY + radius * Math.sin(angle)

      if (i === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    }
    ctx.closePath()
    ctx.fillStyle = "rgba(50, 50, 50, 0.3)"
    ctx.fill()
    ctx.strokeStyle = "#444"
    ctx.stroke()

    // Draw radar grid lines
    for (let j = 1; j <= 4; j++) {
      const gridRadius = radius * (j / 4)
      ctx.beginPath()
      for (let i = 0; i < numMetrics; i++) {
        const angle = i * angleStep - Math.PI / 2
        const x = centerX + gridRadius * Math.cos(angle)
        const y = centerY + gridRadius * Math.sin(angle)

        if (i === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      }
      ctx.closePath()
      ctx.strokeStyle = "#333"
      ctx.stroke()
    }

    // Draw axis lines
    for (let i = 0; i < numMetrics; i++) {
      const angle = i * angleStep - Math.PI / 2
      const x = centerX + radius * Math.cos(angle)
      const y = centerY + radius * Math.sin(angle)

      ctx.beginPath()
      ctx.moveTo(centerX, centerY)
      ctx.lineTo(x, y)
      ctx.strokeStyle = "#444"
      ctx.stroke()

      // Draw metric labels
      const labelX = centerX + (radius + 20) * Math.cos(angle)
      const labelY = centerY + (radius + 20) * Math.sin(angle)

      ctx.fillStyle = "#fff"
      ctx.font = "12px sans-serif"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText(metrics[i].name, labelX, labelY)
    }

    // Draw circuit data
    const colors = [
      "rgba(239, 68, 68, 0.7)", // red
      "rgba(59, 130, 246, 0.7)", // blue
      "rgba(16, 185, 129, 0.7)", // green
      "rgba(245, 158, 11, 0.7)", // amber
    ]

    circuits.forEach((circuit, circuitIndex) => {
      ctx.beginPath()

      metrics.forEach((metric, i) => {
        const value = metric.getValue(circuit)
        const angle = i * angleStep - Math.PI / 2
        const x = centerX + radius * value * Math.cos(angle)
        const y = centerY + radius * value * Math.sin(angle)

        if (i === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      })

      ctx.closePath()
      ctx.fillStyle = colors[circuitIndex % colors.length]
      ctx.globalAlpha = 0.5
      ctx.fill()
      ctx.globalAlpha = 1
      ctx.strokeStyle = colors[circuitIndex % colors.length].replace("0.7", "1")
      ctx.lineWidth = 2
      ctx.stroke()
    })

    // Draw legend
    const legendX = 20
    let legendY = 20

    circuits.forEach((circuit, i) => {
      const color = colors[i % colors.length]

      ctx.fillStyle = color
      ctx.fillRect(legendX, legendY, 15, 15)
      ctx.strokeStyle = color.replace("0.7", "1")
      ctx.strokeRect(legendX, legendY, 15, 15)

      ctx.fillStyle = "#fff"
      ctx.font = "12px sans-serif"
      ctx.textAlign = "left"
      ctx.textBaseline = "middle"
      ctx.fillText(circuit.name, legendX + 25, legendY + 7)

      legendY += 25
    })
  }, [circuits])

  return (
    <div>
      <h3 className="text-lg font-bold mb-4">Circuit Characteristics Comparison</h3>
      <div className="bg-zinc-900 rounded-lg p-4">
        <canvas ref={canvasRef} width={600} height={500} className="w-full h-auto"></canvas>
      </div>
      <div className="mt-2 text-xs text-zinc-400 text-center">
        This radar chart compares key characteristics of each circuit
      </div>
    </div>
  )
}
