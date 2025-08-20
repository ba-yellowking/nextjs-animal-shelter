import Banner from "@/components/sections/banner/Banner";
import classes from "./page.module.css";
import About from "@/components/sections/about/About";
import AdoptionDetailsOne from "@/components/sections/adoption/one/AdoptionDetailsOne";
import AdoptionDetailsTwo from "@/components/sections/adoption/two/AdoptionDetailsTwo";
import Donation from "@/components/sections/donation/Donation";
import Faq from "@/components/sections/adoption/faq/Faq";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <section className={classes.section}>
        <Link href="/animals">Animal List</Link>
      </section>

      <section className={classes.section}>
        <Banner />
      </section>

      <section id="about" className={classes.section}>
        <About />
      </section>

      <section id="adoption" className={classes.section}>
        <AdoptionDetailsOne />
      </section>

      <section id="donation" className={classes.section}>
        <AdoptionDetailsTwo />
      </section>

      <section className={classes.section}>
        <Donation />
      </section>

      <section id="faq" className={classes.section}>
        <Faq />
      </section>
    </>
  );
}
