import type { CalculationScriptIdentifierType } from '../../types/calculations.types'

export class CalculationScriptNotFoundError extends Error {
  calculation_id: CalculationScriptIdentifierType | undefined

  constructor(
    calculation_id: CalculationScriptIdentifierType,
    ...params: string[]
  ) {
    super(...params)
    this.name = 'CalculationScriptNotFoundError'
    this.message = `Calculation with id "${calculation_id}" could not be found.`
  }
}
