import React from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import AddProductForm from "./AddProductForm";

const App = () => {

  return (
    <div id="app">
      <Header />
      <main>
        <Inventory/>
        <AddProductForm />
      </main>
    </div>
  );
};

export default App;
