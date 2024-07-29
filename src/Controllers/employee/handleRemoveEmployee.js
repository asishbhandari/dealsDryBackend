const { employeeInfoModal } = require("../../Modals/employeeModal");

exports.handleRemoveEmployee = async (req, res) => {
  try {
    const empId = req.params.empId;
    if (!empId) {
      return res.status(209).send({ message: "Missing Employee ID in params" });
    }
    const result = await employeeInfoModal.findByIdAndDelete({
      _id: empId.slice(1),
    });
    if (!result) {
      return res.status(404).send({ message: "Employee does not exist" });
    }
    return res.status(200).send({ message: "Removed Employee successfully" });
    // if(result)
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
