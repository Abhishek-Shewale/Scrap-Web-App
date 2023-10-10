import React from "react";
import { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Typography } from "@mui/material";

import { getProducts, deleteProduct } from "../service/api";

import Background from "./bg.png";

import { CartContext } from "./CartContext"; // Import the CartContext


const PricingPage = ({ loggedInUser }) => {
  // Define the admin usernames here
  const adminUsernames = ["admin", "admin2"];
  // Check if the logged-in user is an admin
  const isAdminUser = loggedInUser && adminUsernames.includes(loggedInUser);

  const navigate = useNavigate();

  // ______________________________________________

  const [products, setProducts] = useState([]);
  const { cartItems, handleAddToCart, isProductAdded } =
    useContext(CartContext);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    let response = await getProducts();
    setProducts(response.data);
  };

  const deleteProductDetails = async (id) => {
    await deleteProduct(id);
    getAllProducts();
  };

  const handleCallClick = () => {
    if (!loggedInUser) {
      navigate("/login"); // Redirect to the login page if not logged in
    } else {
      // Add the functionality for the "Call" button
      // This will be executed if the user is logged in
      // Add your code here
    }
  };

  const handleAddToCartClick = (product) => {
    if (!loggedInUser) {
      navigate("/login");
    } else {
      handleAddToCart(product);
    }
  };

  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    maxWidth: "100%",
    margin: "0 auto",
    backgroundImage: `url(${Background})`,
  };

  const cardStyle = {
    border: "1px solid #ccc",
    borderRadius: "4px",
    padding: "16px",
    margin: "16px",
    width: "250px",
    textAlign: "center",
    backgroundColor: "#f2f2f2",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    transition: "box-shadow 0.3s ease",
    position: "relative",
  };

  const cardHoverStyle = {
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  };

  const imageStyle = {
    width: "200px",
    height: "150px",
    objectFit: "cover",
    borderRadius: "4px",
  };

  const nameStyle = {
    marginTop: "8px",
    fontSize: "18px",
  };

  const priceStyle = {
    marginTop: "4px",
    fontSize: "16px",
    fontWeight: "bold",
  };

  const buttonContainerStyle = {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "16px",
  };

  const callLogoStyle = {
    width: "20px",
    height: "20px",
    marginRight: "8px",
  };

  const cartLogoStyle = {
    width: "18px",
    height: "18px",
    marginRight: "8px",
  };

  const mediaQuery768 = {
    "@media (max-width: 768px)": {
      cardStyle: {
        width: "150px",
      },
      nameStyle: {
        fontSize: "16px",
      },
      priceStyle: {
        fontSize: "14px",
      },
    },
  };

  const mediaQuery480 = {
    "@media (max-width: 480px)": {
      cardStyle: {
        width: "100%",
        margin: "16px 0",
      },
    },
  };

  return (
    <div style={containerStyle}>

      {products.map((product) => (
        <div
          key={product.id}
          style={{
            ...cardStyle,
            ...mediaQuery768.cardStyle,
            ...mediaQuery480.cardStyle,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = cardHoverStyle.boxShadow;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = cardStyle.boxShadow;
          }}
        >
          <img src={product.image} alt={product.name} style={imageStyle} />
          <h3 style={nameStyle}>{product.name}</h3>
          <p style={priceStyle}>{product.price}/KG</p>

          {/* <div style={buttonContainerStyle}>
            <Button
              variant="contained"
              component={Link}
              to={`/editproduct/${product.productId}`}
              sx={{
                backgroundColor: "#56ad38",
                width: "200px",
                "&:hover": {
                  backgroundColor: "#56ad38", // keep the same color on hover
                  color: "white",
                },
                "&:focus": {
                  outline: "none",
                  textDecoration: "none",
                },
                marginRight: "20px",
                borderRadius: "20px",
              }}
            >
              Edit
            </Button>
            <Button
              variant="contained"
              onClick={() => deleteProductDetails(product.productId)}
              sx={{
                backgroundColor: "#56ad38",
                width: "200px",
                "&:hover": {
                  backgroundColor: "#56ad38", // keep the same color on hover
                },
                "&:focus": {
                  outline: "none",
                },
                borderRadius: "20px",
              }}
            >
              Delete
            </Button>
          </div> */}

          {isAdminUser && (
            <div style={buttonContainerStyle}>
              <Button
                variant="contained"
                component={Link}
                to={`/editproduct/${product.productId}`}
                sx={{
                  backgroundColor: "#56ad38",
                  width: "200px",
                  "&:hover": {
                    backgroundColor: "#56ad38", // keep the same color on hover
                    color: "white",
                  },
                  "&:focus": {
                    outline: "none",
                    textDecoration: "none",
                  },
                  marginRight: "20px",
                  borderRadius: "20px",
                }}
              >
                Edit
              </Button>
              <Button
                variant="contained"
                onClick={() => deleteProductDetails(product.price)}
                sx={{
                  backgroundColor: "#56ad38",
                  width: "200px",
                  "&:hover": {
                    backgroundColor: "#56ad38", // keep the same color on hover
                  },
                  "&:focus": {
                    outline: "none",
                  },
                  borderRadius: "20px",
                }}
              >
                Delete
              </Button>
            </div>
          )}

          {/* Show the "Call" and "Add to Cart" icons for normal users */}
          {!isAdminUser && (
            <div style={buttonContainerStyle}>
              {/* Replace the below buttons with your "Call" and "Add to Cart" icons */}
              <Button
                variant="contained"
                onClick={handleCallClick}
                sx={{
                  backgroundColor: "#56ad38",
                  width: "100px",
                  "&:hover": {
                    backgroundColor: "#56ad38", // keep the same color on hover
                    color: "white",
                  },
                  "&:focus": {
                    outline: "none",
                    textDecoration: "none",
                  },
                  marginRight: "20px",
                  borderRadius: "20px",
                }}
              >
                Call
              </Button>
              <Button
                variant="contained"
                onClick={() => handleAddToCartClick(product)}
                sx={{
                  backgroundColor: "#56ad38",
                  width: "200px",
                  "&:hover": {
                    backgroundColor: "#56ad38", // keep the same color on hover
                  },
                  "&:focus": {
                    outline: "none",
                  },
                  borderRadius: "20px",
                }}
              >
                Add to cart
              </Button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
//         </div>
//       ))}
//     </div>
//   );
// };

export default PricingPage;
