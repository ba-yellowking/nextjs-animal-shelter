import Link from "next/link";
import Image from "next/image";
import db from "@/lib/db";
import classes from "./Cards.module.css";

function Cards() {

  const animals = db.prepare("SELECT id, name, slug, age, species, color, description, image FROM animals").all();

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