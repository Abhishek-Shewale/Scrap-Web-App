// // MyCart.js
// import React, { useContext } from "react";
// import {
//   Typography,
//   List,
//   ListItem,
//   ListItemText,
//   Button,
// } from "@mui/material";
// import { CartContext } from "./CartContext";

// const MyCart = ({ loggedInUser }) => {
//   const { cartItems, handleRemoveFromCart } = useContext(CartContext);

//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//       }}
//     >
//       {loggedInUser ? (
//         <>
//           <Typography variant="h5" gutterBottom style={{ marginTop: "50px" }}>
//             My Cart
//           </Typography>
//           {cartItems.length === 0 ? (
//             <Typography variant="body1" style={{ color: "#666" }}>
//               Your scrap cart is empty. Add scrap items to sell!
//             </Typography>
//           ) : (
//             <>
//               <List>
//                 {cartItems.map((item) => (
//                   <ListItem key={item.productId}>
//                     <ListItemText primary={item.name} />
//                     <Button
//                       variant="contained"
//                       onClick={() => handleRemoveFromCart(item.productId)} // Use the correct property here
//                       sx={{
//                         backgroundColor: "#f44336",
//                         color: "white",
//                         marginLeft: "20px",
//                       }}
//                     >
//                       Remove
//                     </Button>
//                   </ListItem>
//                 ))}
//               </List>
//             </>
//           )}
//         </>
//       ) : (
//         <Typography variant="body1">
//           Please log in to view your cart.
//         </Typography>
//       )}
//     </div>
//   );
// };

// export default MyCart;

// _________________________________________________________________

import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
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
} from "@mui/material";
import axios from "axios";

import { CartContext } from "./CartContext";


const MyCart = ({ loggedInUser }) => {
  const { cartItems, handleRemoveFromCart } = useContext(CartContext);
  const [isRequestingPickup, setIsRequestingPickup] = useState(false);


  const handleRequestPickup = async () => {
    try {
      setIsRequestingPickup(true);
      const response = await axios.post("http://localhost:8080/orders", {
        userId: loggedInUser,
        products: cartItems.map((item) => ({
          productId: item.productId,
          productName: item.name,
          price: item.price,
        })),
      });

      if (response.status === 201) {
        // Order request successful, clear cart
        handleClearCart();
      }
    } catch (error) {
      console.error("Error requesting pickup:", error);
    } finally {
      setIsRequestingPickup(false);
    }
  };

  const handleClearCart = () => {
    // Implement your logic to clear the cart here
    // For example, you can call your CartContext function to remove items from cart
    // handleRemoveFromCart(item.productId);
    
  };

  return (
    <div style={{ marginTop: "50px", maxWidth: "800px", margin: "0 auto" }}>
      {loggedInUser ? (
        <>
          <Typography
            variant="h5"
            gutterBottom
            style={{ marginTop: "50px", textAlign: "center" }}
          >
            My Cart
          </Typography>
          {cartItems.length === 0 ? (
            <Typography
              variant="body1"
              style={{ color: "#666", textAlign: "center" }}
            >
              Your cart is empty. Add items to your cart from the Pricing Page!
            </Typography>
          ) : (
            <>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Product Name</TableCell>
                      <TableCell align="right">Price</TableCell>
                      <TableCell align="right">Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {cartItems.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell>{item.name}</TableCell>
                        <TableCell align="right">{item.price} / KG</TableCell>
                        <TableCell align="right">
                          <Button
                            variant="contained"
                            onClick={() => handleRemoveFromCart(item.productId)}
                            sx={{ backgroundColor: "#f44336", color: "white" }}
                          >
                            Remove
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <div style={{ marginTop: "20px", textAlign: "center" }}>
                <Button
                  variant="contained"
                  component={Link}
                  // to={`/orders/${loggedInUser}`}
                  to='/ordersummary'
                  // onClick={handleRequestPickup}
                  disabled={isRequestingPickup || cartItems.length === 0}
                  sx={{
                    backgroundColor: "#56ad38",
                    color: "white",
                    width: "200px",
                    "&:hover": {
                      backgroundColor: "#56ad38", // Keep the same color on hover
                      color: "white", // Keep the same color on hover
                    },
                  }}
                >
                  Request Pickup
                </Button>
              </div>
            </>
          )}
        </>
      ) : (
        <Typography variant="body1" style={{ textAlign: "center" }}>
          Please log in to view your cart.
        </Typography>
      )}
    </div>
  );
};

export default MyCart;











