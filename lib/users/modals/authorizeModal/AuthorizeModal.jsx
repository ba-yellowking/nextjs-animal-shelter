"use client";

import classes from "./AuthorizeModal.module.css";
import useModal from "@/hooks/useModal";
import Modal from "@/ui/modal/Modal";
import AuthorizeForm from "@/lib/users/forms/authorizeForm/AuthorizeForm";
import Button from "@/ui/button/Button";

export default function AuthorizeModal() {
  const [isOpen, open, close] = useModal();

  return (
    <main>
      <Button type="button" title="Sign in" action={open} />

      {isOpen && (
        <Modal onClose={close}>
          <AuthorizeForm />
        </Modal>
      )}
    </main>
  );
}
