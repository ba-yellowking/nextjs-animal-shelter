"use server";

import { destroySession } from "@/lib/users/auth";
import { redirect } from "next/navigation";

export async function LogOutAction() {
  await destroySession();
  redirect("/");
}
