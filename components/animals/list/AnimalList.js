import { getAnimals } from "@/lib/getAnimals";
import AnimalCard from "@/components/animals/cards/AnimalCard";
import classes from "./AnimalList.module.css";

export default function AnimalList() {
  const animals = getAnimals();

  return (
    <div className={classes.container}>
      {animals.map((animal) => (
        <AnimalCard key={animal.id} animal={animal} />
      ))}
    </div>
  );
}
