import Link from "next/link";
import classes from "./page.module.css";
import ImageSlideshow from "@/app/components/images/imageSlideshow/ImageSlideshow";
import Image from "next/image"
import Welcome from "@/app/components/welcome/Welcome";

export default function HomePage() {
  return (
    <>
      <div className="container">
        <Welcome/>
      </div>

      <div className="container alt">
        <h1 style={{fontSize: "50px"}}>How to adopt?</h1>
      </div>

      <nav>
        <Link href="/animals">
          See animals
        </Link>
      </nav>
    </>
  );
}
