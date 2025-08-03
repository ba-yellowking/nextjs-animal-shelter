"use client";

import classes from "./AddAnimalForm.module.css";
import ImagePicker from "@/components/images/imagePicker/ImagePicker";
import { submitNewAnimal } from "@/app/actions/submitNewAnimal";
import SubmitPending from "@/components/forms/SubmitPending";
import { useActionState } from "react";

export default function AddAnimalForm() {
  const [state, formAction] = useActionState(submitNewAnimal, {
    message: null,
  });

  return (
    <>
      {/*setting server action*/}
      <form className={classes.form} action={formAction}>
        <div className={classes.field}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            // value={forms.name}
            placeholder="Name"
            required
          />
        </div>

        <div className={classes.field}>
          <label htmlFor="species">Species</label>
          <select
            id="species"
            name="species"
            // value={forms.species}
            required
          >
            <option value="">Select species</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
          </select>
        </div>

        <div className={classes.field}>
          <label htmlFor="age">Age</label>
          <input id="age" name="age" type="number" min="0" placeholder="Age" />
        </div>

        <div className={classes.field}>
          <label htmlFor="color">Color</label>
          <input id="color" name="color" placeholder="Color" required />
        </div>

        <div className={classes.field}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            placeholder="Description"
          />
        </div>

        <ImagePicker label="Your image" name="image" />
        {state.message && <p>{state.message}</p>}
        <div className={classes.pending}>
          <SubmitPending text={"Add a friend"} />
        </div>

        {/*{status && <p className={classes.status}>{status}</p>}*/}
      </form>
    </>
  );
}
