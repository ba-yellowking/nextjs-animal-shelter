"use server";

import { revalidatePath } from "next/cache";
import { deleteAnimalCard } from "@/lib/users/deleteAnimalCard";

export async function DeleteAnimalAction(id) {
  deleteAnimalCard(id);
  revalidatePath("/animals");
}
