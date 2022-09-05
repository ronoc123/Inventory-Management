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
    price: 0,
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
    const { quantity, type, price } = values;

    const id = singleInventory.id;

    if (!quantity || !type || !price || !id) {
      displayAlert();
      return;
    }

    addTransaction(id, price, quantity, type);
  };
  const searchInventories = (e) => {
    e.preventDefault();
    const { search } = values;
    if (search) {
      setValues({ ...values, filter: true });
    }

    filterInventories(search);
  };

  if (values.filter === false) {
    return (
      <Wrapper>
        <div className="container">
          <div className="single-container">
            <h2>Product Information</h2>
            <div>Product Id: {singleInventory?.id}</div>
            <div>Title: {singleInventory?.name}</div>
            <div>Stock: {singleInventory?.quantity}</div>
          </div>
          <div>
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
            <h2>Select A Product!</h2>
            <div className="inventory-container">
              {inventory.map((inventory) => {
                return <InventoryBtn {...inventory} key={inventory.id} />;
              })}
            </div>
          </div>
          <form className="add-container" onSubmit={(e) => onSubmit(e)}>
            <Alert />
            <FormRow
              type="number"
              value={values.price}
              name="price"
              handleChange={handleChange}
              labelText="Price"
            />
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
              Add Transaction
            </button>
          </form>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div className="container">
        <div className="single-container">
          <h2>Product Information</h2>
          <div>Product Id: {singleInventory?.id}</div>
          <div>Title: {singleInventory?.name}</div>
          <div>Stock: {singleInventory?.quantity}</div>
        </div>
        <div>
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
          <div className="inventory-container">
            {searchInventory.map((inventory) => {
              return <InventoryBtn {...inventory} key={inventory.id} />;
            })}
          </div>
        </div>
        <form className="add-container" onSubmit={(e) => onSubmit(e)}>
          <Alert />
          <FormRow
            type="number"
            value={values.price}
            name="price"
            handleChange={handleChange}
            labelText="Price"
          />
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
            Add Transaction
          </button>
        </form>
      </div>
    </Wrapper>
  );
};

export default Report;
