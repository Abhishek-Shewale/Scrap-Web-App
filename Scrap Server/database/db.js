// import mongoose from "mongoose";

const mongoose = require("mongoose");

const Connection = async () => {
  const URL = `mongodb+srv://user:123@scrap-app.cvglzsn.mongodb.net/?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting to the database", error);
  }
};

// export default Connection;
module.exports = Connection;
