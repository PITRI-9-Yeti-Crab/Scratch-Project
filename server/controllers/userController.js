//import user model
const passport = require("passport");
const LocalStrategy = require("passport-local");
const express = require("express");
const bcrypt = require("bcryptjs");
const db = require("../models/movieModel");

//helper function
const createUser = async (email, password) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = await db.query(
    "INSERT INTO users(email, password) VALUES ($1, $2) RETURNING id, email, password",
    [email, hashedPassword]
  );
  return newUser.rows[0];
};

const userController = {
  //signup a user
  async signup(req, res, next) {
    try {
      const { email, password } = req.body;
      const user = await createUser(email, password);
      res.locals.user = user;
      return next();
    } catch (err) {
      return next(err);
    }
  },

  //login a user
  async login(req, res, next) {
    const { email, password } = req.body;
  },
};

module.exports = userController;
