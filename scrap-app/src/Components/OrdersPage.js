// import React, { useEffect, useState } from "react";
// import {
//   Typography,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
// } from "@mui/material";

// import axios from "axios";

// const OrdersPage = ({ loggedInUser }) => {
//   const [orders, setOrders] = useState([]);

//   const fetchOrders = async () => {
//     try {
//       const response = await axios.get(
//         `http://localhost:8080/orders/${loggedInUser}`
//       );
//       if (response.status === 200) {
//         setOrders(response.data);
//       }
//     } catch (error) {
//       console.error("Error fetching orders:", error);
//     }
//   };

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   return (
//     <div style={{ marginTop: "50px", maxWidth: "800px", margin: "0 auto" }}>
//       <Typography variant="h5" gutterBottom>
//         Orders History
//       </Typography>
//       {orders.length === 0 ? (
//         <Typography variant="body1" style={{ color: "#666" }}>
//           No orders found.
//         </Typography>
//       ) : (
//         <TableContainer component={Paper}>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell>Order ID</TableCell>
//                 <TableCell align="right">Product Name</TableCell>
//                 <TableCell align="right">Price</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {orders.map((order) => (
//                 <TableRow key={order._id}>
//                   <TableCell>{order._id}</TableCell>
//                   <TableCell align="right">
//                     {order.products[0].productName}
//                   </TableCell>
//                   <TableCell align="right">
//                     {order.products[0].price} / KG
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       )}
//     </div>
//   );
// };

// export default OrdersPage;


// ______________________________________________________________

// import React, { useEffect, useState } from "react";
// import {
//   Typography,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
// } from "@mui/material";

// import axios from "axios";
// import { format } from "date-fns"; // Import date-fns library for date formatting

// const OrdersPage = ({ loggedInUser }) => {
//   const [orders, setOrders] = useState([]);

//   const fetchOrders = async () => {
//     try {
//       const response = await axios.get(
//         `http://localhost:8080/orders/${loggedInUser}`
//       );
//       if (response.status === 200) {
//         setOrders(response.data);
//       }
//     } catch (error) {
//       console.error("Error fetching orders:", error);
//     }
//   };

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   return (
//     <div style={{ marginTop: "50px", maxWidth: "800px", margin: "0 auto" }}>
//       <Typography variant="h5" gutterBottom>
//         Orders History
//       </Typography>
//       {orders.length === 0 ? (
//         <Typography variant="body1" style={{ color: "#666" }}>
//           No orders found.
//         </Typography>
//       ) : (
//         <TableContainer component={Paper}>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell>Order ID</TableCell>
//                 <TableCell>Order Date</TableCell> {/* Add this cell */}
//                 <TableCell align="right">Product Name</TableCell>
//                 <TableCell align="right">Price</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {orders.map((order) => (
//                 <TableRow key={order._id}>
//                   <TableCell>{order._id}</TableCell>
//                   <TableCell>
//                     {format(new Date(order.orderDate), "MM/dd/yyyy HH:mm:ss")}
//                   </TableCell>{" "}
//                   {/* Format and display order date */}
//                   <TableCell align="right">
//                     {order.products[0].productName}
//                   </TableCell>
//                   <TableCell align="right">
//                     {order.products[0].price} / KG
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       )}
//     </div>
//   );
// };

// export default OrdersPage;


import React, { useEffect, useState } from "react";
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

import axios from "axios";
import { format } from "date-fns";

const OrdersPage = ({ loggedInUser }) => {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/orders/${loggedInUser}`
      );
      if (response.status === 200) {
        setOrders(response.data);
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div style={{ marginTop: "50px", maxWidth: "800px", margin: "0 auto" }}>
      <Typography variant="h5" gutterBottom>
        Orders History
      </Typography>
      {orders.length === 0 ? (
        <Typography variant="body1" style={{ color: "#666" }}>
          No orders found.
        </Typography>
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Order ID</TableCell>
                <TableCell>Order Date</TableCell>
                <TableCell>Product Name</TableCell>
                {/* <TableCell align="right">Price</TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order._id}>
                  <TableCell>{order._id}</TableCell>
                  <TableCell>
                    {format(new Date(order.orderDate), "MM/dd/yyyy HH:mm:ss")}
                  </TableCell>
                  <TableCell colSpan={2}>
                    {order.products.map((product) => (
                      <div key={product.productId}>
                        <div>{product.productName}</div>
                        <div>Price: {product.price} / KG</div>
                      </div>
                    ))}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};

export default OrdersPage;
