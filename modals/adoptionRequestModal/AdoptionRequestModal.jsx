"use client";

import useModal from "@/hooks/useModal";
import Modal from "@/ui/modal/Modal";
import AdoptionRequestForm from "@/app/animals/[slug]/adoptionRequestForm/AdoptionRequestForm";
import classes from "./AdoptionRequestModal.module.css";

export default function AdoptionRequestModal({ animalId }) {
  const [isOpen, open, close] = useModal();
  return (
    <main>
      <button className={classes.button} onClick={open}>
        <span>Take me home</span>
      </button>
      {isOpen && (
        <Modal onClose={close}>
          <AdoptionRequestForm animalId={animalId} />
        </Modal>
      )}
    </main>
  );
}
