import Wrapper from "../assests/Wappers/AddProduct";
import FormRow from "./FormRow";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useState } from "react";
import Alert from "../components/Alert";
import { useAppContext } from "../context/appContext";
const initialState = {
  name: "",
  quantity: "",
};

const AddProduct = ({ setOverlay, overlay }) => {
  const [values, setValues] = useState(initialState);
  const { showAlert, addInventory, displayAlert } = useAppContext();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const addProduct = () => {
    if (!values.name || !values.quantity) {
      displayAlert();
      return;
    }
    addInventory(values);
    setValues(initialState);
    setOverlay(!overlay);
  };

  return (
    <Wrapper>
      <div className="container">
        <button className="close-icons" onClick={() => setOverlay(!overlay)}>
          <AiOutlineCloseCircle />
        </button>
        <h1>Add a Product!</h1>
        {showAlert && <Alert />}
        <form>
          <FormRow
            type="name"
            name="name"
            labelText="Product Name"
            value={values.name}
            handleChange={handleChange}
          />
          <FormRow
            type="number"
            name="quantity"
            labelText="Stock"
            value={values.quantity}
            handleChange={handleChange}
          />
        </form>
        <button onClick={addProduct} className="add-btn">
          Add Product
        </button>
      </div>
    </Wrapper>
  );
};

export default AddProduct;
