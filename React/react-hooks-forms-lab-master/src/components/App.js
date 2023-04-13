import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);       //setItems was sitting unused here. From parent App(), props to ShoppingList 
  const [isDarkMode, setIsDarkMode] = useState(false);    //...which holds ItemForm as a child, so prop setItems from it to ItemForm.

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  function handleAddItemSubmit(addItem) {
    setItems([...items, addItem])
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <ShoppingList items={items} onItemFormSubmit={handleAddItemSubmit}/>
    </div>
  );
}

export default App;
