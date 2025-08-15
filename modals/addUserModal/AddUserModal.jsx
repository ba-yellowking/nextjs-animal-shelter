"use client";

import classes from "./AddUserModal.module.css";
import useModal from "@/hooks/useModal";
import Modal from "@/ui/modal/Modal";
import AddUserForm from "@/components/forms/addUserForm/AddUserForm";

export default function AddUserModal() {
  const [isOpen, open, close] = useModal();

  return (
    <main>
      <button onClick={open} className={classes.signUpBtn}>
        Sign up
      </button>

      {isOpen && (
        <Modal onClose={close}>
          <AddUserForm />
        </Modal>
      )}
    </main>
  );
}
