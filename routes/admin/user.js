var express = require('express')
var router = express.Router()

// Require controller modules
var userController = require('../../controllers/admin/userController')

// Create a User
router.post('/signup', userController.signup)

module.exports = router
