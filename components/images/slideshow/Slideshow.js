"use client";

import classes from "./Slideshow.module.css";
import dog1 from "@/assets/dog1.jpg";
import dog2 from "@/assets/dog2.jpg";
import {useEffect, useState} from "react";
import Image from 'next/image';

export default function Slideshow() {

  const images = [
    { image: dog1, alt: "Max" },
    { image: dog2, alt: "Luna" },
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.slideshow}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          className={`${classes.image} ${index === currentImageIndex ? classes.active : ''}`}
          alt={image.alt}
          fill
        />
      ))}
    </div>
  );
}

