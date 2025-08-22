"use client";

import useModal from "@/hooks/useModal";
import Modal from "@/ui/modal/Modal";
import AddAnimalForm from "@/components/forms/addAnimalForm/AddAnimalForm";
import classes from "./AddAnimalModal.module.css";
import Button from "@/ui/button/Button";

function AddAnimalModal() {
  const [isOpen, open, close] = useModal();

  return (
    <main>
      <Button type="button" action={open} title="Add animal"></Button>

      {isOpen && (
        <Modal onClose={close}>
          <AddAnimalForm />
        </Modal>
      )}
    </main>
  );
}

export default AddAnimalModal;
