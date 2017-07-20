const express = require('express')
const Article = require('../models/article')

const router = express.Router()

router.get('/articles', (req, res) => {
  Article.find()
    .then(articles => {
      res.json(articles)
    })
    .catch((err) => {
      res.status(500).json({ error : err })
    })
})

router.get('/articles/:id', (req, res) => {
  const id = req.params.id
  Article.findById(id)
    .then(article => {
      res.json(article)
    })
    .catch((err) => {
      res.status(404).json({ err: err })
    })
})

router.post('/articles', (req, res) => {
  const newArticle = req.body
  Article.create(newArticle)
    .then(article => {
      res.json(article)
    })
    .catch((err) => {
      res.status(500).json({ error: err })
    })
})

router.put('/articles/:id', (req, res) => {
  const id = req.params.id
  const article = req.body
  Article.findByIdAndUpdate(id, article)
    .then(article => {
      res.json(article)
    })
    .catch((err) => {
      res.status(500).json({ error: err })
    })
})

router.delete('/articles/:id', (req, res) => {
  const id = req.params.id
  Article.findByIdAndRemove(id)
    .then(article => {
      res.json(article)
    })
    .catch((err) => {
      res.status(500).json({ error: err })
    })
})

module.exports = router