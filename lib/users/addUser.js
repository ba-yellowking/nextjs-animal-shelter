import bcrypt from "bcryptjs";
import db from "@/lib/db";

export async function addUser(newUser) {
  const hashedPassword = bcrypt.hashSync(newUser.password, 10);

  try {
    db.prepare(
      `
    INSERT INTO users (username, email, password)
    VALUES (@username, @email, @password)
  `,
    ).run({
      ...newUser,
      password: hashedPassword,
    });
    return { success: true, message: "User registered successfully" };
  } catch (error) {
    return { success: false, message: "User already exists or other error" };
  }
}
