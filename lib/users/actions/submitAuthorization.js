"use server";

import db from "@/lib/db";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import bcrypt from "bcryptjs";

export async function SubmitAuthorization(prevState, formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  const user = db.prepare("SELECT * FROM users WHERE email = ?").get(email);

  if (!user) {
    return { message: "Invalid email or password." };
  }

  const isPasswordCorrect = bcrypt.compareSync(password, user.password);

  if (!isPasswordCorrect) {
    return { message: "Invalid email or password." };
  }

  cookies().set("authorized", "true");
  cookies().set("username", user.username);

  redirect("/animals");
}
