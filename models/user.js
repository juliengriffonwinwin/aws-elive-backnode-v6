
// Parent Model
const DBModel = require('./dbModel')

class User extends DBModel {

  table = 'users'

  fillable = {
    id: null,
    company: '',
    job: '',
    lastname: '',
    firstname: '',
    email: '',
    tel1: '',
    password: '',
    profil: ''
  }

}

module.exports = User
