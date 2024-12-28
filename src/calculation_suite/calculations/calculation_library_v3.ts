// import type { CalculationType } from '../../api/shared/classes/Calculation'
import { bmi_metric } from './bmi'

export const CALCULATIONS: Record<string, unknown> = {
  bmi: bmi_metric,
}
