
const { PutItemCommand, GetItemCommand, QueryCommand, ScanCommand } = require('@aws-sdk/client-dynamodb')
const { v4: uuidv4 } = require('uuid')

class DBModel {

  _dynamoDBClient
  _id
  _fillable
  _connection
  _conditions = []

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

  where (field, value) {
    this._conditions[field] = value
    return this
  }

  _buildConditions () {
    let filterExpression = ''
    let expressionAttributeValues = {}
    let dynamoCommandParams = {}

    if (Object.keys(this._conditions).length > 0) {
      for (const key in this._conditions) {
        filterExpression += key + ' = ' + ':' + key + ' and '
        expressionAttributeValues[':' + key] = {
          S: this._conditions[key]
        }
      }
      filterExpression = filterExpression.substring(0, filterExpression.length - 5)

      dynamoCommandParams = {
        TableName: this._connection + '.' + this.table,
        FilterExpression: filterExpression,
        ExpressionAttributeValues: expressionAttributeValues
      }
    } else {
      dynamoCommandParams = {
        TableName: this._connection + '.' + this.table
      }
    }

    return dynamoCommandParams
  }

  async first () {
    const dynamoCommandParams = this._buildConditions()

    try {
      const response = await this._dynamoDBClient.send(new ScanCommand(dynamoCommandParams))
      if (response.Count > 0) {
        let item = response.Items[0]
        for (const [key, value] of Object.entries(item)) {
          item[key] = value.S
        }
        return { success: true, item }
      } else {
        return { success: true }
      }
    } catch (err) {
      return { success: false, error: err.message }
    }
  }

  async find (expression) {
    if (!expression) {
      const dynamoCommandParams = this._buildConditions()
      try {
        const response = await this._dynamoDBClient.send(new ScanCommand(dynamoCommandParams))
        response.Items.forEach((element) => {
          for (const [key, value] of Object.entries(element)) {
            element[key] = value.S
          }
        })
        return { success: true, items: response.Items }
      } catch (err) {
        return { success: false, error: err.message }
      }
    } else if (typeof expression === 'string') {
      const dynamoCommandParams = {
        TableName: this._connection + '.' + this.table,
        Key: {
          id: { S: expression }
        }
      }
      try {
        const response = await this._dynamoDBClient.send(new GetItemCommand(dynamoCommandParams))
        for (const [key, value] of Object.entries(response.Item)) {
          response.Item[key] = value.S
        }
        return { success: true, item: response.Item }
      } catch (err) {
        return { success: false, error: err.message }
      }
    } else {
      return { success: false, error: 'Unknow expression' }
    }
  }

  async save () {
    const updatedAt = this.fillable.updatedAt = new Date()
    if (!this.id) {
      this.fillable.id = uuidv4()
    }
    if (!this.createdAt) {
      this.fillable.createdAt = updatedAt
    }
    const dynamoCommandParams = {
      TableName: this._connection + '.' + this.table,
      Item: {
        id: { S: this.fillable.id }
      }
    }
    for (const [key, value] of Object.entries(this.fillable)) {
      dynamoCommandParams.Item[key] = { S: value }
    }

    try {
      const response = await this._dynamoDBClient.send(new PutItemCommand(dynamoCommandParams))
      if (response.$metadata && response.$metadata.httpStatusCode && response.$metadata.httpStatusCode === 200) {
        return { success: true, item: this.fillable }
      }
      return { success: false, error: 'Unknow' }
    } catch (err) {
      return { success: false, error: err.message }
    }
  }

}

module.exports = DBModel
