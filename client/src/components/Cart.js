import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCartItems, cartCheckedOut } from "../actions/cartActions";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItems);

  useEffect(() => {
    dispatch(getCartItems())
  }, [dispatch]);

  const onCheckOut = () => {
    dispatch(cartCheckedOut());
  }

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
          <a href="/#" class="button checkout" onClick={() => onCheckOut()}>Checkout</a>
        </div>
    )
  }
}

export default Cart;