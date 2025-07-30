import classes from "./Banner.module.css";
import ImageSlider from "@/components/images/imageSlider/ImageSlider";

export default function Banner() {
  return (
    <div className={classes.banner}>
      <div className={classes.bannerTitle}>
        <h1>Find your new best friend!</h1>
        <div className={classes.description}>
          <p>Welcome to Animal Shelter! A place where love finds a home.</p>
          <p>Learn, care, and help us make a difference.</p>
        </div>
      </div>

      <ImageSlider />
    </div>
  );
}
