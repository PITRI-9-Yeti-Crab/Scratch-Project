require("dotenv").config();
const express = require("express");

const userRoutes = require("./routes/user");
const listRoutes = require("./routes/filmList");
const filmRoutes = require("./routes/film");

const app = express();
app.use(express.json());

//
require('./controllers/passport');

app.use(passport.initialize());
app.use(passport.session());

//routes
app.use("/list", listRoutes);
app.use("/user", userRoutes);
app.use("/film", filmRoutes);

// export app to be imported into our bin/www file and __tests__/supertest.js file
module.exports = app;
