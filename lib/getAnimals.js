import sql from "better-sqlite3";
import path from "path";

const db = sql(path.resolve(process.cwd(), "db/animals.db"));

export function getAnimals() {
  return db.prepare("SELECT * FROM animals").all();
}