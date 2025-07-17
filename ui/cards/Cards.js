import { getAnimals } from "@/lib/getAnimals";
import classes from "./Cards.module.css";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import AnimalCard from "@/ui/cards/animalCard/AnimalCard";

export default function Cards() {
  const animals = getAnimals();

  return (
    <div className={classes.container}>
      {animals.map((animal) => (
        <Suspense key={animal.slug} fallback={<p>Loading animal...</p>}>
          <AnimalCard animal={animal} />
        </Suspense>
      ))}
    </div>
  );
}
