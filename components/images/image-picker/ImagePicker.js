"use client";

import classes from "./ImagePicker.module.css";
import {useRef} from "react";

export default function magePicker({label, name}) {

  // using useRef() to connect button click and input
  const imageInputRef = useRef();

  function clickHandler() {
    imageInputRef.current.click();
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <input ref={imageInputRef} className={classes.input} type="file" id={name} name={name} accept="image/png, image/jpeg" />
      </div>
      <button type="button" className={classes.button} onClick={clickHandler}>
        Select an Image
      </button>
    </div>
  )
}