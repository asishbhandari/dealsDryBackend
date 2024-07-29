const express = require("express");
const dotenv = require("dotenv");
const authRoutes = require("./src/Routes/authRoutes");
const employeeRoutes = require("./src/Routes/employeeRoutes");
const cors = require("cors");
const path = require("path");
const { connectMongoDb } = require("./src/MongoDb/connectdb");

const app = express();

// Middleware for parsing JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// for using environment variables
dotenv.config();

app.use("/v1/auth", authRoutes);
app.use("/v1/employee", employeeRoutes);

app.all("*", (req, res) => {
  res.status(404).json({ message: "Not Found" });
});

app.listen(process?.env?.PORT || 4000, () => {
  connectMongoDb();
  console.log(`server is listening on Port ${process?.env?.PORT || 4000}`);
});

module.exports = app;
