const products = (state = [], action) => {
    switch (action.type) {
        case "PRODUCTS_RECEIVED": {
            state = action.payload;
            return state;
        }
        case "PRODUCT_DELETED": {
            state = state.filter(product => product._id !== action.idToDelete);
            return state;
        }
        case "PRODUCT_EDITED": {
            state = state.map(record => {
                if (record._id === action.editedProduct._id) {
                  return action.editedProduct
                } else {
                  return record
                }
            });
            // calling a reducer updates the store, but if you don't
            // return anything from the reducer, your store won't be changed
            // need to return state in order to update the store
            return state;
        }
        case "PRODUCT_ADDED": {
            state = state.concat(action.addedProduct);
            return state;
        }
        case "PRODUCT_IN_CART": {
            return state.map(record => {
                if (record._id === action.product._id) {
                  return action.product
                } else {
                  return record
                }
            })
        }
        default: {
            return state;
        }
    }
}

export default products