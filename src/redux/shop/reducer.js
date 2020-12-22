import { shopActionTypes } from "./types";

const initialState = {
  collections: null,
};

export const shopReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case shopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: payload,
      };
    default:
      return state;
  }
};
