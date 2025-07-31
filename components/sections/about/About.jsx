import classes from "./About.module.css";
import building from "@/assets/building.jpg";
import Image from "next/image";

export default function About() {
  return (
    <main className={classes.about}>
      <div className={classes.content}>
        <div className={classes.text}>
          <div className={classes.title}>
            <h1 className={classes.heading}>About Animal Shelter</h1>
          </div>

          <div className={classes.paragraph}>
            <div className={classes.subparagraph}>
              <div className={classes.icon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M24 7.8C23.6 4.5 20.9 2 17.5 2c-1.7 0-3.4.7-4.6 1.9c-.7.7-1.2 1.4-1.5 2.3L17 9.9v.1h3v2h-3v2h3v2h-3v2h3v2h-3v2h7zM13.3 7c.6-1.8 2.3-3 4.2-3s3.6 1.2 4.2 3zM0 11v11h5v-7h5v7h5V11L7.5 6z"
                  />
                </svg>
              </div>
              <p>
                Founded in 2022, Animal Shelter began as a small initiative to
                rescue and care for stray and abandoned animals in our
                community.
              </p>
            </div>

            <div className={classes.subparagraph}>
              <div className={classes.icon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M5.85 21v-7.39l4.483 4.463q.754-.946 1.326-2.009t.572-2.289q0-1.092-.406-2.101t-1.188-1.791L7.947 7.23l.73-.731h3.385l3.788-3.788l1.704 1.684q.923.923 1.406 2.109T19.462 9q-.02 1.31-.502 2.495q-.483 1.186-1.406 2.109l-2.204 2.185V21zm4.406-4.406L5.42 11.78q-.217-.217-.319-.496Q5 11.003 5 10.7t.102-.57q.102-.266.32-.484l1.753-1.76l2.754 2.71q.642.642.972 1.459q.33.816.33 1.72q0 .77-.24 1.49q-.241.72-.735 1.33"
                  />
                </svg>
              </div>
              <p>
                Today, our shelter is home to over 120 cats, dogs, and other
                furry friends — each waiting for a second chance at love.
              </p>
            </div>

            <div className={classes.subparagraph}>
              <div className={classes.icon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="currentColor"
                    d="m13.637 2.363l1.676.335c.09.018.164.084.19.173a.25.25 0 0 1-.062.249l-1.373 1.374a.88.88 0 0 1-.619.256H12.31L9.45 7.611A1.5 1.5 0 1 1 6.5 8a1.5 1.5 0 0 1 1.889-1.449l2.861-2.862V2.552c0-.232.092-.455.256-.619L12.88.559a.25.25 0 0 1 .249-.062c.089.026.155.1.173.19Z"
                  />
                  <path
                    fill="currentColor"
                    d="M2 8a6 6 0 1 0 11.769-1.656a.751.751 0 1 1 1.442-.413a7.502 7.502 0 0 1-12.513 7.371A7.501 7.501 0 0 1 10.069.789a.75.75 0 0 1-.413 1.442A6 6 0 0 0 2 8"
                  />
                  <path
                    fill="currentColor"
                    d="M5 8a3.002 3.002 0 0 0 4.699 2.476a3 3 0 0 0 1.28-2.827a.748.748 0 0 1 1.045-.782a.75.75 0 0 1 .445.61A4.5 4.5 0 1 1 8.516 3.53a.75.75 0 1 1-.17 1.49A3 3 0 0 0 5 8"
                  />
                </svg>
              </div>
              <p>
                Our mission is simple: to provide a safe, caring environment for
                every animal and to help them find the forever home they
                deserve.
              </p>
            </div>

            <div className={classes.subparagraph}>
              <div className={classes.icon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="-4 -1.5 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M9 8.565v-2a1 1 0 1 0-2 0v2H5a1 1 0 1 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2zM.649 3.322L8 .565l7.351 2.757a1 1 0 0 1 .649.936v4.307c0 3.177-1.372 6.2-3.763 8.292L8 20.565l-4.237-3.708A11.02 11.02 0 0 1 0 8.565V4.258a1 1 0 0 1 .649-.936"
                  />
                </svg>
              </div>
              <p>
                With the help of volunteers, donors, and adopters like you,
                we're building a better future — one paw at a time.
              </p>
            </div>
          </div>
        </div>

        <div className={classes.image}>
          <Image src={building} alt="Image of a building" />
        </div>
      </div>
    </main>
  );
}
