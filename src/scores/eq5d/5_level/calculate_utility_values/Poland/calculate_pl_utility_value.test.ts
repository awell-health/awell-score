import { calculate_pl_utility_value } from './calculate_pl_utility_value'

describe('calculate_pl_utility_value', function () {
  describe('Health state: 11111 (full health)', function () {
    it('should return utility of 1', function () {
      expect(calculate_pl_utility_value(1, 1, 1, 1, 1)).toEqual(1)
    })
  })

  describe('Health state: 11112 (only AD at level 2)', function () {
    it('should return 0.982', function () {
      // 1 - 0.018 = 0.982 — matches paper Table 3: second highest value
      expect(calculate_pl_utility_value(1, 1, 1, 1, 2)).toEqual(0.982)
    })
  })

  describe('Health state: 22222 (all level 2)', function () {
    it('should return 0.873', function () {
      // 1 - (0.025 + 0.031 + 0.023 + 0.030 + 0.018) = 0.873
      // Matches paper Table 2: u(22222) = 0.873
      expect(calculate_pl_utility_value(2, 2, 2, 2, 2)).toEqual(0.873)
    })
  })

  describe('Health state: 33333 (all level 3)', function () {
    it('should return 0.8', function () {
      // 1 - (0.034 + 0.047 + 0.040 + 0.050 + 0.029) = 0.800
      // Matches paper Table 2: u(33333) = 0.800
      expect(calculate_pl_utility_value(3, 3, 3, 3, 3)).toEqual(0.8)
    })
  })

  describe('Health state: 55555 (worst state)', function () {
    it('should return -0.59', function () {
      // 1 - (0.314 + 0.264 + 0.205 + 0.575 + 0.232) = -0.590
      // Matches paper Table 2: u(55555) = −0.590
      expect(calculate_pl_utility_value(5, 5, 5, 5, 5)).toEqual(-0.59)
    })
  })

  describe('Health state: 54321 (MO5, SC4, UA3, PD2, AD1)', function () {
    it('should return 0.505', function () {
      // 1 - (0.314 + 0.111 + 0.040 + 0.030 + 0) = 0.505
      expect(calculate_pl_utility_value(5, 4, 3, 2, 1)).toEqual(0.505)
    })
  })

  describe('Health state: 15421 (MO1, SC5, UA4, PD2, AD1)', function () {
    it('should return 0.609', function () {
      // 1 - (0 + 0.264 + 0.097 + 0.030 + 0) = 0.609
      expect(calculate_pl_utility_value(1, 5, 4, 2, 1)).toEqual(0.609)
    })
  })

  describe('Health state: 21342 (MO2, SC1, UA3, PD4, AD2)', function () {
    it('should return 0.656', function () {
      // 1 - (0.025 + 0 + 0.040 + 0.261 + 0.018) = 0.656
      expect(calculate_pl_utility_value(2, 1, 3, 4, 2)).toEqual(0.656)
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
