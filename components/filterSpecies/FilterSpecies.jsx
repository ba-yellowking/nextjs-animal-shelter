"use client";

import classes from "./FilterSpecies.module.css";

export default function FilterSpecies({ filter, setFilter }) {
  return (
    <div className={classes.filter}>
      <label htmlFor="status">Sort by species:</label>

      <select
        id="status"
        className={classes.check}
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="">All</option>
        <option value="dog">Dogs</option>
        <option value="cat">Cats</option>
      </select>
    </div>
  );
}
