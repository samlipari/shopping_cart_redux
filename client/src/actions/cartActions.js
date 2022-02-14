import { SERVICES } from "../services"

const cartItemAddedSuccess = (response) => {
  return {
    type: "CART_ITEMS_RECEIVED",
    payload: response
  }
}

const cartCheckOutSuccess = () => {
  return {type: "CART_CHECKED_OUT"};
}

export const getCartItems = async (dispatch) => {
  let response = await SERVICES.getCartItems();
  dispatch(cartItemAddedSuccess(response))
}

export const cartCheckedOut = async (dispatch) => {
    let response = await SERVICES.handleCheckout();
    if (response.status === 200) {
      dispatch(cartCheckOutSuccess());
    } else {
      console.log("Cannot checkout");
    }
}