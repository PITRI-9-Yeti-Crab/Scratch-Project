require("dotenv").config();
const express = require("express");
const passport = require("passport");
// const userRoutes = require("./routes/user");
const listRoutes = require("./routes/filmList");
// const filmRoutes = require("./routes/film");

const app = express();
app.use(express.json());

//
// require("./controllers/passport");

// app.use(passport.initialize());
// app.use(passport.session());

//routes
app.use("/list", listRoutes);
// app.use("/user", userRoutes);
// app.use("/film", filmRoutes);

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
