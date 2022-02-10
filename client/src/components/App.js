import React from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import AddProductForm from "./AddProductForm";
import { useState } from "react";
import { SERVICES } from "../services"

const App = () => {
  const [cartItems, setCartItems] = useState([])

  return (
    <div id="app">
      <Header onCheckOut={SERVICES.handleCheckout} />
      <main>
        <Inventory cartItems={cartItems} setCartItems={setCartItems} onAddToCart={SERVICES.handleAddToCart}/>
        <AddProductForm />
      </main>
    </div>
  );
};

export default App;
