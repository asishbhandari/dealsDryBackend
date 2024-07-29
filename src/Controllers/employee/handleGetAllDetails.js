const { employeeInfoModal } = require("../../Modals/employeeModal");

exports.handleGetAllDetails = async (req, res) => {
  try {
    const search = req?.query?.search || "";
    const allEmployeeDetails = await employeeInfoModal.find({
      name: new RegExp(search, "i"),
    });
    const totalEmployees = allEmployeeDetails.length;
    res.status(200).send({
      Details: allEmployeeDetails,
      Total: totalEmployees,
    });
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
