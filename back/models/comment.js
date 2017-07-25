const mongoose = require('../db/db')

const commentSchema = mongoose.Schema({
  text: String,
  commentBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
  },
  comment_create_date: {
    type: Date,
    default: Date.now
  }
})

const Comment = mongoose.model('Comment', commentSchema)

module.exports = Comment
