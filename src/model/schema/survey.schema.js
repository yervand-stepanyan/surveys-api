const mongoose = require('mongoose')
const mongooseToJson = require('@meanie/mongoose-to-json')

/**
 * @description Define the SurveyQuestionAnswer schema.
 */
const SurveyQuestionAnswerSchema = new mongoose.Schema({
  id: { type: String, maxlength: 100 },
  title: { type: String, maxlength: 1000 }
}, { _id: false })

/**
 * @description Define the SurveyQuestion schema.
 */
const SurveyQuestionSchema = new mongoose.Schema({
  id: { type: String, maxlength: 100, required: true },
  title: { type: String, maxlength: 1000, required: true },
  hasLastInput: { type: Boolean, required: true },
  answerType: {
    type: String,
    enum: ['INPUT', 'RADIOBUTTON', 'CHECKBOX', 'DROPDOWN', 'RANGE'],
    required: true
  },
  answers: [SurveyQuestionAnswerSchema],
  startValue: { type: String, maxlength: 100 },
  endValue: { type: String, maxlength: 100 },
  stepValue: { type: String, maxlength: 100 },
  inputType: { type: String, maxlength: 100 }
}, { _id: false })

/**
 * @description Define the Survey schema.
 */
const SurveySchema = new mongoose.Schema({
  title: { type: String, maxlength: 100, required: true },
  questions: [SurveyQuestionSchema]
}, { timestamps: true })

/**
 * @description Set plugins: Transform _id to id.
 */
SurveySchema.plugin(mongooseToJson)

module.exports = SurveySchema
