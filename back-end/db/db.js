const mongoose = require('mongoose')
mongoose.Promise = Promise

const DB_NAME = 'financial-news'
const DB_PWD = '62Ny4wlnsF9ryeP4'
const DB_ADMIN = 'jango-tyrannus'

const URL = `mongodb://${DB_ADMIN}:${DB_PWD}@${DB_NAME}-shard-00-00-gtqfx.mongodb.net:27017,${DB_NAME}-shard-00-01-gtqfx.mongodb.net:27017,${DB_NAME}-shard-00-02-gtqfx.mongodb.net:27017/${DB_NAME}?ssl=true&replicaSet=${DB_NAME}-shard-0&authSource=admin`

mongoose.connect(URL) 

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))

db.once('open',  () => {
  console.info('Connected to db.')
})

module.exports = mongoose