
// Parent Model
const DBModel = require('./dbModel')

class User extends DBModel {

  table = 'users'
  fillable = {
    email: ''
  }
}

module.exports = User
