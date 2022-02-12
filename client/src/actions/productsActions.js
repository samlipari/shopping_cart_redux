import { SERVICES } from "../services"

const productsReceivedSuccess = (response) => {
  return { type: "PRODUCTS_RECEIVED", payload: response };
};

const productDeletedSuccess = (id) => {
  return {type: "PRODUCT_DELETED", idToDelete: id};
};

const productEditedSuccess = (response) => {
  return {type: "PRODUCT_EDITED", editedProduct: response};
};

const productAddedToCartSuccess = (id, response) => {
  return {
    type: "PRODUCT_IN_CART",
    id: id,
    product: response.data.product,
    cartItem: response.data.item
  };
};

export const productsReceived = () => {
  return async (dispatch) => {
    let response = await SERVICES.getProducts();
    dispatch(productsReceivedSuccess(response));
  };
};

export const productsDeleted = (id) => {
  return async (dispatch) => {
    let response = await SERVICES.handleDelete(id);
    if (response === 200) {
      dispatch(productDeletedSuccess(id));
    }
  };
};

export const productEdited = (updatedProduct) => {
  return async (dispatch) => {
    let response = await SERVICES.handleEdit(updatedProduct);
    dispatch(productEditedSuccess(response));
  }
}

export const productAddedToCart = (id, products, cartItems) => {
  return async (dispatch) => {
    let response = await SERVICES.handleAddToCart(id, products, cartItems);
    dispatch(productAddedToCartSuccess(id, response));
  }
}