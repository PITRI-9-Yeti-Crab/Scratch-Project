const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/login", (req, res) => {
  res.render("login");
});

router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureMessage: true,
  }),
  (req, res) => {
    //res.json(req.user);
    res.redirect("/"); //==> redirect to profile page or homepage
  }
);

// signup route
router.post("/signup", userController.signup);

//log user out
router.get("/logout", (req, res, next) => {
  req.logout();
  res.redirect();
});
module.exports = router;
