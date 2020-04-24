const mongoose = require('mongoose')

const { SurveyAnswerSchema } = require('./schema')

class SurveyAnswersModel {
  /**
   * @returns {Promise<Array>}
   * @description Get survey-answers.
   */
  static getSurveyAnswers () {
    const conditions = {}

    return SurveyAnswersModel.model.find(conditions)
      .populate("surveyId")
  }

  /**
   * @param {Object} docs
   * @returns {Promise<Object>}
   * @description Add a survey-answer.
   */
  static addSurveyAnswer (docs) {
    return SurveyAnswersModel.model.create(docs)
  }
}

SurveyAnswersModel.model = mongoose.model('Survey-Answers', SurveyAnswerSchema)

module.exports = SurveyAnswersModel
