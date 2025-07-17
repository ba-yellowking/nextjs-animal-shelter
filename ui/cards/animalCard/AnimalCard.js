import Link from "next/link";
import Image from "next/image";
import classes from "./AnimalCard.module.css";

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function AnimalCard({ animal }) {
  await delay(3000);

  return (
    <ul className={classes.animalCard}>
      <h2>
        <Link href={`/animals/${animal.slug}`}>{animal.name}</Link>
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
  );
}
