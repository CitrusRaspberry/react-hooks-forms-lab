import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [listItems, setListItems] = useState(items);
  const [formData, setFormData] = useState({
    name: "",
    category: "Produce"
  });

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = listItems.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  })
  .filter(item => {
    return item.name.toLowerCase().includes(search.toLowerCase())
  });

  return (
    <div className="ShoppingList">
      <ItemForm listItems={listItems} formData={formData} setFormData={setFormData} setListItems={setListItems} />
      <Filter onSearchChange={setSearch} search={search} onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
