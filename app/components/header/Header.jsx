import classes from "./Header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.navLinks}>
        <Link href="/">Animal Shelter</Link>
        <Link href="/components/about">About us</Link>
        <Link href="/components/donate">Donate</Link>
        <Link href="/components/contacts">Contacts</Link>
      </div>

      <div className={classes.navLinks}>
        <p>Instagram</p>
        <p>YouTube</p>
      </div>
    </header>
  )
}