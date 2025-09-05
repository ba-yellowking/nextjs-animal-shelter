import db from "@/lib/db";

export default function getUser(id) {
  const row = db.prepare("SELECT email FROM users WHERE id = ?").get(id);
  return row ? row.email : null;
}
