const bcrypt = require("bcrypt");
const { UserAuthModal } = require("../../Modals/userAuthModal");

exports.handleUserSignUp = async (req, res) => {
  try {
    const data = req.body;

    // checking if user email already exist
    const isCurrentUser = await UserAuthModal.findOne({
      userName: data.userName,
    });

    if (isCurrentUser) {
      res.status(409).json({
        error: "User already registered",
        message: "A user with the provided email is already registered",
      });
    } else {
      const hash = await bcrypt.hash(data?.password, 10);
      await UserAuthModal.create({
        userName: data.userName,
        password: hash,
      });

      res.status(200).json({ message: " user Added to database" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
