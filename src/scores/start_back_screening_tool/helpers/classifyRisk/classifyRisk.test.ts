import { classifyRisk, RiskClassification } from './classifyRisk'
describe('Classify risk', function () {
  describe('when total score and subscale score are not missing', function () {
    describe('when total score <= 3', function () {
      it('should return low risk', function () {
        const outcome = classifyRisk({ totalScore: 0, subscaleScore: 0 })
        expect(outcome).toEqual(RiskClassification.LOW_RISK)
      })
    })

    describe('when total score >= 4', function () {
      describe('and when subscale score <= 3', function () {
        it('should return medium risk', function () {
          const outcome = classifyRisk({ totalScore: 4, subscaleScore: 0 })
          expect(outcome).toEqual(RiskClassification.MEDIUM_RISK)
        })
      })

      describe('and when subscale score >= 4', function () {
        it('should return medium risk', function () {
          const outcome = classifyRisk({ totalScore: 4, subscaleScore: 4 })
          expect(outcome).toEqual(RiskClassification.HIGH_RISK)
        })
      })
    })
  })
})
