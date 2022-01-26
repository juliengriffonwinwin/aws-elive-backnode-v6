// Env
const dotenv = require('dotenv')
dotenv.config()

// Helpers
const Token = require('./helpers/token')

// Express
const express = require('express')
const cors = require('cors')
const app = express()

// FileSystem
const fs = require('fs')

// Cors
app.use(cors({ origin: ['http://localhost:3915'], optionsSuccessStatus: 200 }))
app.use(express.json())

// Public Path for DIST folder
const path = require('path')
app.use('/', express.static(path.join(__dirname, 'public')))

// Port
const PORT = process.env.PORT || 8081

// Middleware niveau application pour contrôle du Bearer
app.use(function (req, res, next) {
  const bearer = Token.getBearerToken(req)
  if (bearer) {
    const database = JSON.parse(fs.readFileSync('config/databases.json'))[bearer]
    if (database) {
      res.locals.database = database
      next()
    } else {
      res.status(400).send({ codeError: 'error.admin.setup.badDatabase' })
    }
  } else {
    res.status(400).send({ codeError: 'error.admin.setup.badBearer' })
  }
})

/**************************************************************************
************************ ADMIN ROUTES *************************************
**************************************************************************/

// Setup Controller
const adminSetupRouter = require('./routes/admin/setup')
app.use('/admin/setup', adminSetupRouter)

// Project Controller
const adminProjectRouter = require('./routes/admin/project')
app.use('/admin/project', adminProjectRouter)

// User Controller
const adminUserRouter = require('./routes/admin/user')
app.use('/admin/user', adminUserRouter)

/**************************************************************************
*************************  FRONT ROUTES  **********************************
**************************************************************************/

app.listen(PORT, () => {
  console.log('Server is running...')
})
