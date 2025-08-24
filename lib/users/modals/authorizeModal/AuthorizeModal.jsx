"use client";

import useModal from "@/hooks/useModal";
import Modal from "@/ui/modal/Modal";
import AuthorizeForm from "@/lib/users/forms/authorizeForm/AuthorizeForm";
import classes from "./AuthorizeModal.module.css";

export default function AuthorizeModal() {
  const [isOpen, open, close] = useModal();

  return (
    <main>
      <p className={classes.signIn} onClick={open}>
        Log in
      </p>

      {isOpen && (
        <Modal onClose={close}>
          <AuthorizeForm />
        </Modal>
      )}
    </main>
  );
}
