const app = require('express')()
const surveys = require('./surveys/surveys.api')
const surveysAnswers = require('./surveys/surveys.api')

/**
 * @description Add required APIs.
 */
app.use('/surveys', surveys)
app.use('/survey-answers', surveysAnswers)

module.exports = app
