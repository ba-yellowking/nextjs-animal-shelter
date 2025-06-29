"use client";

import { useState } from "react";
import axios from "axios";
import classes from "./AddAnimal.module.css";

export default function AddAnimal({ onSuccess }) {
  const [form, setForm] = useState({
    name: "",
    age: "",
    description: "",
    image: "/dog1.jpg",
  });

  const [preview, setPreview] = useState(null);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const createSlug = (name) =>
    name.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^a-z0-9\-]/g, "");

  // drag and drop handler
  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];

    // e.dataTransfer/type checks for "image/"
    if (!file || !file.type.startsWith("image/")) {
      setStatus("Only images allowed.");
      return;
    }

    // e.dataTransfer.files[0].size -> 1024 * 1024 bytes = 1 Mb
    if (file.size > 1024 * 1024 * 10) {
      setStatus("Image too large (max 10MB)");
      return;
    }

    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);
    setForm((prev) => ({ ...prev, image: objectUrl }));
  };

  const handleDragOver = (e) => e.preventDefault();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const slug = createSlug(form.name);

    try {
      const response = await axios.post("/api/animals", {
        ...form,
        slug,
      });

      if (response.status === 201) {
        setStatus("Animal added!");
        setForm({
          name: "",
          age: "",
          description: "",
          image: "/dog1.jpg",
        });
        setPreview(null);
        if (onSuccess) onSuccess();
      } else {
        setStatus("Unexpected response");
      }
    } catch (err) {
      console.error(err);
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
      <div
        className={classes.dropzone}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        {preview ? (
          <img src={preview} alt="Preview" className={classes.preview} />
        ) : (
          <p>Drag and drop image here</p>
        )}
      </div>

      <button type="submit">Save</button>
      {status && <p>{status}</p>}
    </form>
  );
}
