import classes from "./Welcome.module.css";
import Slideshow from "@/app/components/images/slideshow/Slideshow";
import Link from "next/link";

export default function Welcome() {
  return (
    <div className={classes.welcome}>
      <div className={classes.welcomeText}>
        <h1>🐾 Find a Friend. Save a Life.</h1>
        <h2>Welcome to Animal Shelter — a place where love finds a home.</h2>
        <p>Every animal deserves warmth, care, and a family.</p>
        <p>Browse, connect, and adopt — because your future friend might be waiting for you right now.</p>
        <p>Join us in making the world kinder — one paw at a time.</p>
        <h1 style={{fontSize: "50px"}}>How to adopt?</h1>
        <Link href="/animals">
          See animals
        </Link>
      </div>

      <div className={classes.slideShow}>
        <Slideshow/>
      </div>
    </div>
  )
}