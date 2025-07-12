import classes from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png"; // '@/assets/logo.png' если alias настроен
import ActiveLink from "../../ui/ActiveLink";

export default function Header() {

  return (
    <header className={classes.outer}>
      <div className={classes.container}>

        <div className={classes.left}>
          <Link href="/" className={classes.logo}>
            <Image src={logo} alt="Animal Shelter Logo" width={50} height={50} priority />
          </Link>

          <nav className={classes.nav}>
            <ActiveLink href="/about">About us</ActiveLink>
            <ActiveLink href="/contacts">Contacts</ActiveLink>
          </nav>
        </div>

        <div className={classes.right}>
          <Link href="/donate" className={classes.donateBtn}>
            Donate
          </Link>
        </div>

      </div>
    </header>
  );
}
