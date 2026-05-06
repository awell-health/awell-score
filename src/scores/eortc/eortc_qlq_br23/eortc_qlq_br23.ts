import { ScoreType } from '../../../types'
import { EORTC_QLQ_BR23_INPUTS, EORTC_QLQ_BR23_OUTPUT } from './definition'

const reverse = (value: number): number => 5 - value

const functionalScore = (average: number): number =>
  (1 - (average - 1) / 3) * 100

const symptomScore = (average: number): number =>
  ((average - 1) / 3) * 100

export const eortc_qlq_br23: ScoreType<
  typeof EORTC_QLQ_BR23_INPUTS,
  typeof EORTC_QLQ_BR23_OUTPUT
> = {
  name: 'EORTC QLQ-BR23',
  readmeLocation: __dirname,
  inputSchema: EORTC_QLQ_BR23_INPUTS,
  outputSchema: EORTC_QLQ_BR23_OUTPUT,
  calculate: ({ data }) => {
    // BRBI — Body image (Functional)
    const brbi_avg =
      (data.EORTC_QLQ_BR23_Q09 +
        data.EORTC_QLQ_BR23_Q10 +
        data.EORTC_QLQ_BR23_Q11 +
        data.EORTC_QLQ_BR23_Q12) /
      4
    const BRBI = functionalScore(brbi_avg)

    // BRSEF — Sexual functioning (Functional + reverse Q14, Q15)
    const brsef_avg =
      (reverse(data.EORTC_QLQ_BR23_Q14) +
        reverse(data.EORTC_QLQ_BR23_Q15)) /
      2
    const BRSEF = functionalScore(brsef_avg)

    // BRSEE — Sexual enjoyment (Functional + reverse Q16)
    // null if patient is not sexually active (Q15 = 1)
    const BRSEE =
      data.EORTC_QLQ_BR23_Q15 === 1
        ? null
        : functionalScore(reverse(data.EORTC_QLQ_BR23_Q16))

    // BRFU — Future perspective (Functional)
    const BRFU = functionalScore(data.EORTC_QLQ_BR23_Q13)

    // BRST — Systemic therapy side effects (Symptom)
    const brst_avg =
      (data.EORTC_QLQ_BR23_Q01 +
        data.EORTC_QLQ_BR23_Q02 +
        data.EORTC_QLQ_BR23_Q03 +
        data.EORTC_QLQ_BR23_Q04 +
        data.EORTC_QLQ_BR23_Q06 +
        data.EORTC_QLQ_BR23_Q07 +
        data.EORTC_QLQ_BR23_Q08) /
      7
    const BRST = symptomScore(brst_avg)

    // BRBS — Breast symptoms (Symptom)
    const brbs_avg =
      (data.EORTC_QLQ_BR23_Q20 +
        data.EORTC_QLQ_BR23_Q21 +
        data.EORTC_QLQ_BR23_Q22 +
        data.EORTC_QLQ_BR23_Q23) /
      4
    const BRBS = symptomScore(brbs_avg)

    // BRAS — Arm symptoms (Symptom)
    const bras_avg =
      (data.EORTC_QLQ_BR23_Q17 +
        data.EORTC_QLQ_BR23_Q18 +
        data.EORTC_QLQ_BR23_Q19) /
      3
    const BRAS = symptomScore(bras_avg)

    // BRHL — Upset by hair loss (Symptom)
    // null if patient had no hair loss (Q04 = 1)
    const BRHL =
      data.EORTC_QLQ_BR23_Q04 === 1
        ? null
        : symptomScore(data.EORTC_QLQ_BR23_Q05)

    return { BRBI, BRSEF, BRSEE, BRFU, BRST, BRBS, BRAS, BRHL }
  },
}
