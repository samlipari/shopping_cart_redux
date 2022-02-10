import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SERVICES } from "../services";
import { useEffect } from "react";

const Cart = ({onCheckOut, setCartItems }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItems);

  useEffect(() => {
    const getCartItems = async () => {
      let response = await SERVICES.getCartItems();
      dispatch({
        type: "CART_ITEMS_RECEIVED",
        payload: response
      })
    }
    getCartItems();
  }, [dispatch]);

  if (cartItems.length === 0) {
    return (
      <div class="cart">
        <h2>Your Cart</h2>
        <p>Your cart is empty</p>
        <p>Total: $0</p>
        <a href="/#" class="button checkout disabled">Checkout</a>
      </div>
    )
  } 
  else {
    let total = 0;
    cartItems.forEach(item => total += item.price * item.quantity);
    return (
      <div class="cart">
        <h2>Your Cart</h2>
        <table class="cart-items">
            <tr>
              <th>Item</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
            {cartItems.map(item => {
              return (
                <tr>
                  <td>{item.title}</td>
                  <td>{item.quantity}</td>
                  <td>{item.price}</td>
                </tr>
              )
            })}
             <tr>
              <td colspan="3" class="total">Total: ${total} </td>
            </tr>
          </table>
          <a href="/#" class="button checkout" onClick={() => onCheckOut(setCartItems)}>Checkout</a>
        </div>
    )
  }
}

export default Cart;