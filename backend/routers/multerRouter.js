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

const myStorage = multer({ storage: storage });

router.post("/profile", myStorage.single("avatar"), (req, res) => {
  res.status(200).json({ status: "success" });
  res.send("file uploaded");
});

module.exports = router;