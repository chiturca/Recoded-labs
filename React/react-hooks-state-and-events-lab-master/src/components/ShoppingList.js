import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  console.log(items)
  const [filterItem, setFilterItem] = useState("All");

  const handleFilter = (e) => {
    setFilterItem(e.target.value)
  }

  const categories = items.filter((item) => {
    if(filterItem === "All") {
      return items
    }  else{
      return filterItem === item.category
    }
  })

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleFilter}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {categories.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
