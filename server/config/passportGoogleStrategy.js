const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;
const db = require("../models/movieModel");

// using google strategy to authenticate clients
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/user/google/redirect",
      passReqToCallback: true,
    },
    async (request, accessToken, refreshToken, profile, done) => {
      const id = [profile.id];
      const queryStr =
        "SELECT id, google_id, email FROM users WHERE google_id = $1";
      const currUser = await db.query(queryStr, id);
      if (currUser.rows.length) {
        done(null, currUser.rows[0]);
      } else {
        const newValues = [profile.email, profile.id];
        const altQueryString =
          "INSERT INTO users (email, google_id) VALUES($1, $2) RETURNING email, id, google_id";
        const newUser = await db.query(altQueryString, newValues);
        done(null, newUser.rows[0]);
      }
    }
  )
);
// takes piece of info from record and pass on to put in cookie
passport.serializeUser((user, done) => {
  console.log("serialize user");
  // id will be associated with the user created in the database
  done(null, user.id);
});

// when cookie comes back, recieve id and deserialize so we can grab user from id
passport.deserializeUser(async (id, done) => {
  console.log("deserialize user");
  const values = [id];
  const queryStr = "SELECT email, id FROM users WHERE _id = $1";
  const currUser = await db.query(queryStr, values);
  // this will attach the user property to the req object so we can access inside a route handler
  done(null, currUser.rows[0]);
});
