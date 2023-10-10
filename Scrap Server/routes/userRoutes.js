// // routes/users.js
// const express = require("express");
// const router = express.Router();
// const User = require("../schema/user-schema");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

// // Import the config.js file
// const config = require("../config");

// // Route for user login
// // Route for user login
// router.post("/login", async (req, res) => {
//   const { username, password } = req.body;

//   try {
//     // Find the user by the provided username
//     const user = await User.findOne({ username });
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     // Compare the provided password with the hashed password stored in the database
//     const passwordMatch = await bcrypt.compare(password, user.password);
//     if (!passwordMatch) {
//       return res.status(401).json({ message: "Invalid password" });
//     }

//     // If the password is correct, generate a JWT token with the secret key
//     const token = jwt.sign({ userId: user._id }, config.secretKey, {
//       expiresIn: "1h", // Token expiration time (optional)  
//     });

//      res.json({ token, username: user.username });
//   } catch (error) {
//     console.error("Error occurred during login:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });



// // Route for user registration
// router.post("/register", async (req, res) => {
//   const { username, password } = req.body;

//   try {
//     // Check if the username is already taken
//     const existingUser = await User.findOne({ username });
//     if (existingUser) {
//       return res.status(400).json({ message: "Username already taken" });
//     }

//     // Hash the password before saving it to the database
//     const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds

//     // If the username is available, create a new user with the hashed password
//     const newUser = new User({ username, password: hashedPassword });
//     await newUser.save();

//     // Return a success message
//     res.json({ message: "Registration successful" });
//   } catch (error) {
//     console.error("Error occurred during registration:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });
// module.exports = router;





// routes/users.js
const express = require("express");
const router = express.Router();
const User = require("../schema/user-schema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Import the config.js file
const config = require("../config");

// Route for user login
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

    try {
      // Find the user by the provided username
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      // Compare the provided password with the hashed password stored in the database
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return res.status(401).json({ message: "Invalid password" });
      }

      // If the password is correct, generate a JWT token with the secret key
      const token = jwt.sign({ userId: user._id }, config.secretKey, {
        expiresIn: "1h", // Token expiration time (optional)
      });

       res.json({ token, username: user.username });
    } catch (error) {
      console.error("Error occurred during login:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

// Route for user registration
router.post("/register", async (req, res) => {
  const { username, password, firstName, lastName, email, phone } = req.body;

  try {
    // Check if the username is already taken
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "Username already taken" }); 
    }

    // Check if the email is already registered
    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ message: "Email already registered" });
    }

    // Hash the password before saving it to the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // If the username and email are available, create a new user with the hashed password
    const newUser = new User({
      username,
      password: hashedPassword,
      firstName,
      lastName,
      email,
      phone,
    });
    await newUser.save();

    // Return a success message
    res.json({ message: "Registration successful" });
  } catch (error) {
    console.error("Error occurred during registration:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});







// Route for getting user profile by username
router.get("/:username", async (req, res) => {
  const { username } = req.params;
  try {
    // Find the user by the provided username
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Remove sensitive data (like password) before sending the user data to the frontend
    const { password, ...userData } = user.toObject();
    res.json(userData);
  } catch (error) {
    console.error("Error occurred while fetching user profile:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Route for updating user profile
router.patch("/profile/:username", async (req, res) => {
  const { username } = req.params;
  const updatedProfile = req.body;

  try {
    // Find the user by the provided username
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update the user's profile data
    Object.assign(user, updatedProfile);
    await user.save();

    // Remove sensitive data (like password) before sending the updated user data to the frontend
    const { password, ...updatedUserData } = user.toObject();
    res.json(updatedUserData);
  } catch (error) {
    console.error("Error occurred while updating user profile:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});


module.exports = router;
