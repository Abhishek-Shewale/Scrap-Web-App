import React, {useEffect, useState} from "react";
import jwt_decode from "jwt-decode";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import HomePage from "./Components/HomePage";
import AboutPage from "./Components/AboutPage";
import ContactPage from "./Components/ContactPage";
import PricingPage from "./Components/PricingPage";
import MyButton from "./Components/MyButton"; // Import your Button Component here
import AddProduct from "./Components/AddProduct"
import { Navbar, Nav } from "react-bootstrap";
import { Logo } from "./Components/Logo";
import RequestPickup from "./Components/MyCart";
import Footer from "./Components/Footer";
import EditProduct from "./Components/EditProduct";
import LoginPage from "./Components/LoginPage"
import RegistrationPage from "./Components/RegistrationPage";
import MyCart from "./Components/MyCart";
import { CartProvider, CartContext } from "./Components/CartContext";
import ProfilePage from "./Components/ProfilePage";
import OrdersPage from "./Components/OrdersPage";
import OrderSummary from "./Components/OrderSummary";
import OrderConfirmation from "./Components/OrderConfirmation";



// import { fontFamily } from "@mui/system"; 
function App(props) {
  const [loggedInUser, setLoggedInUser] = useState(null);


  // Define the admin usernames here
  const adminUsernames = ["admin", "admin2"];

  // Check if the logged-in user is an admin
  const isAdminUser = loggedInUser && adminUsernames.includes(loggedInUser);

  // Function to handle user logout
  const handleLogout = () => {
    // Clear the JWT token from local storage
    localStorage.removeItem("authToken");
    // Clear the loggedInUser state
    setLoggedInUser(null);
  };

  // Check if the user is logged in on page load
  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    const username = localStorage.getItem("username");
    if (authToken) {
      // Decode the JWT token to get user information
      const decodedToken = jwt_decode(authToken);

      // Assuming the JWT token contains user's username
      setLoggedInUser(username);
    }
  }, [loggedInUser]);


  return (
    <div>
      <Router>
        <CartProvider loggedInUser={loggedInUser}>
          <div className="entire">
            <Navbar expand="lg">
              <Navbar.Brand as={NavLink} to="/">
                {/* Logo SVG */}
                <Logo></Logo>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                  <Nav.Link
                    as={NavLink}
                    className="custom-link"
                    to="/"
                    style={{ fontSize: "18px" }}
                  >
                    Home
                  </Nav.Link>
                  <Nav.Link
                    as={NavLink}
                    className="custom-link"
                    to="/about"
                    style={{ fontSize: "18px" }}
                  >
                    About
                  </Nav.Link>
                  <Nav.Link
                    as={NavLink}
                    className="custom-link"
                    to="/pricing"
                    style={{ fontSize: "18px" }}
                  >
                    Pricing
                  </Nav.Link>
                  {!isAdminUser && (
                    <Nav.Link
                      as={NavLink}
                      className="custom-link"
                      to="/contact"
                      style={{ fontSize: "18px" }}
                    >
                      Contact
                    </Nav.Link>
                  )}
                  {loggedInUser && !isAdminUser && (
                    <Nav.Link
                      as={NavLink}
                      className="custom-link"
                      to="/cart"
                      style={{ fontSize: "18px" }}
                    >
                      My Cart
                    </Nav.Link>
                  )}
                  {loggedInUser && !isAdminUser && (
                    <Nav.Link
                      as={NavLink}
                      className="custom-link"
                      to={`orders/${loggedInUser}`}
                      style={{ fontSize: "18px" }}
                    >
                      My Orders
                    </Nav.Link>
                  )}
                  {/* {loggedInUser && (
                    <Nav.Link
                      as={NavLink}
                      className="custom-link"
                      to={`/profile/${loggedInUser}`}
                      style={{ fontSize: "18px" }}
                    >
                      Settings
                    </Nav.Link>
                  )} */}
                  {/* Show the "Add Product" link only for admin users */}
                  {isAdminUser && (
                    <Nav.Link
                      as={NavLink}
                      className="custom-link"
                      to="/addproduct"
                      style={{ fontSize: "18px" }}
                    >
                      Add Product
                    </Nav.Link>
                  )}
                </Nav>
                <MyButton
                  name="Request Pickup"
                  loggedInUser={loggedInUser}
                  handleLogout={handleLogout}
                />
              </Navbar.Collapse>
            </Navbar>

            {/* Routes */}
            <Routes>
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/" element={<HomePage />} />
              <Route
                path="/pricing"
                element={<PricingPage loggedInUser={loggedInUser} />}
              />
              <Route
                path="/cart"
                element={<MyCart loggedInUser={loggedInUser} />}
              />
              <Route
                path="/profile/:username"
                element={<ProfilePage loggedInUser={loggedInUser} />}
              />
              <Route path="/addproduct" element={<AddProduct />} />
              <Route path="/editproduct/:id" element={<EditProduct />} />
              <Route
                path="/login"
                element={<LoginPage setLoggedInUser={setLoggedInUser} />}
              />
              <Route path="/register" element={<RegistrationPage />} />
              <Route
                path="/ordersummary"
                element={<OrderSummary loggedInUser={loggedInUser} />}
              />
              <Route path="/confirmation" element={<OrderConfirmation />} />
              <Route
                path="/orders/:username"
                element={<OrdersPage loggedInUser={loggedInUser} />}
              />
            </Routes>
          </div>
          <Footer />
        </CartProvider>
      </Router>
    </div>
  );
}


export default App;
