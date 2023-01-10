var passport = require('passport');
var LocalStrategy = require('passport-local');
var express = require('express');
const bcrypt = require("bcryptjs"); 

const db = require('../models/movieModel'); 


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
  }

//callback function for local strategy 

const verifyCallback = async (email, password, done) => {
    try {
          const user = await emailExists(email);
          if (!user) return done(null, false);
          const isMatch = await verifyUser(password, user.password);
          if (!isMatch) return done(null, false); 
          return done(null, {id: user.id, email: user.email});
        } catch (error) {
          return done(error, false);
     }

}

//create new local strategy 
passport.use(new LocalStrategy({
            usernameField: "email",
            passwordField: "password",
          }, verifyCallback))

// To be finished ....
passport.serializeUser(function(user, cb) {
    process.nextTick(function() {
        return cb(null, user.id);
    });
    });
    
passport.deserializeUser(function(id, cb) {
db.query('SELECT * FROM users WHERE id = $1', [ id ], function(err, user) {
    if (err) { return cb(err); }
    return cb(null, user.rows[0]);
});
});
      