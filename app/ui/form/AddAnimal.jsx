"use client";

import { useState } from "react";
import axios from "axios";
import classes from "./add-animals.module.css";

export default function AddAnimal({ onSuccess }) {

  const [form, setForm] = useState({
    name: "",
    age: "",
    description: "",
    image: "/dog1.jpg",
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  function createSlug(name) {
    return name
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-')        // пробелы → дефисы
      .replace(/[^a-z0-9\-]/g, '') // убрать всё лишнее
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const slug = createSlug(form.name);

    try {
      const response = await axios.post("/api/animals", {
        ...form,
        slug, // теперь передаём
      });

      if (response.status === 201) {
        setStatus("Animal added!");
        setForm({
          name: "",
          age: "",
          description: "",
          image: "/dog1.jpg",
        });
        if (onSuccess) onSuccess();
      } else {
        setStatus("Unexpected response");
      }
    } catch (error) {
      console.error(error);
      setStatus("Failed to add animal");
    }
  };


  return (
    <form className={classes.form} onSubmit={handleSubmit}>

      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />

      <label htmlFor="age">Age</label>
      <input
        id="age"
        name="age"
        type="number"
        value={form.age}
        onChange={handleChange}
        placeholder="Age"
      />

      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="Description"
      />

      <label htmlFor="image">Image</label>
      <input
        id="image"
        name="image"
        value={form.image}
        onChange={handleChange}
        placeholder="Image"
      />

      <button type="submit">Save</button>
      {status && <p>{status}</p>}
    </form>
  );
}
