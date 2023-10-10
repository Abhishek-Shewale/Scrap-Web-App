// // routes/users.js
// const express = require("express");
// const router = express.Router();
// const User = require("../schema/user-schema");

// // Route for updating user profile
// router.patch("/profile/:id", async (req, res) => {
//   try {
//     const updatedProfile = req.body;
//     const userId = req.params.id;

//     // Find the user by their ID
//     const user = await User.findById(username);
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     // Update the user profile with the new data
//     Object.assign(user, updatedProfile);

//     // Save the updated user profile
//     const updatedUser = await user.save();

//     res.status(200).json(updatedUser);
//   } catch (error) {
//     console.error("Error occurred during profile update:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });

// module.exports = router;





const User = require("../schema/user-schema");



const getUser = async (req, res) => {
  try {
    console.log(req.params.username);
    const user = await User.findOne({ username: req.params.username });
    console.log(user)
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const editUser = async (req, res) => {
  let username = req.body;
  const editUser = new User(username);

  try {
    await Product.updateOne({ username: req.params.username }, editUser);
    res.status(201).json(editUser);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};



module.exports = {
  getUser,
  editUser,
};

