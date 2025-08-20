"use client";

import classes from "./AddUserForm.module.css";
import { useActionState, useState } from "react";
// import { submitNewUser } from "@/app/actions/submitNewUser";

export default function AddUserForm() {
  // const [state, formAction] = useActionState(submitNewUser, { message: null });

  const [status, setStatus] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const respond = await fetch("/api", {
      method: "POST",
      body: formData,
    });

    if (respond.ok) {
      setStatus("Регистрация успешна");
      window.location.reload();
    } else {
      const error = await respond.text();
      setStatus("Ошибка: " + error);
    }
  }

  return (
    <div className={classes.wrapper}>
      <h2 className={classes.title}>Register a new shelter</h2>

      {/* server action method */}
      {/*<form className={classes.form} action={formAction}>*/}

      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.field}>
          <label htmlFor="username">Username</label>
          <input
            className={classes.inputForm}
            id="username"
            name="username"
            placeholder="Username"
            required
          />
        </div>

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

        {/*{state.message && <p className={classes.status}>{state.message}</p>}*/}

        <div className={classes.pending}>
          <button type="submit" className={classes.submitBtn}>
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
}
