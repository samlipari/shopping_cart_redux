import axios from "axios";

export const SERVICES = {
  getProducts: async () => {
    let response = await axios.get("api/products")
    return response.data;
  },
  
  getCartItems: async () => {
    let response = await axios.get("api/cart")
    return response.data;
  },

  handleAddProduct: async (newProduct) => {
    const response = await axios.post("/api/products", { ...newProduct });
    const data = response.data;
    return data;
  },

  handleDelete: async (id) => {
    const response = await axios.delete(`/api/products/${id}`);
    if (response.status === 200) {
      return response.status;
    } else {
      console.log("Product was not deleted.")
    }
  },

  handleEdit: async (updatedProduct) => {
    const response = await axios.put(`/api/products/${updatedProduct._id}`, updatedProduct);
    return response.data;
  },

  handleAddToCart: async (id, products) => {
    let productToAdd = products.filter(product => {
      return product._id === id
    })[0];

    let quantity = productToAdd.quantity;

    productToAdd = {
      productId: productToAdd._id,
      title: productToAdd.title,
      price: productToAdd.price
    }

    if (quantity > 0) {
      const response = await axios.post("/api/add-to-cart", productToAdd);
      return response;
    } else {
      console.log("Not added to cart");
    } 
  },

  handleCheckout: async () => {
    const response = await axios.post("api/checkout");
    return response;
  }
}