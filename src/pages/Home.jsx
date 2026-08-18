import { Navigate } from "react-router-dom";

function Home() {

    const role = localStorage.getItem("role");

    if (role === "ADMIN") {

        return <Navigate to="/admin" replace />;

    }

    if (role === "USER") {

        return <Navigate to="/user" replace />;

    }

    return <Navigate to="/" replace />;

}

export default Home;