import classes from "./AdoptionDetailsOne.module.css";
import adoption from "@/assets/adoption1-2.jpg";
import Image from "next/image";
import Link from "next/link";

export default function AdoptionDetailsOne() {
  return (
    <main className={classes.adoption}>
      <div className={classes.content}>
        <div className={classes.image}>
          <Image src={adoption} alt="Image of a building" fill />
        </div>

        <div className={classes.text}>
          <div className={classes.title}>
            <h1 className={classes.heading}>Hot to adopt a pet?</h1>
          </div>

          <div className={classes.paragraph}>
            <div className={classes.subheading}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m15.68 15.05l.64-.627l-2.447-2.446q.275-.425.393-.804q.119-.379.119-.904q0-1.206-.845-2.045q-.846-.84-2.04-.84t-2.04.84t-.845 2.045t.845 2.045q.846.84 2.04.84q.525 0 .91-.138q.386-.137.836-.412zm-4.18-2.78q-.825 0-1.412-.588T9.5 10.269t.588-1.412t1.412-.588q.82 0 1.41.588q.59.587.59 1.412t-.587 1.413t-1.413.587m-6.884 5.193q-.691 0-1.153-.463T3 15.846V6.077q0-.69.463-1.153t1.152-.462h14.77q.69 0 1.152.462T21 6.077v9.77q0 .69-.463 1.152t-1.153.463zm-2.847 2v-1h20.462v1z"
                />
              </svg>

              <h2>Browse available animals</h2>
            </div>

            <p>
              Explore photos and profiles of pets currently looking for a home.
            </p>

            <Link href="/animals" className={classes.cta}>
              See animals
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M6 6v2h8.59L5 17.59L6.41 19L16 9.41V18h2V6z"
                />
              </svg>
            </Link>
          </div>

          <div className={classes.paragraph}>
            <div className={classes.subheading}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h4.2q.325-.9 1.088-1.45T12 1t1.713.55T14.8 3H19q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm2-4h7v-2H7zm0-4h10v-2H7zm0-4h10V7H7zm5-4.75q.325 0 .538-.213t.212-.537t-.213-.537T12 2.75t-.537.213t-.213.537t.213.538t.537.212"
                />
              </svg>

              <h2>Fill out the adoption form</h2>
            </div>

            <p>
              Submit a quick application with basic information like your name,
              home address, occupation, and preferences.
            </p>

            <Link href="/animals" className={classes.cta}>
              See a sample sheet
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M6 6v2h8.59L5 17.59L6.41 19L16 9.41V18h2V6z"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
