import { getAnimals } from "@/lib/getAnimals";
import classes from "./Cards.module.css";
import Link from "next/link";
import Image from "next/image";

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function Cards() {
  await delay(3_000);
  const animals = getAnimals();

  return (
    <div className={classes.container}>
      {animals.map((animal) => (
        <ul key={animal.name} className={classes.animalCard}>
          <h2>
            <Link href={`/animals/${animal.slug}`}>
              {animal.name}
            </Link>
          </h2>
          <p>Species: {animal.species}</p>
          <p>Age: {animal.age}</p>
          <p>Color: {animal.color}</p>
          <p>Information: {animal.description}</p>

          {animal.image && (
            <div className={classes.image}>
              <Image
                src={animal.image}
                alt={animal.name}
                fill
                unoptimized
              />
            </div>
          )}
        </ul>
      ))}
    </div>
  );
}
