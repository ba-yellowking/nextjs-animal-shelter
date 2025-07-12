import classes from "./Welcome.module.css";
import Slideshow from "@/components/images/slideshow/Slideshow";
import Link from "next/link";

export default function Welcome() {
  return (
    <div className={classes.welcome}>
      <div className={classes.welcomeText}>
        <h1 style={{fontSize: "40px"}}>Find a Friend. Save a Life.</h1>
        <h3>Welcome to Animal Shelter — a place where love finds a home.</h3>

        <h1 style={{fontSize: "40px"}}>How to adopt?</h1>
        <Link href="/animals" className={classes.cta}>
          See animals
        </Link>
      </div>

      <div className={classes.slideShow}>
        <Slideshow/>
      </div>
    </div>
  )
}