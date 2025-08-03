import db from "@/lib/db";

export function initAdoptionRequestsTable() {
  db.prepare(
    `
    CREATE TABLE IF NOT EXISTS adoption_requests (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      animal_id INTEGER NOT NULL,
      full_name TEXT NOT NULL,
      phone TEXT NOT NULL,
      message TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (animal_id) REFERENCES animals(id)
    )
  `,
  ).run();
}
