import { combineReducers } from "redux";

import { cartReducer } from "./cart/retucer";
import { userReducer } from "./user/reducer";

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
});
