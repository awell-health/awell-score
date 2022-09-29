import { expect } from 'chai'

import { test_calculation } from './__testdata__/test_calculation'
import { cast_incoming_calculation_input_to_exact_types } from './cast_incoming_calculation_input_to_exact_types'

describe('cast_incoming_calculation_input_to_exact_types', function () {
  describe('if calculation input already has the correct input types', function () {
    it('should not alter the orginal input', function () {
      const outcome = cast_incoming_calculation_input_to_exact_types({
        calculation: test_calculation,
        calculation_input: {
          NUMBER_INPUT: 3,
          STRING_INPUT: 'hello',
          BOOLEAN_INPUT: true,
          NUMBERS_ARRAY_INPUT: [1, 2, 3],
          STRINGS_ARRAY_INPUT: ['1', '2', '3'],
        },
      })

      expect(outcome).to.deep.equal({
        NUMBER_INPUT: 3,
        STRING_INPUT: 'hello',
        BOOLEAN_INPUT: true,
        NUMBERS_ARRAY_INPUT: [1, 2, 3],
        STRINGS_ARRAY_INPUT: ['1', '2', '3'],
      })
    })
  })

  describe('if calculation input has incorrect input types but they can be casted to the correct type', function () {
    it('should cast the input to the correct types', function () {
      const outcome = cast_incoming_calculation_input_to_exact_types({
        calculation: test_calculation,
        calculation_input: {
          NUMBER_INPUT: '3',
          STRING_INPUT: 3,
          BOOLEAN_INPUT: 'true',
          NUMBERS_ARRAY_INPUT: [1, 2, 3, true, 'true', false, 'false'],
          STRINGS_ARRAY_INPUT: [true, false, 1, 2],
        },
      })

      expect(outcome).to.deep.equal({
        NUMBER_INPUT: 3,
        STRING_INPUT: '3',
        BOOLEAN_INPUT: true,
        NUMBERS_ARRAY_INPUT: [1, 2, 3, 1, 1, 0, 0],
        STRINGS_ARRAY_INPUT: ['true', 'false', '1', '2'],
      })
    })
  })

  describe('if calculation input has incorrect input types and they can not be casted to the correct type', function () {
    it('should not alter the orginal input', function () {
      const outcome = cast_incoming_calculation_input_to_exact_types({
        calculation: test_calculation,
        calculation_input: {
          NUMBER_INPUT: 'hello world',
          STRING_INPUT: [1, 2, 3],
          BOOLEAN_INPUT: 'not a boolean',
          NUMBERS_ARRAY_INPUT: [[], []],
          STRINGS_ARRAY_INPUT: [[], []],
        },
      })

      /** In this case a validation error will be thrown by the
       * calculation pipeline.
       */
      expect(outcome).to.deep.equal({
        NUMBER_INPUT: 'hello world',
        STRING_INPUT: [1, 2, 3],
        BOOLEAN_INPUT: 'not a boolean',
        NUMBERS_ARRAY_INPUT: [[], []],
        STRINGS_ARRAY_INPUT: [[], []],
      })
    })
  })

  describe('some edge cases', function () {
    it('should cast string to number when using comma notation ', function () {
      const outcome = cast_incoming_calculation_input_to_exact_types({
        calculation: test_calculation,
        calculation_input: {
          NUMBER_INPUT: '17,2',
        },
      })

      expect(outcome).to.deep.equal({
        NUMBER_INPUT: 17.2,
      })
    })

    it('should cast string to number when using dot notation ', function () {
      const outcome = cast_incoming_calculation_input_to_exact_types({
        calculation: test_calculation,
        calculation_input: {
          NUMBER_INPUT: '17.2',
        },
      })

      expect(outcome).to.deep.equal({
        NUMBER_INPUT: 17.2,
      })
    })

    it('should cast string to number when the string has whitespaces ', function () {
      const outcome = cast_incoming_calculation_input_to_exact_types({
        calculation: test_calculation,
        calculation_input: {
          NUMBER_INPUT: '  3  ',
        },
      })

      expect(outcome).to.deep.equal({
        NUMBER_INPUT: 3,
      })
    })

    it('should NOT cast string to number when the string contains a number in the American format ', function () {
      const outcome = cast_incoming_calculation_input_to_exact_types({
        calculation: test_calculation,
        calculation_input: {
          NUMBER_INPUT: '12,345,678.90123',
        },
      })

      expect(outcome).to.deep.equal({
        NUMBER_INPUT: '12,345,678.90123',
      })
    })

    it('should NOT cast string to number when the string contains a number in the Ido format ', function () {
      const outcome = cast_incoming_calculation_input_to_exact_types({
        calculation: test_calculation,
        calculation_input: {
          NUMBER_INPUT: '12.345.678,90123',
        },
      })

      expect(outcome).to.deep.equal({
        NUMBER_INPUT: '12.345.678,90123',
      })
    })

    it('should correctly handle mixed types in numbers_array ', function () {
      const outcome = cast_incoming_calculation_input_to_exact_types({
        calculation: test_calculation,
        calculation_input: {
          NUMBERS_ARRAY_INPUT: ['1', 2, '3'],
        },
      })

      expect(outcome).to.deep.equal({
        NUMBERS_ARRAY_INPUT: [1, 2, 3],
      })
    })
  })
})
