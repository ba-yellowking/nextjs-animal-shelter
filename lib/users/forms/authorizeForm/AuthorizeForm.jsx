"use client";

import classes from "./AuthorizeForm.module.css";
import { useActionState } from "react";
import { SubmitAuthorization } from "@/lib/users/actions/submitAuthorization";

export default function AuthorizeForm() {
  const [state, formAction] = useActionState(SubmitAuthorization, {
    message: null,
  });

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

        <div className={classes.pending}>
          <button type="submit" className={classes.submitBtn}>
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
}
