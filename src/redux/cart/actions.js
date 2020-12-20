import { cartActionTypes } from "./types";

export const toggleCartHidden = () => ({
  type: cartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
  type: cartActionTypes.ADD_ITEM,
  payload: item,
});

export const removeItem = (id) => ({
  type: cartActionTypes.REMOVE_ITEM,
  payload: id,
});

export const clearItem = (id) => ({
  type: cartActionTypes.CLEAR_ITEM,
  payload: id,
});
