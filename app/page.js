import Banner from "@/components/banner/Banner";
import classes from "./page.module.css";
import About from "@/components/sections/about/About";
import AdoptionDetailsOne from "@/components/sections/adoption/one/AdoptionDetailsOne";
import AdoptionDetailsTwo from "@/components/sections/adoption/two/AdoptionDetailsTwo";
import Donation from "@/components/sections/donation/Donation";

export default function HomePage() {
  return (
    <>
      <section className={classes.section}>
        <Banner />
      </section>

      <section id="about" className={classes.section}>
        <About />
      </section>

      <section id="adoption" className={classes.section}>
        <AdoptionDetailsOne />
      </section>

      <section className={classes.section}>
        <AdoptionDetailsTwo />
      </section>

      <section className={classes.section}>
        <Donation />
      </section>
    </>
  );
}
