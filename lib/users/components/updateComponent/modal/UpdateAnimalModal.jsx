"use client";

import { useState } from "react";
import Modal from "@/ui/modal/Modal";
import classes from "../UpdateComponent.module.css";
import UpdateComponent from "@/lib/users/components/updateComponent/UpdateComponent";

export default function UpdateAnimalModal({ animal }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <>
      <button
        type="button"
        className={classes.updateButton}
        onClick={open}
        title="Edit"
        aria-label="Edit"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <path
            fill="#333"
            d="M3 21v-4.25L16.2 3.575q.3-.275.663-.425t.762-.15t.775.15t.65.45L20.425 5q.3.275.438.65T21 6.4q0 .4-.137.763t-.438.662L7.25 21zM17.6 7.8L19 6.4L17.6 5l-1.4 1.4z"
          />
        </svg>
      </button>

      {isOpen && (
        <Modal onClose={close}>
          <UpdateComponent animal={animal} close={close} />
        </Modal>
      )}
    </>
  );
}
