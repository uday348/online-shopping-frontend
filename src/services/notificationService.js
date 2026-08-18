import api from "../api/api";

// Get All Notifications (ADMIN)

export const getAllNotifications = async () => {

    const response = await api.get(
        "http://localhost:8006/notifications"
    );

    return response.data;

};

// Get Notifications By User

export const getNotificationsByUserId = async (userId) => {

    const response = await api.get(
        `http://localhost:8006/notifications/user/${userId}`
    );

    return response.data;

};

// Delete Notification

export const deleteNotification = async (notificationId) => {

    const response = await api.delete(
        `http://localhost:8006/notifications/${notificationId}`
    );

    return response.data;

};