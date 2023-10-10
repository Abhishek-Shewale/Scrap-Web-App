// import Connection from "./database/db.js";

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

const Connection = require("./database/db.js");

const Routes = require("./routes/route.js");


const app = express();
const port = 8080;

dotenv.config();
// const username = process.env.DB_USERNAME;
// const password = process.env.DB_PASSWORD;

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors()); // Enable CORS for the entire app


// Use the user routes for the "/users" endpoint
const userRoutes = require("./routes/userRoutes.js");
app.use("/users", userRoutes);

const orderRoutes = require("./routes/orderRoutes.js");
app.use("/orders", orderRoutes)



app.use("/", Routes);

Connection();

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
