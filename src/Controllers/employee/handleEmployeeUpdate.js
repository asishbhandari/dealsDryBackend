const { employeeInfoModal } = require("../../Modals/employeeModal");

exports.handleEmployeeUpdate = async (req, res) => {
  try {
    const email = req.body.email;
    const emp = {
      //   image: req.body.image,
      name: req.body.name,
      // email: req.body.email,
      mobileNo: req.body.mobileNo,
      designation: req.body.designation,
      gender: req.body.gender,
      courses: req?.body?.courses,
    };
    const updatedEmp = await employeeInfoModal.findOneAndUpdate(
      { email: email },
      emp
    );
    return res.status(202).send({ message: "Employee Updated Successfully" });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
