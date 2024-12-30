import R from 'ramda'

import { ScoreLibrary } from './library'

describe('calculation library', function () {
  describe('every calculation in the library', function () {
    test('mock test', function () {
      expect(true).toBe(true)
    })
    // it('needs to have at least an English calculation name', function () {
    //   R.forEachObjIndexed((calculation, calculation_id) => {
    //     if (!('calculation_name' in calculation)) {
    //       return
    //     }
    //     const calculation_name = calculation.calculation_name.en
    //     expect(calculation_name).toBeDefined()
    //     expect(calculation_name).toBeInstanceOf(String)
    //     expect(calculation_name).not.toBe('')
    //   }, CALCULATIONS)
    // })
    // it('needs to have at least English documentation (README.md) file', function () {
    //   R.forEachObjIndexed((calculation, calculation_id) => {
    //     if (!('calculation_name' in calculation)) {
    //       return
    //     }
    //     const calculation_description = calculation.calculation_description.en
    //     expect(calculation_description).toBeDefined()
    //     expect(calculation_description).toBeInstanceOf(String)
    //     expect(calculation_description).not.toBe('')
    //   }, CALCULATIONS)
    // })
    // it('needs to have a blueprint with an input definition', function () {
    //   R.forEachObjIndexed((calculation, calculation_id) => {
    //     if (!('calculation_name' in calculation)) {
    //       return
    //     }
    //     const { input_definition } = calculation.calculation_blueprint
    //     expect(input_definition).toBeInstanceOf(Array)
    //     expect(input_definition).not.toBeEmpty()
    //   }, CALCULATIONS)
    // })
    // it('needs to have a blueprint with an output definition', function () {
    //   R.forEachObjIndexed((calculation, calculation_id) => {
    //     if (!('calculation_name' in calculation)) {
    //       return
    //     }
    //     const { output_definition } = calculation.calculation_blueprint
    //     expect(output_definition).to.be.a(
    //       'array',
    //       `Following calculation in the library has no correct output definition defined in its blueprint: ${calculation_id}`,
    //     ).that.is.not.empty
    //   }, CALCULATIONS)
    // })
    // it('needs to have a calculation function', function () {
    //   R.forEachObjIndexed((calculation, calculation_id) => {
    //     if (!('calculation_name' in calculation)) {
    //       return
    //     }
    //     const calculation_function = calculation.calculation_function
    //     expect(calculation_function).to.be.a(
    //       'function',
    //       `Following calculation in the library has no calculation function: ${calculation_id}`,
    //     )
    //   }, CALCULATIONS)
    // })
  })
})
