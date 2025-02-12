import { DN4_INPUTS, DN4_OUTPUT } from './definition'
import { ScoreType } from '../../types'
import { sum } from 'lodash'

export const dn4: ScoreType<typeof DN4_INPUTS, typeof DN4_OUTPUT> = {
  name: 'Douleur Neuropathique 4 (DN4)',
  readmeLocation: __dirname,
  inputSchema: DN4_INPUTS,
  outputSchema: DN4_OUTPUT,
  calculate: ({ data }) => {
    const patientInterviewInputs = [
      data.BURNING,
      data.PAINFUL_COLD,
      data.ELECTRIC_SHOCKS,
      data.TINGLING,
      data.PINS_AND_NEEDLES,
      data.NUMBNESS,
      data.ITCHING,
    ]

    const patientExaminationInputs = [
      data.HYPOESTHESIA_TO_TOUCH,
      data.HYPOESTHESIA_TO_PINPRICK,
      data.BRUSHING,
    ]

    const definedPatientInterviewInputs = patientInterviewInputs.filter(
      v => v !== undefined,
    )
    const definedPatientExaminationInputs = patientExaminationInputs.filter(
      v => v !== undefined,
    )

    const patientInterviewScore = sum(definedPatientInterviewInputs)
    const patientExaminationScore = sum(definedPatientExaminationInputs)
    const patientTotalScore = patientInterviewScore + patientExaminationScore

    return {
      PATIENT_TOTAL_SCORE:
        definedPatientInterviewInputs.length === 0 &&
        definedPatientExaminationInputs.length === 0
          ? null
          : patientTotalScore,
      PATIENT_INTERVIEW_SCORE:
        definedPatientInterviewInputs.length === 0
          ? null
          : patientInterviewScore,
      PATIENT_EXAMINIATION_SCORE:
        definedPatientExaminationInputs.length === 0
          ? null
          : patientExaminationScore,
    }
  },
}
