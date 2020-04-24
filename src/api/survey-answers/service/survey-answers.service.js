const { SurveyAnswersModel } = require('../../../model')

class SurveyAnswersService {
  /**
   * @param {Object} request
   * @param {Object} response
   * @param {Function} next
   * @description Get survey-answers.
   */
  static async getSurveyAnswers (request, response, next) {
    try {
      const surveyAnswers = await SurveyAnswersModel.getSurveyAnswers()

      return response.json(surveyAnswers)
    } catch (error) {
      next(error)
    }
  }

  /**
   * @param {Object} request
   * @param {Object} response
   * @param {Function} next
   * @description Add a survey-answer.
   */
  static async addSurveyAnswer (request, response, next) {
    const { surveyId, answers } = request.body

    try {
      const payload = { surveyId, answers }
      const surveyAnswer = await SurveyAnswersModel.addSurveyAnswer(payload)

      return response.json(surveyAnswer)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = SurveyAnswersService
