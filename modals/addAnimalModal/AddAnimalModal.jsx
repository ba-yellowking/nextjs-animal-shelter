"use client";

import useModal from "@/hooks/useModal";
import Modal from "@/ui/modal/Modal";
import AddAnimalForm from "@/components/forms/addAnimalForm/AddAnimalForm";
import classes from "./AddAnimalModal.module.css";

function AddAnimalModal() {
  const [isOpen, open, close] = useModal();

  return (
    <main>
      <button onClick={open} className={classes.addAnimalBtn}>
        Add animal
      </button>

      {isOpen && (
        <Modal onClose={close}>
          <AddAnimalForm />
        </Modal>
      )}
    </main>
  );
}

export default AddAnimalModal;
