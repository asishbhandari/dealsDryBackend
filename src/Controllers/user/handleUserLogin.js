const bcrypt = require("bcrypt");
const { UserAuthModal } = require("../../Modals/userAuthModal");
const { generateToken } = require("../../Middleware/userAuth");

exports.handleUserLogin = async (req, res) => {
  try {
    const data = req.body;
    // checking if user email already exist
    const isCurrentUser = await UserAuthModal.findOne({
      userName: data.userName,
    });
    if (isCurrentUser) {
      const match = await bcrypt.compare(data.password, isCurrentUser.password);
      if (match) {
        const token = generateToken(isCurrentUser);
        res.status(200).json({
          access_token: `Bearer ${token}`,
          userName: isCurrentUser.userName,
        });
      } else
        res.status(404).json({ message: "user Credential does not match" });
    } else {
      res.status(400).json({
        error: "User not registered",
        message: "You need to registered yourself",
      });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
