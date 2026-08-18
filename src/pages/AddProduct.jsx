import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
    Container,
    Paper,
    Typography,
    TextField,
    Button,
    MenuItem
} from "@mui/material";

import Navbar from "../components/Navbar";
import { addProduct } from "../services/ProductService";

function AddProduct() {

    const navigate = useNavigate();

    const [product, setProduct] = useState({

        productName: "",
        description: "",
        price: "",
        stock: "",
        category: "",
        imageUrl: ""

    });

    const handleChange = (e) => {

        setProduct({

            ...product,

            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await addProduct(product);

            alert("Product Added Successfully");

            navigate("/products");

        } catch (error) {

            console.log(error);

            alert("Failed To Add Product");

        }

    };

    return (

        <>

            <Navbar />

            <Container maxWidth="sm">

                <Paper sx={{ p: 4, mt: 4 }}>

                    <Typography
                        variant="h4"
                        align="center"
                        gutterBottom>

                        Add Product

                    </Typography>

                    <form onSubmit={handleSubmit}>

                        <TextField
                            fullWidth
                            label="Product Name"
                            name="productName"
                            margin="normal"
                            value={product.productName}
                            onChange={handleChange}
                            required
                        />

                        <TextField
                            fullWidth
                            label="Description"
                            name="description"
                            margin="normal"
                            value={product.description}
                            onChange={handleChange}
                            required
                        />

                        <TextField
                            fullWidth
                            label="Price"
                            type="number"
                            name="price"
                            margin="normal"
                            value={product.price}
                            onChange={handleChange}
                            required
                        />

                        <TextField
                            fullWidth
                            label="Stock"
                            type="number"
                            name="stock"
                            margin="normal"
                            value={product.stock}
                            onChange={handleChange}
                            required
                        />

                        <TextField
                            select
                            fullWidth
                            label="Category"
                            name="category"
                            margin="normal"
                            value={product.category}
                            onChange={handleChange}
                            required
                        >

                            <MenuItem value="ELECTRONICS">
                                ELECTRONICS
                            </MenuItem>

                            <MenuItem value="FASHION">
                                FASHION
                            </MenuItem>

                            <MenuItem value="GROCERY">
                                GROCERY
                            </MenuItem>

                            <MenuItem value="BOOKS">
                                BOOKS
                            </MenuItem>

                            <MenuItem value="SPORTS">
                                SPORTS
                            </MenuItem>

                        </TextField>

                        <TextField
                            fullWidth
                            label="Image Name"
                            name="imageUrl"
                            margin="normal"
                            value={product.imageUrl}
                            onChange={handleChange}
                            helperText="Example: iphone14promax.png, bag.png, boat.png"
                            required
                        />

                        <Button
                            fullWidth
                            variant="contained"
                            type="submit"
                            sx={{ mt: 3 }}
                        >
                            Add Product
                        </Button>

                    </form>

                </Paper>

            </Container>

        </>

    );

}

export default AddProduct;