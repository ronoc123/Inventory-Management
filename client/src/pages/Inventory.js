import React from "react";

import Wrapper from "../assests/Wappers/InventoryPage";

import InventoryItem from "../components/InventoryItem";

import { useAppContext } from "../context/appContext";

const Inventory = () => {
  const { inventory } = useAppContext();

  return (
    <Wrapper>
      <div className="info-container">
        {inventory.map((item) => {
          return <InventoryItem {...item} key={item.id} />;
        })}
      </div>
    </Wrapper>
  );
};

export default Inventory;
