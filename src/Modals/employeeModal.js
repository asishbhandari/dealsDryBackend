const mongoose = require("mongoose");

// userAuth Schema
const employeeInfoSchema = new mongoose.Schema(
  {
    image: {
      type: String,
    },
    name: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true, // Converts email to lowercase
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"], // Regex for email validation
    },
    mobileNo: {
      type: Number,
    },
    designation: {
      type: String,
    },
    gender: {
      type: String,
    },
    courses: {
      type: Object,
      default: {
        MCA: { type: Boolean, default: false },
        BCA: { type: Boolean, default: false },
        BSC: { type: Boolean, default: false },
      },
    },
  },
  { timestamps: true }
);

// UserInfo model
const employeeInfoModal = new mongoose.model("userInfo", employeeInfoSchema);
module.exports = { employeeInfoModal };
