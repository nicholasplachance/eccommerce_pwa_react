// this combines all the state together | with breaking the code up into individual sections
// represents all reducers

import cartReducer from "./cart/cart.reducer";
import { combineReducers } from "redux";
import directoryReducer from "./directory/directory.reducer";
import { persistReducer } from "redux-persist";
import shopReducer from "./shop/shop.reducers";
import storage from "redux-persist/lib/storage";
import userReducer from "./user/user.reducer";

//json object that represents the config for redux-persist to use

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);
