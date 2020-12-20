import { cartActionTypes } from "./types";
import { addItemToCart } from "./utils";

const initialState = {
  isHidden: true,
  items: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART_HIDDEN:
      return { ...state, isHidden: !state.isHidden };
    case cartActionTypes.ADD_ITEM:
      return {
        ...state,
        items: addItemToCart(state.items, action.payload),
      };
    default:
      return state;
  }
};
