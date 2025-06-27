import {useState} from "react";

export default function useModal() {

  const [isOpen, setIsOpen] = useState(false);

  function close() {
    setIsOpen(false);
  }

  function open() {
    setIsOpen(true);
  }

  return [isOpen, open, close]
}