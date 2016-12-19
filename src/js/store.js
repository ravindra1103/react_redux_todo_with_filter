import { applyMiddleware, createStore, compose, combineReducers } from "redux";

import logger from "redux-logger";
import thunk from "redux-thunk";
import { devTools } from 'redux-devtools';
import todos from "./reducers/todos";

const middleware = applyMiddleware(thunk, logger());

export default createStore(combineReducers({ todos }),
compose(middleware, window.devToolsExtension ? window.devToolsExtension() : devTools()));
