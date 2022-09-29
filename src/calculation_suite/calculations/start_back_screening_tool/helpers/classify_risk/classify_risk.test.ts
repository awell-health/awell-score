import { expect } from 'chai'

import { MISSING_MESSAGE } from '../../../../PARAMETERS'
import { classify_risk } from './classify_risk'

describe('classify_risk', function () {
  describe('when total score and subscale score are not missing', function () {
    describe('when total score <= 3', function () {
      it('should return low risk', function () {
        const outcome = classify_risk({ total_score: 0, subscale_score: 0 })
        expect(outcome.interpretation?.en).to.eql('Low risk')
      })
    })

    describe('when total score >= 4', function () {
      describe('and when subscale score <= 3', function () {
        it('should return medium risk', function () {
          const outcome = classify_risk({ total_score: 4, subscale_score: 0 })
          expect(outcome.interpretation?.en).to.eql('Medium risk')
        })
      })

      describe('and when subscale score >= 4', function () {
        it('should return medium risk', function () {
          const outcome = classify_risk({ total_score: 4, subscale_score: 4 })
          expect(outcome.interpretation?.en).to.eql('High risk')
        })
      })
    })
  })
  describe('when total score or subscale score are missing', function () {
    it('should return "Missing"', function () {
      const outcome = classify_risk({})
      expect(outcome.score).to.eql(MISSING_MESSAGE)
    })
  })
})
