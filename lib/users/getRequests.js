import db from "@/lib/db";

export function getRequests() {
  return db
    .prepare(
      `
    SELECT 
      adoption_requests.id,
      adoption_requests.fullName,
      adoption_requests.phone,
      adoption_requests.email,
      adoption_requests.comment,
      animals.name AS animalName
    FROM adoption_requests
    JOIN animals ON adoption_requests.animalId = animals.id
  `,
    )
    .all();
}
