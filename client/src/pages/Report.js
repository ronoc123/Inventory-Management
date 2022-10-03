import Wrapper from "../assests/Wappers/Report";
import FormRow from "../components/FormRow";
import FormRowSelect from "../components/FormRowSelect";
import { useEffect, useState } from "react";
import { useAppContext } from "../context/appContext";
import InventoryBtn from "../components/InventoryBtn";
import { BsSearch } from "react-icons/bs";
import Alert from "../components/Alert";

const Report = () => {
  const initialState = {
    quantity: 0,
    type: "Purchase",
    search: "",
    filter: false,
  };

  const {
    inventory,
    singleInventory,
    addTransaction,
    displayAlert,
    searchInventory,
    filterInventories,
  } = useAppContext();

  const [values, setValues] = useState(initialState);

  const list = ["Purchase", "Sell"];

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { quantity, type } = values;

    const id = singleInventory.id;

    if (!quantity || !type || !id) {
      displayAlert();

      return;
    }
    addTransaction(id, quantity, type);
  };
  const searchInventories = (e) => {
    e.preventDefault();
    const { search } = values;
    if (search) {
      setValues({ ...values, filter: true });
    }

    filterInventories(search);
  };

  return (
    <Wrapper>
      <div className="single-container">
        <form className="add-container" onSubmit={onSubmit}>
          <h2>Add a Transaction</h2>
          <Alert />
          <FormRow
            type="number"
            value={values.quantity}
            name="quantity"
            handleChange={handleChange}
            labelText="Quantity"
          />
          <FormRowSelect
            labelText="Transaction Type"
            name="type"
            value={values.type}
            handleChange={handleChange}
            list={list}
          />
          <button className="submit-btn" type="submit">
            Add
          </button>
        </form>
        <div className="info-container">
          <h1>Product Information</h1>
          {/* <div className="info">{singleInventory?.id}</div> */}
          <div className="info">Name: {singleInventory?.name}</div>
          <div className="info">Stock: {singleInventory?.quantity}</div>
        </div>
      </div>
      <div className="container">
        <form className="search-container" onSubmit={searchInventories}>
          <FormRow
            type="text"
            value={values.search}
            handleChange={handleChange}
            name="search"
            labelText=" "
          />{" "}
          <button className="search-btn" type="submit">
            <BsSearch />
          </button>
        </form>
        <h1>Select A Product!</h1>
        <div className="inventory-container">
          {values.filter
            ? searchInventory.map((inventory) => {
                return <InventoryBtn {...inventory} key={inventory.id} />;
              })
            : inventory.map((inventory) => {
                return <InventoryBtn {...inventory} key={inventory.id} />;
              })}
        </div>
      </div>
    </Wrapper>
  );
};

export default Report;
