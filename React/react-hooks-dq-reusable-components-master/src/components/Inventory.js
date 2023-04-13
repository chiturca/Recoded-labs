import React from "react";
import Purse from "./Purse";
// import InventoryTile from "./InventoryTile";
import PotionTile from "./PotionTile";

function Inventory({ inventory, potions, sell, shake, stopShake, gold }) {
  const inventoryList = inventory.map((item) => {
    const potion = potions.find((potion) => potion.id === item.id);

    return (
      <PotionTile key={potion.id} potion={potion} onClick={()=> sell(potion.id)} className="inventory-card">
        <h4>
          {potion.name} x {item.amount}
        </h4>
      </PotionTile>
    );
  });

  return (
    <div className="inventory">
      <h2>Inventory</h2>
      <Purse stopShake={stopShake} shake={shake} gold={gold} />
      <div className="inventory-cards">{inventoryList}</div>
    </div>
  );
}

export default Inventory;
