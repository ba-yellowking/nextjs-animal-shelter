"use server";

import { redirect } from "next/navigation";
import { saveAnimal } from "@/lib/saveAnimal";

export async function submitNewAnimal(formData) {
  // server action (async)
  // formData object collects data from inputs

  const newAnimal = {
    name: formData.get("name"),
    age: formData.get("age"),
    species: formData.get("species"),
    color: formData.get("color"),
    description: formData.get("description"),
    image: formData.get("image"),
  };

  await saveAnimal(newAnimal);
  // redirecting after adding a new animal
  redirect("/animals");
}
