"use server";

import db from "@/lib/db";
import fs from "node:fs/promises"; // работа с файлами через промисы
import xss from "xss";
import { revalidatePath } from "next/cache";
import { verifyAuth } from "@/lib/users/auth";

export async function updateAnimalAction(prevState, formData) {
  const authResult = await verifyAuth();
  const user = authResult && authResult.user;

  if (!user) {
    return { ok: false, message: "Unauthorized" };
  }

  try {
    const id = Number(formData.get("id"));
    const slug = formData.get("slug") || "";
    const name = formData.get("name") || "";
    const species = formData.get("species") || "";
    const breed = formData.get("breed") || "";
    const color = formData.get("color") || "";
    const ageRaw = formData.get("age");
    const description = xss(formData.get("description") || "");

    let age = null;
    if (ageRaw !== null && ageRaw !== "") {
      age = Number(ageRaw);
    }

    let imagePath = null;
    const imageFile = formData.get("image");
    if (imageFile && typeof imageFile === "object" && imageFile.size > 0) {
      const nameParts = imageFile.name.split(".");
      const ext = nameParts[nameParts.length - 1];
      // const fileName = slug + "." + ext;
      const buffer = Buffer.from(await imageFile.arrayBuffer());
      await fs.writeFile("public/images/" + fileName, buffer);
      imagePath = "/images/" + fileName;
    }

    db.prepare(
      `
        UPDATE animals
        SET name = @name,
            age = @age,
            species = @species,
            breed = @breed,
            color = @color,
            description = @description,
            image = COALESCE(@image, image)
        WHERE id = @id
    `,
    ).run({
      id: id,
      name: name,
      age: age,
      species: species,
      breed: breed,
      color: color,
      description: description,
      image: imagePath,
    });

    revalidatePath("/animals");

    if (slug) {
      revalidatePath("/animals/" + slug);
    }

    return { ok: true, message: "Updated" };
  } catch (error) {
    console.error("Inline update failed:", error);
    return { ok: false, message: "Update failed" };
  }
}
