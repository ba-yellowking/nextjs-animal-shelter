import db from "@/lib/db";

export function initAdoptionRequestsTable() {
  db.prepare(
    `
    CREATE TABLE IF NOT EXISTS adoption_requests (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      animalId INTEGER NOT NULL,
      fullName TEXT NOT NULL,
      birth DATE NOT NULL,
      phone TEXT NOT NULL,
      comment TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (animalId) REFERENCES animals(id)
    )
  `,
  ).run();
}
