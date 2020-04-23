const router = require('express').Router()

const SurveyAnswersService = require('./service/survey-answers.service')

router.get('/',
  SurveyAnswersService.getSurveyAnswers
)
router.post('/',
  SurveyAnswersService.addSurveyAnswer
)

module.exports = router
