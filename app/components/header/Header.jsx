import classes from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/logo.png"; // или '@/assets/logo.png' если alias настроен

export default function Header() {
  return (
    <header className={classes.outer}>
      <div className={classes.container}>
        <div className={classes.left}>
          <Link href="/" className={classes.logo}>
            <Image src={logo} alt="Animal Shelter Logo" width={50} height={50} />
          </Link>
          <nav className={classes.nav}>
            <Link href="/about">About us</Link>
            <Link href="/contacts">Contacts</Link>
          </nav>
        </div>

        <div className={classes.right}>
          <Link href="/donate" className={classes.donateButton}>Donate</Link>
        </div>
      </div>
    </header>
  );
}
