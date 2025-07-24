import Database from "better-sqlite3";
import path from "path";
import fs from "fs";

const dbPath = path.resolve(process.cwd(), "db/animals.db");
const db = new Database(dbPath);

// creating an initial db function
function initDb() {
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

  // fill the table with dummy if empty
  const count = db.prepare("SELECT COUNT(*) AS count FROM animals").get().count;

  if (count === 0) {
    const dummyDataBase = [
      {
        name: "Max",
        slug: "max",
        age: 3,
        species: "dog",
        color: "orange",
        description: "Good boi",
        image: "/dog1.jpg",
      },
      {
        name: "Luna",
        slug: "luna",
        age: 2,
        species: "dog",
        color: "black",
        description: "Another good boi",
        image: "/dog2.jpg",
      },
    ];

    const insert = db.prepare(`
      INSERT INTO animals (name, slug, age, species, color, description, image)
      VALUES (@name, @slug, @age, @species, @color, @description, @image)
    `);

    for (const animal of dummyDataBase) {
      insert.run(animal);
    }
  }
}

initDb(); // initialize a db

export default db;
