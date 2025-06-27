"use client";

import useModal from "@/app/hooks/useModal";
import Modal from "@/app/ui/modal/Modal";

export default function AdminPage() {

  const [isOpen, open, close] = useModal();

  return (
    <main>
      <h2 onClick={open}>Add animal</h2>

      {isOpen && (
        <Modal onClose={close}>
          <h3>Add new animal</h3>
          <form>
            <label htmlFor="name">
              <input id="name" type="text" placeholder="Name" required/>
              <button>Save</button>
              <button onClick={close}>Cancel</button>
            </label>
          </form>
        </Modal>
      )}
    </main>
  )
}