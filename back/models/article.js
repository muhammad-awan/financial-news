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
  comments: [{
    text: String,
    commentBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    comment_create_date: {
      type: Date,
      default: Date.now
    },
  }],
  likes: [{
    type: Number,
    likedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  }]
})

const Article = mongoose.model('Article', articleSchema)

module.exports = Article