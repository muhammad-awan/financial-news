const mongoose = require('./init')

const commentSchema = mongoose.Schema({
  body: {
    type: String,
    required: true
  },
  create_date: {
    type: Date,
    default: Date.now
  }
})

const Comment = mongoose.model('Comment', commentSchema)

module.exports = Comment