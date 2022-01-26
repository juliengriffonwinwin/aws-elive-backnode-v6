
// DynamoDB Command
const { PutItemCommand } = require('@aws-sdk/client-dynamodb')

class DBModel {

  _dynamoDBClient
  _id
  _response
  _fillable
  _connection

  constructor (dynamoDBClient) {
    this._dynamoDBClient = dynamoDBClient
  }

  setId (id) {
    this._id = id
  }

  setConnection (prefix) {
    this._connection = prefix
  }

  fill (fields) {
    for (const [key, value] of Object.entries(fields)) {
      this.fillable[key] = value
    }
  }

  async save () {
    const dynamoCommandParams = {
      TableName: this._connection + '.' + this.table,
      Item: {
        id: { S: this._id }
      }
    }
    for (const [key, value] of Object.entries(this.fillable)) {
      console.log(`${key}: ${value}`)
      dynamoCommandParams.Item[key] = { S: value }
    }
    console.log('dynamoCommandParams', dynamoCommandParams)
    try {
      this._response = await this._dynamoDBClient.send(new PutItemCommand(dynamoCommandParams))
      if (this._response.$metadata && this._response.$metadata.httpStatusCode && this._response.$metadata.httpStatusCode === 200) {
        return { success: true }
      }
      return { success: false, error: 'Unknow' }
    } catch (err) {
      console.log('models > save > ' + err.message)
      return { success: false, error: err.message }
    }
  }

}

module.exports = DBModel
