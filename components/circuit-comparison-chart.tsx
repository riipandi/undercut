"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import type { Circuit } from "@/lib/circuits-data"

interface CircuitComparisonChartProps {
  circuits: Circuit[]
  dataKey: keyof Circuit | "lapRecordTime"
  title: string
  icon?: React.ReactNode
  valueFormatter?: (value: string) => string
  unit?: string
}

export default function CircuitComparisonChart({
  circuits,
  dataKey,
  title,
  icon,
  valueFormatter = (value) => value.toString(),
  unit = "",
}: CircuitComparisonChartProps) {
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
    const barWidth = Math.min(80, (width - 100) / circuits.length)
    const spacing = 20
    const startX = 80
    const startY = height - 40

    // Get data values
    const values = circuits.map((circuit) => {
      if (dataKey === "lapRecordTime") {
        // Convert lap time to seconds for comparison
        const timeStr = circuit.lapRecord.time
        const [minutes, rest] = timeStr.split(":")
        const [seconds, milliseconds] = rest.split(".")
        return Number.parseFloat(minutes) * 60 + Number.parseFloat(seconds) + Number.parseFloat(milliseconds) / 1000
      } else if (dataKey === "length") {
        // Extract numeric value from length string (e.g. "5.412 km" -> 5.412)
        const lengthStr = circuit[dataKey] as string
        return Number.parseFloat(lengthStr)
      } else {
        // For other numeric values
        return typeof circuit[dataKey] === "number" ? (circuit[dataKey] as number) : 0
      }
    })

    // Calculate max value for scaling
    const maxValue = Math.max(...values)

    // Calculate scale factor
    const scaleFactor = (startY - 60) / maxValue

    // Draw axes
    ctx.beginPath()
    ctx.strokeStyle = "#666"
    ctx.lineWidth = 1
    ctx.moveTo(startX, 20)
    ctx.lineTo(startX, startY)
    ctx.lineTo(width - 20, startY)
    ctx.stroke()

    // Draw bars
    circuits.forEach((circuit, index) => {
      const value = values[index]
      const barHeight = value * scaleFactor
      const x = startX + index * (barWidth + spacing)
      const y = startY - barHeight

      // Draw bar
      ctx.fillStyle = getColorForIndex(index)
      ctx.fillRect(x, y, barWidth, barHeight)

      // Draw circuit name
      ctx.fillStyle = "#fff"
      ctx.font = "10px sans-serif"
      ctx.textAlign = "center"
      ctx.save()
      ctx.translate(x + barWidth / 2, startY + 10)
      ctx.rotate(Math.PI / 4)
      ctx.fillText(circuit.name.substring(0, 15), 0, 0)
      ctx.restore()

      // Draw value
      let displayValue: string

      if (dataKey === "lapRecordTime") {
        displayValue = circuit.lapRecord.time
      } else if (dataKey === "length") {
        displayValue = valueFormatter(circuit[dataKey] as string)
        if (unit) displayValue += ` ${unit}`
      } else {
        displayValue = valueFormatter(circuit[dataKey]?.toString() || "0")
        if (unit) displayValue += ` ${unit}`
      }

      ctx.fillStyle = "#fff"
      ctx.font = "12px sans-serif"
      ctx.textAlign = "center"
      ctx.fillText(displayValue, x + barWidth / 2, y - 10)
    })

    // Draw y-axis labels
    const numLabels = 5
    for (let i = 0; i <= numLabels; i++) {
      const value = (maxValue / numLabels) * i
      const y = startY - value * scaleFactor

      ctx.fillStyle = "#999"
      ctx.font = "10px sans-serif"
      ctx.textAlign = "right"
      ctx.fillText(value.toFixed(1), startX - 5, y + 3)

      // Draw grid line
      ctx.beginPath()
      ctx.strokeStyle = "#444"
      ctx.setLineDash([2, 2])
      ctx.moveTo(startX, y)
      ctx.lineTo(width - 20, y)
      ctx.stroke()
      ctx.setLineDash([])
    }
  }, [circuits, dataKey, valueFormatter, unit])

  // Helper function to get color based on index
  const getColorForIndex = (index: number): string => {
    const colors = [
      "rgba(239, 68, 68, 0.8)", // red
      "rgba(59, 130, 246, 0.8)", // blue
      "rgba(16, 185, 129, 0.8)", // green
      "rgba(245, 158, 11, 0.8)", // amber
    ]
    return colors[index % colors.length]
  }

  return (
    <div>
      <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
        {icon}
        {title}
      </h3>
      <div className="bg-zinc-900 rounded-lg p-4 h-[300px]">
        <canvas ref={canvasRef} width={800} height={300} className="w-full h-full"></canvas>
      </div>
    </div>
  )
}
