import db from "@/lib/db";

export function getAnimalBySlug(slug) {
  return db
    .prepare(
      "SELECT id, name, age, species, breed, color, description, image FROM animals WHERE slug = ?",
    )
    .get(slug);
}
