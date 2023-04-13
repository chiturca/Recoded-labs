import React from "react";

// Study me! What information do I require to work?
// How am I the same as InventoryTile? How am I different?

function ShopTile({ potion, addToInventory, children }) {
  return (
    <div className="card">
      <div onClick={() => addToInventory(potion.id)} className="image-wrapper">
        <img className="image" alt={potion.name} src={potion.image_url} />
      </div>
      {children}
    </div>
  );
}

export default ShopTile;
