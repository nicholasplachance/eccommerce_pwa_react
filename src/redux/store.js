import { applyMiddleware, createStore } from "redux";

import logger from "redux-logger";
import rootReducer from "./root-reducer";

// functions that receive an action something in and pass it back to the reducer

const middleWares = [logger];

// spreads everything from middlewares as arguments for scalability
const store = createStore(rootReducer, applyMiddleware(...middleWares));

export default store;
