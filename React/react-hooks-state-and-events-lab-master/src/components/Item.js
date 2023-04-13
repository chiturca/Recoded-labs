import React, { useState } from "react";

function Item({ name, category }) {
  const [click, setClick] = useState(false);

  function handleClick() {
    setClick(click => !click)
  };

  return (
    <li className={click ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className={click ? "remove" : "add" }>{click ? "Add to Cart" : "Remove From Cart"}</button>
    </li>
  );
}

export default Item;
