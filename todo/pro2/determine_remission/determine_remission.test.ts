import { expect } from 'chai'

import {
  determine_remission,
  // eslint-disable-next-line sort-imports
  UNWEIGHTED_AP_CUT_OFF,
  UNWEIGHTED_SF_CUT_OFF,
  WEIGHTED_SUM_OF_SF_AND_AP_CUT_OFF,
} from './determine_remission'

describe('determine_remission', function () {
  describe('cut off validation', function () {
    it('should return 3 as the cut off for the unweighted stool frequency score', function () {
      expect(UNWEIGHTED_SF_CUT_OFF).toEqual(3)
    })

    it('should return 1 as the cut off for the unweighted abdominal pain score', function () {
      expect(UNWEIGHTED_AP_CUT_OFF).toEqual(1)
    })

    it('should return 11 as the cut off for the sum of the weighted stool frequency & abdominal pain score', function () {
      expect(WEIGHTED_SUM_OF_SF_AND_AP_CUT_OFF).toEqual(11)
    })
  })

  describe('when an empty object is passed into the calculation', function () {
    it('should return non-remission (false)', function () {
      const remission = determine_remission({})

      // eslint-disable-next-line no-unused-expressions
      expect(remission).to.be.false
    })
  })

  describe('when an invalid object is passed into the calculation', function () {
    it('should return non-remission (false)', function () {
      const remission = determine_remission({
        unweighted_stool_frequency_score: 'Missing',
        unweighted_abdominal_pain_score: 'Missing',
        sum_of_weighted_stool_frequency_and_abdominal_pain: 'Missing',
      })

      // eslint-disable-next-line no-unused-expressions
      expect(remission).to.be.false
    })
  })

  describe('when valid input is passed into the calculation', function () {
    describe('when all criteria indicate remission', function () {
      it('should return remission (true)', function () {
        const remission = determine_remission({
          unweighted_stool_frequency_score: 2, // <= 3 --> remission
          unweighted_abdominal_pain_score: 1, // <= 1 --> remission
          sum_of_weighted_stool_frequency_and_abdominal_pain: 8, // <= 11 --> remission
        })

        // eslint-disable-next-line no-unused-expressions
        expect(remission).to.be.true
      })
    })

    describe('when one criteria indicates remission and another one not', function () {
      it('should return non remission (false)', function () {
        const remission = determine_remission({
          unweighted_stool_frequency_score: 0, // <= 3 --> remission
          unweighted_abdominal_pain_score: 0, // <= 1 --> remission
          sum_of_weighted_stool_frequency_and_abdominal_pain: 12, // is not <= 11 --> non-remission
        })

        // eslint-disable-next-line no-unused-expressions
        expect(remission).to.be.false
      })
    })
  })
})
