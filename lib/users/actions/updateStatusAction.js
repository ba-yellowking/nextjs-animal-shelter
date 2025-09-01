"use server";

import db from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function updateStatusAction(prev, formData) {
  const id = Number(formData.get("id"));
  const status = String(formData.get("status"));

  db.prepare(`UPDATE adoption_requests SET status=@status WHERE id=@id`).run({
    id,
    status,
  });

  revalidatePath("/request");
  return { ok: true, message: "Updated" };
}
