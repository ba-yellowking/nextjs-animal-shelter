"use server";

import { redirect } from "next/navigation";
import { saveAnimal } from "@/lib/saveAnimal";
import { revalidatePath } from "next/cache";

export async function submitNewAnimal(prevState, formData) {
  // server action (async)
  // formData object collects data from inputs

  function isValidData(data) {
    return !data || data.trim() === "";
  }

  const newAnimal = {
    name: formData.get("name"),
    age: formData.get("age"),
    species: formData.get("species"),
    color: formData.get("color"),
    description: formData.get("description"),
    image: formData.get("image"),
  };

  if (
    isValidData(newAnimal.name) ||
    isValidData(newAnimal.age) ||
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

  // redirecting after adding a new animal
  redirect("/animals");
}
