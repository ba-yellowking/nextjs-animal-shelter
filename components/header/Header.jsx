import classes from "./Header.module.css";
import Link from "next/link";
import AddUserModal from "@/lib/users/modals/addUserModal/AddUserModal";
import AuthorizeModal from "@/lib/users/modals/authorizeModal/AuthorizeModal";
import AddAnimalModal from "@/modals/addAnimalModal/AddAnimalModal";
import { verifyAuth } from "@/lib/users/auth";
import { LogOutAction } from "@/lib/users/actions/LogOutAction";
import Button from "@/ui/button/Button";

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

            <Link className={classes.animalsLink} href="/animals">
              Animals
            </Link>

            <div className={classes.auth}>
              <div className={classes.authModal}>
                <AuthorizeModal />
              </div>
              <div className={classes.authModal}>
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
              <Link className={classes.adminLink} href="/request">
                Requests
              </Link>
              <div className={classes.adminLink}>
                <AddAnimalModal />
              </div>
            </div>
            <div className={classes.adminLogOut}>
              <form action={LogOutAction}>
                <Button title="Log out"></Button>
              </form>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
