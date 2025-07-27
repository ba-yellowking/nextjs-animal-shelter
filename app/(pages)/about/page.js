import classes from "./page.module.css";

export default function About() {
  return (
    <main className={classes.wrapper}>
      <h1 className={classes.heading}>About Us</h1>

      <p className={classes.paragraph}>
        Welcome to our Animal Shelter. We are a non-profit organization based in
        Kazakhstan, dedicated to rescuing stray, abandoned, and mistreated
        animals. Our mission is to provide them with food, shelter, medical
        care, and ultimately find them loving forever homes.
      </p>

      <p className={classes.paragraph}>
        Since our founding, we&#39;ve helped hundreds of dogs and cats get a
        second chance at life. We believe that every animal deserves compassion,
        care, and a safe place to call home.
      </p>

      <h2 className={classes.subheading}>What We Do</h2>
      <ul className={classes.list}>
        <li>Rescue animals from the streets and unsafe environments</li>
        <li>Provide medical treatment and rehabilitation</li>
        <li>Organize adoption events and match pets with families</li>
        <li>
          Raise awareness about animal rights and responsible pet ownership
        </li>
      </ul>

      <h2 className={classes.subheading}>Get Involved</h2>
      <p className={classes.paragraph}>
        You can support our work by donating, adopting, volunteering, or even
        just spreading the word. Together, we can make a real difference in the
        lives of these animals.
      </p>

      <p className={classes.paragraph}>
        Thank you for being a part of our journey 💛
      </p>
    </main>
  );
}
