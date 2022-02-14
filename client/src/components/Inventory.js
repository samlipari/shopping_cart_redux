import React from "react";
import Product from "./Product"
import { useEffect, useContext } from "react";
import { productsReceived } from "../actions/productsActions";
import { ProductContext } from "../context/productsContext";

const Inventory = () => {
                  // this dispatch variable stores the productReducer from the context file
  const { products, dispatch: prodDispatch } = useContext(ProductContext)

  useEffect(() => {
    // calling our async function, and passing it our reducer,
    // so that when the async API call is done, it can call our
    // reducer with our action object populated by the results of that API call
    productsReceived(prodDispatch);
  }, [prodDispatch])

  return (
    <div class="product-listing">
    <h2>Products</h2>
    <ul>
      {products.map(product => {
        return (
          <Product key={product._id} products={products} id={product._id} title={product.title} price={product.price} quantity={product.quantity} />
        )
      })}
    </ul>
  </div>
  )
}

export default Inventory;