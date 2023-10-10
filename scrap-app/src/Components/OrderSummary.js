// import React, { useState, useContext } from "react";
// import {
//   Typography,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Button,
//   TextField,
// } from "@mui/material";

// import { CartContext } from "./CartContext";

// import axios from "axios";

// const OrderSummary = ({ loggedInUser }) => {
//   const { cartItems, handleRemoveFromCart } = useContext(CartContext);
//   const [address, setAddress] = useState("");
//   const [addressError, setAddressError] = useState("");

//   const handlePlaceOrder = async () => {


//     try {
//       const response = await axios.post(
//         "http://localhost:8080/orders/createOrder",
//         {
//           userId: loggedInUser,
//           address: address,
//           products: cartItems.map((item) => ({
//             productId: item.productId,
//             productName: item.name,
//             price: item.price,
//           })),
//         }
//       );

//       if (response.status === 200) {
//         // Redirect to the confirmation page
//         window.location.href = "/confirmation"; // Replace with your confirmation page URL
//       }
//     } catch (error) {
//       console.error("Error placing order:", error);
//     }
//   };

//   return (
//     <div style={{ marginTop: "50px", maxWidth: "800px", margin: "0 auto" }}>
//       <Typography variant="h5" gutterBottom>
//         Order Summary
//       </Typography>
//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>Product Name</TableCell>
//               <TableCell align="right">Price</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {cartItems.map((item) => (
//               <TableRow key={item.id}>
//                 <TableCell>{item.name}</TableCell>
//                 <TableCell align="right">{item.price} / KG</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <div style={{ marginTop: "20px" }}>
//         <TextField
//           label="Enter Address"
//           variant="outlined"
//           fullWidth
//           value={address}
//           onChange={(e) => setAddress(e.target.value)}
//         />
//       </div>
//       <div style={{ marginTop: "20px", textAlign: "center" }}>
//         <Button
//           variant="contained"
//           onClick={handlePlaceOrder}
//           sx={{ backgroundColor: "#56ad38", color: "white", width: "200px" }}
//         >
//           Place Order
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default OrderSummary;


import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TextField,
  Box,
} from "@mui/material";

import { CartContext } from "./CartContext";

import axios from "axios";


const OrderSummary = ({ loggedInUser }) => {
  const { cartItems, handleRemoveFromCart } = useContext(CartContext);
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [addressError, setAddressError] = useState("");

  const navigate = useNavigate(); // Initialize useNavigate

  const handlePlaceOrder = async () => {
    // Validate address fields
    if (!streetAddress || !city || !state || !country || !pinCode) {
      setAddressError("All address fields are required");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/orders/createOrder",
        {
          userId: loggedInUser,
          address: {
            streetAddress,
            city,
            state,
            country,
            pinCode,
          },
          products: cartItems.map((item) => ({
            productId: item.productId,
            productName: item.name,
            price: item.price,
          })),
        }
      );

      if (response.status === 201) {
        // Navigate to the confirmation page with necessary data
        handleClearCart();
        navigate("/confirmation", {
          state: {
            orderId: response.data._id,
            address: `${streetAddress}, ${city}, ${state}, ${country}, ${pinCode}`,
            products: cartItems.map((item) => ({
              productId: item.productId,
              name: item.name,
              price: item.price,
            })),
          },
        });
      }
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };
  const handleClearCart = () => {
    // Implement your logic to clear the cart here
    // For example, you can call your CartContext function to remove items from cart
    // handleRemoveFromCart(item.productId);
    // Clear the cart by calling handleRemoveFromCart for each item in cart
    cartItems.forEach((item) => {
      handleRemoveFromCart(item.productId);
    });
  };

  return (
    <Box mt={4} maxWidth="800px" margin="0 auto">
      <Typography variant="h5" gutterBottom>
        Order Summary
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product Name</TableCell>
              <TableCell align="right">Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartItems.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
                <TableCell align="right">{item.price} / KG</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box mt={2}>
        <TextField
          label="Street Address"
          variant="outlined"
          fullWidth
          value={streetAddress}
          onChange={(e) => setStreetAddress(e.target.value)}
        />
        <Box display="flex" mt={1}>
          <Box flex={1} marginRight={1}>
            <TextField
              label="City"
              variant="outlined"
              fullWidth
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </Box>
          <Box flex={1}>
            <TextField
              label="State"
              variant="outlined"
              fullWidth
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </Box>
        </Box>
        <Box display="flex" mt={1}>
          <Box flex={1} marginRight={1}>
            <TextField
              label="Country"
              variant="outlined"
              fullWidth
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </Box>
          <Box flex={1}>
            <TextField
              label="Pin Code"
              variant="outlined"
              fullWidth
              value={pinCode}
              onChange={(e) => setPinCode(e.target.value)}
            />
          </Box>
        </Box>
        {addressError && (
          <Typography variant="caption" color="error">
            {addressError}
          </Typography>
        )}
      </Box>
      <Box mt={2} textAlign="center">
        <Button
          variant="contained"
          onClick={handlePlaceOrder}
          to="/confirmation"
          sx={{ backgroundColor: "#56ad38", color: "white", width: "200px" }}
        >
          Place Order
        </Button>
      </Box>
    </Box>
  );
};

export default OrderSummary;
