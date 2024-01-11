const { v4: uuidv4 } = require("uuid");
const multer = require("multer");
// Set up Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log("file::: ", file, req);
    cb(null, "./public/");
  },
  filename: (req, file, cb) => {
    const videoId = uuidv4();
    cb(null, `${videoId}-${file.originalname}`);
  },
});

module.exports = multer({ storage });
