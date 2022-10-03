import React from "react";
import Wrapper from "../assests/Wappers/Transaction";

import { useEffect } from "react";
import { useAppContext } from "../context/appContext";
import InventoryTransaction from "../components/InventoryTransaction";

const Transaction = () => {
  const { inventoryTransactions } = useAppContext();

  const totalPurchases = inventoryTransactions.reduce((acc, item) => {
    if (item.activity === "Purchase") {
      acc += 1;
    }
    return acc;
  }, 0);
  const totalSales = inventoryTransactions.reduce((acc, item) => {
    if (item.activity === "Sell") {
      acc += 1;
    }
    return acc;
  }, 0);

  return (
    <Wrapper>
      <div className="info-container">
        <div className="title-heading">Transaction History</div>
        <div className="number">
          All ({inventoryTransactions.length}) | Purchases ({totalPurchases}) |
          Sales ({totalSales})
        </div>
        <div className="transaction-container">
          <div className="title">
            <div className="heading">Date</div>
            <div className="heading">Product</div>
            <div className="heading">Type</div>
            <div className="heading">Quantity Before</div>
            <div className="heading">Quantity After</div>
          </div>
          {inventoryTransactions.map((transaction) => {
            return (
              <InventoryTransaction {...transaction} key={transaction.id} />
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

export default Transaction;
