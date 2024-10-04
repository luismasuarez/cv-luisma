import React, { useState } from "react";
import INFO from "../assets/cv.json";

const useEdit = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState(INFO);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: string
  ) => {
    setFormData((prevState) => ({
      ...prevState,
      [field]: e.target.value,
    }));
  };

  const handleNestedChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: string,
    nestedField: string
  ) => {
    setFormData((prevState) => ({
      ...prevState,
      [field]: {
        ...prevState[field],
        [nestedField]: e.target.value,
      },
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowForm(false); // Cierra el formulario al enviar
  };

  const closeEditor = () => {
    setShowForm(false);
  };

  return {
    showForm,
    setShowForm,
    formData,
    handleChange,
    handleNestedChange,
    handleSubmit,
    closeEditor,
  };
};

export default useEdit;
