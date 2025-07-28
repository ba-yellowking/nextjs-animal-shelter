import classes from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png"; // '@/assets/logo.png' если alias настроен
import ActiveLink from "../../ui/active-link/ActiveLink";

export default function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.content}>
        <div className={classes.left}>
          <Link href="/" className={classes.logo}>
            <Image
              src={logo}
              alt="Animal Shelter Logo"
              width={50}
              height={50}
              priority
            />
          </Link>

          <nav className={classes.about}>
            <ActiveLink href="/about">About us</ActiveLink>
          </nav>
          <nav className={classes.contacts}>
            <ActiveLink href="/contacts">Contacts</ActiveLink>
          </nav>
        </div>

        <div className={classes.middle}>
          <div>How it works?</div>
          <div>How can I help?</div>
        </div>

        <div className={classes.right}>
          <Link href="/animals" className={classes.button}>
            See animals
          </Link>

          <Link href="/donate" className={classes.button}>
            Donate
          </Link>
        </div>
      </div>
    </header>
  );
}
