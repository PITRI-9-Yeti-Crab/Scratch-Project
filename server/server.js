require("dotenv").config();
const express = require("express");
const passport = require("passport");
const session = require("express-session")

const userRoutes = require("./routes/user");
// const listRoutes = require("./routes/filmList");
// const filmRoutes = require("./routes/film");

const app = express();
app.use(express.json());

//
require('./config/passport');

//configure express session
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, maxAge: 10 * 24* 60 * 60 }
  }))

app.use(passport.initialize());
app.use(passport.session());

//routes
// app.use("/list", listRoutes);
app.use("/user", userRoutes);
// app.use("/film", filmRoutes);

module.exports = app;
