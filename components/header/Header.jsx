import classes from "./Header.module.css";
import Link from "next/link";
import ActiveLink from "../../ui/active-link/ActiveLink";

export default function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.content}>
        <Link href="/" className={classes.logo}>
          ANIMAL
          <br />
          SHELTER
          <svg
            className={classes.pawTrace}
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M442.8 361.82c-8.8-25.1-29.31-37.82-49.11-50.12c-17.23-10.71-33.5-20.83-44.14-39c-29.33-50.33-45.44-80.7-93.49-80.7s-64.21 30.38-93.61 80.69c-10.65 18.21-27 28.35-44.25 39.08c-19.8 12.31-40.27 25-49.1 50.05a78.1 78.1 0 0 0-5.1 28.29C64 430.85 96.45 464 132.4 464s83.31-18.13 123.76-18.13S343.31 464 379.71 464S448 430.85 448 390.11a78.3 78.3 0 0 0-5.2-28.29"
            />
            <ellipse cx="72" cy="216" fill="currentColor" rx="56" ry="72" />
            <ellipse cx="184" cy="120" fill="currentColor" rx="56" ry="72" />
            <ellipse cx="328" cy="120" fill="currentColor" rx="56" ry="72" />
            <ellipse cx="440" cy="216" fill="currentColor" rx="56" ry="72" />
          </svg>
        </Link>

        <div className={classes.navigation}>
          <ActiveLink href="/about">About us</ActiveLink>
          <a>How to adopt?</a>
          <a>How Can I Help?</a>
        </div>

        <div className={classes.adoption}>
          <Link href="/animals" className={classes.cta}>
            ADOPT
            <br />A FRIEND
            <svg
              className={classes.click}
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 256 256"
            >
              <path
                fill="currentColor"
                d="M220.49 190.83a12 12 0 0 1 0 17l-12.69 12.66a12 12 0 0 1-17 0l-56.56-56.57L115 214.09c0 .1-.08.21-.13.32a15.83 15.83 0 0 1-14.6 9.59h-.79a15.83 15.83 0 0 1-14.41-11L32.8 52.92A16 16 0 0 1 52.92 32.8L213 85.07a16 16 0 0 1 1.41 29.8l-.32.13l-50.17 19.27ZM96 32a8 8 0 0 0 8-8v-8a8 8 0 0 0-16 0v8a8 8 0 0 0 8 8m-80 72h8a8 8 0 0 0 0-16h-8a8 8 0 0 0 0 16m108.42-64.84a8 8 0 0 0 10.74-3.58l8-16a8 8 0 0 0-14.31-7.16l-8 16a8 8 0 0 0 3.57 10.74m-96 81.69l-16 8a8 8 0 0 0 7.16 14.31l16-8a8 8 0 1 0-7.16-14.31"
              />
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
}
