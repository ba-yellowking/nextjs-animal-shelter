"use client";

import useModal from "@/hooks/useModal";
import Modal from "@/ui/modal/Modal";
import AdoptionRequestForm from "@/components/forms/adoptionRequestForm/AdoptionRequestForm";
import Button from "@/ui/button/Button";

export default function AdoptionRequestModal({ animalId }) {
  const [isOpen, open, close] = useModal();
  return (
    <main>
      <Button type="button" action={open} title="Adopt"></Button>
      {isOpen && (
        <Modal onClose={close}>
          <AdoptionRequestForm animalId={animalId} />
        </Modal>
      )}
    </main>
  );
}
