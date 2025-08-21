// we are using this route because of saving cookies

import { cookies } from "next/headers";
import { addUser } from "@/lib/users/addUser";

export async function POST(request) {
  const formData = await request.formData();

  const newUser = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const result = await addUser(newUser);

  if (result.success) {
    cookies().set("registered", "true", { maxAge: 60 * 60 * 24 * 7 });
    cookies().set("username", newUser.username, { maxAge: 60 * 60 * 24 * 7 });
    return new Response("OK");
  }

  return new Response(result.message, { status: 400 });
}
