// this combines all the state together | with breaking the code up into individual sections
// represents all reducers

import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";

export default combineReducers({
  user: userReducer,
});
