import React from "react";
import { Typography, Paper } from "@mui/material";
import { useLocation } from "react-router-dom"; // Import useLocation

const OrderConfirmation = () => {
  const location = useLocation(); // Use useLocation hook to get location object
  const { orderId, address, products } = location.state;

  return (
    <div style={{ marginTop: "50px", maxWidth: "800px", margin: "0 auto" }}>
      <Typography
        variant="h5"
        gutterBottom
        style={{ marginTop: "50px", textAlign: "center" }}
      >
        Order Confirmation
      </Typography>
      <Paper elevation={3} style={{ padding: "20px", marginTop: "20px" }}>
        <Typography variant="body1">
          Your order with ID {orderId} has been successfully placed.
        </Typography>
        <Typography variant="body1">Pickup Address: {address}</Typography>
        <Typography variant="h6" style={{ marginTop: "10px" }}>
          Order Details:
        </Typography>
        <ul>
          {products.map((product) => (
            <li key={product.productId}>
              {product.name} - {product.price} / KG
            </li>
          ))}
        </ul>
      </Paper>
    </div>
  );
};

export default OrderConfirmation;
