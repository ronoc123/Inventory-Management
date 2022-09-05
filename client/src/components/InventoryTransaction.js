const InventoryTransaction = ({
  activity,
  quantityBefore,
  quantityAfter,
  date,
}) => {
  return (
    <div className="transaction">
      <div>{date}</div>
      <div>Price</div>
      <div>{activity}</div>
      <div>{quantityBefore}</div>
      <div>{quantityAfter}</div>
    </div>
  );
};

export default InventoryTransaction;
