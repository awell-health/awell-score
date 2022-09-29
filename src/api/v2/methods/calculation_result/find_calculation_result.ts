import {
  CalculationResult,
  type ICalculationResult,
} from '../../../shared/models/calculation_result'

export const find_calculation_result = async (
  id: string
): Promise<ICalculationResult | null> => {
  try {
    const calculationResult = await CalculationResult.findOne({
      _id: id,
    })

    return calculationResult
  } catch (err) {
    throw new Error('Failed to find calculation result in Mongo.')
  }
}
