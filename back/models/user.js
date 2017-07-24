const passportLocalMongoose = require('passport-local-mongoose')
const mongoose = require('../db/db')

const userSchema = mongoose.Schema({
  profileName: {
    type: String,
    required: true
  }
})

userSchema.plugin(passportLocalMongoose, {
  usernameField: 'email',
  usernameLowerCase: true,
  session: false
})

const User = mongoose.model('User', userSchema)

module.exports = User