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

const productAddedToInventorySuccess = (response) => {
  return {
    type: "PRODUCT_ADDED",
    addedProduct: response
  }
}

const productAddedToCartSuccess = (id, response) => {
  return {
    type: "PRODUCT_IN_CART",
    id: id,
    product: response.data.product,
    cartItem: response.data.item
  };
};


export const productsReceived = async (dispatch) => {
    let response = await SERVICES.getProducts();
    dispatch(productsReceivedSuccess(response));
};

export const productsDeleted = async (id, dispatch) => {
    let response = await SERVICES.handleDelete(id);
    if (response === 200) {
      dispatch(productDeletedSuccess(id));
    }
};

export const productEdited = async (updatedProduct, dispatch) => {
  let response = await SERVICES.handleEdit(updatedProduct);
  dispatch(productEditedSuccess(response));
}

export const productAddedToCart = async (id, products, cartItems, cartDispatch, prodDispatch) => {
  let response = await SERVICES.handleAddToCart(id, products, cartItems);
  cartDispatch(productAddedToCartSuccess(id, response));
  prodDispatch(productAddedToCartSuccess(id, response));
}

export const productAddedToInventory = async (newItem, dispatch) => {
    let response = await SERVICES.handleAddProduct(newItem);
    dispatch(productAddedToInventorySuccess(response))
}