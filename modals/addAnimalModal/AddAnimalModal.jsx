"use client";

import useModal from "@/hooks/useModal";
import Modal from "@/ui/modal/Modal";
import AddAnimal from "@/ui/form/AddAnimal";
import classes from "./AddAnimalModal.module.css";

function AddAnimalModal() {
  const [isOpen, open, close] = useModal();

  return (
    <main>
      <button onClick={open} className={classes.addAnimalBtn}>Add animal</button>

      {isOpen && (
        <Modal onClose={close}>
          <h3>Add new animal</h3>
          <AddAnimal onSuccess={close} />
        </Modal>
      )}
    </main>
  );
}

export default AddAnimalModal;