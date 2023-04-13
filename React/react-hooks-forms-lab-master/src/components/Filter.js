import React from "react";

function Filter({ onCategoryChange, onSearchChange, search }) {
  function handleSearchChange(e) {
    onSearchChange(e.target.value)
  }
  //Parent, ShoppingList needs to know about the search text, so state will be there
  return (
    <div className="Filter">
      <input type="text" name="search" placeholder="Search..." onChange={handleSearchChange} value={search} />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
