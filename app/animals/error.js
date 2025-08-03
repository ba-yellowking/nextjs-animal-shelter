"use client";

import classes from "./page.module.css";

export default function Error() {
  return (
    <div className={classes.container}>
      <h1 className={classes.code}>Error</h1>
      <p className={classes.message}>Failed to fetch data. Try again later.</p>
    </div>
  );
}
