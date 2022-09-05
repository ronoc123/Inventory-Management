import { initialState } from "./appContext";

import {
  CLEAR_ALERT,
  DISPLAY_ALERT,
  SETUP_USER_BEGIN,
  SETUP_USER_SUCCESS,
  SETUP_USER_ERROR,
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
  SIDEBAR_CLOSED,
  SIDEBAR_OPEN,
} from "./action";

const reducer = (state, action) => {
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: "fail",
      alertText: "Please provide all values!",
    };
  }
  if (action.type === CLEAR_ALERT) {
    return {
      ...state,
      alertText: "",
      alertType: "",
    };
  }

  if (action.type === SETUP_USER_BEGIN) {
    return { ...state, isLoading: true };
  }

  if (action.type === SETUP_USER_SUCCESS) {
    return {
      ...state,
      token: action.payload.res.data,
      user: action.payload.user,
      alertText: action.payload.res.message,
      isLoading: false,
    };
  }

  if (action.type === SETUP_USER_ERROR) {
    return {
      ...state,
      alertText: action.payload.msg,
    };
  }

  if (action.type === REGISTER_USER_SUCCESS) {
    return {
      ...state,
      alertText: action.payload,
      isLoading: false,
    };
  }

  if (action.type === GET_INVENTORY_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (action.type === GET_INVENTORY_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      inventory: action.payload.data,
    };
  }

  if (action.type === GET_TRANSACTION_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (action.type === GET_TRANSACTION_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      inventoryTransactions: action.payload.data,
    };
  }

  if (action.type === GET_SINGLE_INVENTORY_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (action.type === GET_SINGLE_INVENTORY_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      singleInventory: action.payload.data,
    };
  }
  if (action.type === ADD_TRANSACTION_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (action.type === ADD_TRANSACTION_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      inventoryTransactions: action.payload.data,
      singleInventory: [],
    };
  }

  if (action.type === FILTER_INVENTORIES) {
    const { inventory } = state;
    const test = action.payload.toLowerCase();

    let tempInventory = [...inventory];

    if (test !== null) {
      tempInventory = tempInventory.filter((inv) => {
        return inv.name.toLowerCase().startsWith(test);
      });
    }

    return {
      ...state,
      searchInventory: tempInventory,
    };
  }

  if (action.type === SIDEBAR_OPEN) {
    return {
      ...state,
      navSidebar: true,
    };
  }

  if (action.type === SIDEBAR_CLOSED) {
    return {
      ...state,
      navSidebar: false,
    };
  }

  throw new Error(`No matching ${action.type} - action type`);
};

export default reducer;
