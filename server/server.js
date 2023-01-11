require("dotenv").config();
const express = require("express");
const passport = require("passport");
const session = require("express-session")
const cors = require("cors"); 
require('./config/passport');

const userRoutes = require("./routes/user");
// const listRoutes = require("./routes/filmList");
// const filmRoutes = require("./routes/film");

const app = express();

app.use(express.json());
app.use(cors());

//configure express session
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, maxAge: 1000 * 24* 60 * 60 }
  }))

app.use(passport.initialize());
app.use(passport.session());

//routes
// app.use("/list", listRoutes);
app.use("/user", userRoutes);
// app.use("/film", filmRoutes);

module.exports = app;
