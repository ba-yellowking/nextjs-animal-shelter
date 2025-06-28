"use client";

import useModal from "@/app/hooks/useModal";
import Modal from "@/app/ui/modal/Modal";
import AddAnimal from "@/app/ui/form/AddAnimal";

export default function AdminPage() {
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
