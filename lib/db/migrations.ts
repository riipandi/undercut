import { db, formatDate } from "./index"

async function createTables() {
  // Create drivers table
  await db.schema
    .createTable("drivers")
    .ifNotExists()
    .addColumn("id", "integer", (col) => col.primaryKey().autoIncrement())
    .addColumn("driver_id", "text", (col) => col.notNull().unique())
    .addColumn("name", "text", (col) => col.notNull())
    .addColumn("number", "integer", (col) => col.notNull())
    .addColumn("team_id", "text", (col) => col.notNull())
    .addColumn("nationality", "text", (col) => col.notNull())
    .addColumn("age", "integer", (col) => col.notNull())
    .addColumn("created_at", "text", (col) => col.notNull().defaultTo(formatDate()))
    .addColumn("updated_at", "text", (col) => col.notNull().defaultTo(formatDate()))
    .execute()

  // Create teams table
  await db.schema
    .createTable("teams")
    .ifNotExists()
    .addColumn("id", "integer", (col) => col.primaryKey().autoIncrement())
    .addColumn("team_id", "text", (col) => col.notNull().unique())
    .addColumn("name", "text", (col) => col.notNull())
    .addColumn("full_name", "text", (col) => col.notNull())
    .addColumn("color", "text", (col) => col.notNull())
    .addColumn("created_at", "text", (col) => col.notNull().defaultTo(formatDate()))
    .addColumn("updated_at", "text", (col) => col.notNull().defaultTo(formatDate()))
    .execute()

  // Create circuits table
  await db.schema
    .createTable("circuits")
    .ifNotExists()
    .addColumn("id", "integer", (col) => col.primaryKey().autoIncrement())
    .addColumn("circuit_id", "text", (col) => col.notNull().unique())
    .addColumn("name", "text", (col) => col.notNull())
    .addColumn("country", "text", (col) => col.notNull())
    .addColumn("country_code", "text", (col) => col.notNull())
    .addColumn("city", "text", (col) => col.notNull())
    .addColumn("length", "text", (col) => col.notNull())
    .addColumn("turns", "integer", (col) => col.notNull())
    .addColumn("lap_record_time", "text", (col) => col.notNull())
    .addColumn("lap_record_driver", "text", (col) => col.notNull())
    .addColumn("lap_record_year", "integer", (col) => col.notNull())
    .addColumn("first_grand_prix", "integer", (col) => col.notNull())
    .addColumn("created_at", "text", (col) => col.notNull().defaultTo(formatDate()))
    .addColumn("updated_at", "text", (col) => col.notNull().defaultTo(formatDate()))
    .execute()

  // Create races table
  await db.schema
    .createTable("races")
    .ifNotExists()
    .addColumn("id", "integer", (col) => col.primaryKey().autoIncrement())
    .addColumn("race_id", "integer", (col) => col.notNull().unique())
    .addColumn("name", "text", (col) => col.notNull())
    .addColumn("circuit_id", "text", (col) => col.notNull())
    .addColumn("date", "text", (col) => col.notNull())
    .addColumn("time", "text", (col) => col.notNull())
    .addColumn("round", "integer", (col) => col.notNull())
    .addColumn("sprint_race", "boolean", (col) => col.notNull().defaultTo(false))
    .addColumn("is_past", "boolean", (col) => col.notNull().defaultTo(false))
    .addColumn("created_at", "text", (col) => col.notNull().defaultTo(formatDate()))
    .addColumn("updated_at", "text", (col) => col.notNull().defaultTo(formatDate()))
    .execute()

  // Create lap_times table
  await db.schema
    .createTable("lap_times")
    .ifNotExists()
    .addColumn("id", "integer", (col) => col.primaryKey().autoIncrement())
    .addColumn("race_id", "integer", (col) => col.notNull())
    .addColumn("driver_id", "text", (col) => col.notNull())
    .addColumn("lap", "integer", (col) => col.notNull())
    .addColumn("position", "integer", (col) => col.notNull())
    .addColumn("time", "text", (col) => col.notNull())
    .addColumn("sector_1", "text", (col) => col.notNull())
    .addColumn("sector_2", "text", (col) => col.notNull())
    .addColumn("sector_3", "text", (col) => col.notNull())
    .addColumn("speed_trap", "integer", (col) => col.notNull())
    .addColumn("created_at", "text", (col) => col.notNull().defaultTo(formatDate()))
    .addColumn("updated_at", "text", (col) => col.notNull().defaultTo(formatDate()))
    .execute()

  // Create practice_sessions table
  await db.schema
    .createTable("practice_sessions")
    .ifNotExists()
    .addColumn("id", "integer", (col) => col.primaryKey().autoIncrement())
    .addColumn("race_id", "integer", (col) => col.notNull())
    .addColumn("session_type", "text", (col) => col.notNull())
    .addColumn("driver_id", "text", (col) => col.notNull())
    .addColumn("position", "integer", (col) => col.notNull())
    .addColumn("time", "text", (col) => col.notNull())
    .addColumn("laps", "integer", (col) => col.notNull())
    .addColumn("created_at", "text", (col) => col.notNull().defaultTo(formatDate()))
    .addColumn("updated_at", "text", (col) => col.notNull().defaultTo(formatDate()))
    .execute()

  // Create qualifying_results table
  await db.schema
    .createTable("qualifying_results")
    .ifNotExists()
    .addColumn("id", "integer", (col) => col.primaryKey().autoIncrement())
    .addColumn("race_id", "integer", (col) => col.notNull())
    .addColumn("driver_id", "text", (col) => col.notNull())
    .addColumn("position", "integer", (col) => col.notNull())
    .addColumn("q1", "text")
    .addColumn("q2", "text")
    .addColumn("q3", "text")
    .addColumn("created_at", "text", (col) => col.notNull().defaultTo(formatDate()))
    .addColumn("updated_at", "text", (col) => col.notNull().defaultTo(formatDate()))
    .execute()

  // Create race_results table
  await db.schema
    .createTable("race_results")
    .ifNotExists()
    .addColumn("id", "integer", (col) => col.primaryKey().autoIncrement())
    .addColumn("race_id", "integer", (col) => col.notNull())
    .addColumn("driver_id", "text", (col) => col.notNull())
    .addColumn("position", "integer", (col) => col.notNull())
    .addColumn("points", "integer", (col) => col.notNull())
    .addColumn("time", "text", (col) => col.notNull())
    .addColumn("laps", "integer", (col) => col.notNull())
    .addColumn("created_at", "text", (col) => col.notNull().defaultTo(formatDate()))
    .addColumn("updated_at", "text", (col) => col.notNull().defaultTo(formatDate()))
    .execute()

  // Create team_radio table
  await db.schema
    .createTable("team_radio")
    .ifNotExists()
    .addColumn("id", "integer", (col) => col.primaryKey().autoIncrement())
    .addColumn("race_id", "integer", (col) => col.notNull())
    .addColumn("driver_id", "text", (col) => col.notNull())
    .addColumn("timestamp", "text", (col) => col.notNull())
    .addColumn("lap", "integer", (col) => col.notNull())
    .addColumn("message", "text", (col) => col.notNull())
    .addColumn("audio_url", "text")
    .addColumn("created_at", "text", (col) => col.notNull().defaultTo(formatDate()))
    .addColumn("updated_at", "text", (col) => col.notNull().defaultTo(formatDate()))
    .execute()

  // Create videos table
  await db.schema
    .createTable("videos")
    .ifNotExists()
    .addColumn("id", "integer", (col) => col.primaryKey().autoIncrement())
    .addColumn("video_id", "text", (col) => col.notNull().unique())
    .addColumn("title", "text", (col) => col.notNull())
    .addColumn("description", "text", (col) => col.notNull())
    .addColumn("race_id", "integer")
    .addColumn("thumbnail_url", "text", (col) => col.notNull())
    .addColumn("video_url", "text", (col) => col.notNull())
    .addColumn("duration", "text", (col) => col.notNull())
    .addColumn("type", "text", (col) => col.notNull())
    .addColumn("created_at", "text", (col) => col.notNull().defaultTo(formatDate()))
    .addColumn("updated_at", "text", (col) => col.notNull().defaultTo(formatDate()))
    .execute()

  console.log("All tables created successfully")
}

// Run the migration
createTables()
  .then(() => {
    console.log("Migration completed successfully")
    process.exit(0)
  })
  .catch((error) => {
    console.error("Migration failed:", error)
    process.exit(1)
  })
