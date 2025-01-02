import { test_calculation } from './test_caculation'
import { Score } from '../../classes/Score'

const calculation = new Score(test_calculation)

describe('Test Calculation', () => {
  it('should calculate the result', () => {
    const result = calculation.calculate({
      payload: {
        simpleNumberInput: '100',
        height: '100',
        weight: '100',
        hello: 'world',
      },
    })
    expect(result.result).toBe(10)
  })
})
