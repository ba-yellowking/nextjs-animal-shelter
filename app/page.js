import Banner from "@/components/banner/Banner";
import classes from "./page.module.css";
import About from "@/components/about/About";

export default function HomePage() {
  return (
    <>
      <section className={classes.section}>
        <Banner />
      </section>

      <section id="about" className={classes.section}>
        <About />
      </section>
    </>
  );
}
