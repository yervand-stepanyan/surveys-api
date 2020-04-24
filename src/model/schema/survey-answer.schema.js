const mongoose = require('mongoose')

/**
 * @description Define the SurveyAnswers schema.
 */
const SurveyAnswerSchema = new mongoose.Schema({
  surveyId: {type: mongoose.Schema.Types.ObjectId, ref: 'Surveys', required: true},
  answers: [{
    customAnswer: {type: String, maxlength: 1000},
    markedAnswers: [
      {type: String, maxlength: 100}
    ],
    questionId: {type: String, maxlength: 100, required: true}
  }]
}, {timestamps: true})

module.exports = SurveyAnswerSchema
