import Link from "next/link";
// import AdminPage from "@/app/admin/page";
import classes from "./page.module.css";

export default function HomePage() {
  return (
    <>
      <main className={classes.content}>
        <section>
          <h1>This is the animal shelter for stray dogs and cats.</h1>
        </section>

        <nav>
          <Link href="/animals">
            See animals
          </Link>
        </nav>

        {/*<section>*/}
        {/*  <AdminPage />*/}
        {/*</section>*/}
      </main>
    </>
  );
}
