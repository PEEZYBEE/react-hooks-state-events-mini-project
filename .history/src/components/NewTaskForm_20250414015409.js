// src/components/NewTaskForm.js
import React, { useState } from "reac

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [formData, setFormData] = useState({
    text: "",
    category: categories[1] || "", // Default to first non-"All" category ("Code")
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.text && formData.category) {
      onTaskFormSubmit({
        text: formData.text,
        category: formData.category,
      });
      setFormData({ text: "", category: categories[1] || "" });
    }
  };

  // Exclude "All" from category options
  const categoryOptions = categories.filter((category) => category !== "All");

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={formData.text}
          onChange={handleChange}
        />
      </label>
      <label>
        Category
        <select name="category" value={formData.category} onChange={handleChange}>
          {categoryOptions.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;