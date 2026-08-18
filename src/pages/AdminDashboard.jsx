import { useNavigate } from "react-router-dom";

import {
    Container,
    Typography,
    Grid,
    Card,
    CardContent
} from "@mui/material";

import Inventory2Icon from "@mui/icons-material/Inventory2";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PeopleIcon from "@mui/icons-material/People";
import Navbar from "../components/Navbar";

function AdminDashboard() {

    const navigate = useNavigate();

    const cards = [

        {
            title: "Manage Products",
            description: "Edit and Delete Products",
            icon: <Inventory2Icon sx={{ fontSize: 60, color: "#1976d2" }} />,
            path: "/products"
        },

        {
            title: "Manage Orders",
            description: "View and Update Orders",
            icon: <ShoppingCartIcon sx={{ fontSize: 60, color: "#2e7d32" }} />,
            path: "/orders"
        },

        {
            title: "Notifications",
            description: "View Customer Notifications",
            icon: <NotificationsIcon sx={{ fontSize: 60, color: "#ed6c02" }} />,
            path: "/notifications"
        },

        {
            title: "Manage Users",
            description: "Registered Users",
            icon: <PeopleIcon sx={{ fontSize: 60, color: "#9c27b0" }} />,
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
                    Welcome Admin 👋
                </Typography>

                <Typography
                    align="center"
                    color="text.secondary"
                    sx={{ mb: 5 }}
                >
                    Manage products, orders and notifications from one place.
                </Typography>

                <Grid container spacing={4}>                    {

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
                    Welcome to the Online Shopping Administration Portal.
                    Manage your application efficiently from one place.
                </Typography>

            </Container>

        </>

    );

}

export default AdminDashboard;