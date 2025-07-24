import db from "@/lib/db";

export function getAnimalBySlug(slug) {
  return db
    .prepare(
      "SELECT name, age, species, color, description, image FROM animals WHERE slug = ?",
    )
    .get(slug);
}
