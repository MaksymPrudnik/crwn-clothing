import { cartActionTypes } from "./types";

const initialState = {
  isHidden: true,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART_HIDDEN:
      return { ...state, isHidden: !state.isHidden };
    default:
      return state;
  }
};
