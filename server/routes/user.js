const express = require('express')
const router = express.Router(); 
const userControler = requre('../controllers/userController'); 

router.post('/login', login)

// signup route
router.post('/signup', signup)

module.exports = router