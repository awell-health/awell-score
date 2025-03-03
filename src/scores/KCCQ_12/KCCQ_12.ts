import { ScoreType } from '../../types'
import {
  KCCQ_12_DOMAINS,
  KCCQ_12_INPUTS,
  KCCQ_12_OUTPUT,
  SF_RESCALING_WEIGHT_TABLE,
  type KCCQ12DomainType,
} from './definition'
import { isNil, mapValues, mean, pick, round } from 'lodash'

export const KCCQ_12: ScoreType<typeof KCCQ_12_INPUTS, typeof KCCQ_12_OUTPUT> =
  {
    name: 'Kansas City Cardiomyopathy Questionnaire - Short version (KCCQ-12)',
    readmeLocation: __dirname,
    inputSchema: KCCQ_12_INPUTS,
    outputSchema: KCCQ_12_OUTPUT,
    calculate: ({ data }) => {
      const dataToRescale = pick(data, Object.keys(SF_RESCALING_WEIGHT_TABLE))

      const rescaledData = {
        ...data,
        ...mapValues(dataToRescale, (value, key) => {
          const weight = SF_RESCALING_WEIGHT_TABLE[key]

          if (isNil(value)) {
            return null
          }

          return (100 * (value - 1)) / weight
        }),
      }

      const calculateDomainScore = (domain: KCCQ12DomainType) => {
        const {
          inputIds,
          minAnswersNeededToComputeScore,
          answerTreatedAsMissingValue,
          formula,
        } = KCCQ_12_DOMAINS[domain]
        const domainInputs = pick(rescaledData, inputIds)

        let validDomainInputs = Object.values(domainInputs).filter(
          value => !isNil(value),
        ) as number[]

        if (answerTreatedAsMissingValue) {
          validDomainInputs = validDomainInputs.filter(
            value => value !== answerTreatedAsMissingValue,
          )
        }

        if (validDomainInputs.length < minAnswersNeededToComputeScore) {
          return null
        }

        return round(formula(validDomainInputs), 2)
      }

      const KCCQ12_PL = calculateDomainScore('KCCQ12-PL')
      const KCCQ12_SF = calculateDomainScore('KCCQ12-SF')
      const KCCQ12_QL = calculateDomainScore('KCCQ12-QL')
      const KCCQ12_SL = calculateDomainScore('KCCQ12-SL')

      const validDomainScores = [
        KCCQ12_PL,
        KCCQ12_SF,
        KCCQ12_QL,
        KCCQ12_SL,
      ].filter(score => score !== null)

      return {
        KCCQ12:
          validDomainScores.length === 0
            ? null
            : round(mean(validDomainScores), 2),
        'KCCQ12-PL': KCCQ12_PL,
        'KCCQ12-SF': KCCQ12_SF,
        'KCCQ12-QL': KCCQ12_QL,
        'KCCQ12-SL': KCCQ12_SL,
      }
    },
  }
