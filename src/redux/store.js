import { createStore, combineReducers } from "redux";

// Initial state
const initialState = {
  cart: [],
  user: {
    username: "",
    password: "",
  },
};

// Action Types
const ADD_TO_CART = "ADD_TO_CART";
const REGISTER_USER = "REGISTER_USER";

// Reducers
const cartReducer = (state = initialState.cart, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];
    default:
      return state;
  }
};

const userReducer = (state = initialState.user, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return {
        username: action.payload.username,
        password: action.payload.password,
      };
    default:
      return state;
  }
};

// Combine reducers
const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
});

// Create store
const store = createStore(rootReducer);

export default store;
