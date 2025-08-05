"use client";

import classes from "./ImagePicker.module.css";
import { useRef, useState } from "react";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState();

  // using useRef() to connect primaryButton click and input
  const imageInputRef = useRef();
  function clickHandler() {
    imageInputRef.current.click();
  }

  // onChange for input when changing images
  function handleImageChange(event) {
    const file = event.target.files[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    // FileReader() - a class that creates instances
    const fileReader = new FileReader();
    // onload - starts when the file is uploaded
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    // readAsDataURL() - converts an image to a string like "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgA"
    fileReader.readAsDataURL(file);
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image picked yet.</p>}
          {pickedImage && <Image src={pickedImage} alt="Selected image" fill />}
        </div>
        <input
          onChange={handleImageChange}
          ref={imageInputRef}
          className={classes.input}
          type="file"
          id={name}
          name={name}
          accept="image/png, image/jpeg"
          required
        />

        <button type="button" className={classes.button} onClick={clickHandler}>
          Select an Image
        </button>
      </div>
    </div>
  );
}
