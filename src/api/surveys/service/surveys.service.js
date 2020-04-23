const { SurveysModel } = require('../../../model')

class SurveysService {
  /**
   * @param {Object} request
   * @param {Object} response
   * @param {Function} next
   * @description Get surveys.
   */
  static async getSurveys (request, response, next) {
    try {
      const surveys = await SurveysModel.getSurveys()

      return response.json(surveys)
    } catch (error) {
      next(error)
    }
  }

  /**
   * @param {Object} request
   * @param {Object} response
   * @param {Function} next
   * @description Add a survey.
   */
  static async addSurvey (request, response, next) {
    const { title, questions } = request.body

    try {
      const payload = { title, questions }
      const survey = await SurveysModel.addSurvey(payload)

      return response.json(survey)
    } catch (error) {
      next(error)
    }
  }

  /**
   * @param {Object} request
   * @param {Object} response
   * @param {Function} next
   * @description Delete the survey.
   */
  static async deleteSurvey (request, response, next) {
    const { id } = request.params

    try {
      const result = await SurveysModel.deleteSurvey(id)

      return response.json(result)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = SurveysService
