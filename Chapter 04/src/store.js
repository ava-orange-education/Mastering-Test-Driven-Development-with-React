import { createStore } from "redux";
import counterReducer  from "./counterReducer";

const store = createStore(counterReducer);

export default store;