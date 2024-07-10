import { applyMiddleware, createStore } from "redux";
import ApiReducers from "./ApiReducers";
import { thunk } from "redux-thunk";

const store = createStore(ApiReducers,applyMiddleware(thunk));

export default store