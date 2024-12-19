const express = require("express");
const UserController = require("../controller/CUser");
const router = express.Router();

router.get("/", UserController.main);
router.get("/signup", UserController.signup);

module.exports = router;
