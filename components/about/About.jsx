import classes from "./About.module.css";
import building from "@/assets/building.jpg";
import Image from "next/image";

export default function About() {
  return (
    <main className={classes.about}>
      <h1 className={classes.heading}>About Us</h1>

      <div className={classes.content}>
        <div className={classes.text}>
          <p>
            Founded in 2022, Animal Shelter began as a small initiative to
            rescue and care for stray and abandoned animals in our community.
          </p>
          <p>
            Today, our shelter is home to over 120 cats, dogs, and other furry
            friends — each waiting for a second chance at love.
          </p>
          <p>
            Our mission is simple: to provide a safe, caring environment for
            every animal and to help them find the forever home they deserve.
          </p>
          <p>
            With the help of volunteers, donors, and adopters like you, we're
            building a better future — one paw at a time.
          </p>
        </div>

        <div className={classes.image}>
          <Image src={building} alt="Image of a building" />
        </div>
      </div>
    </main>
  );
}
