import { getAnimals } from "@/lib/animals/getAnimals";
import AnimalListClient from "@/components/animals/list/AnimalListClient";
import { verifyAuth } from "@/lib/users/auth";

export default async function AnimalList() {
  const animals = await getAnimals();
  const { user, session } = await verifyAuth();
  const canEdit = Boolean(user && session);

  return <AnimalListClient animals={animals} canEdit={canEdit} />;
}
