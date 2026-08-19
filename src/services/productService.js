import api from "../api/api";

// Get All Products
export const getAllProducts = async () => {
    const response = await api.get("https://api-gateway-rqt8.onrender.com/products");
    return response.data;
};

// Get Product By Id
export const getProductById = async (id) => {
    const response = await api.get(`https://api-gateway-rqt8.onrender.com/products/${id}`);
    return response.data;
};

// Add Product
export const addProduct = async (product) => {
    const response = await api.post(
        "https://api-gateway-rqt8.onrender.com/products",
        product
    );

    return response.data;
};

// Update Product
export const updateProduct = async (id, product) => {
    const response = await api.put(
        `https://api-gateway-rqt8.onrender.com/products/${id}`,
        product
    );

    return response.data;
};

// Delete Product
export const deleteProduct = async (id) => {
    const response = await api.delete(
        `https://api-gateway-rqt8.onrender.com/products/${id}`
    );

    return response.data;
};