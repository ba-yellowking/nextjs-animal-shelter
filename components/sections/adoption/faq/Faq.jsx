import classes from "./Faq.module.css";

export default function Faq() {
  return (
    <main className={classes.faq}>
      <div className={classes.title}>
        <h1 className={classes.heading}>FAQ</h1>
      </div>
      <div className={classes.paragraph}>
        <div className={classes.left}>
          <div className={classes.question}>
            <div>Do I need to pay for an animal?</div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2z"
                />
              </svg>
            </div>
          </div>

          <div className={classes.question}>
            <div>Are the animals vaccinated?</div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2z"
                />
              </svg>
            </div>
          </div>

          <div className={classes.question}>
            <div>Are the animals microchipped?</div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className={classes.right}>
          <div className={classes.question}>
            <div>Can I visit the shelter before adopting?</div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2z"
                />
              </svg>
            </div>
          </div>

          <div className={classes.question}>
            <div>Can I adopt if I live in an apartment?</div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2z"
                />
              </svg>
            </div>
          </div>

          <div className={classes.question}>
            <div>Can I return the pet if it doesn’t work out?</div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
