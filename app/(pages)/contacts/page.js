import classes from "./page.module.css";

export default function Contacts() {
  return (
    <main className={classes.wrapper}>
      <h1 className={classes.heading}>Contact Us</h1>

      <p className={classes.paragraph}>
        We&#39;d love to hear from you! Whether you have questions, want to
        volunteer, adopt, or simply support our mission — feel free to reach
        out.
      </p>

      <h2 className={classes.subheading}>Phone</h2>
      <p className={classes.paragraph}>+7 777 000 77 77</p>

      <h2 className={classes.subheading}>Email</h2>
      <p className={classes.paragraph}>contact@animalshelter.kz</p>

      <h2 className={classes.subheading}>Location</h2>
      <p className={classes.paragraph}>
        Astana, Kazakhstan <br />
        Mangilik El Avenue, 45
      </p>

      <h2 className={classes.subheading}>Social Media</h2>
      <ul className={classes.list}>
        <li>Instagram: @animalshelter.kz</li>
        <li>Facebook: facebook.com/animalshelterkz</li>
        <li>Telegram: t.me/animalshelter_kz</li>
      </ul>
    </main>
  );
}
