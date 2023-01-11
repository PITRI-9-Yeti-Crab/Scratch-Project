var passport = require("passport");
var LocalStrategy = require("passport-local");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
var express = require("express");
const bcrypt = require("bcryptjs");

const db = require("../models/movieModel");

//helper function: check if user email exists
const emailExists = async (email) => {
  const user = await db.query("SELECT * FROM users WHERE email=$1", [email]);

  if (user.rows.length == 0) return false;
  else return user.rows[0];
};

//helpfunction: verify user
const verifyUser = async (inputPassword, hashedPassword) => {
  const isMatch = await bcrypt.compare(inputPassword, hashedPassword);
  return isMatch;
};

//callback function for local strategy

const localCallback = async (email, password, done) => {
  try {
    const user = await emailExists(email);
    if (!user) return done(null, false);
    const isMatch = await verifyUser(password, user.password);
    if (!isMatch) return done(null, false);
    return done(null, { id: user.id, email: user.email });
  } catch (error) {
    return done(error, false);
  }
};

const googleCallback = async (accessToken, refreshToken, profile, done) => {
  try {
    const user = await emailExists(profile.email);
    //if user exists ---return user
    if (user) return done(null, user);
    else {
      //if user does not exist
      const userData = await db.query(
        "INSERT INTO users(googleId, email) VALUES ($1, $2) RETURNING *",
        [profile.id, profile.email]
      );
      done(null, userData.rows[0]);
    }
  } catch (error) {
    return done(error, false);
  }
};

//create new local strategy
passport.use(
  "local",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    localCallback
  )
);

//create google oauth2 stratgey
passport.use(
  "google",
  new GoogleStrategy(
    {
      // options for google strategy
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/user/google/redirect",
      passReqToCallback: true,
    },
    googleCallback
  )
);

// To be finished ....
passport.serializeUser(function (user, cb) {
  process.nextTick(function () {
    return cb(null, user.id);
  });
});

passport.deserializeUser(function (id, cb) {
  db.query("SELECT * FROM users WHERE id = $1", [id], function (err, user) {
    if (err) {
      return cb(err);
    }
    return cb(null, user.rows[0]);
  });
});
