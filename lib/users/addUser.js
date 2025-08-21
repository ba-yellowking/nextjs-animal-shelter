import bcrypt from "bcryptjs";
import db from "@/lib/db";

export async function addUser(email, password) {
  const hashedPassword = await bcrypt.hash(password, 12);

  const result = db
    .prepare(`INSERT INTO users (email, password) VALUES (@email, @password)`)
    .run({ email: email, password: hashedPassword });

  return result.lastInsertRowid;
}
