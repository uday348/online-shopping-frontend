import api from "../api/api";

const API_URL = "https://api-gateway-rqt8.onrender.com";

// Get All Notifications (ADMIN)
export const getAllNotifications = async () => {
    const response = await api.get(
        `${API_URL}/notifications`
    );

    return response.data;
};

// Get Notifications By User
export const getNotificationsByUserId = async (userId) => {
    const response = await api.get(
        `${API_URL}/notifications/user/${userId}`
    );

    return response.data;
};

// Delete Notification
export const deleteNotification = async (notificationId) => {
    const response = await api.delete(
        `${API_URL}/notifications/${notificationId}`
    );

    return response.data;
};