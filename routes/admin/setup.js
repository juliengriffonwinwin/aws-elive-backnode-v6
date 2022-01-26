var express = require('express')
var router = express.Router()

// Require controller modules
var setupController = require('../../controllers/admin/setupController')

// Create Elive Admin Tables
router.post('/createTables', setupController.createTables)

// Create Elive Super Admin User
router.post('/createSuperAdmin', setupController.createSuperAdmin)

module.exports = router
