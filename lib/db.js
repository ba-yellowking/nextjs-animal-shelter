import Database from "better-sqlite3";
import path from "path";

const db = new Database(path.resolve(process.cwd(), "db/animals.db"));

const dummyDataBase = [
  {
    name: "Max",
    slug: "max",
    age: 3,
    description: "Good boi",
    image: "/dog1.jpg",
  },
  {
    name: "Luna",
    slug: "luna",
    age: 2,
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
    description TEXT,
    image TEXT
  )
`).run();

const insert = db.prepare(`
  INSERT INTO animals (name, slug, age, description, image)
  VALUES (@name, @slug, @age, @description, @image)
`)

for (const animal of dummyDataBase) {
  try {
    insert.run(animal);
  } catch(err) {
    console.log(`Skipping duplicate slug "${animal.slug}"`);
  }
}

export default db;