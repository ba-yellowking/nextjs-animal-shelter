"use client";

import useModal from "@/hooks/useModal";
import Modal from "@/ui/modal/Modal";
import SignUpForm from "@/lib/users/forms/signUpForm/SignUpForm";
import Button from "@/ui/button/Button";

export default function SignUpModal() {
  const [isOpen, open, close] = useModal();

  return (
    <main>
      <Button type="button" title="Sign up" action={open} />

      {isOpen && (
        <Modal onClose={close}>
          <SignUpForm />
        </Modal>
      )}
    </main>
  );
}
