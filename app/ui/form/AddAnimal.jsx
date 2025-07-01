"use client";

import {useRef, useState} from "react";
import axios from "axios";
import classes from "./AddAnimal.module.css";
import useAnimalForm from "@/app/hooks/useAnimalForm";
import useImageUpload from "@/app/hooks/useImageUpload";

export default function AddAnimal({ onSuccess }) {

  const { form, setForm, handleChange } = useAnimalForm();
  const { preview, status, setStatus, handleFile, setPreview } = useImageUpload(setForm);

  const createSlug = (name) =>
    name.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^a-z0-9\-]/g, "");

  // drag and drop handler
  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    handleFile(file);
  }

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

  const fileInputRef = useRef();

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    handleFile(file);
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
        min="0"
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

      <input
        type="file"
        accept="image/*"
        onChange={handleFileSelect}
        style={{ display: "none" }}
        ref={fileInputRef}
      />

      <button
        type="button"
        onClick={() => fileInputRef.current?.click()}
      >
        Browse
      </button>

      <button type="submit">Save</button>
      {status && <p className={classes.status}>{status}</p>}
    </form>
  );
}
