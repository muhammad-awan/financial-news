const mongoose = require('mongoose')
mongoose.Promise = Promise
mongoose.connect('mongodb://localhost/gum')

const db = mongoose.connection
module.exports = mongoose