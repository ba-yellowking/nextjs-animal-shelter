import classes from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.content}>
        <div className={classes.column}>
          <h3>Company</h3>
          <p>About Us</p>
          <p>Contact Us</p>
          <p>Our team</p>
          <p>Careers</p>
          <p>FAQ</p>
        </div>

        <div className={classes.column}>
          <h3>Follow Us</h3>
          <p>Instagram</p>
          <p>Facebook</p>
          <p>YouTube</p>
        </div>

        <div className={classes.column}>
          <h3>About cats and kittens</h3>
          <p>Cat breeds</p>
          <p>How to adopt a cat?</p>
          <p>What do you need to know?</p>
          <p>Other cat information</p>
        </div>

        <div className={classes.column}>
          <h3>About dogs and puppies</h3>
          <p>Dog breeds</p>
          <p>How to adopt a dog?</p>
          <p>What do you need to know?</p>
          <p>Other dog information</p>
        </div>
      </div>
      <div className={classes.developer}>
        <p>This website was developed by</p>
      </div>
    </footer>
  );
}
