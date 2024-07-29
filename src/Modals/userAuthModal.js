const mongoose = require("mongoose");

// userAuth Schema
const userAuthSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now, // Default value is the current date/time
  },
});

// UserAuth model
const UserAuthModal = new mongoose.model("userAuth", userAuthSchema);
module.exports = { UserAuthModal };
