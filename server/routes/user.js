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
    failureRedirect: "user/login/failure",
    failureMessage: true,
    //successRedirect: "user/login/success"
  })
);
// //rediret if login succeeds 

// router.get("login/success",(req, res) => {
//   console.log("login success", req.user);
//   res.status(200).json({ user: req.user });
// }) 

// signup route
router.post("/signup", userController.signup, (req, res)=> {
  res.json(res.locals.user)
});

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
