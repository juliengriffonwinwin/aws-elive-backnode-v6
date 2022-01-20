const express = require('express')
const cors = require('cors')
const app = express()

const corsOptions = {
  origin: ['http://localhost:3000'],
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions))

app.get('/hello', (req, res) => {
  res.json({message: 'Hello World'})
})

// Public Path for DIST foler
const path = require('path')
app.use('/', express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 8081

/**************************************************************************
************************ ADMIN ROUTES *************************************
**************************************************************************/

// User Controllers
const adminUserRouter = require('./routes/admin/user')
app.use('/admin/user', adminUserRouter)

/**************************************************************************
*************************  FRONT ROUTES  **********************************
**************************************************************************/


app.listen(PORT, () => {
  console.log('Server is running...')
})
