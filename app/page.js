import Welcome from "@/components/welcome/Welcome";
import classes from "./page.module.css";

export default function HomePage() {
  return (
    <>
      <section className={classes.section}>
        <Welcome />
      </section>

      <section className={classes.section}>
        <h2>Adoption Process</h2>
        <p>Step-by-step how it works...</p>
      </section>

      <section className={classes.section}>
        <h2>Testimonials</h2>
        {/* ... */}
      </section>
    </>
  );
}