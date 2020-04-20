const router = require('express').Router()
const SurveysService = require('./service/surveys.service')

router.get('/',
  SurveysService.getSurveys
)

module.exports = router
