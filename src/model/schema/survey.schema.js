const mongoose = require('mongoose')

/**
 * @description Define the Survey schema.
 */
const SurveySchema = new mongoose.Schema({
  title: {type: String, maxlength: 100, required: true},
  questions: [
    {
      id: {type: String, maxlength: 100, required: true},
      title: {type: String, maxlength: 1000, required: true},
      hasLastInput: {type: Boolean, required: true},
      answerType: {
        type: String, enum: ['INPUT', 'RADIOBUTTON', 'CHECKBOX', 'DROPDOWN', 'RANGE'],
        required: true
      },
      answers: [{
        id: {type: String, maxlength: 100},
        option: {type: String, maxlength: 1000},
      }],
      startValue: {type: String, maxlength: 100},
      endValue: {type: String, maxlength: 100},
      stepValue: {type: String, maxlength: 100},
      inputType: {type: String, maxlength: 100}
    }
  ]
}, {timestamps: true})

module.exports = SurveySchema