import db from "../../db";

export function initAnimalsTable() {
  db.prepare(
    `
    CREATE TABLE IF NOT EXISTS animals (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      slug TEXT UNIQUE NOT NULL,
      age INTEGER,
      species TEXT CHECK(species IN ('cat', 'dog')) NOT NULL,
      color TEXT NOT NULL,
      description TEXT,
      image TEXT
    )
  `,
  ).run();

  const count = db.prepare("SELECT COUNT(*) AS count FROM animals").get().count;

  if (count === 0) {
    const dummyData = [
      {
        name: "Max",
        slug: "max",
        age: 3,
        species: "dog",
        color: "white",
        description: "Good boi",
        image: "/dog1.jpg",
      },
      {
        name: "Luna",
        slug: "luna",
        age: 2,
        species: "dog",
        color: "black and white",
        description: "Another good boi",
        image: "/dog2.jpg",
      },
    ];

    const insert = db.prepare(`
      INSERT INTO animals (name, slug, age, species, color, description, image)
      VALUES (@name, @slug, @age, @species, @color, @description, @image)
    `);

    for (const animal of dummyData) insert.run(animal);
  }
}
