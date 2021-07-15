import { applyMiddleware, createStore } from "redux";

import logger from "redux-logger";
import { persistStore } from "redux-persist";
import rootReducer from "./root-reducer";

// functions that receive an action something in and pass it back to the reducer

const middleWares = [logger];

// spreads everything from middlewares as arguments for scalability
export const store = createStore(rootReducer, applyMiddleware(...middleWares));

//persisted version of store to create a new provider
export const persistor = persistStore(store);

export default { store, persistor };
