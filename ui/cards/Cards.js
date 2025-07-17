import Link from "next/link";
import Image from "next/image";
import classes from "./Cards.module.css";
import {getAnimals} from "@/lib/getAnimals";

function Cards() {

  const animals = getAnimals();

  return (
    <div className={classes.container}>
      {
        animals.map((animal) => (
          <ul key={animal.id} className={classes.animalCard}>
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
        ))
      }
    </div>
  )
}

export default Cards;