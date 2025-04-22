import type { Database } from "./schema"
import { Kysely, SqliteDialect } from "kysely"
import SQLite from "better-sqlite3"

// Initialize SQLite database
const dialect = new SqliteDialect({
  database: new SQLite("f1tracker.db"),
})

// Create Kysely instance
export const db = new Kysely<Database>({
  dialect,
})

// Helper function to format dates for SQLite
export function formatDate(date: Date = new Date()): string {
  return date.toISOString()
}
