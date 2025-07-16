import Database from "better-sqlite3";
import path from "path";

const db = new Database(path.resolve(process.cwd(), "db/animals.db"));

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
]

db.prepare(`
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
`).run();

const insert = db.prepare(`
  INSERT INTO animals (name, slug, age, species, color, description, image)
  VALUES (@name, @slug, @age, @species, @color, @description, @image)
`)

for (const animal of dummyDataBase) {
  try {
    insert.run(animal);
  } catch(err) {
    console.log(`Skipping duplicate slug "${animal.slug}"`);
  }
}

export default db;