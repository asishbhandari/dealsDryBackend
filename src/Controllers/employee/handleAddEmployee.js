const { employeeInfoModal } = require("../../Modals/employeeModal");
const { uploadOnCloudinary } = require("../../utility/cloudinary");

exports.handleAddEmployee = async (req, res) => {
  try {
    const isUser = await employeeInfoModal.findOne({ email: req.body.email });
    if (isUser) {
      return res.status(209).send({ message: "Employee already exists" });
    }
    const url = await uploadOnCloudinary(req.file.path);

    const user = {
      ...req.body,
      courses: JSON.parse(req.body.courses),
      image: url,
    };
    const createdUser = await employeeInfoModal.create(user);
    return res
      .status(200)
      .send({ message: "user Created successfully", user: createdUser });
  } catch (error) {
    return res.status(500).send({ error: error });
  }
};
