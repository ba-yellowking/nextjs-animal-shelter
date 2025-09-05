"use server";

import { redirect } from "next/navigation";
import { saveAnimal } from "@/lib/animals/repo/saveAnimal";
import { revalidatePath } from "next/cache";

// server actions are async
export async function submitNewAnimal(prevState, formData) {
  // formData object collects data from inputs

  function isValidData(data) {
    return !data || data.trim() === "";
  }

  const newAnimal = {
    name: formData.get("name"),
    age: formData.get("age"),
    species: formData.get("species"),
    breed: formData.get("breed"),
    color: formData.get("color"),
    description: formData.get("description"),
    image: formData.get("image"),
  };

  if (
    isValidData(newAnimal.name) ||
    isValidData(newAnimal.age) ||
    isValidData(newAnimal.breed) ||
    isValidData(newAnimal.color) ||
    isValidData(newAnimal.description) ||
    !newAnimal.image ||
    newAnimal.image.size === 0
  ) {
    return {
      message: "Invalid input.",
    };
  }

  await saveAnimal(newAnimal);

  // revalidatePath - throw away cache when npm run build related to /animals and layout (nested pages)
  // to revalidate all the site - "/", "layout"
  revalidatePath("/animals");

  redirect("/animals");
}
