import { expect } from 'chai'

import { calculate_be_utility_value } from './calculate_be_utility_value'

describe('calculate_be_utility_value', function () {
  describe('Health state: 15342', function () {
    it('should return the correct utility value', function () {
      const result = calculate_be_utility_value(15342)
      const EXPECTED_UTILITY_VALUE = 0.30922782950429

      expect(result).to.eql(EXPECTED_UTILITY_VALUE)
    })
  })

  describe('Health state: 11111', function () {
    it('should return the correct utility value', function () {
      const result = calculate_be_utility_value(11111)
      const EXPECTED_UTILITY_VALUE = 1

      expect(result).to.eql(EXPECTED_UTILITY_VALUE)
    })
  })

  describe('Health state: 11112', function () {
    it('should return the correct utility value', function () {
      const result = calculate_be_utility_value(11112)
      const EXPECTED_UTILITY_VALUE = 0.90130003574061

      expect(result).to.eql(EXPECTED_UTILITY_VALUE)
    })
  })

  describe('Health state: 55555', function () {
    it('should return the correct utility value', function () {
      const result = calculate_be_utility_value(55555)
      const EXPECTED_UTILITY_VALUE = -0.531645728835225

      expect(result).to.eql(EXPECTED_UTILITY_VALUE)
    })
  })

  describe('Health state: 54321', function () {
    it('should return the correct utility value', function () {
      const result = calculate_be_utility_value(54321)
      const EXPECTED_UTILITY_VALUE = 0.491424906575057

      expect(result).to.eql(EXPECTED_UTILITY_VALUE)
    })
  })
})
