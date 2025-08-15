import Link from "next/link";
import Image from "next/image";
import classes from "./AnimalCard.module.css";

export default function AnimalCard({ animal }) {
  return (
    <>
      <div key={animal.id} className={classes.animalCard}>
        <h2>
          <Link href={`/animals/${animal.slug}`}>{animal.name}</Link>
        </h2>
        <p>Species: {animal.species}</p>
        <p>Age: {animal.age}</p>
        <p>Color: {animal.color}</p>
        <p>Information: {animal.description}</p>

        {animal.image && (
          <div className={classes.image}>
            <Image src={animal.image} alt={animal.name} fill unoptimized />
          </div>
        )}
      </div>
    </>
  );
}
