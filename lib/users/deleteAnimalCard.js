import db from "@/lib/db";

export function deleteAnimalCard(id) {
  return db
    .prepare(
      `
    DELETE FROM animals
    WHERE id = ?
  `,
    )
    .run(id);
}
