import sql from "better-sqlite3";
import path from "path";

const db = sql(path.resolve(process.cwd(), "db/animals.db"));

export function getAnimalBySlug(slug) {
  return db
    .prepare("SELECT name, age, species, color, description, image FROM animals WHERE slug = ?")
    .get(slug);
}
