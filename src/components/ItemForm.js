import React from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ setListItems, listItems, formData, setFormData }) {
  function handleNameChange(e) {
    setFormData({
      ...formData,
      name: e.target.value
    })
    console.log(formData);
  }
  function handleCategoryChange(e) {
    setFormData({
      ...formData,
      category: e.target.value
    })
    console.log(formData);
  }
  function handleFormSubmit(e) {
    e.preventDefault();
    const newFormData = { ...formData, id: uuid() }
    setListItems([
      ...listItems,
      newFormData
    ])
  }
  return (
    <form onSubmit={handleFormSubmit} className="NewItem">
      <label>
        Name:
        <input onChange={handleNameChange} type="text" name="name" />
      </label>

      <label>
        Category:
        <select name="category" onChange={handleCategoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
