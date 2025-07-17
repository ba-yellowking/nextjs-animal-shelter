import sql from "better-sqlite3";
import path from "path";

const db = sql(path.resolve(process.cwd(), "db/animals.db"));

export function getCountAnimals() {
  return db.prepare("SELECT COUNT(*) AS count FROM animals").get();
}