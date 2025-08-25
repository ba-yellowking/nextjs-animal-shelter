import classes from "./AnimalCard.module.css";
import Link from "next/link";
import Image from "next/image";
import { verifyAuth } from "@/lib/users/auth";
import DeleteComponent from "@/lib/users/components/deleteComponent/DeleteComponent";
import UpdateComponent from "@/lib/users/components/updateComponent/UpdateComponent";
import UpdateAnimalModal from "@/lib/users/components/updateComponent/modal/UpdateAnimalModal";

export default async function AnimalCard({ animal }) {
  const { user, session } = await verifyAuth();

  return (
    <div key={animal.id} className={classes.animalCard}>
      <div className={classes.heading}>
        <Link className={classes.title} href={`/animals/${animal.slug}`}>
          {animal.name}
        </Link>

        {user && session && (
          <div className={classes.controls}>
            <UpdateAnimalModal animal={animal} />
            <DeleteComponent id={animal.id} />
          </div>
        )}
      </div>

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
  );
}
