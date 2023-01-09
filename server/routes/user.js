const express = require("express");
const router = express.Router();
const userControler = require("../controllers/userController");

router.post("/login", login);

// signup route
router.post("/signup", signup);

module.exports = router;
