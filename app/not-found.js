import Link from "next/link";
import classes from "./page.module.css";

export default function NotFound() {
  return (
    <div className={classes.container}>
      <h1 className={classes.code}>404</h1>
      <p className={classes.message}>Oops! Page not found.</p>
      <Link href="/" className={classes.link}>
        ← Go back home
      </Link>
    </div>
  );
}
