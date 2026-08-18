import api from "../api/api";

export const placeOrder = async (order) => {

    const response = await api.post(
        "http://localhost:8005/orders",
        order
    );

    return response.data;

};

export const getOrdersByUserId = async (userId) => {

    const response = await api.get(
        `http://localhost:8005/orders/user/${userId}`
    );

    return response.data;

};

export const getAllOrders = async () => {

    const response = await api.get(
        "http://localhost:8005/orders"
    );

    return response.data;

};

export const getOrderById = async (orderId) => {

    const response = await api.get(
        `http://localhost:8005/orders/${orderId}`
    );

    return response.data;

};

export const updateOrderStatus = async (orderId, orderStatus) => {

    const response = await api.put(
        `http://localhost:8005/orders/${orderId}/${orderStatus}`
    );

    return response.data;

};

export const deleteOrder = async (orderId) => {

    const response = await api.delete(
        `http://localhost:8005/orders/${orderId}`
    );

    return response.data;

};