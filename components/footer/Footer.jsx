import classes from "./Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.content}>
        <div className={classes.column}>
          <h3>Animal Shelter</h3>
          <Link href="/contacts">Contact Us</Link>
          <a href="/">Our team</a>
          <a href="/">Careers</a>

          <div className={classes.socialMedia}>
            <a href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M16 3a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5zm-4 5a4 4 0 0 0-3.995 3.8L8 12a4 4 0 1 0 4-4m4.5-1.5a1 1 0 0 0-.993.883l-.007.127a1 1 0 0 0 1.993.117L17.5 7.5a1 1 0 0 0-1-1"
                />
              </svg>
            </a>

            <a href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
                />
              </svg>
            </a>

            <a href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M6.443 4.381C7.84 4.25 9.637 4.25 11.96 4.25h.082c2.322 0 4.119 0 5.516.131c1.407.133 2.517.406 3.409 1.03c.928.65 1.377 1.511 1.587 2.607c.197 1.024.197 2.321.197 3.907v.15c0 1.586 0 2.883-.197 3.907c-.21 1.096-.659 1.957-1.587 2.607c-.892.624-2.002.897-3.41 1.03c-1.396.131-3.193.131-5.515.131h-.082c-2.322 0-4.119 0-5.516-.131c-1.407-.133-2.517-.406-3.409-1.03c-.928-.65-1.377-1.511-1.587-2.607c-.197-1.024-.197-2.321-.197-3.907v-.15c0-1.586 0-2.883.197-3.907c.21-1.096.659-1.957 1.587-2.607c.892-.624 2.002-.897 3.41-1.03m5.115 4.564a1.166 1.166 0 0 0-1.608.313c-.13.191-.2.418-.2.65v4.184a1.16 1.16 0 0 0 1.8.968l3.175-2.074a1.155 1.155 0 0 0 .008-1.931z"
                />
              </svg>
            </a>
          </div>
        </div>

        <div className={classes.column}>
          <h3>Opening Hours</h3>
          <div className={classes.schedule}>
            <div className={classes.days}>
              <p>Mon - Fri</p>
              <p>Sat - Sun</p>
            </div>
            <div className={classes.hours}>
              <p>11:00 - 17:00</p>
              <p>11:00 - 16:00</p>
            </div>
          </div>
        </div>

        <div className={`${classes.cats} ${classes.column}`}>
          <h3>About cats and kittens</h3>
          <a>Cat breeds</a>
          <a>How to adopt a cat?</a>
          <a>What do you need to know?</a>
          <a>Other cat information</a>
        </div>

        <div className={`${classes.dogs} ${classes.column}`}>
          <h3>About dogs and puppies</h3>
          <a>Dog breeds</a>
          <a>How to adopt a dog?</a>
          <a>What do you need to know?</a>
          <a>Other dog information</a>
        </div>
      </div>
      <div className={classes.developer}>
        <div className={classes.powered}>
          <p>Powered by: https://github.com/ba-yellowking</p>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            >
              <path d="M16 22.027v-2.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 0 0-1.5-3.75a5.07 5.07 0 0 0-.09-3.77s-1.18-.35-3.91 1.48a13.4 13.4 0 0 0-7 0c-2.73-1.83-3.91-1.48-3.91-1.48A5.07 5.07 0 0 0 5 5.797a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 0 0-.94 2.58v2.87" />
              <path d="M9 20.027c-3 .973-5.5 0-7-3" />
            </g>
          </svg>
        </div>
      </div>
    </footer>
  );
}
