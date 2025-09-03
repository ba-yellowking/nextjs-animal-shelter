"use client";

import { useEffect } from "react";
import { useActionState } from "react";
import { useRouter } from "next/navigation";

import classes from "./UpdateComponent.module.css";
import { updateAnimalAction } from "@/lib/users/components/updateComponent/UpdateAnimalAction";
import SubmitPending from "@/components/forms/SubmitPending";

export default function UpdateComponent({ animal, close }) {
  const router = useRouter();

  const [state, formAction] = useActionState(updateAnimalAction, {
    message: null,
    ok: false,
  });

  useEffect(() => {
    if (state.ok) {
      router.refresh();
      close?.();
    }
  }, [state.ok, router, close]);

  return (
    <div className={classes.wrapper}>
      <h2 className={classes.title}>Add a New Animal</h2>

      <form className={classes.inlineForm} action={formAction} onReset={close}>
        <input type="hidden" name="id" defaultValue={animal.id} />
        <input type="hidden" name="slug" defaultValue={animal.slug} />

        <div className={classes.row}>
          <label className={classes.label}>Name</label>
          <input
            name="name"
            defaultValue={animal.name}
            required
            className={classes.input}
          />
        </div>

        <div className={classes.row}>
          <label className={classes.label}>Species</label>
          <select
            name="species"
            defaultValue={animal.species}
            required
            className={classes.input}
          >
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
          </select>
        </div>

        <div className={classes.row}>
          <label className={classes.label}>Color</label>
          <input
            name="color"
            defaultValue={animal.color}
            required
            className={classes.input}
          />
        </div>

        <div className={classes.row}>
          <label className={classes.label}>Age</label>
          <input
            type="number"
            name="age"
            min="0"
            defaultValue={animal.age || ""}
            className={classes.input}
          />
        </div>

        <div className={classes.row}>
          <label className={classes.label}>Description</label>
          <textarea
            name="description"
            defaultValue={animal.description || ""}
            className={classes.textarea}
          />
        </div>

        <div className={classes.row}>
          <label className={classes.label}>Image</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            className={classes.file}
          />
        </div>

        {state.message && <p className={classes.status}>{state.message}</p>}

        <div className={classes.actions}>
          <SubmitPending type="submit" text="Save" />
          <button type="reset" className={classes.ghost}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
