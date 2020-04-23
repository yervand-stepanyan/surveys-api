const router = require('express').Router()

const SurveysService = require('./service/surveys.service')

router.get('/',
  SurveysService.getSurveys
)
router.post('/',
  SurveysService.addSurvey
)
router.delete('/:id',
  SurveysService.deleteSurvey
)

module.exports = router
