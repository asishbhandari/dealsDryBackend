const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

async function connectMongoDb() {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL_DEV}/DealsDry`);
    console.log("Database Connected...");
  } catch (error) {
    console.log("Error connecting to the database:", error);
    throw error;
  }
}

module.exports = { connectMongoDb };
