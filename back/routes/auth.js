const express = require('express')
const passport = require('passport')
const authMiddleware = require('../middleware/auth')

const router = express.Router()

router.post('/auth', authMiddleware.authenticateSignIn, authMiddleware.signTokenHandler)

router.post('/auth/register', authMiddleware.register,authMiddleware.signTokenHandler)

module.exports = router