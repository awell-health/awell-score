import { calculate_pl_utility_value } from './calculate_pl_utility_value'

describe('calculate_pl_utility_value', function () {
  describe('Health state: 11111 (full health)', function () {
    it('should return utility of 1', function () {
      expect(calculate_pl_utility_value(1, 1, 1, 1, 1)).toEqual(1)
    })
  })

  describe('Health state: 21321 (MO2, SC1, UA3, PD2, AD1)', function () {
    it('should return 0.793', function () {
      // 1 - (0.04 + 0 + 0.08 + 0.04 + 0) - 0.047 = 0.793
      expect(calculate_pl_utility_value(2, 1, 3, 2, 1)).toEqual(0.793)
    })
  })

  describe('Health state: 33333 (all level 3)', function () {
    it('should return 0.513', function () {
      // 1 - (0.10 + 0.08 + 0.08 + 0.10 + 0.08) - 0.047 = 0.513
      expect(calculate_pl_utility_value(3, 3, 3, 3, 3)).toEqual(0.513)
    })
  })

  describe('Health state: 55555 (worst state)', function () {
    it('should return -0.637', function () {
      // 1 - (0.314 + 0.264 + 0.205 + 0.575 + 0.232) - 0.047 = -0.637
      expect(calculate_pl_utility_value(5, 5, 5, 5, 5)).toEqual(-0.637)
    })
  })

  describe('Health state: 11112 (only AD at level 2)', function () {
    it('should return 0.923', function () {
      // 1 - (0 + 0 + 0 + 0 + 0.03) - 0.047 = 0.923
      expect(calculate_pl_utility_value(1, 1, 1, 1, 2)).toEqual(0.923)
    })
  })

  describe('Health state: 54321 (MO5, SC4, UA3, PD2, AD1)', function () {
    it('should return 0.463', function () {
      // 1 - (0.314 + 0.18 + 0.08 + 0.04 + 0) - 0.047 = 0.339
      expect(calculate_pl_utility_value(5, 4, 3, 2, 1)).toEqual(0.339)
    })
  })

  describe('Health state: 15421 (MO1, SC5, UA4, PD2, AD1)', function () {
    it('should return the correct utility', function () {
      // 1 - (0 + 0.264 + 0.18 + 0.04 + 0) - 0.047 = 0.469
      expect(calculate_pl_utility_value(1, 5, 4, 2, 1)).toEqual(0.469)
    })
  })

  describe('Health state: 22222 (all level 2)', function () {
    it('should return 0.783', function () {
      // 1 - (0.04 + 0.03 + 0.03 + 0.04 + 0.03) - 0.047 = 0.783
      expect(calculate_pl_utility_value(2, 2, 2, 2, 2)).toEqual(0.783)
    })
  })

  describe('Invalid input', function () {
    it('should throw for level 6', function () {
      expect(() => calculate_pl_utility_value(6, 1, 1, 1, 1)).toThrow()
    })

    it('should throw for level 0', function () {
      expect(() => calculate_pl_utility_value(0, 1, 1, 1, 1)).toThrow()
    })
  })
})
