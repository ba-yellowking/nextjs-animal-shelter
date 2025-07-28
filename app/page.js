import Banner from "@/components/banner/Banner";
import classes from "./page.module.css";

export default function HomePage() {
  return (
    <>
      <section className={classes.section}>
        <Banner />
      </section>

      <section className={classes.section}>
        <h2 className={classes.test}>Adoption Process</h2>
        <p>Step-by-step how it works...</p>
      </section>
    </>
  );
}
