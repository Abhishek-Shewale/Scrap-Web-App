// import React, { useState } from "react";
// import {
//   TextField,
//   FormControl,
//   FormGroup,
//   Typography,
//   styled,
//   Button,
// } from "@mui/material";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Container = styled(FormGroup)`
//   width: 50%;
//   margin: 5% auto 0 auto;
//   & > div {
//     margin-top: 20px;
//   }
// `;

// const RegistrationPage = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [registrationError, setRegistrationError] = useState("");

//   const navigate = useNavigate();

//   const handleRegistrationSubmit = async (e) => {
//     e.preventDefault();
//     if (!username || !password) {
//       setRegistrationError("Please fill in both username and password.");
//       return;
//     }

//     try {
//       await axios.post("http://localhost:8080/users/register", {
//         username,
//         password,
//       });

//       setUsername("");
//       setPassword("");
//       setRegistrationError("");

//       navigate("/login"); // Redirect to the login page after successful registration
//     } catch (error) {
//       setRegistrationError(
//         "Username already exists. Please choose a different username."
//       );
//     }
//   };

//   return (
//     <Container>
//       <Typography variant="h4" align="center">
//         Registration
//       </Typography>
//       <TextField
//         id="filled-basic"
//         label="Username"
//         variant="outlined"
//         color="success"
//         required
//         onChange={(e) => setUsername(e.target.value)}
//         value={username}
//       />
//       <FormControl>
//         <TextField
//           id="filled-basic"
//           label="Password"
//           variant="outlined"
//           color="success"
//           type="password"
//           required
//           onChange={(e) => setPassword(e.target.value)}
//           value={password}
//         />
//       </FormControl>
//       <Button
//         variant="contained"
//         sx={{
//           backgroundColor: "#56ad38",
//           width: "200px",
//           marginTop:"20px",
//           "&:hover": {
//             backgroundColor: "#56ad38",
//           },
//           "&:focus": {
//             outline: "none",
//           },
//         }}
//         onClick={handleRegistrationSubmit}
//       >
//         Register
//       </Button >
//       {registrationError && <p>{registrationError}</p>}
//     </Container>
//   );
// };

// export default RegistrationPage;


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
import { useNavigate } from "react-router-dom";

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
    display: flex;
    gap: 20px;
  }
`;

const RegistrationPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [registrationError, setRegistrationError] = useState("");

  const navigate = useNavigate();

  const handleRegistrationSubmit = async (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !phone || !username || !password) {
      setRegistrationError("Please fill in all the required fields.");
      return;
    }

    try {
      await axios.post("http://localhost:8080/users/register", {
        firstName,
        lastName,
        email,
        phone,
        username,
        password,
      });

      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setUsername("");
      setPassword("");
      setRegistrationError("");

      navigate("/login"); // Redirect to the login page after successful registration
    } catch (error) {
      setRegistrationError(
        "Username or Email already exists. Please choose a different username or email."
      );
    }
  };

  return (
    <Container>
      <Typography variant="h4" align="center">
        Registration
      </Typography>
      <div>
        <TextField
          id="filled-basic"
          label="First Name"
          variant="outlined"
          color="success"
          style={{ width: "50%" }}
          required
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
        />
        <TextField
          id="filled-basic"
          label="Last Name"
          variant="outlined"
          color="success"
          style={{ width: "50%" }}
          required
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
        />
      </div>
      <TextField
        id="filled-basic"
        label="Email"
        variant="outlined"
        color="success"
        required
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <TextField
        id="filled-basic"
        label="Phone"
        variant="outlined"
        color="success"
        required
        onChange={(e) => setPhone(e.target.value)}
        value={phone}
      />
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
        onClick={handleRegistrationSubmit}
      >
        Register
      </Button>
      {registrationError && <p>{registrationError}</p>}
    </Container>
  );
};

export default RegistrationPage;
