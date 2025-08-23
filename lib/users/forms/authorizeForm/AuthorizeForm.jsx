"use client";

import classes from "./AuthorizeForm.module.css";
import { useActionState } from "react";
import { SignIn } from "@/lib/users/actions/SignIn";
import Button from "@/ui/button/Button";

export default function AuthorizeForm() {
  const [formState, formAction] = useActionState(SignIn, { errors: null });

  return (
    <div className={classes.wrapper}>
      <h2 className={classes.title}>Sign in</h2>

      <form className={classes.form} action={formAction}>
        <div className={classes.field}>
          <label htmlFor="email">Email</label>
          <input
            className={classes.inputForm}
            id="email"
            name="email"
            placeholder="Email"
            required
          />
        </div>

        <div className={classes.field}>
          <label htmlFor="password">Password</label>
          <input
            className={classes.inputForm}
            id="password"
            name="password"
            placeholder="Password"
            required
            type="password"
          />
        </div>

        <div className={classes.errorNotification}>
          {formState.errors && (
            <ul id="form-errors">
              {Object.keys(formState.errors).map((error) => (
                <li key={error}>{formState.errors[error]}</li>
              ))}
            </ul>
          )}
        </div>

        <div className={classes.pending}>
          <Button type="submit" title="Sign in"></Button>
        </div>
      </form>
    </div>
  );
}
