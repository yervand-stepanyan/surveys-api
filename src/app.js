const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')

const {MONGO_URI} = require('./config/variables.config')

const {MongoStorage} = require('./storage')

const Api = require('./api')

const app = express()

MongoStorage.init(MONGO_URI).catch(console.error)

app.use(require('morgan')('dev'))

app.use(
  cors({
    origin: '*',
    methods: ['GET', 'PUT', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Authorization', 'Content-Type', 'Origin'],
    credentials: true,
    optionsSuccessStatus: 200,
    maxAge: -1
  })
)

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use('/api', Api)

module.exports = app
