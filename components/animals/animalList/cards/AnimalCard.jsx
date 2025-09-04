import classes from "./AnimalCard.module.css";
import Link from "next/link";
import Image from "next/image";
import DeleteComponent from "@/lib/users/components/deleteComponent/DeleteComponent";
import UpdateAnimalModal from "@/lib/users/components/updateComponent/modal/UpdateAnimalModal";
import CapitalizeWords from "@/helpers/CapitalizeWords";

export default function AnimalCard({ animal, canEdit }) {
  const name = CapitalizeWords(animal.name);

  return (
    <div key={animal.id} className={classes.animalCard}>
      <div className={classes.heading}>
        <Link className={classes.title} href={`/animals/${animal.slug}`}>
          {name}
        </Link>

        {canEdit && (
          <div className={classes.controls}>
            <UpdateAnimalModal animal={animal} />
            <DeleteComponent id={animal.id} />
          </div>
        )}
      </div>

      <p>Species: {animal.species}</p>
      <p>Breed: {animal.breed}</p>
      <p>Age: {animal.age}</p>
      <p>Color: {animal.color}</p>
      <p>Information: {animal.description}</p>

      {animal.image && (
        <div className={classes.image}>
          <Image src={animal.image} alt={animal.name} fill unoptimized />
        </div>
      )}
    </div>
  );
}
