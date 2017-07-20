require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const authMiddleware = require('./middleware/auth')

const articlesRouter = require('./routes/articles')
const authRouter = require('./routes/auth')

const server = express()

server.use(bodyParser.json())
server.use(authMiddleware.initialize)

server.use(cors({
  origin: process.env.CORS.split(',')
}))

server.use(authRouter)
server.use(articlesRouter)

server.use((error, req, res, next) => {
  const status = error.status || 500
  res.status(status).json({
    error: { message: error.message }
  })
})

const port = 5000
server.listen(port, () => {
  console.log(`listening on ${port}`)
})