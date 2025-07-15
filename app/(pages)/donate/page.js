import classes from "./page.module.css";

export default function Donate() {
  return (
    <main className={classes.wrapper}>
      <h1 className={classes.heading}>Support Our Shelter</h1>

      <p className={classes.paragraph}>
        Every donation helps us feed, shelter, and care for animals in need. With your support, we can rescue more lives and give them the second chance they deserve.
      </p>

      <p className={classes.paragraph}>
        Your contributions go directly to:
      </p>

      <ul className={classes.list}>
        <li>Buying food and medical supplies</li>
        <li>Covering veterinary expenses</li>
        <li>Maintaining shelter facilities</li>
        <li>Organizing adoption and awareness events</li>
      </ul>

      <h2 className={classes.subheading}>How to Donate</h2>
      <p className={classes.paragraph}>
        You can donate via:
      </p>
      <ul className={classes.list}>
        <li>Kaspi: +7 777 123 45 67 Ben Kenobi</li>
        <li>Bank transfer: IBAN KZ00 1234 5678 9012</li>
        <li>PayPal: shelter@example.kz</li>
      </ul>

      <p className={classes.paragraph}>
        Thank you for being a hero to animals. Together, we make a difference 🐾
      </p>
    </main>
  );
}