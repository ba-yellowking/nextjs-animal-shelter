// this function generates a unique slug by adding animal.name + counter

import db from "@/lib/db";

export default function GenerateUniqueSlug(name) {
  function slugify(name) {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  }

  const baseSlug = slugify(name);
  let slug = baseSlug;
  let counter = 1;

  while (
    db.prepare("SELECT COUNT(*) AS count FROM animals WHERE slug = ?").get(slug)
      .count > 0
  ) {
    slug = `${baseSlug}-${counter}`;
    counter++;
  }

  return slug;
}
