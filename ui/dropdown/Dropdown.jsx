"use client";

import { useState, useEffect, useRef } from "react";
import classes from "./Dropdown.module.css";

export default function Dropdown({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggle = () => setIsOpen((prev) => !prev);

  // closing dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={classes.dropdown} ref={dropdownRef}>
      <div className={classes.toggle} onClick={toggle}>
        {question}
        <svg
          className={`${classes.arrow} ${isOpen ? classes.open : ""}`}
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6l-6-6z"
          />
        </svg>
      </div>

      {isOpen && <ul className={classes.dropdownMenu}>{answer}</ul>}
    </div>
  );
}
