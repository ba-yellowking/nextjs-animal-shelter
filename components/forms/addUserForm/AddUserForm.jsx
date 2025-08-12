"use client";

// import classes from "./AddUserForm.module.css";
import { useActionState } from "react";
import { submitNewUser } from "@/app/actions/submitNewUser";

export default function AddUserForm() {
  const [state, formAction] = useActionState(submitNewUser, { message: null });

  return (
    <form action={formAction}>
      <div>
        <label htmlFor="username">Username</label>
        <input id="username" name="username" required />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" required />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input id="password" name="password" required />
      </div>
      <button type="submit">Register</button>
      {/*{state.message && <p>{state.message}</p>}*/}
    </form>
  );
}
