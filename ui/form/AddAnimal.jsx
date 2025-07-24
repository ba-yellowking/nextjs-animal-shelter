import classes from "./AddAnimal.module.css";
import ImagePicker from "@/components/images/image-picker/ImagePicker";
import { submitNewAnimal } from "@/app/actions/submitNewAnimal";

export default function AddAnimal({ onSuccess }) {
  return (
    <>
      {/*setting server action*/}
      <form className={classes.form} action={submitNewAnimal}>
        <div className={classes.formRow}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            // value={form.name}
            placeholder="Name"
            required
          />
        </div>

        <div className={classes.formRow}>
          <label htmlFor="species">Species</label>
          <select
            id="species"
            name="species"
            // value={form.species}
            required
          >
            <option value="">Select species</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
          </select>
        </div>

        <div className={classes.formRow}>
          <label htmlFor="age">Age</label>
          <input id="age" name="age" type="number" min="0" placeholder="Age" />
        </div>

        <div className={classes.formRow}>
          <label htmlFor="color">Color</label>
          <input id="color" name="color" placeholder="Color" required />
        </div>

        <div className={classes.formRow}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            placeholder="Description"
          />
        </div>

        <ImagePicker label="Your image" name="image" />

        <div className={classes.buttonGroup}>
          <button type="submit">Add</button>
        </div>

        {/*{status && <p className={classes.status}>{status}</p>}*/}
      </form>
    </>
  );
}
