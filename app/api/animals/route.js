import db from "@/lib/db";

export async function POST(request) {
  const data = await request.json();

  const { name, slug, age, description, image } = data;

  if (!name || !image) {
    return new Response("Missing fields", { status: 400 });
  }

  try {
    db.prepare(`
        INSERT INTO animals (name, slug, age, description, image)
        VALUES (?, ?, ?, ?, ?)
    `).run(name, slug, age, description, image);

    return new Response(JSON.stringify({ success: true }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error(err);
    return new Response("Error saving to database", { status: 500 });
  }
}
