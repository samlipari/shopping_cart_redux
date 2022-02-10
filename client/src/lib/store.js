import { createStore, combineReducers } from "redux";
import cartItems from "./reducers/cartItems";
//import rootReducer from "./reducers/rootReducer";
import products from "./reducers/products";

const reducer = combineReducers({
    products,
    cartItems
  })

const store = createStore(reducer);

export default store;