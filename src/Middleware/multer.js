const multer = require("multer");

exports.upload = multer({ dest: "./files/" });
