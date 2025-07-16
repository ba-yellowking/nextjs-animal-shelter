import {useState} from "react";

export default function useAnimalForm() {
  const [form, setForm] = useState({
    name: "",
    age: "",
    species: "",
    color: "",
    description: "",
    image: "/dog1.jpg",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return { form, setForm, handleChange }
}