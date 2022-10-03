import React from "react";
import Wrapper from "../assests/Wappers/InventoryPage";
import InventoryItem from "../components/InventoryItem";
import { useAppContext } from "../context/appContext";
import { BsSearch } from "react-icons/bs";
import FormRow from "../components/FormRow";
import { useState } from "react";
import AddProduct from "../components/AddProduct";

const Inventory = () => {
  const { inventory, filterInventories, searchInventory } = useAppContext();

  const [overlay, setOverlay] = useState(false);

  const [filter, setFilter] = useState(true);

  const [search, setSearch] = useState("");

  const filterInventory = () => {
    filterInventories(search);
    setFilter(false);
  };

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <Wrapper>
      {overlay && <AddProduct setOverlay={setOverlay} overlay={overlay} />}
      <div className="container">
        <div className="overlay"></div>
        <div className="search-container">
          <h1 className="search-title">Search For a Product</h1>
          <div className="search-items">
            <FormRow
              type="text"
              value={search}
              // name="search"
              handleChange={onChange}
            />
            <button className="search-btn" onClick={filterInventory}>
              <BsSearch />
            </button>
          </div>
        </div>
        <button className="overlay-btn" onClick={() => setOverlay(!overlay)}>
          Add Product
        </button>
        <div className="col-title">
          <h1></h1>
          <h1>Stock</h1>
          <h1>Title</h1>
          <h1></h1>
        </div>
        <div className="info-container">
          {filter
            ? inventory.map((item) => {
                return <InventoryItem {...item} key={item.id} />;
              })
            : searchInventory.map((item) => {
                return <InventoryItem {...item} key={item.id} />;
              })}
        </div>
      </div>
    </Wrapper>
  );
};

export default Inventory;
