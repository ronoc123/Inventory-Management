const InventoryTransaction = ({
  activity,
  quantityBefore,
  quantityAfter,
  date,
  inventory: { name },
}) => {
  return (
    <div className="transaction">
      <div>{date.substring(0, 10)}</div>
      <div>{name}</div>
      <div>{activity}</div>
      <div>{quantityBefore}</div>
      <div>{quantityAfter}</div>
    </div>
  );
};

export default InventoryTransaction;
