import classes from "./Banner.module.css";
import ImageSlider from "@/components/images/imageSlider/ImageSlider";

export default function Banner() {
  return (
    <main className={classes.banner}>
      <div className={classes.content}>
        <div className={classes.text}>
          <h1>Find your new best friend!</h1>
          <div className={classes.description}>
            <p>Welcome to Animal Shelter! A place where love finds a home.</p>
            <p>Learn, care, and help us make a difference.</p>
          </div>
        </div>

        <div className={classes.image}>
          <ImageSlider />
        </div>
      </div>
    </main>
  );
}
