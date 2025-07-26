import classes from "./Banner.module.css";
import ImageSlider from "@/components/images/imageSlider/ImageSlider";
import Link from "next/link";

export default function Banner() {
  return (
    <div className={classes.banner}>
      <div className={classes.bannerTitle}>
        <h1 style={{ fontSize: "40px" }}>Find a Friend. Save a Life.</h1>
        <h3>Welcome to Animal Shelter — a place where love finds a home.</h3>

        <h1 style={{ fontSize: "40px" }}>How to adopt?</h1>
        <Link href="/animals" className={classes.cta}>
          See animals
        </Link>
      </div>

      <ImageSlider />
    </div>
  );
}
