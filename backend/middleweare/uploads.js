const multer = require("multer");
const path = require("node:path");

const storage = multer.diskStorage({
  destination: "uploads",
  filename: function (req, file, cb) {
    const uniq = Date.now();
    const extension = path.extname(file.originalname);
    cb(null, `${file.fieldname}-${uniq}${extension}`);
  },
});

const upload = multer({ storage });

module.exports = upload;
