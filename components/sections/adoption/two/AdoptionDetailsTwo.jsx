import classes from "./AdoptionDetailsTwo.module.css";
import adoption from "@/assets/adoption3-4.jpg";
import Image from "next/image";
import Link from "next/link";

export default function AdoptionDetailsTwo() {
  return (
    <main className={classes.adoption}>
      <div className={classes.content}>
        <div className={classes.image}>
          <Image src={adoption} alt="Image of a building" fill />
        </div>
        <div className={classes.text}>
          <h1 className={classes.heading}>What's Next?</h1>
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
                  d="m18 11l5-5l-5-5v3h-4v4h4zm2 4.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 0 0-1.02.24l-2.2 2.2a15.05 15.05 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.4 11.4 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1c0 9.39 7.61 17 17 17c.55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1"
                />
              </svg>

              <h2>Meet & greet a new friend</h2>
            </div>

            <p>
              We'll contact you in operational time to arrange a personal
              meeting to see how you and the pet connect.
            </p>

            <Link href="/contacts" className={classes.cta}>
              See opening hours
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
                viewBox="0 0 16 16"
              >
                <path
                  fill="currentColor"
                  d="M4 14c.314 0 .556-.152.735-.375c.19-.239.265-.507.265-.625c0-.7.035-1.497.186-2.253c.151-.75.427-1.505.941-2.08c.457-.51.918-1.09 1.27-1.889a7 7 0 0 0 .515-1.897A1.5 1.5 0 0 0 10 3.5a.5.5 0 0 0-1-.001a.5.5 0 0 1-1 0v-1A1.5 1.5 0 0 1 9.5 1h1.223a1.5 1.5 0 0 1 .772.214l1.777 1.066A1.5 1.5 0 0 1 14 3.566V4.5A1.5 1.5 0 0 1 12.5 6H12v6.05a2.5 2.5 0 0 1 2 2.45a.5.5 0 0 1-.5.5H11v-.5c0-.819-.393-1.545-1-2v-2a.5.5 0 0 0-1 0v1.55a2.5 2.5 0 0 0-.5-.05H8a.5.5 0 0 0 0 1h.5a1.5 1.5 0 0 1 1.5 1.5v.5H3.75a2.75 2.75 0 0 1-1.528-5.037a.5.5 0 1 1 .556.831A1.75 1.75 0 0 0 3.75 14z"
                />
              </svg>

              <h2>Welcome your new best friend!</h2>
            </div>

            <p>
              If all goes well, take your pet home. We’ll always be here if you
              need advice or support.
            </p>

            <Link href="/animals" className={classes.cta}>
              See more resources about care
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
