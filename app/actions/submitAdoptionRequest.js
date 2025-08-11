"use server";

import db from "@/lib/db";
import { redirect } from "next/navigation";

export default async function SubmitAdoptionRequest(prevState, formData) {
  function isValidData(data) {
    return !data;
  }

  const newRequest = {
    animalId: formData.get("animalId"),
    fullName: formData.get("fullName"),
    // birth: formData.get("birth"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    comment: formData.get("comment"),
  };

  if (
    isValidData(newRequest.fullName) ||
    // isValidData(newRequest.birth) ||
    isValidData(newRequest.phone) ||
    isValidData(newRequest.email) ||
    isValidData(newRequest.comment)
  ) {
    return {
      message: "Invalid input.",
    };
  }

  // await submitRequest(newRequest);

  db.prepare(
    `
      INSERT INTO adoption_requests (animalId, fullName, phone, email, comment)
      VALUES (@animalId, @fullName, @phone, @email, @comment)
    `,
  ).run(newRequest);

  redirect("/animals?success=1");
}
