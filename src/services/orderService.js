import api from "../api/api";

const API_URL = "https://api-gateway-rqt8.onrender.com";

// Place Order
export const placeOrder = async (order) => {
    const response = await api.post(
        `${API_URL}/orders`,
        order
    );

    return response.data;
};

// Get Orders By User ID
export const getOrdersByUserId = async (userId) => {
    const response = await api.get(
        `${API_URL}/orders/user/${userId}`
    );

    return response.data;
};

// Get All Orders
export const getAllOrders = async () => {
    const response = await api.get(
        `${API_URL}/orders`
    );

    return response.data;
};

// Get Order By ID
export const getOrderById = async (orderId) => {
    const response = await api.get(
        `${API_URL}/orders/${orderId}`
    );

    return response.data;
};

// Update Order Status
export const updateOrderStatus = async (orderId, orderStatus) => {
    const response = await api.put(
        `${API_URL}/orders/${orderId}/${orderStatus}`
    );

    return response.data;
};

// Delete Order
export const deleteOrder = async (orderId) => {
    const response = await api.delete(
        `${API_URL}/orders/${orderId}`
    );

    return response.data;
};