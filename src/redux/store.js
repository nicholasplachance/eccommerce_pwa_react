import { applyMiddleware, createStore } from "redux";

import logger from "redux-logger";
import { persistStore } from "redux-persist";
import rootReducer from "./root-reducer";

// functions that receive an action something in and pass it back to the reducer

const middleWares = [];

//determines if the app is in development / if app in not in development do not serve the redux logger
if (process.env.NODE_ENV === "development") {
  middleWares.push(logger);
}

// spreads everything from middlewares as arguments for scalability
export const store = createStore(rootReducer, applyMiddleware(...middleWares));

//persisted version of store to create a new provider
export const persistor = persistStore(store);

export default { store, persistor };
