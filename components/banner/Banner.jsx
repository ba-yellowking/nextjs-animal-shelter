import classes from "./Banner.module.css";
import ImageSlider from "@/components/images/imageSlider/ImageSlider";

export default function Banner() {
  return (
    <div className={classes.banner}>
      <div className={classes.bannerTitle}>
        <h1>Find a Friend – Save a Life</h1>
        <div className={classes.description}>
          <p>Welcome to Animal Shelter! A place where love finds a home.</p>
          <p>Visit the shelter or explore our online gallery.</p>
          <p>Adopt, foster, or share. Help us make a difference.</p>
        </div>
      </div>

      <ImageSlider />
    </div>
  );
}
