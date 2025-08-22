import classes from "./Header.module.css";
import Link from "next/link";
import AddUserModal from "@/lib/users/modals/addUserModal/AddUserModal";
import AuthorizeModal from "@/lib/users/modals/authorizeModal/AuthorizeModal";
import { verifyAuth } from "@/lib/users/auth";
import AddAnimalModal from "@/modals/addAnimalModal/AddAnimalModal";

export const dynamic = "force-dynamic";

export default async function Header() {
  const { user, session } = await verifyAuth();

  return (
    <header className={classes.header}>
      <div className={classes.content}>
        <div className={classes.logo}>
          <Link href="/">SHELTER</Link>
          <svg
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
        </div>

        {!user && !session && (
          <>
            <div className={classes.navigation}>
              <a href="/#about">About</a>
              <a href="/#adoption">Adoption</a>
              <a href="/#donation">Donation</a>
              <a href="/#faq">FAQ</a>
              <Link href="/animals">Animals</Link>
            </div>

            <div className={classes.auth}>
              <div className={classes.authButton}>
                <AuthorizeModal />
              </div>
              <div className={classes.authButton}>
                <AddUserModal />
              </div>
            </div>
          </>
        )}

        {user && session && (
          <>
            <div className={classes.adminNav}>
              <Link className={classes.adminLink} href="/animals">
                Animals
              </Link>
              <Link className={classes.adminLink} href="/animals">
                Requests
              </Link>
            </div>
            <div className={classes.adminCta}>
              <div className={classes.adminCtaButton}>
                <AddAnimalModal />
              </div>
              <svg
                className={classes.add}
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#ffffff"
                  d="M11 13v3q0 .425.288.713T12 17t.713-.288T13 16v-3h3q.425 0 .713-.288T17 12t-.288-.712T16 11h-3V8q0-.425-.288-.712T12 7t-.712.288T11 8v3H8q-.425 0-.712.288T7 12t.288.713T8 13zm1 9q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"
                />
              </svg>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
