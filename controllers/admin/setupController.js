
// Models
const User = require('../../models/user')

// FileSystem
const fs = require('fs')

// DynamoDB Command
const { DynamoDBClient, CreateTableCommand } = require('@aws-sdk/client-dynamodb')

// Create uniq id
const { v4: uuidv4 } = require('uuid')

// Create Elive Admin Tables
exports.createTables = async function (req, res) {
  console.log('admin > setup > createTables')

  const dynamoDBClient = new DynamoDBClient({ region: 'eu-west-3' })
  let fullTableName = jsonData = null

  // Create elive_admin tables
  const tableNames = {
    users: false,
    clients: false,
    projects: false
  }
  for (const tableName of Object.keys(tableNames)) {
    fullTableName = res.locals.database.client_slug + '.' + res.locals.database.project_slug + '.' + tableName
    console.log('admin > setup > createTables > creating : ' + fullTableName)
    jsonData = fs.readFileSync('config/databases/' + fullTableName + '.json')
    dynamoCommandParams = JSON.parse(jsonData)
    dynamoCommandParams.TableName = fullTableName

    try {
      const response = await dynamoDBClient.send(new CreateTableCommand(dynamoCommandParams))
      console.log('admin > setup > createTables > OK : ' + fullTableName)
      tableNames[tableName] = true
    } catch (err) {
      console.log('admin > setup > createTables > ERROR ' + err.message)
      tableNames[tableName] = err.message
    }
  }

  if (Object.values(tableNames).every((v) => v === true)) {
    res.send({ codeSuccess: 'success.admin.setup.okCreateTables', tableNames })
  } else {
    res.status(400).send({ codeError: 'error.admin.setup.koCreateTables', messageError: tableNames })
  }

}

// Create Elive Super Admin User
exports.createSuperAdmin = async function (req, res) {
  console.log('admin > setup > createSuperAdmin')
  if (req.body.user && req.body.user.email) {
    const dynamoDBClient = new DynamoDBClient({ region: 'eu-west-3' })
    const user = new User(dynamoDBClient)
    user.setConnection(res.locals.database.client_slug + '.' + res.locals.database.project_slug)
    user.setId(uuidv4())
    user.fill({
      email: req.body.user.email.trim().toLowerCase()
    })
    user.save().then((response) => {
      console.log(response)
      if (response.success) {
        console.log('admin > setup > createSuperAdmin > OK')
        res.send({ codeSuccess: 'success.admin.setup.okCreateSuperAdmin', user })
      } else {
        console.log('admin > setup > createSuperAdmin > ERROR ' + response.error)
        res.status(400).send({ codeError: 'error.admin.setup.koCreateSuperAdmin', messageError: response.error })
      }
    })
  } else {
    res.status(400).send({ codeError: 'error.admin.setup.badParameters' })
  }
}
