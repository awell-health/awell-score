import { expect } from 'chai'
import R from 'ramda'

import { CALCULATIONS } from './calculation_library'

describe('calculation library', function () {
  describe('every calculation in the library', function () {
    it('needs to have at least an English calculation name', function () {
      R.forEachObjIndexed((calculation, calculation_id) => {
        const calculation_name = calculation.calculation_name.en

        expect(calculation_name).to.be.a(
          'string',
          `Following calculation in the library has no calculation name: ${calculation_id}`
        ).that.is.not.empty
      }, CALCULATIONS)
    })

    it('needs to have at least English documentation (README.md) file', function () {
      R.forEachObjIndexed((calculation, calculation_id) => {
        const calculation_description = calculation.calculation_description.en

        expect(calculation_description).to.be.a(
          'string',
          `Following calculation in the library has no description / README file: ${calculation_id}`
        ).that.is.not.empty
      }, CALCULATIONS)
    })

    it('needs to have a blueprint with an input definition', function () {
      R.forEachObjIndexed((calculation, calculation_id) => {
        const { input_definition } = calculation.calculation_blueprint

        expect(input_definition).to.be.a(
          'array',
          `Following calculation in the library has no correct input definition defined in its blueprint: ${calculation_id}`
        ).that.is.not.empty
      }, CALCULATIONS)
    })

    it('needs to have a blueprint with an output definition', function () {
      R.forEachObjIndexed((calculation, calculation_id) => {
        const { output_definition } = calculation.calculation_blueprint

        expect(output_definition).to.be.a(
          'array',
          `Following calculation in the library has no correct output definition defined in its blueprint: ${calculation_id}`
        ).that.is.not.empty
      }, CALCULATIONS)
    })

    it('needs to have a calculation function', function () {
      R.forEachObjIndexed((calculation, calculation_id) => {
        const calculation_function = calculation.calculation_function

        expect(calculation_function).to.be.a(
          'function',
          `Following calculation in the library has no calculation function: ${calculation_id}`
        )
      }, CALCULATIONS)
    })
  })
})
