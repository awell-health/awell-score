/* eslint-disable no-unused-expressions */
import { expect } from 'chai'

import { scoring_value_to_numeric_value } from './scoring_value_to_numeric_value'

describe('scoring_value_to_numeric_value', function () {
  describe('when value is "Very much (4)"', function () {
    it('it should return 4', function () {
      expect(scoring_value_to_numeric_value('Very much (4)')).toEqual(4)
    })
  })

  describe('when value is "somethingrandomadfadsfasd"', function () {
    it('it should return undefined', function () {
      expect(scoring_value_to_numeric_value('somethingrandomadfadsfasd')).to.be
        .undefined
    })
  })

  describe('when value is ""', function () {
    it('it should return undefined', function () {
      expect(scoring_value_to_numeric_value('')).to.be.undefined
    })
  })

  describe('when value is undefined', function () {
    it('it should return undefined', function () {
      expect(scoring_value_to_numeric_value(undefined)).to.be.undefined
    })
  })
})
