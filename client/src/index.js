import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
// import { Provider } from "react-redux";
// import store from "./lib/store"
import { ProductProvider } from "./context/productsContext"
import { CartProvider } from "./context/cartContext"

ReactDOM.render(
  <React.StrictMode>
    <ProductProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ProductProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
