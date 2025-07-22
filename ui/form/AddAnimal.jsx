"use client";

import { useRef } from "react";
import axios from "axios";
import classes from "./AddAnimal.module.css";
import useAnimalForm from "@/hooks/useAnimalForm";
import useImageUpload from "@/hooks/useImageUpload";

export default function AddAnimal({ onSuccess }) {
  const { form, setForm, handleChange } = useAnimalForm();
  const { preview, status, setStatus, handleFile, setPreview } = useImageUpload(setForm);

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    handleFile(file);
  };

  const handleDragOver = (e) => e.preventDefault();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/animals", { ...form });

      if (response.status === 201) {
        setStatus("Animal added!");
        setForm({
          name: "",
          age: "",
          species: "",
          color: "",
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
      <div className={classes.formRow}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
      </div>

      <div className={classes.formRow}>
        <label htmlFor="species">Species</label>
        <select
          id="species"
          name="species"
          value={form.species}
          onChange={handleChange}
          required
        >
          <option value="">Select species</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
        </select>
      </div>

      <div className={classes.formRow}>
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
      </div>

      <div className={classes.formRow}>
        <label htmlFor="color">Color</label>
        <input
          id="color"
          name="color"
          value={form.color}
          onChange={handleChange}
          placeholder="Color"
          required
        />
      </div>

      <div className={classes.formRow}>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Description"
        />
      </div>

      <div className={classes.formRow}>
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
      </div>

      <input
        type="file"
        accept="image/*"
        onChange={handleFileSelect}
        style={{ display: "none" }}
        ref={fileInputRef}
      />

      <div className={classes.buttonGroup}>
        <button type="button" onClick={() => fileInputRef.current?.click()}>
          Browse
        </button>
        <button type="submit">Save</button>
      </div>

      {status && <p className={classes.status}>{status}</p>}
    </form>
  );
}
