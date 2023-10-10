import React, { useState, useEffect } from "react";
import {
  TextField,
  FormControl,
  FormGroup,
  Typography,
  styled,
  Button,
} from "@mui/material";

import { useNavigate, useParams } from "react-router-dom";
// import MyButton from "./MyButton";

import { editProduct, getProduct } from "../service/api";

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

const EditProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    loadProductDetails();
  }, []);

  const loadProductDetails = async () => {
    const response = await getProduct(id);
    setProduct(response.data)
  };

  const [product, setProduct] = useState(defaultValue);

  const onValueChange = (e) => {
    console.log(e.target.value);
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const editProductDetails = async (e) => {
    e.preventDefault(); // Prevent form submission
    if (!product.name || !product.price || !product.image) {
      // One or more required fields are missing
      alert("Please fill in all the required fields.");
      return;
    }

    await editProduct(product, id);
    navigate("/pricing");
  };

  return (
    <Container>
      <Typography variant="h4" align="center">
        Edit Product
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
        value={product.name}
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
          value={product.price}
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
          value={product.image}
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
          onClick={(e) => editProductDetails(e)}
        >
          Edit Product
        </Button>
      </FormControl>
    </Container>
  );
};

export default EditProduct;
