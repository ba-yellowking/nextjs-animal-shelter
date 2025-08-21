"use client";

import classes from "./error.module.css";

export default function Error({ error }) {
  return (
    <div className={classes.wrapper}>
      <div className={classes.title}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="105"
          height="105"
          viewBox="0 0 24 24"
        >
          <path
            fill="#8d9ca4"
            d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11H1.3l2.22-3.994A10.96 10.96 0 0 1 1 12C1 5.925 5.925 1 12 1m-1 5.5V14h2V6.5zm2.004 9H11v2.004h2.004z"
          />
        </svg>
        <h1 className={classes.error}>Error</h1>
      </div>
      <p className={classes.message}>
        {error?.message || "Something went wrong."}
      </p>
    </div>
  );
}
