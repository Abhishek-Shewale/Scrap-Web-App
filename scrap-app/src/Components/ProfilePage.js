// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// const ProfilePage = () => {
//   const { username } = useParams();
//   const [userProfile, setUserProfile] = useState({});
//   const [editing, setEditing] = useState(false);

//   useEffect(() => {
//     // Fetch the user's profile data from the backend based on the username
//     axios
//       .get(`/users/${username}`)
//       .then((response) => {
//         setUserProfile(response.data);
//       })
//       .catch((error) => {
//         console.log("Error fetching user profile:", error);
//         // Handle error, show message to user, etc.
//       });
//   }, [username]);

//   const handleChange = (e) => {
//     // Update the user profile data when inputs are edited
//     const { name, value } = e.target;
//     setUserProfile((prevProfile) => ({
//       ...prevProfile,
//       [name]: value,
//     }));
//   };

//   const handleSave = () => {
//     // Send a PATCH request to the backend to update the user profile data
//     axios
//       .patch(`/users/profile/${username}`, userProfile)
//       .then((response) => {
//         // Handle success, show success message, etc.
//         console.log("Profile updated successfully");
//         setEditing(false); // Stop editing mode after saving
//       })
//       .catch((error) => {
//         console.log("Error updating user profile:", error);
//         // Handle error, show error message, etc.
//       });
//   };

//   return (
//     <div>
//       <h2>Edit Profile</h2>
//       <label>Username:</label>
//       <input
//         type="text"
//         name="username"
//         value={userProfile.username || ""}
//         onChange={handleChange}
//         disabled // Prevent username editing if desired
//       />
//       <label>First Name:</label>
//       <input
//         type="text"
//         name="firstName"
//         value={userProfile.firstName || ""}
//         onChange={handleChange}
//         disabled={!editing} // Disable editing if not in editing mode
//       />
//       <label>Last Name:</label>
//       <input
//         type="text"
//         name="lastName"
//         value={userProfile.lastName || ""}
//         onChange={handleChange}
//         disabled={!editing} // Disable editing if not in editing mode
//       />
//       <label>Email:</label>
//       <input
//         type="email"
//         name="email"
//         value={userProfile.email || ""}
//         onChange={handleChange}
//         disabled={!editing} // Disable editing if not in editing mode
//       />
//       <label>Phone:</label>
//       <input
//         type="text"
//         name="phone"
//         value={userProfile.phone || ""}
//         onChange={handleChange}
//         disabled={!editing} // Disable editing if not in editing mode
//       />

//       {editing ? (
//         <button onClick={handleSave}>Save</button>
//       ) : (
//         <button onClick={() => setEditing(true)}>Edit</button>
//       )}
//     </div>
//   );
// };

// export default ProfilePage;




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

import { editUser, getUser } from "../service/api";

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;

const defaultValue = {
  username: "",
  price: "",
  image: "",
};

const PricingPage = () => {
  const navigate = useNavigate();
  const { username } = useParams();

  useEffect(() => {
    loadUserDetails();
  }, []);

  const loadUserDetails = async () => {
    const response = await getUser(username);
    console.log(response)
    setUser(response.data);
  };

  const [user, setUser] = useState(defaultValue);

  const onValueChange = (e) => {
    console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const editUserDetails = async (e) => {
    e.preventDefault(); // Prevent form submission
    if (!user.name || !user.price || !user.image) {
      // One or more required fields are missing
      alert("Please fill in all the required fields.");
      return;
    }

    await editUser(username);
    navigate("/pricing");
  };

  return (
    <Container>
      <Typography variant="h4" align="center">
        Edit User
      </Typography>

      <TextField
        id="filled-basic"
        label="user Name"
        variant="outlined"
        color="success"
        // type=""
        required
        onChange={(e) => onValueChange(e)}
        name="name"
        value={user.name}
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
          value={user.price}
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
          value={user.image}
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
          onClick={(e) => editUserDetails(e)}
        >
          Edit user
        </Button>
      </FormControl>
    </Container>
  );
};

export default PricingPage;



