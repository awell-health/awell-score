import { ScoreType } from '../../types'
import {
  MINI_BEST_TEST_INPUTS,
  MINI_BEST_TEST_OUTPUT,
  MINI_BEST_TEST_SECTIONS,
  type SectionType,
} from './definition'
import { isNil, pick, pickBy, sum } from 'lodash'

export const mini_best_test: ScoreType<
  typeof MINI_BEST_TEST_INPUTS,
  typeof MINI_BEST_TEST_OUTPUT
> = {
  name: 'Mini-Best Test',
  readmeLocation: __dirname,
  inputSchema: MINI_BEST_TEST_INPUTS,
  outputSchema: MINI_BEST_TEST_OUTPUT,
  calculate: ({ data }) => {
    const calculateSectionScore = (section: SectionType) => {
      const inputs = pick(data, MINI_BEST_TEST_SECTIONS[section])
      const validSectionInputs = pickBy(inputs, value => !isNil(value))

      if (Object.keys(validSectionInputs).length === 0) {
        return null
      }

      const isBilateralInput = (inputId: string) =>
        inputId.includes('LEFT') || inputId.includes('RIGHT')

      const bilateralInputs = pickBy(validSectionInputs, (_, inputId) =>
        isBilateralInput(inputId),
      )
      const unilateralInputs = pickBy(
        validSectionInputs,
        (_, inputId) => !isBilateralInput(inputId),
      )

      const lowestBilateralInput =
        Object.values(bilateralInputs).length > 0
          ? Math.min(...Object.values(bilateralInputs))
          : 0

      return sum(Object.values(unilateralInputs)) + lowestBilateralInput
    }

    const anticipatoryPosturalAdjustments = calculateSectionScore(
      'ANTICIPATORY_POSTURAL_ADJUSTEMENTS',
    )
    const reactivePosturalControl = calculateSectionScore(
      'REACTIVE_POSTURAL_CONTROL',
    )
    const sensoryOrientation = calculateSectionScore('SENSORY_ORIENTATION')
    const dynamicGait = calculateSectionScore('DYNAMIC_GAIT')

    const sectionScores = [
      anticipatoryPosturalAdjustments,
      reactivePosturalControl,
      sensoryOrientation,
      dynamicGait,
    ]

    return {
      TOTAL: sectionScores.every(score => score === null)
        ? null
        : sum(sectionScores),
      ANTICIPATORY_POSTURAL_ADJUSTEMENTS: anticipatoryPosturalAdjustments,
      REACTIVE_POSTURAL_CONTROL: reactivePosturalControl,
      SENSORY_ORIENTATION: sensoryOrientation,
      DYNAMIC_GAIT: dynamicGait,
    }
  },
}
