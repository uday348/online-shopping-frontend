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
    Chip
} from "@mui/material";

import Navbar from "../components/Navbar";

import {

    getAllNotifications,
    getNotificationsByUserId,
    deleteNotification

} from "../services/notificationService";

function Notifications() {

    const [notifications, setNotifications] = useState([]);

    const role = localStorage.getItem("role");

    const userId = Number(localStorage.getItem("userId"));

    useEffect(() => {

        loadNotifications();

    }, []);

    const loadNotifications = async () => {

        try {

            let data;

            if (role === "ADMIN") {

                data = await getAllNotifications();

            }

            else {

                data = await getNotificationsByUserId(userId);

            }

            setNotifications(data);

        }

        catch (error) {

            console.log(error);

            alert("Failed To Load Notifications");

        }

    };

    const handleDelete = async (notificationId) => {

        const confirmDelete = window.confirm(

            "Delete this notification?"

        );

        if (!confirmDelete) {

            return;

        }

        try {

            await deleteNotification(notificationId);

            alert("Notification Deleted Successfully");

            loadNotifications();

        }

        catch (error) {

            console.log(error);

            alert("Failed To Delete Notification");

        }

    };
const getStatusChip = (status) => {

    return (

        <Chip
            label={status}
            color={
                status === "SENT"
                    ? "success"
                    : status === "PENDING"
                    ? "warning"
                    : "error"
            }
            variant="filled"
            sx={{
                fontWeight: "bold",
                minWidth: 110
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

                        {

                            role === "ADMIN"

                                ?

                                "All Notifications"

                                :

                                "My Notifications"

                        }

                    </Typography>

                    <TableContainer>

                        <Table>

                            <TableHead>

                                <TableRow>

                                    <TableCell>

                                        Notification ID

                                    </TableCell>

                                    <TableCell>

                                        User ID

                                    </TableCell>

                                    <TableCell>

                                        Message

                                    </TableCell>

                                    <TableCell>

                                        Date & Time

                                    </TableCell>

                                    <TableCell>

                                        Status

                                    </TableCell>

                                    {

                                        role === "ADMIN"

                                            &&

                                            <TableCell>

                                                Action

                                            </TableCell>

                                    }

                                </TableRow>

                            </TableHead>

                            <TableBody>                                {

                                    notifications.map((notification) => (

                                        <TableRow
                                            key={notification.notificationId}
                                        >

                                            <TableCell>

                                                {notification.notificationId}

                                            </TableCell>

                                            <TableCell>

                                                {notification.userId}

                                            </TableCell>

                                            <TableCell
                                                sx={{
                                                    whiteSpace: "pre-line",
                                                    maxWidth: 400
                                                }}
                                            >

                                                {notification.message}

                                            </TableCell>

                                            <TableCell>

                                                {notification.sentDateTime}

                                            </TableCell>

                                            <TableCell>

                                                {

                                                    getStatusChip(
                                                        notification.notificationStatus
                                                    )

                                                }

                                            </TableCell>

                                            {

                                                role === "ADMIN"

                                                    &&

                                                    <TableCell>

                                                        <Button
                                                            color="error"
                                                            variant="contained"
                                                            onClick={() =>
                                                                handleDelete(
                                                                    notification.notificationId
                                                                )
                                                            }
                                                        >

                                                            Delete

                                                        </Button>

                                                    </TableCell>

                                            }

                                        </TableRow>

                                    ))

                                } </TableBody>

                        </Table>

                    </TableContainer>

                </Paper>

            </Container>

        </>

    );

}

export default Notifications;