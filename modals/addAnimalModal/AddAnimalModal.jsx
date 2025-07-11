"use client";

import useModal from "@/hooks/useModal";
import Modal from "@/ui/modal/Modal";
import AddAnimal from "@/ui/form/AddAnimal";

function AddAnimalModal() {
  const [isOpen, open, close] = useModal();

  return (
    <main>
      <h2 onClick={open}>Add animal</h2>

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