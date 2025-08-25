import classes from "./page.module.css";

export default function OurTeam() {
  return (
    <main className={classes.wrapper}>
      <h1 className={classes.heading}>Our team</h1>

      <p className={classes.intro}>
        We are a passionate group of individuals dedicated to making a
        difference. Each member brings unique skills, creativity, and a shared
        commitment to our mission. On this page, you&#39;ll get to know the
        people behind the work — the team that drives our vision forward every
        day.
      </p>

      <h2 className={classes.subheading}>Phone</h2>
      <p className={classes.paragraph}>+7 777 000 77 77</p>
    </main>
  );
}
