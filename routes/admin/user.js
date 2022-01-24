var express = require('express')
var router = express.Router()

// Require controller modules
var userController = require('../../controllers/admin/userController')

// Hello a user
router.post('/signup', userController.signup)

module.exports = router
