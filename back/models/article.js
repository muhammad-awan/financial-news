const mongoose = require('../db/db')

const articleSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  url: {
    type: String
  },
  article_create_date: {
    type: Date,
    default: Date.now
  },
  articleBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  likes: Number
})

const Article = mongoose.model('Article', articleSchema)

module.exports = Article