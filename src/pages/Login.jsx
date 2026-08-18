import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
    Container,
    Paper,
    Typography,
    TextField,
    Button
} from "@mui/material";

import { loginUser } from "../services/authService";

function Login() {

    const navigate = useNavigate();

    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {

        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await loginUser(loginData);

            localStorage.setItem("token", response.token);
            localStorage.setItem("email", response.email);
            localStorage.setItem("role", response.role);

            if (response.role === "ADMIN") {

                navigate("/admin");

            } else {

                navigate("/user");

            }

        } catch (error) {

            alert("Invalid Email or Password");
        }
    };

    return (

        <Container maxWidth="sm">

            <Paper sx={{ padding: 4, marginTop: 10 }}>

                <Typography
                    variant="h4"
                    align="center"
                    gutterBottom>

                    Online Shopping System

                </Typography>

                <form onSubmit={handleSubmit}>

                    <TextField
                        fullWidth
                        margin="normal"
                        label="Email"
                        name="email"
                        value={loginData.email}
                        onChange={handleChange}
                    />

                    <TextField
                        fullWidth
                        margin="normal"
                        label="Password"
                        type="password"
                        name="password"
                        value={loginData.password}
                        onChange={handleChange}
                    />

                    <Button
                        fullWidth
                        variant="contained"
                        sx={{ mt: 2 }}
                        type="submit">

                        Login

                    </Button>

                </form>

                <Typography
                    align="center"
                    sx={{ mt: 2 }}>

                    Don't have an account?

                    <Link to="/register">

                        Register

                    </Link>

                </Typography>

            </Paper>

        </Container>
    );
}

export default Login;