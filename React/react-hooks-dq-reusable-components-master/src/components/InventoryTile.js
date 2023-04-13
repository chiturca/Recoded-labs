import React from "react";

// Study me! What information do I require to work?
// How am I the same as ShopTile? How am I different?

function InventoryTile({ potion, sell, children }) {
  return (
    <div className="inventory-card">
      <div onClick={() => sell(potion.id)} className="image-wrapper">
        <img className="image" alt={potion.name} src={potion.image_url} />
      </div>
      {children}
    </div>
  );
}

export default InventoryTile;
