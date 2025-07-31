import classes from "./Donation.module.css";
import volunteer from "@/assets/volunteer.jpg";
import Image from "next/image";
import Link from "next/link";

export default function Donation() {
  return (
    <main className={classes.donation}>
      <div className={classes.content}>
        <div className={classes.text}>
          <h1 className={classes.heading}>How Can I Help?</h1>
          <div className={classes.paragraph}>
            <div className={classes.subparagraph}>
              <div className={classes.subheading}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 22q-1.875 0-3.512-.712t-2.85-1.925t-1.925-2.85T3 13t.713-3.512t1.924-2.85t2.85-1.925T12 4t3.513.713t2.85 1.925t1.925 2.85T21 13t-.712 3.513t-1.925 2.85t-2.85 1.925T12 22m2.8-4.8l1.4-1.4l-3.2-3.2V8h-2v5.4zM5.6 2.35L7 3.75L2.75 8l-1.4-1.4zm12.8 0l4.25 4.25l-1.4 1.4L17 3.75z"
                  />
                </svg>
                <h2>Volunteer your time</h2>
              </div>

              <p>
                Help with feeding, walking, cleaning, or simply giving animals
                love and attention
              </p>
            </div>

            <div className={classes.subparagraph}>
              <div className={classes.subheading}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 56 56"
                >
                  <path
                    fill="currentColor"
                    d="M4 28C4 14.745 14.745 4 28 4s24 10.745 24 24s-10.745 24-24 24S4 41.255 4 28m24.573 1.744c2.974.732 3.865 1.702 3.865 3.34c0 1.702-1.145 2.99-3.865 3.197zm-1.797-3.673c-2.544-.637-3.499-1.702-3.499-3.15s1.209-2.767 3.5-3.053zm1.797.429v-6.632c2.036.254 3.467 1.415 3.674 3.42h3.308c-.127-3.61-3.006-5.996-6.982-6.315v-2.687h-1.797v2.687c-4.008.303-6.87 2.656-6.87 6.219c0 3.228 2.179 5.042 6.218 5.98l.652.159v6.934c-2.56-.27-3.769-1.638-4.055-3.499h-3.292c.11 3.817 3.308 6.091 7.347 6.394v2.671h1.797V39.16c4.056-.287 7.237-2.497 7.237-6.394c0-3.387-2.29-5.105-6.473-6.075z"
                  />
                </svg>
                <h2>Charity</h2>
              </div>
              <p>
                Every contribution helps us cover food, medical care, and
                shelter expenses
              </p>
              <Link href="/donate" className={classes.cta}>
                Donate
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

            <div className={classes.subparagraph}>
              <div className={classes.subheading}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m12 21l-1.45-1.3q-2.525-2.275-4.175-3.925T3.75 12.812T2.388 10.4T2 8.15Q2 5.8 3.575 4.225T7.5 2.65q1.3 0 2.475.55T12 4.75q.85-1 2.025-1.55t2.475-.55q2.35 0 3.925 1.575T22 8.15q0 1.15-.387 2.25t-1.363 2.412t-2.625 2.963T13.45 19.7z"
                  />
                </svg>
                <h2>Sponsor an animal</h2>
              </div>
              <p>
                Support a specific pet’s needs while they wait for their forever
                home
              </p>
              <Link href="/animals" className={classes.cta}>
                Find your favorite
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

        <div className={classes.image}>
          <Image src={volunteer} alt="Volunteers" />
        </div>
      </div>
    </main>
  );
}
