import type { Database } from "./schema"
import { Kysely } from "kysely"

// This is a placeholder for the actual database instance
// It will be initialized only on the server
let db: Kysely<Database>

// Initialize the database only on the server side
if (typeof window === "undefined") {
  // Dynamic import to avoid 'fs' module being included in client bundles
  const { SqliteDialect } = require("kysely")
  const SQLite = require("better-sqlite3")

  const dialect = new SqliteDialect({
    database: new SQLite("f1tracker.db"),
  })

  db = new Kysely<Database>({
    dialect,
  })
}

// Helper function to format dates for SQLite
export function formatDate(date: Date = new Date()): string {
  return date.toISOString()
}

// Export the database instance
export { db }
