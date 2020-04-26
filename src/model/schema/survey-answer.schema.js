const mongoose = require('mongoose')
const mongooseToJson = require('@meanie/mongoose-to-json')

/**
 * @description Define the SurveyAnswerEntry schema.
 */
const SurveyAnswerEntrySchema = new mongoose.Schema({
  customAnswer: { type: String, maxlength: 1000 },
  markedAnswers: [
    { type: String, maxlength: 100 }
  ],
  questionId: { type: String, maxlength: 100, required: true }
}, { _id: false })

/**
 * @description Define the SurveyAnswer schema.
 */
const SurveyAnswerSchema = new mongoose.Schema({
  survey: { type: mongoose.Schema.Types.ObjectId, ref: 'Surveys', index: true, required: true },
  answers: [SurveyAnswerEntrySchema]
}, { timestamps: true })

/**
 * @description Set plugins: Transform _id to id.
 */
SurveyAnswerSchema.plugin(mongooseToJson)

module.exports = SurveyAnswerSchema
