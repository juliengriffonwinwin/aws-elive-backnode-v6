var express = require('express')
var router = express.Router()

// Require controller modules
var userController = require('../../controllers/admin/userController')

// Hello a user
router.post('/hello', userController.hello)
router.get('/hello', userController.hello)

module.exports = router
