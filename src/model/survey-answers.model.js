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
      .populate('survey')
  }

  /**
   * @param {Object} docs
   * @returns {Promise<Object>}
   * @description Add a survey-answer.
   */
  static addSurveyAnswer (docs) {
    return SurveyAnswersModel.model.create(docs)
  }

  /**
   * @param {String} surveyId
   * @returns {Promise<Object>}
   * @description Delete survey-answers.
   */
  static deleteSurveyAnswers (surveyId) {
    const conditions = { survey: surveyId }

    return SurveyAnswersModel.model.deleteMany(conditions)
  }
}

SurveyAnswersModel.model = mongoose.model('Survey-Answers', SurveyAnswerSchema)

module.exports = SurveyAnswersModel
