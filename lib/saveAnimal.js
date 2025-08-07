import db from "@/lib/db";
import fs from "node:fs";
import xss from "xss";
import slugify from "slugify";
import GenerateUniqueSlug from "@/app/animals/[slug]/GenerateUniqueSlug";

export async function saveAnimal(newAnimal) {
  newAnimal.slug = slugify(GenerateUniqueSlug(newAnimal.name), { lower: true });
  newAnimal.description = xss(newAnimal.description);

  // image processing
  const extension = newAnimal.image.name.split(".").pop();
  const fileName = `${newAnimal.slug}.${extension}`;
  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await newAnimal.image.arrayBuffer();
  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Saving image failed");
    }
  });
  newAnimal.image = `/images/${fileName}`;

  db.prepare(
    `
    INSERT INTO animals (name, slug, age, species, color, description, image)
    VALUES (@name, @slug, @age, @species, @color, @description, @image)
  `,
  ).run(newAnimal);
}
