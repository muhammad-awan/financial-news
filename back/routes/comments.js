const express = require('express')
const Comment = require('../models/comment')

const router = express.Router()

router.get('/comments', (req, res) => {
  Comment.find()
    .then(comments => {
      res.json(comments)
    })
    .catch((err) => {
      res.status(500).json({ error : err })
    })
})

router.get('/comments/:id', (req, res) => {
  const id = req.params.id
  Comment.findById(id)
    .then(comment => {
      res.json(comment)
    })
    .catch((err) => {
      res.status(404).json({ err: err })
    })
})

router.post('/comments', (req, res) => {
  const newComment = req.body
  Comment.create(newComment)
    .then(comment => {
      res.json(comment)
    })
    .catch((err) => {
      res.status(500).json({ error: err })
    })
})

router.put('/comments/:id', (req, res) => {
  const id = req.params.id
  const comment = req.body
  Comment.findByIdAndUpdate(id, comment)
    .then(comment => {
      res.json(comment)
    })
    .catch((err) => {
      res.status(500).json({ error: err })
    })
})

router.delete('/comments/:id', (req, res) => {
  const id = req.params.id
  Comment.findByIdAndRemove(id)
    .then(comment => {
      res.json(comment)
    })
    .catch((err) => {
      res.status(500).json({ error: err })
    })
})

module.exports = router