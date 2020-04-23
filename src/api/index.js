const app = require('express')()

const surveys = require('./surveys/surveys.api')
const surveyAnswers = require('./survey-answers/survey-answers.api')

/**
 * @description Add required APIs.
 */
app.use('/surveys', surveys)
app.use('/survey-answers', surveyAnswers)

module.exports = app
