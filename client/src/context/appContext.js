import React, { useReducer, useContext, useEffect } from "react";

import axios, { Axios } from "axios";

import reducer from "./reducer";

import {
  SETUP_USER_BEGIN,
  SETUP_USER_SUCCESS,
  SETUP_USER_ERROR,
  CLEAR_ALERT,
  DISPLAY_ALERT,
  REGISTER_USER_SUCCESS,
  GET_INVENTORY_BEGIN,
  GET_INVENTORY_SUCCESS,
  GET_INVENTORY_ERROR,
  GET_TRANSACTION_BEGIN,
  GET_TRANSACTION_SUCCESS,
  GET_TRANSACTION_ERROR,
  GET_SINGLE_INVENTORY_BEGIN,
  GET_SINGLE_INVENTORY_SUCCESS,
  ADD_TRANSACTION_BEGIN,
  ADD_TRANSACTION_SUCCESS,
  FILTER_INVENTORIES,
  SIDEBAR_OPEN,
  SIDEBAR_CLOSED,
  LOGOUT,
  NOT_ENOUGH_PRODUCT,
} from "./action";

const token = localStorage.getItem("token");
const user = localStorage.getItem("user");

const initialState = {
  isLoading: false,
  user: user ? JSON.parse(user) : null,
  token: token ? JSON.parse(token) : null,
  inventory: [],
  inventoryTransactions: [],
  alertText: "",
  alertType: "",
  showAlert: false,
  singleInventory: [],
  searchInventory: [],
  navSidebar: false,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addUserToLocalStorage = ({ user, token }) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", JSON.stringify(token));
  };

  const removeUserFromLocalStorage = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 2000);
  };

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });

    clearAlert();
  };

  const setupUser = async ({ endPoint, currentUser, alertText }) => {
    dispatch({ type: SETUP_USER_BEGIN });

    try {
      const response = await axios.post(`/Auth/${endPoint}`, {
        Username: currentUser.name,
        Password: currentUser.password,
      });
      if (endPoint === "login") {
        dispatch({
          type: SETUP_USER_SUCCESS,
          payload: {
            res: response.data,
            user: currentUser.name,
            alertText: alertText,
          },
        });
        console.log(response.data.data, currentUser);

        addUserToLocalStorage({
          token: response.data.data,
          user: currentUser.name,
        });
      } else if (endPoint === "Register") {
        dispatch({
          type: REGISTER_USER_SUCCESS,
          payload: "User Created",
          alertText,
        });
      }
    } catch (error) {
      console.log(error.response.data.message);

      dispatch({
        type: SETUP_USER_ERROR,
        payload: { msg: error.response.data.message },
      });
    }
    clearAlert();
  };

  const fetchInventory = async () => {
    dispatch({ type: GET_INVENTORY_BEGIN });

    try {
      const { data } = await axios(`/api/Inventory/GetAll`);
      dispatch({ type: GET_INVENTORY_SUCCESS, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  const fetchTransaction = async () => {
    dispatch({ type: GET_TRANSACTION_BEGIN });
    try {
      const { data } = await axios("/api/InventoryTransaction/GetAll");

      dispatch({ type: GET_TRANSACTION_SUCCESS, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  const fetchSingleInventory = async (id) => {
    dispatch({ type: GET_SINGLE_INVENTORY_BEGIN });

    try {
      const { data } = await axios(`/api/Inventory/${id}`);

      dispatch({ type: GET_SINGLE_INVENTORY_SUCCESS, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  const addTransaction = async (id, quantity, activity) => {
    dispatch({ type: ADD_TRANSACTION_BEGIN });

    try {
      const { data } = await axios.post("/api/InventoryTransaction", {
        inventoryId: id,
        activity,
        quantity,
      });

      if (data.message === "Not Enough Inventory Stock") {
        dispatch({ type: NOT_ENOUGH_PRODUCT, payload: data.message });
        clearAlert();
        return;
      }
      displayAlert();
      dispatch({ type: ADD_TRANSACTION_SUCCESS, payload: data });
    } catch (error) {
      console.log(error);
    }
    setTimeout(() => {
      clearAlert();
    }, 2000);
  };

  const filterInventories = (text) => {
    dispatch({ type: FILTER_INVENTORIES, payload: text });
  };

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };
  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSED });
  };

  const logout = () => {
    dispatch({ type: LOGOUT });
    removeUserFromLocalStorage();
  };

  const addInventory = async ({ name, quantity }) => {
    await axios.post("/api/inventory", {
      name,
      quantity,
    });
    fetchInventory();
  };

  const deleteInventory = async (id) => {
    await axios.delete(`/api/inventory/${id}`);
    fetchInventory();
  };

  useEffect(() => {
    fetchInventory();
    fetchTransaction();
  }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
        logout,
        setupUser,
        displayAlert,
        fetchTransaction,
        fetchInventory,
        fetchSingleInventory,
        addTransaction,
        filterInventories,
        openSidebar,
        closeSidebar,
        addInventory,
        deleteInventory,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext, initialState };
