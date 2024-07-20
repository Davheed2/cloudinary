const express = require("express");
const router = express.Router();
const $ = require("express-async-handler");
const uploadController = require("../controllers/upload.controller");
const upload = require("../config/multer");

router.post("/upload", upload.single("file"), $(uploadController.upload));
router.get("/upload", $(uploadController.getUpload));

module.exports = router;
