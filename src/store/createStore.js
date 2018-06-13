import thunk from "redux-thunk";
import {applyMiddleware, createStore} from "redux";
import {makeRootReducer} from "./reducers";
import { createLogger } from "redux-logger";

const log =  createLogger({ diff: true, collapsed: true });

export default (initialState = {}) => {
    // ======================================================
    // Middleware Configuration
    // ======================================================
    const middleware = [thunk, log];

    // ======================================================
    // Store Enhancers
    // ======================================================
    const enhancers = [];

    // ======================================================
    // Store Instantiation
    // ======================================================
    const store = createStore(
        makeRootReducer(),
        initialState,
        applyMiddleware(...middleware)
    );
    return store;
};