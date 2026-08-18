import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Box
} from "@mui/material";

import {
    Home,
    Inventory2,
    AddBox,
    ShoppingCart,
    Notifications,
    Logout
} from "@mui/icons-material";

import { Link, useNavigate } from "react-router-dom";

function Navbar() {

    const navigate = useNavigate();

    const role = localStorage.getItem("role");

    const logout = () => {

        localStorage.clear();

        navigate("/");

    };

    const buttonStyle = {
        color: "white",
        mx: 0.5,
        borderRadius: 2,
        textTransform: "none",
        fontWeight: "bold",
        "&:hover": {
            backgroundColor: "rgba(255,255,255,0.18)"
        }
    };

    return (

        <AppBar
            position="static"
            sx={{
                background: "linear-gradient(90deg,#1565c0,#1976d2)"
            }}
        >

            <Toolbar>

                <Typography
                    variant="h6"
                    sx={{
                        flexGrow: 1,
                        fontWeight: "bold"
                    }}
                >

                    🛒 Online Shopping System

                </Typography>

                <Box>

                    <Button
                        startIcon={<Home />}
                        component={Link}
                        to="/home"
                        sx={buttonStyle}
                    >

                        Home

                    </Button>

                    <Button
                        startIcon={<Inventory2 />}
                        component={Link}
                        to="/products"
                        sx={buttonStyle}
                    >

                        Products

                    </Button>

                    {

                        role === "ADMIN" &&

                        <>

                            <Button
                                startIcon={<AddBox />}
                                component={Link}
                                to="/add-product"
                                sx={buttonStyle}
                            >

                                Add Product

                            </Button>

                            <Button
                                startIcon={<ShoppingCart />}
                                component={Link}
                                to="/orders"
                                sx={buttonStyle}
                            >

                                Orders

                            </Button>

                            <Button
                                startIcon={<Notifications />}
                                component={Link}
                                to="/notifications"
                                sx={buttonStyle}
                            >

                                Notifications

                            </Button>

                        </>

                    }

                    {

                        role === "USER" &&

                        <>

                            <Button
                                startIcon={<ShoppingCart />}
                                component={Link}
                                to="/orders"
                                sx={buttonStyle}
                            >

                                My Orders

                            </Button>

                            <Button
                                startIcon={<Notifications />}
                                component={Link}
                                to="/notifications"
                                sx={buttonStyle}
                            >

                                My Notifications

                            </Button>

                        </>

                    }

                    <Button
                        startIcon={<Logout />}
                        onClick={logout}
                        sx={buttonStyle}
                    >

                        Logout

                    </Button>

                </Box>

            </Toolbar>

        </AppBar>

    );

}

export default Navbar;