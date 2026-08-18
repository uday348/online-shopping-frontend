import api from "../api/api";

// Register User
export const registerUser = async (user) => {

    const response = await api.post(
        "http://localhost:8003/users/register",
        user
    );

    return response.data;
};

// Login User
export const loginUser = async (user) => {

    const response = await api.post(
        "http://localhost:8003/users/login",
        user
    );

    // Save Login Details

    localStorage.setItem("userId", response.data.userId);
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("email", response.data.email);
    localStorage.setItem("role", response.data.role);

    return response.data;
};

// Logout
export const logout = () => {

    localStorage.removeItem("userId");
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("role");

};

