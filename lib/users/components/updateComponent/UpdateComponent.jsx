"use client";

import { useEffect, useState } from "react";
import { useActionState } from "react";
import { useRouter } from "next/navigation";
import { useFormStatus } from "react-dom";

import classes from "./UpdateComponent.module.css";
import { updateAnimalInline } from "@/lib/users/components/updateComponent/UpdateAnimalAction";

function SubmitBtn({ text }) {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending} className={classes.primary}>
      {pending ? "Saving..." : text}
    </button>
  );
}

export default function InlineUpdate({ animal, onDone }) {
  const router = useRouter();

  const [state, formAction] = useActionState(updateAnimalInline, {
    message: null,
    ok: false,
  });

  useEffect(() => {
    if (state.ok) {
      router.refresh(); // обновляем данные
      onDone?.(); // закрываем модалку
    }
  }, [state.ok, router, onDone]);

  return (
    <form className={classes.inlineForm} action={formAction} onReset={onDone}>
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
        <SubmitBtn text="Save" />
        <button type="reset" className={classes.ghost}>
          Cancel
        </button>
      </div>
    </form>
  );
}
