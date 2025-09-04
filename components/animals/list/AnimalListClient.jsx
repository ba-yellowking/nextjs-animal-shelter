"use client";

import classes from "./AnimalListClient.module.css";
import FilterSpecies from "@/components/filterSpecies/FilterSpecies";
import AnimalCard from "@/components/animals/cards/AnimalCard";
import { useMemo, useState } from "react";

export default function AnimalListClient({ animals, canEdit }) {
  const [filter, setFilter] = useState("");

  const visible = useMemo(
    () => (filter ? animals.filter((a) => a.species === filter) : animals),
    [filter, animals],
  );

  if (!animals || animals.length === 0) {
    return (
      <div className={classes.container}>
        <h1 className={classes.noAnimals}>No animals</h1>
      </div>
    );
  }

  return (
    <div className={classes.animalList}>
      <FilterSpecies filter={filter} setFilter={setFilter} />
      <div className={classes.container}>
        {visible.length ? (
          visible.map((animal) => (
            <AnimalCard key={animal.id} animal={animal} canEdit={canEdit} />
          ))
        ) : (
          <div>No</div>
        )}
      </div>
    </div>
  );
}
