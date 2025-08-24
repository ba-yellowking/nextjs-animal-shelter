"use client";

import classes from "./AddUserForm.module.css";
import { useActionState } from "react";
import { SignUpAction } from "@/lib/users/actions/SignUpAction";
import Button from "@/ui/button/Button";

export default function AddUserForm() {
  const [formState, formAction] = useActionState(SignUpAction, {
    errors: null,
  });

  return (
    <div className={classes.wrapper}>
      <h2 className={classes.title}>Create a new account</h2>

      {/* server action method */}
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
          <Button type="submit" title="Sign up"></Button>
        </div>
      </form>
    </div>
  );
}
