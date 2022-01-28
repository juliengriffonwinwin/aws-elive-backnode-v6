
const Bcrypt = require('bcrypt')
const User = require('../../models/user')
const { DynamoDBClient } = require('@aws-sdk/client-dynamodb')

// Create a User (Client / CDC)
exports.signup = async function (req, res) {
  console.log('admin > user > signup')
  if (req.body.user && req.body.user.email && req.body.user.password) {
    const dynamoDBClient = new DynamoDBClient({ region: 'eu-west-3' })
    let user = new User(dynamoDBClient)
    user.setConnection(res.locals.database.client_slug + '.' + res.locals.database.project_slug)
    user.where('email', req.body.user.email).first().then((response) => {
      console.log(response)
      if (response.success && !response.item) {
        console.log('admin > user > signup > OK')
        req.body.user.password = Bcrypt.hashSync(req.body.user.password.trim(), Bcrypt.genSaltSync())
        req.body.user.email.indexOf('@win-win.com') > 0 ? req.body.user.profil = 'cdc' : req.body.user.profil = 'client'
        user.fill(req.body.user)
        user.save().then((response) => {
          // console.log(response)
          if (response.success) {
            user = response.item
            console.log('admin > user > signup > OK')
            res.send({ codeSuccess: 'admin.user.signup.ok', user })
          } else {
            console.log('admin > user > signup > ERROR ' + response.error)
            res.status(400).send({ codeError: 'error.admin.user.signup.ko', messageError: response.error })
          }
        })
      } else {
        console.log('admin > user > signup > ERROR')
        res.status(400).send({ codeError: 'error.admin.user.signup.objectExist', messageError: response.error })
      }
    })
  } else {
    res.status(400).send({ codeError: 'error.admin.setup.badParameters' })
  }
}

// Log a User (SuperAdmin / CDC/ Client)
exports.login = async function (req, res) {
  console.log('admin > user > login')
  if (req.body.user && req.body.user.email && req.body.user.password) {
    const dynamoDBClient = new DynamoDBClient({ region: 'eu-west-3' })
    let user = new User(dynamoDBClient)
    user.setConnection(res.locals.database.client_slug + '.' + res.locals.database.project_slug)
    user.where('email', req.body.user.email).first().then((response) => {
      console.log(response)
      if (response.success && response.item && Bcrypt.compareSync(req.body.user.password, response.item.password)) {
        console.log('admin > user > login > OK')
        delete response.item.password
        res.send({ codeSuccess: 'admin.user.login.ok', user: response.item })
      } else {
        console.log('admin > user > login > ERROR ' + response.error)
        res.status(400).send({ codeError: 'error.admin.user.login.ko', messageError: response.error })
      }
    })
  } else {
    res.status(400).send({ codeError: 'error.admin.setup.badParameters' })
  }
}
