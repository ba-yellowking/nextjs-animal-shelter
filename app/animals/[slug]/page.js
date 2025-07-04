import db from "@/lib/db";
import Image from "next/image";
import { notFound } from "next/navigation";
import classes from "./page.module.css";

export default function AnimalPage({ params }) {
  const { slug } = params;

  const animal = db
    .prepare("SELECT name, age, description, image FROM animals WHERE slug = ?")
    .get(slug);

  if (!animal) {
    notFound();
  }

  return (
    <main className={classes.card}>
      <div>
        <h1>{animal.name}</h1>
        <p>Age: {animal.age}</p>
        <p>{animal.description}</p>

        {animal.image && (
          <div className={classes.image}>
            <Image src={animal.image} alt={animal.name} fill unoptimized />
          </div>
        )}
      </div>
    </main>
  )
}