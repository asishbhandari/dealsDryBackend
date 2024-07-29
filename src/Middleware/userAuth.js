const jwt = require("jsonwebtoken");

const generateToken = (user) => {
  const payload = {
    id: user._id,
    userName: user.userName,
  };
  const token = jwt.sign(payload, process.env.SECRET);
  return token;
};

const verifyToken = (req, res, next) => {
  const token =
    req?.headers?.authorization && req?.headers?.authorization.split(" ")[1];
  if (!token)
    return res.status(401).json({ error: "Unauthorized: No token provided" });
  try {
    const decoded = jwt.verify(token, process.env.SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ error: "unauthorized : invalid token" });
  }
};

module.exports = { generateToken, verifyToken };
