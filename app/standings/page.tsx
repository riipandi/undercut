"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import DriverStandingsTable from "@/components/driver-standings-table"
import ConstructorStandingsTable from "@/components/constructor-standings-table"

export default function StandingsPage() {
  const [activeTab, setActiveTab] = useState("drivers")

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-red-600 mb-2">F1 STANDINGS</h1>
        <p className="text-zinc-400">Current championship standings for the 2024 Formula 1 season</p>
      </header>

      <Tabs defaultValue="drivers" onValueChange={setActiveTab}>
        <div className="mb-6">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="drivers">Driver Standings</TabsTrigger>
            <TabsTrigger value="constructors">Constructor Standings</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="drivers">
          <DriverStandingsTable />
        </TabsContent>

        <TabsContent value="constructors">
          <ConstructorStandingsTable />
        </TabsContent>
      </Tabs>
    </div>
  )
}
