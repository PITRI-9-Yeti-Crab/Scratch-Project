const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController")();

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
module.exports = router;
