import db from "@/lib/db";

export function initSignUpTable() {
  db.prepare(
    `
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
    )
  `,
  ).run();
}
