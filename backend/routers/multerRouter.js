const multer = require("multer");
const router = require("express").Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

router.post("/profile", upload.single("file"), (req, res) => {
  res.status(200).json({ status: "success" });
  console.log(req.file);
  console.log(req.body);
  // res.send("file uploaded");
});

module.exports = router;