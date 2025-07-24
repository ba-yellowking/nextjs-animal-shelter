"use server";

export async function submitNewAnimal(formData) {
  // server action (async)
  // formData object collects data from inputs

  const newAnimal = {
    name: formData.get("name"),
    species: formData.get("species"),
    age: formData.get("age"),
    color: formData.get("color"),
    description: formData.get("description"),
    image: formData.get("image"),
  };

  console.log(newAnimal);
}
