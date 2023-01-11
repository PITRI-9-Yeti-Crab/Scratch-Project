const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const passport = require("passport");
const cors = require("cors");

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

// auth with google+
router.get(
  "/google",
  cors(),
  passport.authenticate("google", {
    scope: ["email", "profile"],
  })
);

// callback route for google to redirect
router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
  console.log("you reached the redirect URI");
  res.redirect("/");
});

module.exports = router;
