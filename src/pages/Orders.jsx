import { useEffect, useState } from "react";

import {
    Container,
    Paper,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Button,
    MenuItem,
    Select,
    FormControl,
    Chip
} from "@mui/material";

import Navbar from "../components/Navbar";
import {
    getAllOrders,
    getOrdersByUserId,
    updateOrderStatus,
    deleteOrder
} from "../services/orderService";

function Orders() {

    const [orders, setOrders] = useState([]);

    const role = localStorage.getItem("role");

    const userId = Number(localStorage.getItem("userId"));

    useEffect(() => {

        loadOrders();

    }, []);

    const loadOrders = async () => {

        try {

            let data;

            if (role === "ADMIN") {

                data = await getAllOrders();

            } else {

                data = await getOrdersByUserId(userId);

            }

            setOrders(data);

        } catch (error) {

            console.log(error);

            alert("Failed To Load Orders");

        }

    };

    const handleStatusChange = async (orderId, status) => {

        try {

            await updateOrderStatus(orderId, status);

            alert("Order Status Updated");

            loadOrders();

        } catch (error) {

            console.log(error);

            alert("Failed To Update Status");

        }

    };

    const handleDelete = async (orderId) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this order?"
        );

        if (!confirmDelete) {

            return;

        }

        try {

            await deleteOrder(orderId);

            alert("Order Deleted Successfully");

            loadOrders();

        } catch (error) {

            console.log(error);

            alert("Failed To Delete Order");

        }

    };

  const getStatusChip = (status) => {

    let background = "#757575";

    if (status === "PENDING") {
        background = "#f59e0b";
    } else if (status === "SHIPPED") {
        background = "#0288d1";
    } else if (status === "DELIVERED") {
        background = "#2e7d32";
    } else if (status === "CANCELLED") {
        background = "#d32f2f";
    }

    return (
        <Chip
            label={status}
            sx={{
                backgroundColor: background,
                color: "#fff",
                fontWeight: "bold",
                minWidth: 120
            }}
        />
    );
};

    return (

        <>

            <Navbar />

            <Container sx={{ mt: 4 }}>

                <Paper sx={{ p: 3 }}>

                    <Typography
                        variant="h4"
                        gutterBottom
                    >

                        {role === "ADMIN"
                            ? "All Orders"
                            : "My Orders"}

                    </Typography>

                    <TableContainer>

                        <Table>

                            <TableHead>

                                <TableRow>

                                    <TableCell>Order ID</TableCell>

                                    <TableCell>User ID</TableCell>

                                    <TableCell>Product ID</TableCell>

                                    <TableCell>Quantity</TableCell>
                                                                        <TableCell>Total Price</TableCell>

                                    <TableCell>Order Date</TableCell>

                                    <TableCell>Status</TableCell>

                                    {

                                        role === "ADMIN" &&

                                        <TableCell>

                                            Actions

                                        </TableCell>

                                    }

                                </TableRow>

                            </TableHead>

                            <TableBody>

                                {

                                    orders.map((order) => (

                                        <TableRow
                                            key={order.orderId}
                                        >

                                            <TableCell>

                                                {order.orderId}

                                            </TableCell>

                                            <TableCell>

                                                {order.userId}

                                            </TableCell>

                                            <TableCell>

                                                {order.productId}

                                            </TableCell>

                                            <TableCell>

                                                {order.quantity}

                                            </TableCell>

                                            <TableCell>

                                                ₹ {order.totalPrice}

                                            </TableCell>

                                            <TableCell>

                                                {order.orderDate}

                                            </TableCell>

                                            <TableCell>

                                                {

                                                    role === "ADMIN"

                                                        ?

                                                        <FormControl
                                                            fullWidth
                                                            size="small"
                                                        >

                                                            <Select
                                                                value={order.orderStatus}
                                                                onChange={(e) =>
                                                                    handleStatusChange(
                                                                        order.orderId,
                                                                        e.target.value
                                                                    )
                                                                }
                                                            >

                                                                <MenuItem value="PENDING">
                                                                    PENDING
                                                                </MenuItem>

                                                                <MenuItem value="CONFIRMED">
                                                                    CONFIRMED
                                                                </MenuItem>

                                                                <MenuItem value="SHIPPED">
                                                                    SHIPPED
                                                                </MenuItem>

                                                                <MenuItem value="DELIVERED">
                                                                    DELIVERED
                                                                </MenuItem>

                                                                <MenuItem value="CANCELLED">
                                                                    CANCELLED
                                                                </MenuItem>

                                                            </Select>

                                                        </FormControl>

                                                        :

                                                        <>
                                                            {console.log("USER BRANCH")}
                                                            {getStatusChip(order.orderStatus)}
                                                        </>

                                                }

                                            </TableCell>
                                                                                        {

                                                role === "ADMIN" &&

                                                <TableCell>

                                                    <Button
                                                        color="error"
                                                        variant="contained"
                                                        onClick={() =>
                                                            handleDelete(
                                                                order.orderId
                                                            )
                                                        }
                                                    >

                                                        Delete

                                                    </Button>

                                                </TableCell>

                                            }

                                        </TableRow>

                                    ))

                                }

                            </TableBody>

                        </Table>

                    </TableContainer>

                </Paper>

            </Container>

        </>

    );

}

export default Orders;