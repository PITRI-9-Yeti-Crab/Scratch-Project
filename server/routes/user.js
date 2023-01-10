const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController")();

router.post("/login", userController.login);

// signup route
router.post("/signup", userController.signup, (req, res) => {
  res.status(200).json({ userId: res.locals.userId });
});

module.exports = router;
