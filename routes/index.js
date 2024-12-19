const express = require("express");
const UserController = require("../controller/CUser");
const MainController = require("../controller/CMain");
const router = express.Router();

router.get("/", UserController.login);
router.get("/signup", UserController.signup);
router.get("/main", MainController.main);

module.exports = router;
