require("dotenv").config();
const express = require("express");
const passport = require("passport");
const session = require("express-session");
const cors = require("cors");
require("./config/passport");

const userRoutes = require("./routes/user");
const listRoutes = require("./routes/filmList");
const filmRoutes = require("./routes/film");
const friendRoutes = require("./routes/friend");

const app = express();

app.use(express.json());
app.use(cors());

//configure express session
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, maxAge: 1000 * 24 * 60 * 60 },
  })
);

app.use(passport.initialize());
app.use(passport.session());

//routes
app.use("/list", listRoutes);
app.use("/user", userRoutes);
app.use("/film", filmRoutes);
app.use("/friend", friendRoutes);

// global error handling
app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 400,
    message: { err: "An error occurred" },
  };
  const errorObj = Object.assign(defaultErr, err);
  console.log("errorObj.log: ", errorObj.log);
  console.error(err.stack);
  res.status(errorObj.status).json(errorObj.message);
});

module.exports = app;
