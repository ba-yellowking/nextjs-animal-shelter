import classes from "./AnimalCard.module.css";
import Link from "next/link";
import Image from "next/image";
import { verifyAuth } from "@/lib/users/auth";
import DeleteComponent from "@/lib/users/components/deleteComponent/DeleteComponent";

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
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#333"
                  d="M3 21v-4.25L16.2 3.575q.3-.275.663-.425t.762-.15t.775.15t.65.45L20.425 5q.3.275.438.65T21 6.4q0 .4-.137.763t-.438.662L7.25 21zM17.6 7.8L19 6.4L17.6 5l-1.4 1.4z"
                />
              </svg>
            </div>
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
