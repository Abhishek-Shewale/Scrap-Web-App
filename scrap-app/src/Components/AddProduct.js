import React, { useState } from "react";
import {
  TextField,
  FormControl,
  FormGroup,
  Typography,
  styled,
  Button,
} from "@mui/material";

import { useNavigate } from "react-router-dom";
// import MyButton from "./MyButton";

import { addProduct } from "../service/api";

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;

const defaultValue = {
  name: "",
  price: "",
  image: "",
};

const AddProduct = () => {

  const navigate = useNavigate()

  const [product, setProduct] = useState(defaultValue);

  const onValueChange = (e) => {
    console.log(e.target.value);
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const addProductDetails = async (e) => {
    e.preventDefault(); // Prevent form submission
    if (!product.name || !product.price || !product.image) {
      // One or more required fields are missing
      alert("Please fill in all the required fields.");
      return;
    }

    await addProduct(product);
    navigate("/pricing");
  };

  return (
    <Container>
      <Typography variant="h4" align="center">
        Add Product
      </Typography>

      <TextField
        id="filled-basic"
        label="Product Name"
        variant="outlined"
        color="success"
        // type=""
        required
        onChange={(e) => onValueChange(e)}
        name="name"
      />

      <FormControl>
        <TextField
          id="filled-basic"
          label="Price"
          variant="outlined"
          color="success"
          type="number"
          required
          onChange={(e) => onValueChange(e)}
          name="price"
        />
      </FormControl>
      <FormControl>
        <TextField
          id="filled-basic"
          label="Image or Image Link"
          variant="outlined"
          color="success"
          required
          onChange={(e) => onValueChange(e)}
          name="image"
        />
      </FormControl>
      <FormControl>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#56ad38",
            width: "200px",
            "&:hover": {
              backgroundColor: "#56ad38", // keep the same color on hover
            },
            "&:focus": {
              outline: "none",
            },
          }}
          onClick={(e) => addProductDetails(e)}
        >
          Add Product
        </Button>
      </FormControl>
    </Container>
  );
};

export default AddProduct;
