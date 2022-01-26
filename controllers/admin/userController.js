
// Modules
const Token = require('../../helpers/token')

// Models
const User = require('../../models/user')

// DynamoDB Command
const { DynamoDBClient } = require('@aws-sdk/client-dynamodb')

// Create uniq id
const { v4: uuidv4 } = require('uuid')

// Create a User
exports.signup = async function (req, res) {
  /*console.log('admin > user > signup')

  if (req.body.user && req.body.user.email && req.body.user.password1 && req.body.user.password2 && (req.body.user.password1 === req.body.user.password2)) {
    const reqUser = req.body.user

    const dynamoDBClient = new DynamoDBClient({ region: 'eu-west-3' })
    const clientSlug = 'elive'
    const projectSlug = 'admin'
    const tableName = 'users'
    const fullTableName = clientSlug + '.' + projectSlug + '.' + tableName

    console.log(reqUser)

    const id = uuidv4()
    const user = new User(dynamoDBClient)
    user.setTableName(fullTableName)
    user.setId(id)
    user.save().then((response) => {
      if (response.success) {
        res.send({ id })
      } else {
        res.status(400).send({ codeError: 'error.admin.user.signup.nosave', messageError: response.error })
      }
    })
  } else {
    res.status(400).send({ codeError: 'error.admin.user.signup.badParameters' })
  }*/
}
