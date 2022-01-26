var express = require('express')
var router = express.Router()

// Require controller modules
var projectController = require('../../controllers/admin/projectController')

// Create DynamoDB tables
router.get('/createProject', projectController.createProject)

module.exports = router
