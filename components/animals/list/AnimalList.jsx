import { getAnimals } from "@/lib/animals/getAnimals";
import AnimalCard from "@/components/animals/cards/AnimalCard";
import classes from "./AnimalList.module.css";

export default function AnimalList() {
  const animals = getAnimals();

  if (!animals || animals.length === 0) {
    return (
      <div className={classes.container}>
        <h1 className={classes.noAnimals}>No animals</h1>
      </div>
    );
  }

  return (
    <div className={classes.container}>
      {animals.map((animal) => (
        <AnimalCard key={animal.id} animal={animal} />
      ))}
    </div>
  );
}
