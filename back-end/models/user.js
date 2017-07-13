const passportLocalMongoose = require('passport-local-mongoose')
const mongoose = require('./init')

const userSchema = mongoose.Schema({})

userSchema.plugin(passportLocalMongoose, {
  usernameField: 'email',
  usernameLowerCase: true,
  session: false
})

const User = mongoose.model('User', userSchema)

module.exports = User