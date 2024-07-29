const express = require("express");
const { upload } = require("../Middleware/multer");
const { verifyToken } = require("../Middleware/userAuth");
const {
  handleAddEmployee,
} = require("../Controllers/employee/handleAddEmployee");
const {
  handleGetAllDetails,
} = require("../Controllers/employee/handleGetAllDetails");
const {
  handleRemoveEmployee,
} = require("../Controllers/employee/handleRemoveEmployee");
const {
  handleEmployeeUpdate,
} = require("../Controllers/employee/handleEmployeeUpdate");
const {
  handleGetAllSearch,
} = require("../Controllers/employee/handleGetAllSearch");

const employeeRouter = express.Router();

// new route to update user info

employeeRouter.get("/allDetails", verifyToken, handleGetAllDetails);
// employeeRouter.get("/search", verifyToken, handleGetAllSearch);
employeeRouter.post(
  "/addEmployee",
  verifyToken,
  upload.single("image"),
  handleAddEmployee
);
employeeRouter.delete(
  "/removeEmployee/:empId",
  verifyToken,
  handleRemoveEmployee
);
employeeRouter.patch(
  "/updateEmployee",
  verifyToken,
  upload.single("image"),
  handleEmployeeUpdate
);

module.exports = employeeRouter;
