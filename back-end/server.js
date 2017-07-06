const express = require('express')
const server = express()

const articlesRouter = require('./routes/articles')
const bodyParser = require('body-parser')

server.use(bodyParser.json())
server.use(articlesRouter)

const port = 3000
server.listen(port, () => {
  console.log(`listening on ${port}`)
})