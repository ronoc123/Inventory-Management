import { AiFillDelete } from "react-icons/ai";
import { useAppContext } from "../context/appContext";

const InventoryItem = ({ name, quantity, id }) => {
  const { deleteInventory } = useAppContext();
  const remove = (id) => {
    deleteInventory(id);
  };

  return (
    <div className="single-item">
      <div className="letter">{name.substring(0, 1).toUpperCase()}</div>
      <div className="quantity">{quantity}</div>
      <div className="name">{name}</div>
      <button className="delete-btn" onClick={() => remove(id)}>
        <AiFillDelete />
      </button>
    </div>
  );
};

export default InventoryItem;
