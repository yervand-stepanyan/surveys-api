const app = require('express')()
const surveys = require('./surveys/surveys.api')

/**
 * @description Add required APIs.
 */
app.use('/surveys', surveys)

module.exports = app
