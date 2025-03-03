import { ScoreType } from '../../types'
import {
  MOCA_INPUTS,
  MOCA_OUTPUT,
  MOCA_SCALES,
  type ScaleType,
} from './definition'
import { isNil, pick, sum } from 'lodash'

export const moca: ScoreType<typeof MOCA_INPUTS, typeof MOCA_OUTPUT> = {
  name: 'Montreal Cognitive Assessment (MOCA)',
  readmeLocation: __dirname,
  inputSchema: MOCA_INPUTS,
  outputSchema: MOCA_OUTPUT,
  calculate: ({ data }) => {
    const calculateScaleScore = (scale: ScaleType) => {
      const inputs = pick(data, MOCA_SCALES[scale])
      const validSubscaleInputs = Object.values(inputs).filter(
        input => !isNil(input),
      )

      if (validSubscaleInputs.length === 0) return null

      // If value is an array, return the length of the array
      // Otherwise, return the value
      const transformedInputs = validSubscaleInputs.map(input =>
        Array.isArray(input) ? input.length : input,
      )

      return sum(transformedInputs)
    }

    const visuospatialExecutive = calculateScaleScore('VISUOSPATIAL_EXECUTIVE')
    const naming = calculateScaleScore('NAMING')
    const attention = calculateScaleScore('ATTENTION')
    const language = calculateScaleScore('LANGUAGE')
    const abstraction = calculateScaleScore('ABSTRACTION')
    const delayedRecall = calculateScaleScore('DELAYED_RECALL')
    const orientation = calculateScaleScore('ORIENTATION')

    const allScales = [
      visuospatialExecutive,
      naming,
      attention,
      language,
      abstraction,
      delayedRecall,
      orientation,
    ]

    return {
      TOTAL: allScales.every(scale => scale === null) ? null : sum(allScales),
      VISUOSPATIAL_EXECUTIVE: visuospatialExecutive,
      NAMING: naming,
      ATTENTION: attention,
      LANGUAGE: language,
      ABSTRACTION: abstraction,
      DELAYED_RECALL: delayedRecall,
      ORIENTATION: orientation,
    }
  },
}
