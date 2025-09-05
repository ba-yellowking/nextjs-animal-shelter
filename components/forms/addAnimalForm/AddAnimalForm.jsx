"use client";

import classes from "./AddAnimalForm.module.css";
import ImagePicker from "@/components/images/imagePicker/ImagePicker";
import { submitNewAnimal } from "@/lib/animals/actions/submitNewAnimal";
import SubmitPending from "@/components/forms/SubmitPending";
import { useActionState } from "react";

export default function AddAnimalForm() {
  const [formState, formAction] = useActionState(submitNewAnimal, {
    message: null,
  });

  return (
    <div className={classes.wrapper}>
      <h2 className={classes.title}>Add a New Animal</h2>

      <form className={classes.form} action={formAction}>
        <div className={classes.fieldRow}>
          <div className={classes.name}>
            <label htmlFor="name">Name</label>
            <input
              className={classes.inputForm}
              id="name"
              name="name"
              placeholder="Name"
              required
            />
          </div>

          <div className={classes.species}>
            <label htmlFor="species">Species</label>
            <select
              className={classes.inputForm}
              id="species"
              name="species"
              required
            >
              <option value="">Select</option>
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
            </select>
          </div>
        </div>

        <div className={classes.fieldRow}>
          <div>
            <label htmlFor="breed">Breed</label>
            <input
              className={classes.inputForm}
              id="breed"
              name="breed"
              placeholder="Breed"
              required
            />
          </div>

          <div>
            <label htmlFor="age">Age</label>
            <input
              className={`${classes.inputForm} ${classes.ageForm}`}
              id="age"
              name="age"
              type="number"
              min="0"
              placeholder="Age"
            />
          </div>

          <div>
            <label htmlFor="color">Color</label>
            <input
              className={classes.inputForm}
              id="color"
              name="color"
              placeholder="Color"
              required
            />
          </div>
        </div>

        <div className={classes.field}>
          <label htmlFor="description">Description</label>
          <textarea
            className={classes.textAreaForm}
            id="description"
            name="description"
            placeholder="Description"
          />
        </div>

        <div className={classes.lastRow}>
          <ImagePicker name="image" />
          <div className={classes.pending}>
            <SubmitPending text={"Submit"} />
          </div>
        </div>

        {formState.message && (
          <p className={classes.status}>{formState.message}</p>
        )}
      </form>
    </div>
  );
}
