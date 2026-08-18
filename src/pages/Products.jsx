import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import bagImage from "../assets/images/bag.png";
import iphoneImage from "../assets/images/iphone14promax.png";
import boatImage from "../assets/images/boat.png";
import laptopImage from "../assets/images/laptop.png";
import shirtImage from "../assets/images/shirt.png";
import bookImage from "../assets/images/book.png";
import tvImage from "../assets/images/tv.png";
import riceImage from "../assets/images/rice.png";
import wheatImage from "../assets/images/wheat.png";
import iqooz11xImage from "../assets/images/iqooz11x.png";

import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Button,
    Grid,
    Container,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Stack
} from "@mui/material";

import Navbar from "../components/Navbar";

import {
    getAllProducts,
    deleteProduct
} from "../services/ProductService";

import {
    placeOrder
} from "../services/orderService";

function Products() {

    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("ALL");
    const [sortBy, setSortBy] = useState("DEFAULT");
    const [open, setOpen] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const navigate = useNavigate();

    const role = localStorage.getItem("role");

    const userId = Number(localStorage.getItem("userId"));

    const images = {

        "iphone14promax.png": iphoneImage,
        "bag.png": bagImage,
        "boat.png": boatImage,
        "laptop.png": laptopImage,
        "shirt.png": shirtImage,
        "tv.png": tvImage,
        "book.png": bookImage,
        "rice.png": riceImage,
        "wheat.png": wheatImage,
        "iqooz11x.png":iqooz11xImage
    };

        const filteredProducts = [...products]

        .filter((product) => {

            const matchesSearch =
                product.productName
                    .toLowerCase()
                    .includes(search.toLowerCase());

            const matchesCategory =
                category === "ALL" ||
                product.category === category;

            return matchesSearch && matchesCategory;

        })

    .sort((a, b) => {

        if (sortBy === "LOW") {

            return a.price - b.price;

        }

        if (sortBy === "HIGH") {

            return b.price - a.price;

        }

        return 0;

    });

    useEffect(() => {

        loadProducts();

    }, []);

    const loadProducts = async () => {

        try {

            const data = await getAllProducts();

            setProducts(data);

        } catch (error) {

            console.log(error);

        }

    };

    const handlePlaceOrder = (product) => {

        setSelectedProduct(product);

        setQuantity(1);

        setOpen(true);

    };

    const confirmOrder = async () => {

        try {

            const order = {

                userId: userId,
                productId: selectedProduct.productId,
                quantity: Number(quantity)

            };

            await placeOrder(order);

            alert("Order Placed Successfully");

            setOpen(false);

        } catch (error) {

            console.log(error);

            alert("Failed To Place Order");

        }

    };

    const handleDelete = async (id) => {
            const confirmDelete = window.confirm(
        "Are you sure you want to delete this product?"
    );

    if (!confirmDelete) return;

    try {

        await deleteProduct(id);

        alert("Product Deleted Successfully");

        loadProducts();

    } catch (error) {

        console.log(error);

        alert("Failed To Delete Product");

    }

};

return (

    <>

        <Navbar />

        <Container sx={{ mt: 4 }}>

           <Stack
    direction={{ xs: "column", md: "row" }}
    spacing={2}
    sx={{ mb: 4 }}
>

    <TextField
        fullWidth
        label="Search Products"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
    />

    <FormControl fullWidth>

        <InputLabel>

            Category

        </InputLabel>

        <Select
            value={category}
            label="Category"
            onChange={(e) => setCategory(e.target.value)}
        >

            <MenuItem value="ALL">All</MenuItem>
            <MenuItem value="ELECTRONICS">Electronics</MenuItem>
            <MenuItem value="FASHION">Fashion</MenuItem>
            <MenuItem value="GROCERY">Grocery</MenuItem>
            <MenuItem value="BOOKS">Books</MenuItem>
            <MenuItem value="SPORTS">Sports</MenuItem>

        </Select>

    </FormControl>

    <FormControl fullWidth>

        <InputLabel>

            Sort By

        </InputLabel>

        <Select
            value={sortBy}
            label="Sort By"
            onChange={(e) => setSortBy(e.target.value)}
        >

            <MenuItem value="DEFAULT">
                Default
            </MenuItem>

            <MenuItem value="LOW">
                Price Low → High
            </MenuItem>

            <MenuItem value="HIGH">
                Price High → Low
            </MenuItem>

        </Select>

    </FormControl>

</Stack>

<Grid container spacing={3}></Grid>

        <Grid container spacing={3}>

                {

                    filteredProducts.map((product) => (

                        <Grid
                            size={{ xs: 12, sm: 6, md: 4 }}
                            key={product.productId}
                        >

                            <Card
                                sx={{
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    borderRadius: 3,
                                    boxShadow: 3
                                }}
                            >

                                <CardMedia
                                    component="img"
                                    image={
                                        images[product.imageUrl] ||
                                        bagImage
                                    }
                                    alt={product.productName}
                                    sx={{
                                        height: 220,
                                        width: "100%",
                                        objectFit: "contain",
                                        backgroundColor: "#fafafa",
                                        p: 2
                                    }}
                                />

                                <CardContent>

                                    <Typography
                                        variant="h6"
                                        gutterBottom
                                    >
                                        {product.productName}
                                    </Typography>

                                    <Typography
                                        variant="body1"
                                        fontWeight="bold"
                                    >
                                        ₹ {product.price}
                                    </Typography>

                                    <Typography
                                        variant="body2"
                                        sx={{ mt: 1 }}
                                    >
                                        {product.description}
                                    </Typography>

                                    <Typography sx={{ mt: 1 }}>
                                        <b>Category:</b> {product.category}
                                    </Typography>

                                    <Typography>
                                        <b>Stock:</b> {product.stock}
                                    </Typography>

                                    {

                                        role === "ADMIN"

                                            ?

                                            <>

                                                <Button
                                                    fullWidth
                                                    variant="contained"
                                                    sx={{ mt: 2 }}
                                                    onClick={() =>
                                                        navigate(
                                                            `/edit-product/${product.productId}`
                                                        )
                                                    }
                                                >
                                                    Edit
                                                </Button>

                                                <Button
                                                    fullWidth
                                                    color="error"
                                                    variant="contained"
                                                    sx={{ mt: 2 }}
                                                    onClick={() =>
                                                        handleDelete(
                                                            product.productId
                                                        )
                                                    }
                                                >
                                                    Delete
                                                </Button>

                                            </>

                                            :

                                            <Button
                                                fullWidth
                                                variant="contained"
                                                sx={{ mt: 2 }}
                                                onClick={() =>
                                                    handlePlaceOrder(product)
                                                }
                                            >
                                                Place Order
                                            </Button>

                                    }

                                </CardContent>

                            </Card>

                        </Grid>

                    ))

                }

            </Grid>
                        <Dialog
                open={open}
                onClose={() => setOpen(false)}
                fullWidth
                maxWidth="sm"
            >

                <DialogTitle>

                    Place Order

                </DialogTitle>

                <DialogContent>

                    {

                        selectedProduct &&

                        <>

                            <Typography
                                variant="h6"
                                sx={{ mb: 2 }}
                            >

                                {selectedProduct.productName}

                            </Typography>

                            <Typography
                                sx={{ mb: 2 }}
                            >

                                Price : ₹ {selectedProduct.price}

                            </Typography>

                            <TextField
                                fullWidth
                                type="number"
                                label="Quantity"
                                value={quantity}
                                onChange={(e) =>
                                    setQuantity(e.target.value)
                                }
                                inputProps={{
                                    min: 1,
                                    max: selectedProduct.stock
                                }}
                            />

                            <Typography
                                sx={{
                                    mt: 2,
                                    fontWeight: "bold"
                                }}
                            >

                                Total Price : ₹{" "}

                                {

                                    selectedProduct.price *

                                    Number(quantity)

                                }

                            </Typography>

                        </>

                    }

                </DialogContent>

                <DialogActions>

                    <Button
                        onClick={() =>
                            setOpen(false)
                        }
                    >

                        Cancel

                    </Button>

                    <Button
                        variant="contained"
                        onClick={confirmOrder}
                    >

                        Confirm Order

                    </Button>

                </DialogActions>

            </Dialog>

        </Container>

    </>

);

}

export default Products;