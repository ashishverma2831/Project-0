const multer = require("multer");
const router = require("express").Router();
const cloudinary = require('../utils/cloudinary.js');
const handleUpload = require("../utils/cloudinary.js");
const uploadOnCloudinary = require("../utils/cloudinary.js");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const myStorage = multer({ storage });

router.post("/profile", myStorage.single("file"),(req, res) => {
  // handleUpload(req.file.path);
  // uploadOnCloudinary(req.file.path);

  uploadOnCloudinary(req.file.path);

  res.status(200).json({ status: "success" });
  console.log(req.file);
  console.log(req.body);
  console.log(req.file.path);                 
  res.send("file uploaded");
});

// router.post('/photos/upload', myStorage.array('photos', 12), function (req, res) {
//   // req.files is array of `photos` files
//   // req.body will contain the text fields, if there were any
//   res.status(200).json({ status: "success" });
//   console.log(req.files);
//   // console.log(req.body);
// })

module.exports = router;