// Action types
export const ADD_TO_CART = "ADD_TO_CART";

// Action creators
export const addToCart = (item) => ({
  type: ADD_TO_CART,
  payload: item,
});
