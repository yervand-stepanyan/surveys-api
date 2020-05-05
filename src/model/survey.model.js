const mongoose = require('mongoose')

const { SurveySchema } = require('./schema')

class SurveysModel {
  /**
   * @returns {Promise<Array>}
   * @description Get surveys.
   */
  static getSurveys () {
    const conditions = {}

    return SurveysModel.model.find(conditions)
  }

  /**
   * @param {Object} docs
   * @returns {Promise<Object>}
   * @description Add a survey.
   */
  static addSurvey (docs) {
    return SurveysModel.model.create(docs)
  }

  /**
   * @param {string} id
   * @returns {Promise<Object>}
   * @description Delete the survey.
   */
  static deleteSurvey (id) {
    const conditions = { _id: id }

    return SurveysModel.model.deleteOne(conditions)
  }
}

SurveysModel.model = mongoose.model('Surveys', SurveySchema)

module.exports = SurveysModel
