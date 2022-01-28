var express = require('express')
var router = express.Router()

// Require controller modules
var projectController = require('../../controllers/admin/projectController')

// Create DynamoDB tables
router.post('/create', projectController.create)

module.exports = router
