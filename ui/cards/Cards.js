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
            <p>Age: {animal.age}</p>
            <p>{animal.description}</p>
            <p>{animal.species}</p>
            <p>{animal.color}</p>
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