const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');

const keys = require('./config/variables.config')

const app = express();

mongoose.connect(keys.MONGO_URI, {
  useUnifiedTopology: true,
  useCreateIndex: true,
  useNewUrlParser: true
}).then(console.log('MongoDB connected'))
  .catch(error => console.log(error));

app.use(require('morgan')('dev'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

module.exports = app;