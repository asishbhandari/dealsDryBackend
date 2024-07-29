const { employeeInfoModal } = require("../../Modals/employeeModal");

exports.handleGetAllSearch = async (req, res) => {
  try {
    const search = req?.query?.search || "";
    const page = req?.query?.page - 1;
    const pageSize = req?.query?.pageSize;
    console.log(search, page, pageSize);
    const allEmployeeDetails = await employeeInfoModal.find({
      name: new RegExp(search, "i"),
    });
    const totalEmployees = allEmployeeDetails.length;
    const employee = allEmployeeDetails.skip(page * pageSize).limit(pageSize);
    res.status(200).send({
      Details: employee,
      Total: totalEmployees,
      totalPages: totalEmployees / pageSize,
    });
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
