"use client";

import classes from "./ImageSlider.module.css";
import ani1 from "@/assets/1.jpg";
import ani2 from "@/assets/2.jpg";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function ImageSlider() {
  const images = [
    { image: ani1, alt: "1" },
    { image: ani2, alt: "2" },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0,
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.slider}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          className={`${classes.image} ${index === currentImageIndex ? classes.active : ""}`}
          alt={image.alt}
          fill
        />
      ))}
    </div>
  );
}
