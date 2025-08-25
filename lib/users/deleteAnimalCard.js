import db from "@/lib/db";

export function deleteAnimalCard(id) {
  const deleteRequests = db.prepare(
    `DELETE FROM adoption_requests WHERE animalId = ?`,
  );
  deleteRequests.run(id);

  const deleteAnimal = db.prepare(`DELETE FROM animals WHERE id = ?`);
  return deleteAnimal.run(id);
}
