import React from "react";
import Product from "./Product"
import { useDispatch, useSelector } from "react-redux";
import { SERVICES } from "../services";
import { useEffect } from "react";

const Inventory = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    const getProducts = async () => {
      let response = await SERVICES.getProducts();
      dispatch({
        type: "PRODUCTS_RECEIVED",
        payload: response
      })
    }
    getProducts();
  }, [dispatch])

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