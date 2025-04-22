"use client"

import { useState } from "react"
import { Share2, Check, Copy } from "lucide-react"
import type { Circuit } from "@/lib/circuits-data"

interface ShareComparisonProps {
  circuits: Circuit[]
}

export default function ShareComparison({ circuits }: ShareComparisonProps) {
  const [copied, setCopied] = useState(false)

  if (circuits.length === 0) return null

  const circuitIds = circuits.map((c) => c.id).join(",")
  const shareUrl = `${window.location.origin}/circuits/compare?circuits=${circuitIds}`

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy: ", err)
    }
  }

  return (
    <div className="bg-zinc-800 rounded-lg overflow-hidden">
      <div className="p-4 bg-zinc-700 flex items-center gap-2">
        <Share2 className="h-5 w-5" />
        <h2 className="text-xl font-bold">Share Comparison</h2>
      </div>
      <div className="p-4">
        <p className="text-sm text-zinc-400 mb-3">Share this comparison with others using the link below:</p>
        <div className="flex">
          <input type="text" value={shareUrl} readOnly className="flex-1 bg-zinc-700 rounded-l-lg px-3 py-2 text-sm" />
          <button
            onClick={copyToClipboard}
            className="bg-red-600 hover:bg-red-700 transition-colors rounded-r-lg px-4 py-2 flex items-center gap-2"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4" />
                <span>Copied</span>
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
