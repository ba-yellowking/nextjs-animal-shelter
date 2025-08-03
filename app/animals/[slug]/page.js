import Image from "next/image";
import { notFound } from "next/navigation";
import classes from "./page.module.css";
import { getAnimalBySlug } from "@/lib/getAnimalsBySlug";
import AdoptionRequestModal from "@/modals/adoptionRequestModal/AdoptionRequestModal";

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
  const { slug } = params;

  // server action - fetching information by slug
  const animal = getAnimalBySlug(slug);

  if (!animal) {
    notFound();
  }

  return (
    <main className={classes.card}>
      <div className={classes.visualInfo}>
        <div className={classes.image}>
          {animal.image && (
            <Image
              src={animal.image}
              alt={animal.name}
              fill
              style={{ objectFit: "cover" }}
            />
          )}
        </div>
        <AdoptionRequestModal />
      </div>

      <div className={classes.info}>
        <h1>{animal.name}</h1>
        <p>Age: {animal.age}</p>
        <p>Species: {animal.species}</p>
        <p>Color: {animal.color}</p>
        <p>More information: {animal.description}</p>
      </div>
    </main>
  );
}
