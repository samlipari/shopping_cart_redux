const cartItems = (state = [], action) => {
    switch (action.type) {
        case "CART_ITEMS_RECEIVED": {
            state = action.payload;
            return state;
        }
        default: {
            return state;
        }
    }
}

export default cartItems