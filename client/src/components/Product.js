import React, { useContext } from "react";
import {useState} from "react"
import { productsDeleted, productEdited, productAddedToCart } from "../actions/productsActions"
import { ProductContext } from "../context/productsContext";
import { CartContext } from "../context/cartContext";

const Product = (props) => {
  const [productName, setProductName] = useState(props.title)
  const [price, setPrice] = useState(props.price)
  const [quantity, setQuantity] = useState(props.quantity)
  const [isVisible, setEditVisibility] = useState(false)

  const {products, dispatch: prodDispatch} = useContext(ProductContext)
  const {cartItems, dispatch: cartDispatch} = useContext(CartContext)

  const onDelete = (id) => {
    productsDeleted(id, prodDispatch);
  }

  const handleEdit = (updatedProduct) => {
    productEdited(updatedProduct, prodDispatch);
  }

  const handleAddToCart = (id, products, cartItems) => {
    productAddedToCart(id, products, cartItems, cartDispatch, prodDispatch);
  }

  let updatedProduct = {
    "_id": props.id,
    "title": productName,
    "price": price,
    "quantity": quantity
  }

  const toggleEdit = () => {
    setEditVisibility(!isVisible)
  }

  return (
    <li>
      <div class="product">
        <div class="product-details">
          <h3>{props.title}</h3>
          <p class="price">{props.price}</p>
          <p class="quantity">{props.quantity} left in stock</p>
          <div class="actions product-actions">
            <a href="/#" className={quantity > 0 ? "button add-to-cart" : "button add-to-cart disabled"} onClick={() => handleAddToCart(props.id, products, cartItems)}>Add to Cart</a>
            <a href="/#" class="button edit" onClick={toggleEdit}>Edit</a>
          </div>
          <a href="/#" class="delete-button" onClick={() => onDelete(props.id)}><span>X</span></a>
        </div>
      </div>
      <div className={isVisible ? "edit-form" : "edit-form invisible"}>
            <h3>Edit Product</h3>
            <form>
              <div class="input-group">
                <label for="product-name">Product Name</label>
                <input type="text" id="product-name" value={productName} onChange={(e) => setProductName(e.target.value)} />
              </div>

              <div class="input-group">
                <label for="product-price">Price</label>
                <input type="text" id="product-price" value={price} onChange={(e) => setPrice(e.target.value)} />
              </div>

              <div class="input-group">
                <label for="product-quantity">Quantity</label>
                <input type="text" id="product-quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
              </div>

              <div class="actions form-actions">
                <a href="/#" class="button" onClick={() => {handleEdit(updatedProduct); toggleEdit()}}>Update</a>
                <a href="/#" class="button" onClick={toggleEdit}>Cancel</a>
              </div>
            </form>
          </div>
  </li>
  )
}

export default Product;