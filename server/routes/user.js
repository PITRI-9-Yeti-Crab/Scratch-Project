const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController")();
const passport = require("passport"); 

router.post("/login", passport.authenticate('local'), (req, res)=> {
    res.json(req.user); 
});

// signup route
router.post("/signup", userController.signup);

//log user out
router.get('/logout', (req, res, next)=> {
    req.logout(); 
    res.redirect(); 
})

// auth with google+
router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));

// callback route for google to redirect to
router.get('/google/redirect', (req, res) => {
    res.send('you reached the redirect URI');
});

module.exports = router;
