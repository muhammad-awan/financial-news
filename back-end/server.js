const express = require('express')
const server = express()
const authMiddleware = require('./middleware/auth')
const articlesRouter = require('./routes/articles')
const bodyParser = require('body-parser')
const authRouter = require('./routes/auth')

server.use(bodyParser.json())
server.use(authMiddleware.initialize)

server.use(authRouter)
server.use(articlesRouter)

const port = 5000
server.listen(port, () => {
  console.log(`listening on ${port}`)
})