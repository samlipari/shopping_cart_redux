const cartItems = (state = [], action) => {
    switch (action.type) {
        case "CART_ITEMS_RECEIVED": {
            state = action.payload;
            return state;
        }
        case "PRODUCT_IN_CART": {
            let cartItemExists = state.filter(item => item.productId === action.id);
            if (cartItemExists.length > 0) {
                return state.map(record => {
                    if (record._id === action.cartItem._id) {
                      return action.cartItem
                    } else {
                      return record
                    }
                })
            } else {
              return state.concat(action.cartItem);
            }
        }
        case "CART_CHECKED_OUT": {
            state = [];
            return state;
        }
        default: {
            return state;
        }
    }
}

export default cartItems