import { applyMiddleware, compose, createStore } from "redux";
import Reducers from "./Reducers";
import thunk from "redux-thunk";

const store = createStore(Reducers, compose(applyMiddleware(thunk)));
export default store;
