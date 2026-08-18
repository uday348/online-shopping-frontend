import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    Container,
    Paper,
    Typography,
    TextField,
    Button
} from "@mui/material";

import { registerUser } from "../services/authService";

function Register() {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await registerUser(user);

            alert("Registration Successful");

            navigate("/");

        } catch (error) {

            alert("Registration Failed");
        }
    };

    return (

        <Container maxWidth="sm">

            <Paper sx={{ padding: 4, marginTop: 10 }}>

                <Typography
                        variant="h4"
                        align="center"
                        gutterBottom>

                    Register

                </Typography>

                <form onSubmit={handleSubmit}>

                    <TextField
                        fullWidth
                        margin="normal"
                        label="Name"
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                    />

                    <TextField
                        fullWidth
                        margin="normal"
                        label="Email"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                    />

                    <TextField
                        fullWidth
                        margin="normal"
                        label="Password"
                        type="password"
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                    />

                    <Button
                        fullWidth
                        variant="contained"
                        sx={{ mt: 2 }}
                        type="submit">

                        Register

                    </Button>

                </form>

                <Typography align="center" sx={{ mt: 2 }}>

                    Already have an account?

                    <Link to="/">

                        Login

                    </Link>

                </Typography>

            </Paper>

        </Container>
    );
}

export default Register;