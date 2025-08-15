"use server";

import { addUser } from "@/lib/users/addUser";
import { revalidatePath } from "next/cache";

export async function submitNewUser(prevState, formData) {
  function isValidData(data) {
    return !data || data.trim() === "";
  }

  const newUser = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
  };

  if (
    isValidData(newUser.username) ||
    isValidData(newUser.email) ||
    isValidData(newUser.password)
  ) {
    return {
      message: "Invalid input",
    };
  }

  revalidatePath("/");

  await addUser(newUser);
}
