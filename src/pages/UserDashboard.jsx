import { useNavigate } from "react-router-dom";

import {
    Container,
    Typography,
    Grid,
    Card,
    CardContent
} from "@mui/material";

import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";

import Navbar from "../components/Navbar";

function UserDashboard() {

    const navigate = useNavigate();

    const email = localStorage.getItem("email");

    const cards = [

        {

            title: "Browse Products",

            description: "Explore All Products",

            icon: (
                <ShoppingBagIcon
                    sx={{
                        fontSize: 60,
                        color: "#1976d2"
                    }}
                />
            ),

            path: "/products"

        },

        {

            title: "My Orders",

            description: "Track Your Orders",

            icon: (
                <ShoppingCartIcon
                    sx={{
                        fontSize: 60,
                        color: "#2e7d32"
                    }}
                />
            ),

            path: "/orders"

        },

        {

            title: "Notifications",

            description: "View Latest Updates",

            icon: (
                <NotificationsIcon
                    sx={{
                        fontSize: 60,
                        color: "#ed6c02"
                    }}
                />
            ),

            path: "/notifications"

        },

        {

            title: "My Account",

            description: email,

            icon: (
                <PersonIcon
                    sx={{
                        fontSize: 60,
                        color: "#9c27b0"
                    }}
                />
            ),

            path: "#"

        }

    ];

    return (

        <>

            <Navbar />

            <Container sx={{ mt: 5 }}>

                <Typography
                    variant="h3"
                    align="center"
                    fontWeight="bold"
                    gutterBottom
                >

                    Welcome 👋

                </Typography>

                <Typography
                    align="center"
                    color="text.secondary"
                    sx={{ mb: 5 }}
                >

                    Shop your favorite products and track your orders.

                </Typography>

                <Grid container spacing={4}>                {

                    cards.map((card, index) => (

                        <Grid
                            size={{ xs: 12, sm: 6 }}
                            key={index}
                        >

                            <Card
                                onClick={() => {

                                    if (card.path !== "#") {

                                        navigate(card.path);

                                    }

                                }}
                                sx={{
                                    cursor:
                                        card.path === "#"
                                            ? "default"
                                            : "pointer",

                                    height: 220,

                                    display: "flex",

                                    alignItems: "center",

                                    justifyContent: "center",

                                    textAlign: "center",

                                    borderRadius: 4,

                                    transition: "0.3s",

                                    "&:hover": {

                                        transform: "translateY(-8px)",

                                        boxShadow: 8

                                    }

                                }}
                            >

                                <CardContent>

                                    {card.icon}

                                    <Typography
                                        variant="h5"
                                        fontWeight="bold"
                                        sx={{ mt: 2 }}
                                    >

                                        {card.title}

                                    </Typography>

                                    <Typography
                                        color="text.secondary"
                                        sx={{ mt: 1 }}
                                    >

                                        {card.description}

                                    </Typography>

                                </CardContent>

                            </Card>

                        </Grid>

                    ))

                }

            </Grid>

            <Typography
                align="center"
                sx={{
                    mt: 6,
                    color: "text.secondary",
                    fontStyle: "italic"
                }}
            >

                Thank you for choosing Online Shopping.

                Browse products, place orders and track your notifications with ease.

            </Typography>

        </Container>

    </>

);

}

export default UserDashboard;