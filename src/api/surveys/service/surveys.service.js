const {SurveysModel} = require('../../../model')

class SurveysService {
  /**
   * @param {Object} request
   * @param {Object} response
   * @param {Function} next
   * @description Get surveys.
   */
  static async getSurveys(request, response, next) {
    try {
      const surveys = await SurveysModel.getSurveys()

      return response.json(surveys)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = SurveysService