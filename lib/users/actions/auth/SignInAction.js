"use server";

import db from "@/lib/db";
import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";
import { createAuthSession } from "@/lib/users/auth";

export async function SignInAction(prevState, formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  const userByEmail = db
    .prepare("SELECT * FROM users WHERE email = ?")
    .get(email);

  if (!userByEmail) {
    return {
      errors: {
        email: "Please, check your credentials",
      },
    };
  }

  const isValidPassword = bcrypt.compareSync(password, userByEmail.password);

  if (!isValidPassword) {
    return {
      errors: {
        password: "Please, check your credentials",
      },
    };
  }

  try {
    await createAuthSession(userByEmail.id);
  } catch (error) {
    console.error("Auth session error:", error);
    return {
      errors: { form: "Something went wrong. Please try again later." },
    };
  }

  redirect("/animals");
}
