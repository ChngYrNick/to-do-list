import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import logger from "redux-logger";

import reducers from "./reducers";

const middlewares = [thunk, logger];

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middlewares))
);
