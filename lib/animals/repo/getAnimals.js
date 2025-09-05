import db from "@/lib/db";

export function getAnimals() {
  return db.prepare("SELECT * FROM animals").all();
}
