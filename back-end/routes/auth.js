const express = require('express')
const passport = require('passport')
const authMiddleware = require('../middleware/auth')

const router = express.Router()

router.post('/auth', authMiddleware.authenticateSignIn, (req, res) => {
  res.json({ success: true})
})

router.post('/auth/register', authMiddleware.register, (req, res) => {
  res.json({ user: req.user })
})

module.exports = router