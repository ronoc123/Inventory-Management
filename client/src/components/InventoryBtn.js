import { Link } from "react-router-dom";
import { useAppContext } from "../context/appContext";
import { useEffect } from "react";

const InventoryBtn = ({ name, id }) => {
  const { fetchSingleInventory } = useAppContext();
  const searchItem = () => {
    fetchSingleInventory(id);
  };

  return (
    <button className="invBtn" onClick={() => searchItem(id)}>
      {name}
    </button>
  );
};

export default InventoryBtn;
