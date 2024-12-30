import type { CalculationsLibraryType } from '../types/calculations.types'

export const filter_calculations_by_calculation_name =
  (calculation_name: string) => (calculations: CalculationsLibraryType) =>
    Object.keys(calculations)
      .filter(key => key.toLowerCase().includes(calculation_name.toLowerCase()))
      .reduce(
        (obj, key) => ({
          ...obj,
          [key]: calculations[key],
        }),
        {},
      )
