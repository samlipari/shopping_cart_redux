import React from "react"
import { useState, useContext } from "react";
import { ProductContext } from "../context/productsContext";
import { productAddedToInventory } from "../actions/productsActions";

const AddProductForm = () => {
  const [isVisible, setVisibility] = useState(false)
  const [productName, setProductName] = useState("")
  const [price, setPrice] = useState(0)
  const [quantity, setQuantity] = useState(0)

  const { dispatch: productDispatch } = useContext(ProductContext)


  const toggleForm = () => {
    setVisibility(!isVisible)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newItem = {
      title: productName,
      price,
      quantity
    }

    productAddedToInventory(newItem, productDispatch)

    setProductName("");
    setPrice(0);
    setQuantity(0);
    toggleForm();
  }


  return (
    <>
      <div className={isVisible ? "add-form visible" : "add-form"}>
        <p><a href="/#" class="button add-product-button" onClick={toggleForm}>Add A Product</a></p>
        <h3>Add Product</h3>
        <form>
          <div class="input-group">
            <label for="product-name">Product Name</label>
            <input type="text" id="product-name" value={productName} onChange={(e) => setProductName(e.target.value)}/>
          </div>

          <div class="input-group">
            <label for="product-price">Price</label>
            <input type="text" id="product-price" value={price} onChange={(e) => setPrice(e.target.value)}/>
          </div>

          <div class="input-group">
            <label for="product-quantity">Quantity</label>
            <input type="text" id="product-quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)}/>
          </div>

          <div class="actions form-actions">
            <a href="/#" class="button" onClick={handleSubmit}>Add</a>
            <a href="/#" class="button" onClick={toggleForm}>Cancel</a>
          </div>
        </form>
      </div>
    </>
  )
}

export default AddProductForm;