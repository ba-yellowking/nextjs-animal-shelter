"use client";

import classes from "./DeleteComponent.module.css";
import { useRouter } from "next/navigation";
import { DeleteAnimalAction } from "@/lib/users/components/deleteComponent/DeleteAnimalAction";

export default function DeleteComponent({ id }) {
  const router = useRouter();

  async function handleDelete() {
    const confirmDelete = confirm("Are you sure you want to delete?");
    if (!confirmDelete) return;

    await DeleteAnimalAction(id);
    router.refresh();
  }

  return (
    <>
      <button className={classes.delete} onClick={handleDelete}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zM9 17h2V8H9zm4 0h2V8h-2zM7 6v13z"
          />
        </svg>
      </button>
    </>
  );
}
