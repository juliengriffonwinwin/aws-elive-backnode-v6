
const Client = require('../../models/client')
const { DynamoDBClient } = require('@aws-sdk/client-dynamodb')
const { v4: uuidv4 } = require('uuid')

// Create a new project
exports.create = async function (req, res) {
  console.log('admin > project > create')
  const dynamoDBClient = new DynamoDBClient({ region: 'eu-west-3' })

  if (req.body.user && req.body.client && req.body.project) {
    const dynamoDBClient = new DynamoDBClient({ region: 'eu-west-3' })
    res.send({ codeSuccess: 'admin.project.create.ok' })
  } else {
    res.status(400).send({ codeError: 'error.admin.setup.badParameters' })
  }
}
