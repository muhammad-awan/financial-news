const mongoose = require('mongoose')
mongoose.Promise = Promise

mongoose.connect(process.env.DB_URL, {
  useMongoClient: true
})

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))

db.once('open',  () => {
  console.info('Connected to db.')
})

module.exports = mongoose