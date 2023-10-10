import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const MyButton = ({ name, loggedInUser, handleLogout }) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (loggedInUser) {
      // User is logged in, do nothing for now (you can add more functionality)
      handleLogout(); // Call the handleLogout function when the button is clicked while logged in
    } else {
      // User is not logged in, navigate to the login page
      navigate("/login");
    }
  };

  return (
    <Box display="flex" alignItems="center">
      {loggedInUser && (
        <Typography
          variant="body2"
          align="center"
          mt={0.5}
          mr={2}
          sx={{
            backgroundColor: "#8FDE74",
            padding: "4px 8px",
            borderRadius: "4px",
            fontWeight: "bold",
          }}
        >
          Welcome, {loggedInUser}!
        </Typography>
      )}
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#56ad38",
          "&:hover": {
            backgroundColor: "#56ad38",
          },
          "&:focus": {
            outline: "none",
          },
          borderRadius: "40px",
        }}
        onClick={handleButtonClick}
      >
        {loggedInUser ? "Logout" : name}
      </Button>
    </Box>
  );
};

export default MyButton;
