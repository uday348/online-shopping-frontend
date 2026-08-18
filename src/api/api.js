import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8003",
    headers: {
        "Content-Type": "application/json",
    },
});

api.interceptors.request.use((config) => {

    const token = localStorage.getItem("token");

    // Don't send token for login & register
    if (
        token &&
        !config.url.includes("/users/login") &&
        !config.url.includes("/users/register")
    ) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

export default api;