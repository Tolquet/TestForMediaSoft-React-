import React, { useState } from "react";
import { useDispatch } from "react-redux";

const FormPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "SAVE_FORM_DATA", payload: formData });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
    
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormPage;
