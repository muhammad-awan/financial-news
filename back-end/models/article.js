const mongoose = require('mongoose')
require('./init')

const articleSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  by: {
    type: String
  },
  body: {
    type: String
  }, 
  origin_url: {
    type: String
  },
  create_date: {
    type: Date,
    default: Date.now
  }
})

const Article = mongoose.model('Article', articleSchema)

module.exports = Article