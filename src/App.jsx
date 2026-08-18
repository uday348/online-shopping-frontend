import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Products from "./pages/Products";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import Orders from "./pages/Orders";
import Notifications from "./pages/Notifications";
import AdminDashboard from "./pages/AdminDashboard";
import UserDashboard from "./pages/UserDashboard";

function App() {

    return (

        <BrowserRouter>

            <Routes>

                {/* Authentication */}
                <Route
                    path="/"
                    element={<Login />}
                />

                <Route
                    path="/register"
                    element={<Register />}
                />

                {/* Home */}
                <Route
                    path="/home"
                    element={<Home />}
                />

                {/* Dashboards */}
                <Route
                    path="/admin"
                    element={<AdminDashboard />}
                />

                <Route
                    path="/user"
                    element={<UserDashboard />}
                />

                {/* Product Module */}
                <Route
                    path="/products"
                    element={<Products />}
                />

                <Route
                    path="/add-product"
                    element={<AddProduct />}
                />

                <Route
                    path="/edit-product/:id"
                    element={<EditProduct />}
                />

                {/* Order Module */}
                <Route
                    path="/orders"
                    element={<Orders />}
                />

                {/* Notification Module */}
                <Route
                    path="/notifications"
                    element={<Notifications />}
                />

            </Routes>

        </BrowserRouter>

    );

}

export default App;