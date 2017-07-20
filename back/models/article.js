const mongoose = require('../db/db')

const articleSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  url: {
    type: String
  },
  create_date: {
    type: Date,
    default: Date.now
  },
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
    },
  comments: [{
    text: String,
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
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