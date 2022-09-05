const InventoryItem = ({ name, quantity }) => {
  return (
    <>
      <div>Product: {name}</div>
      <div>Stock: {quantity}</div>
    </>
  );
};

export default InventoryItem;
