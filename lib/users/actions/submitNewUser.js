"use server";

import { addUser } from "@/lib/users/addUser";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createAuthSession } from "@/lib/users/auth";

export async function submitNewUser(prevState, formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  let errors = {};

  if (!email.includes("@")) {
    errors.email = "Please enter a valid email address.";
  }

  if (password.trim().length < 5) {
    errors.password = "Password must be at least 5 characters long.";
  }

  if (Object.keys(errors).length > 0) {
    return {
      errors: errors,
    };
  }

  try {
    const newUserId = await addUser(email, password);
    revalidatePath("/");
    await createAuthSession(newUserId);
  } catch (error) {
    console.error(error);
    if (error.code === "SQLITE_CONSTRAINT_UNIQUE") {
      return {
        errors: {
          email: "An account for the chosen email already exists.",
        },
      };
    }
    return {
      errors: { form: "Something went wrong. Please try again later." },
    };
  }
  redirect("/animals");
}
