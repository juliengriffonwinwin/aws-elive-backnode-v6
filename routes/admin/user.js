var express = require('express')
var router = express.Router()

// Require controller modules
var userController = require('../../controllers/admin/userController')

// Create a User (CDC / Client)
router.post('/signup', userController.signup)

// Log a User (SuperAdmin / CDC/ Client)
router.post('/login', userController.login)

module.exports = router
