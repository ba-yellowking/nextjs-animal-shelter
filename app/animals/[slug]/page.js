import Image from "next/image";
import { notFound } from "next/navigation";
import classes from "./page.module.css";
import { getAnimalBySlug } from "@/lib/animals/getAnimalsBySlug";
import AdoptionRequestModal from "@/modals/adoptionRequestModal/AdoptionRequestModal";
import { verifyAuth } from "@/lib/users/auth";

// dynamic metadata for slugs
export async function generateMetadata({ params }) {
  const slug = params.slug;
  const animal = getAnimalBySlug(slug);

  if (!animal) {
    notFound();
  }

  return {
    title: `${animal.name} - Animal Shelter`,
    description: animal.description,
  };
}

export default async function AnimalDetailsPage({ params }) {
  const { user, session } = verifyAuth();

  const { slug } = params;

  // server action - fetching information by slug
  const animal = getAnimalBySlug(slug);

  if (!animal) {
    notFound();
  }

  return (
    <main className={classes.card}>
      <div className={classes.image}>
        <div className={classes.animal}>
          {animal.image && (
            <Image
              src={animal.image}
              alt={animal.name}
              fill
              style={{ objectFit: "cover" }}
            />
          )}
        </div>
      </div>

      <div className={classes.details}>
        <h1>{animal.name}</h1>
        <p>
          <strong>Age:</strong> {animal.age}
        </p>
        <p>
          <strong>Species:</strong> {animal.species}
        </p>
        <p>
          <strong>Color:</strong> {animal.color}
        </p>
        <p>
          <strong>Other:</strong> {animal.description}
        </p>

        {!user && !session && <AdoptionRequestModal animalId={animal.id} />}
      </div>
    </main>
  );
}
