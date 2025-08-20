"use client";

import classes from "./AddUserModal.module.css";
import useModal from "@/hooks/useModal";
import Modal from "@/ui/modal/Modal";
import AddUserForm from "@/lib/users/forms/addUserForm/AddUserForm";
import Button from "@/ui/button/Button";

export default function AddUserModal() {
  const [isOpen, open, close] = useModal();

  return (
    <main>
      <Button title="Sign up" action={open} />

      {isOpen && (
        <Modal onClose={close}>
          <AddUserForm />
        </Modal>
      )}
    </main>
  );
}
