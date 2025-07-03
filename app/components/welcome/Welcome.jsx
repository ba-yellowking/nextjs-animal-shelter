import classes from "./Welcome.module.css";
import ImageSlideshow from "@/app/components/images/imageSlideshow/ImageSlideshow";

export default function Welcome() {
  return (
    <div className={classes.welcome}>
      <div className={classes.welcomeText}>
        <h1>🐾 Find a Friend. Save a Life.</h1>
        <h2>Welcome to Animal Shelter — a place where love finds a home.</h2>
        <p>Every animal deserves warmth, care, and a family.</p>
        <p>Browse, connect, and adopt — because your future friend might be waiting for you right now.</p>
        <p>Join us in making the world kinder — one paw at a time.</p>
      </div>

      <div className={classes.slideShow}>
        <ImageSlideshow/>
      </div>
    </div>
  )
}