import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import cartItems from "./reducers/cartItems";
//import rootReducer from "./reducers/rootReducer";
import products from "./reducers/products";

const reducer = combineReducers({
    products,
    cartItems
  })

const store = createStore(reducer, applyMiddleware(thunk));

export default store;