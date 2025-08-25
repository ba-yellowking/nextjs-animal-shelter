import classes from "./page.module.css";

export default function Contacts() {
  return (
    <main className={classes.wrapper}>
      <h1 className={classes.heading}>Contact Us</h1>

      <p className={classes.intro}>
        We&#39;d love to hear from you! Whether you have questions, want to
        volunteer, adopt, or simply support our mission — feel free to reach
        out.
      </p>

      <h2 className={classes.subheading}>Phone</h2>
      <p className={classes.paragraph}>+7-000-000-00-00</p>

      <h2 className={classes.subheading}>Email</h2>
      <p className={classes.paragraph}>email@example.com</p>

      <h2 className={classes.subheading}>Location</h2>
      <p className={classes.paragraph}>City: Default City</p>
      <p className={classes.paragraph}>Address: Default Address</p>

      <h2 className={classes.subheading}>Social Media</h2>
      <p className={classes.paragraph}>Instagram: @example</p>
      <p className={classes.paragraph}>Facebook: facebook.com/example</p>
      <p className={classes.paragraph}>Telegram: t.me/example</p>
    </main>
  );
}
