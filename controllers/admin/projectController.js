
// Models
const Client = require('../../models/client')

// DynamoDB Command
const { DynamoDBClient } = require('@aws-sdk/client-dynamodb')

// Create uniq id
const { v4: uuidv4 } = require('uuid')

// Create a client / project, and Project DB
exports.createProject = async function (req, res) {
  /*console.log('admin > project > createProject')

  const dynamoDBClient = new DynamoDBClient({ region: 'eu-west-3' })
  const clientSlug = 'elive'
  const projectSlug = 'admin'
  const tableName = 'clients'
  const fullTableName = clientSlug + '.' + projectSlug + '.' + tableName

  const id = uuidv4()
  const client = new Client(dynamoDBClient)
  client.setTableName(fullTableName)
  client.setId(id)
  client.save().then((response) => {
    if (response.success) {
      console.log('------ OK ------')
    } else {
      console.log(response)
    }
  })

  res.send({ id })*/
}
