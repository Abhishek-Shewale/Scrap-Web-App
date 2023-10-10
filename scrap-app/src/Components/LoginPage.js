import React, { useState } from "react";
import {
  TextField,
  FormControl,
  FormGroup,
  Typography,
  styled,
  Button,
} from "@mui/material";
import axios from "axios";
import { useNavigate, Link as RouterLink } from "react-router-dom";

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;

const LoginPage = ({setLoggedInUser}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const navigate = useNavigate();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      setLoginError("Please fill in both username and password.");
      return;
    }

      try {
        const response = await axios.post("http://localhost:8080/users/login", {
          username,
          password,
        });

        console.log(response.data);

        localStorage.setItem("authToken", response.data.token);
        localStorage.setItem("username", response.data.username);

        // Set the loggedInUser state to the username
        setLoggedInUser(response.data.username);
        
        setUsername("");
        setPassword("");
        setLoginError("");

        navigate("/"); // Replace "/dashboard" with the path to your dashboard page
      } catch (error) {
        setLoginError("Invalid credentials. Please try again.");
      }
    };


  return (
    <Container>
      <Typography variant="h4" align="center">
        Login
      </Typography>
      <TextField
        id="filled-basic"
        label="Username"
        variant="outlined"
        color="success"
        required
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      />
      <FormControl>
        <TextField
          id="filled-basic"
          label="Password"
          variant="outlined"
          color="success"
          type="password"
          required
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </FormControl>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#56ad38",
          width: "200px",
          marginTop: "20px",
          "&:hover": {
            backgroundColor: "#56ad38",
          },
          "&:focus": {
            outline: "none",
          },
        }}
        onClick={handleLoginSubmit}
      >
        Login
      </Button>
      {loginError && <p>{loginError}</p>}

      <Typography variant="body2" align="center" mt={2}>
        Don't have an account? <RouterLink to="/register">Register</RouterLink>
      </Typography>
    </Container>
  );
};

export default LoginPage;
