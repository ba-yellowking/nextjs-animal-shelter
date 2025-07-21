import db from "@/lib/db";

// creating a base slug
function createSlug(name) {
  return name.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^a-z0-9\-]/g, "");
}

// generating a unique slug name
function generateUniqueSlug(name) {
  const baseSlug = createSlug(name);
  let slug = baseSlug;
  let counter = 1;

  while (
    db.prepare("SELECT 1 FROM animals WHERE slug = ?").get(slug)
    ) {
    slug = `${baseSlug}-${counter}`;
    counter++;
  }

  return slug;
}

export async function POST(request) {
  const data = await request.json();

  const { name, age, species, color, description, image } = data;

  if (!name || !image) {
    return new Response("Missing fields", { status: 400 });
  }

  const slug = generateUniqueSlug(name);

  try {
    db.prepare(`
        INSERT INTO animals (name, slug, age, species, color, description, image)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `).run(name, slug, age, species, color, description, image);

    return new Response(JSON.stringify({ success: true }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  }

  catch (err) {
    console.error(err);
    return new Response("Error saving to database", { status: 500 });
  }
}
