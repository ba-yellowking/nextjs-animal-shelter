"use client";

import classes from "./ImagePicker.module.css";
import {useRef, useState} from "react";
import Image from "next/image";

export default function ImagePicker({label, name}) {

  const [pickedImage, setPickedImage] = useState();

  // using useRef() to connect button click and input
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

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
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
        <input onChange={handleImageChange} ref={imageInputRef} className={classes.input} type="file" id={name} name={name} accept="image/png, image/jpeg" />
      </div>
      <button type="button" className={classes.button} onClick={clickHandler}>
        Select an Image
      </button>
    </div>
  )
}