import R from 'ramda'

import type {
  ApiCalculationType,
  ApiCalculationsLibraryType,
} from '../../../types/api.types'

import type {
  CalculationScriptIdentifierType,
  CalculationType,
  CalculationsLibraryType,
} from '../../../types/calculations.types'

export const transform_single_calculation_for_api_response = ({
  calculation,
  calculation_id,
}: {
  calculation: CalculationType
  calculation_id: CalculationScriptIdentifierType
}): ApiCalculationType => ({
  calculation_id,
  calculation_name: calculation.calculation_name,
  calculation_description: calculation.calculation_description,
  calculation_blueprint: calculation.calculation_blueprint,
  is_private: calculation.is_private,
})

export const transform_calculations_for_api_response = (
  calculation_library: CalculationsLibraryType
): ApiCalculationsLibraryType =>
  R.compose(
    R.values,
    R.mapObjIndexed((calculation, calculation_id) =>
      transform_single_calculation_for_api_response({
        // @ts-expect-error - needs refactoring
        calculation,
        calculation_id,
      })
    )
  )(calculation_library)
