import { ZodError } from 'zod'
import { Score } from '../../classes'
import { ScoreLibrary } from '../library'
import {
  best_response,
  median_response,
  random_response,
  worst_response,
} from './__testdata__/mds_updrs_test_responses'
import { MDS_UPDRS_SCALES } from './definition/mds_updrs_scales'
import { mds_updrs } from './mds_updrs'

const BEST_SCORE = 0
const MEDIAN_TOTAL_SCORE = 130
const WORST_TOTAL_SCORE = 260

const mds_updrs_calculation = new Score(mds_updrs)

describe('mds_updrs', function () {
  it('mds_updrs calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('mds_updrs')
  })

  describe('specific_steps_mds_updrs_calc', function () {
    describe('the score includes the correct input fields', function () {
      it('should have all the expected input ids configured', function () {
        const EXPECTED_INPUT_IDS = [
          'PART_1_Q1_COGNITIVE_IMPAIRMENT',
          'PART_1_Q2_HALLUCINATIONS_AND_PSYCHOSIS',
          'PART_1_Q3_DEPRESSED_MOOD',
          'PART_1_Q4_ANXIOUS_MOOD',
          'PART_1_Q5_APATHY',
          'PART_1_Q6_FEATURES_OF_DOPAMINE_DYSREGULATION_SYNDROME',
          'PART_1_Q7_SLEEP_PROBLEMS',
          'PART_1_Q8_DAYTIME_SLEEPINESS',
          'PART_1_Q9_PAIN_AND_OTHER_SENSATIONS',
          'PART_1_Q10_URINARY_PROBLEMS',
          'PART_1_Q11_CONSTIPATION_PROBLEMS',
          'PART_1_Q12_LIGHT_HEADEDNESS_ON_STANDING',
          'PART_1_Q13_FATIGUE',
          'PART_2_Q1_SPEECH',
          'PART_2_Q2_SALIVA_AND_DROOLING',
          'PART_2_Q3_CHEWING_AND_SWALLOWING',
          'PART_2_Q4_EATING_TASKS',
          'PART_2_Q5_DRESSING',
          'PART_2_Q6_HYGIENE',
          'PART_2_Q7_HANDWRITING',
          'PART_2_Q8_DOING_HOBBIES_AND_OTHER_ACTIVITIES',
          'PART_2_Q9_TURNING_IN_BED',
          'PART_2_Q10_TREMOR',
          'PART_2_Q11_GETTING_OUT_OF_BED_CAR_OR_DEEP_CHAIR',
          'PART_2_Q12_WALKING_AND_BALANCE',
          'PART_2_Q13_FREEZING',
          'PART_3_Q1_SPEECH',
          'PART_3_Q2_FACIAL_EXPRESSION',
          'PART_3_Q3_RIGIDITY_NECK',
          'PART_3_Q3_RIGIDITY_RUE',
          'PART_3_Q3_RIGIDITY_LUE',
          'PART_3_Q3_RIGIDITY_RLE',
          'PART_3_Q3_RIGIDITY_LLE',
          'PART_3_Q4_FINGER_TAPPING_RIGHT',
          'PART_3_Q4_FINGER_TAPPING_LEFT',
          'PART_3_Q5_HAND_MOVEMENTS_RIGHT',
          'PART_3_Q5_HAND_MOVEMENTS_LEFT',
          'PART_3_Q6_PRO_SUPINATION_MOVEMENTS_OF_HANDS_RIGHT',
          'PART_3_Q6_PRO_SUPINATION_MOVEMENTS_OF_HANDS_LEFT',
          'PART_3_Q7_TOE_TAPPING_RIGHT',
          'PART_3_Q7_TOE_TAPPING_LEFT',
          'PART_3_Q8_LEG_AGILITY_RIGHT',
          'PART_3_Q8_LEG_AGILITY_LEFT',
          'PART_3_Q9_ARISING_FROM_CHAIR',
          'PART_3_Q10_GAIT',
          'PART_3_Q11_FREEZING_OF_GAIT',
          'PART_3_Q12_POSTURAL_STABILITY',
          'PART_3_Q13_POSTURE',
          'PART_3_Q14_GLOBAL_SPONTANEITY_OF_MOVEMENT',
          'PART_3_Q15_POSTURAL_TREMOR_OF_THE_HANDS_RIGHT',
          'PART_3_Q15_POSTURAL_TREMOR_OF_THE_HANDS_LEFT',
          'PART_3_Q16_KINETIC_TREMOR_OF_THE_HANDS_RIGHT',
          'PART_3_Q16_KINETIC_TREMOR_OF_THE_HANDS_LEFT',
          'PART_3_Q17_REST_TREMOR_AMPLITUDE_RUE',
          'PART_3_Q17_REST_TREMOR_AMPLITUDE_LUE',
          'PART_3_Q17_REST_TREMOR_AMPLITUDE_RLE',
          'PART_3_Q17_REST_TREMOR_AMPLITUDE_LLE',
          'PART_3_Q17_REST_TREMOR_AMPLITUDE_LIP_JAW',
          'PART_3_Q18_CONSTANCY_OF_REST_TREMOR',
          'PART_4_Q1_TIME_SPENT_WITH_DYSKINESIAS',
          'PART_4_Q2_FUNCTIONAL_IMPACT_OF_DYSKINESIAS',
          'PART_4_Q3_TIME_SPENT_IN_THE_OFF_STATE',
          'PART_4_Q4_FUNCTIONAL_IMPACT_OF_FLUCTUATIONS',
          'PART_4_Q5_COMPLEXITY_OF_MOTOR_FLUCTUATIONS',
          'PART_4_Q6_PAINFUL_OFF_STATE_DYSTONIA',
        ].sort()

        const configured_input_ids = Object.keys(
          mds_updrs_calculation.inputSchema,
        ).sort()

        expect(EXPECTED_INPUT_IDS).toEqual(configured_input_ids)
      })

      it('should have the expected question ids configured for "Part I: non-motor experiences of daily living (nM-EDL)"', function () {
        const EXPECTED_QUESTION_IDS = [
          'PART_1_Q1_COGNITIVE_IMPAIRMENT',
          'PART_1_Q2_HALLUCINATIONS_AND_PSYCHOSIS',
          'PART_1_Q3_DEPRESSED_MOOD',
          'PART_1_Q4_ANXIOUS_MOOD',
          'PART_1_Q5_APATHY',
          'PART_1_Q6_FEATURES_OF_DOPAMINE_DYSREGULATION_SYNDROME',
          'PART_1_Q7_SLEEP_PROBLEMS',
          'PART_1_Q8_DAYTIME_SLEEPINESS',
          'PART_1_Q9_PAIN_AND_OTHER_SENSATIONS',
          'PART_1_Q10_URINARY_PROBLEMS',
          'PART_1_Q11_CONSTIPATION_PROBLEMS',
          'PART_1_Q12_LIGHT_HEADEDNESS_ON_STANDING',
          'PART_1_Q13_FATIGUE',
        ]

        expect(EXPECTED_QUESTION_IDS).toEqual(
          MDS_UPDRS_SCALES.PART_1_NON_MOTOR_EXPERIENCES_OF_DAILY_LIVING,
        )
      })

      it('should have the expected question ids configured for "Part II: motor experiences of daily living (M-EDL)"', function () {
        const EXPECTED_QUESTION_IDS = [
          'PART_2_Q1_SPEECH',
          'PART_2_Q2_SALIVA_AND_DROOLING',
          'PART_2_Q3_CHEWING_AND_SWALLOWING',
          'PART_2_Q4_EATING_TASKS',
          'PART_2_Q5_DRESSING',
          'PART_2_Q6_HYGIENE',
          'PART_2_Q7_HANDWRITING',
          'PART_2_Q8_DOING_HOBBIES_AND_OTHER_ACTIVITIES',
          'PART_2_Q9_TURNING_IN_BED',
          'PART_2_Q10_TREMOR',
          'PART_2_Q11_GETTING_OUT_OF_BED_CAR_OR_DEEP_CHAIR',
          'PART_2_Q12_WALKING_AND_BALANCE',
          'PART_2_Q13_FREEZING',
        ]

        expect(EXPECTED_QUESTION_IDS).toEqual(
          MDS_UPDRS_SCALES.PART_2_MOTOR_EXPERIENCES_OF_DAILY_LIVING,
        )
      })

      it('should have the expected question ids configured for "Part III: motor examination"', function () {
        const EXPECTED_QUESTION_IDS = [
          'PART_3_Q1_SPEECH',
          'PART_3_Q2_FACIAL_EXPRESSION',
          'PART_3_Q3_RIGIDITY_NECK',
          'PART_3_Q3_RIGIDITY_RUE',
          'PART_3_Q3_RIGIDITY_LUE',
          'PART_3_Q3_RIGIDITY_RLE',
          'PART_3_Q3_RIGIDITY_LLE',
          'PART_3_Q4_FINGER_TAPPING_RIGHT',
          'PART_3_Q4_FINGER_TAPPING_LEFT',
          'PART_3_Q5_HAND_MOVEMENTS_RIGHT',
          'PART_3_Q5_HAND_MOVEMENTS_LEFT',
          'PART_3_Q6_PRO_SUPINATION_MOVEMENTS_OF_HANDS_RIGHT',
          'PART_3_Q6_PRO_SUPINATION_MOVEMENTS_OF_HANDS_LEFT',
          'PART_3_Q7_TOE_TAPPING_RIGHT',
          'PART_3_Q7_TOE_TAPPING_LEFT',
          'PART_3_Q8_LEG_AGILITY_RIGHT',
          'PART_3_Q8_LEG_AGILITY_LEFT',
          'PART_3_Q9_ARISING_FROM_CHAIR',
          'PART_3_Q10_GAIT',
          'PART_3_Q11_FREEZING_OF_GAIT',
          'PART_3_Q12_POSTURAL_STABILITY',
          'PART_3_Q13_POSTURE',
          'PART_3_Q14_GLOBAL_SPONTANEITY_OF_MOVEMENT',
          'PART_3_Q15_POSTURAL_TREMOR_OF_THE_HANDS_RIGHT',
          'PART_3_Q15_POSTURAL_TREMOR_OF_THE_HANDS_LEFT',
          'PART_3_Q16_KINETIC_TREMOR_OF_THE_HANDS_RIGHT',
          'PART_3_Q16_KINETIC_TREMOR_OF_THE_HANDS_LEFT',
          'PART_3_Q17_REST_TREMOR_AMPLITUDE_RUE',
          'PART_3_Q17_REST_TREMOR_AMPLITUDE_LUE',
          'PART_3_Q17_REST_TREMOR_AMPLITUDE_RLE',
          'PART_3_Q17_REST_TREMOR_AMPLITUDE_LLE',
          'PART_3_Q17_REST_TREMOR_AMPLITUDE_LIP_JAW',
          'PART_3_Q18_CONSTANCY_OF_REST_TREMOR',
        ]

        expect(EXPECTED_QUESTION_IDS).toEqual(
          MDS_UPDRS_SCALES.PART_3_MOTOR_EXAMINATION,
        )
      })

      it('should have the expected question ids configured for "Part IV: motor complications"', function () {
        const EXPECTED_QUESTION_IDS = [
          'PART_4_Q1_TIME_SPENT_WITH_DYSKINESIAS',
          'PART_4_Q2_FUNCTIONAL_IMPACT_OF_DYSKINESIAS',
          'PART_4_Q3_TIME_SPENT_IN_THE_OFF_STATE',
          'PART_4_Q4_FUNCTIONAL_IMPACT_OF_FLUCTUATIONS',
          'PART_4_Q5_COMPLEXITY_OF_MOTOR_FLUCTUATIONS',
          'PART_4_Q6_PAINFUL_OFF_STATE_DYSTONIA',
        ]

        expect(EXPECTED_QUESTION_IDS).toEqual(
          MDS_UPDRS_SCALES.PART_4_MOTOR_COMPLICATIONS,
        )
      })
    })

    describe('each calculated score includes the correct output result and correct score title', function () {
      const outcome = mds_updrs_calculation.calculate({
        payload: worst_response,
      })

      it('should return a score for all scales (n=4) and a total score', function () {
        expect(Object.keys(outcome)).toHaveLength(5)
      })

      it('should have all the correct calculation ids', function () {
        const EXPECTED_CALCULATION_IDS = [
          'MDS_UPDRS_TOTAL',
          'PART_1_NON_MOTOR_EXPERIENCES_OF_DAILY_LIVING',
          'PART_2_MOTOR_EXPERIENCES_OF_DAILY_LIVING',
          'PART_3_MOTOR_EXAMINATION',
          'PART_4_MOTOR_COMPLICATIONS',
        ]

        const extracted_calculation_ids_from_outcome = Object.keys(outcome)

        expect(EXPECTED_CALCULATION_IDS).toEqual(
          extracted_calculation_ids_from_outcome,
        )
      })
    })

    describe('a score is only calculated when all mandatory fields are entered', function () {
      describe('when an empty response is passed', function () {
        const outcome = mds_updrs_calculation.calculate({ payload: {} })

        it('should return null as the result for "Part I: non-motor experiences of daily living (nM-EDL)"', function () {
          expect(outcome.PART_1_NON_MOTOR_EXPERIENCES_OF_DAILY_LIVING).toEqual(
            null,
          )
        })

        it('should return undefined as the result for "Part II: motor experiences of daily living (M-EDL)"', function () {
          expect(outcome.PART_2_MOTOR_EXPERIENCES_OF_DAILY_LIVING).toEqual(null)
        })

        it('should return undefined as the result for "Part III: motor examination"', function () {
          expect(outcome.PART_3_MOTOR_EXAMINATION).toEqual(null)
        })

        it('should return undefined as the result for "Part IV: motor complications"', function () {
          expect(outcome.PART_4_MOTOR_COMPLICATIONS).toEqual(null)
        })

        it('should return undefined as the total score', function () {
          expect(outcome.MDS_UPDRS_TOTAL).toEqual(null)
        })
      })
    })

    describe('each calculated score includes the correct formula and outputs the correct result', function () {
      describe('when worst response is passed', function () {
        const outcome = mds_updrs_calculation.calculate({
          payload: worst_response,
        })

        it('should return the worst score for "Part I: non-motor experiences of daily living (nM-EDL)"', function () {
          expect(outcome.PART_1_NON_MOTOR_EXPERIENCES_OF_DAILY_LIVING).toEqual(
            52,
          )
        })

        it('should return the worst score for "Part II: motor experiences of daily living (M-EDL)"', function () {
          expect(outcome.PART_2_MOTOR_EXPERIENCES_OF_DAILY_LIVING).toEqual(52)
        })

        it('should return the worst score for "Part III: motor examination"', function () {
          expect(outcome.PART_3_MOTOR_EXAMINATION).toEqual(132)
        })

        it('should return the worst score for "Part IV: motor complications"', function () {
          expect(outcome.PART_4_MOTOR_COMPLICATIONS).toEqual(24)
        })

        it('should return the worst the total score', function () {
          expect(outcome.MDS_UPDRS_TOTAL).toEqual(WORST_TOTAL_SCORE)
        })
      })

      describe('when a median response is passed', function () {
        const outcome = mds_updrs_calculation.calculate({
          payload: median_response,
        })

        it('should return the median score for "Part I: non-motor experiences of daily living (nM-EDL)"', function () {
          expect(outcome.PART_1_NON_MOTOR_EXPERIENCES_OF_DAILY_LIVING).toEqual(
            26,
          )
        })

        it('should return the median score for "Part II: motor experiences of daily living (M-EDL)"', function () {
          expect(outcome.PART_2_MOTOR_EXPERIENCES_OF_DAILY_LIVING).toEqual(26)
        })

        it('should return the median score for "Part III: motor examination"', function () {
          expect(outcome.PART_3_MOTOR_EXAMINATION).toEqual(66)
        })

        it('should return the median score for "Part IV: motor complications"', function () {
          expect(outcome.PART_4_MOTOR_COMPLICATIONS).toEqual(12)
        })

        it('should return the median the total score', function () {
          expect(outcome.MDS_UPDRS_TOTAL).toEqual(MEDIAN_TOTAL_SCORE)
        })
      })

      describe('when best response is passed', function () {
        const outcome = mds_updrs_calculation.calculate({
          payload: best_response,
        })

        it('should return the best score for "Part I: non-motor experiences of daily living (nM-EDL)"', function () {
          expect(outcome.PART_1_NON_MOTOR_EXPERIENCES_OF_DAILY_LIVING).toEqual(
            BEST_SCORE,
          )
        })

        it('should return the best score for "Part II: motor experiences of daily living (M-EDL)"', function () {
          expect(outcome.PART_2_MOTOR_EXPERIENCES_OF_DAILY_LIVING).toEqual(
            BEST_SCORE,
          )
        })

        it('should return the best score for "Part III: motor examination"', function () {
          expect(outcome.PART_3_MOTOR_EXAMINATION).toEqual(BEST_SCORE)
        })

        it('should return the best score for "Part IV: motor complications"', function () {
          expect(outcome.PART_4_MOTOR_COMPLICATIONS).toEqual(BEST_SCORE)
        })

        it('should return the best the total score', function () {
          expect(outcome.MDS_UPDRS_TOTAL).toEqual(BEST_SCORE)
        })
      })

      describe('when a random response is passed', function () {
        const outcome = mds_updrs_calculation.calculate({
          payload: random_response,
        })

        it('should return the expected score for "Part I: non-motor experiences of daily living (nM-EDL)"', function () {
          expect(outcome.PART_1_NON_MOTOR_EXPERIENCES_OF_DAILY_LIVING).toEqual(
            21,
          )
        })

        it('should return the expected score for "Part II: motor experiences of daily living (M-EDL)"', function () {
          expect(outcome.PART_2_MOTOR_EXPERIENCES_OF_DAILY_LIVING).toEqual(19)
        })

        it('should return the expected score for "Part III: motor examination"', function () {
          expect(outcome.PART_3_MOTOR_EXAMINATION).toEqual(54)
        })

        it('should return the expected score for "Part IV: motor complications"', function () {
          expect(outcome.PART_4_MOTOR_COMPLICATIONS).toEqual(10)
        })

        it('should return the expected the total score', function () {
          expect(outcome.MDS_UPDRS_TOTAL).toEqual(104)
        })
      })
    })

    describe('values entered by the user are checked to verify they are inside specified ranges', function () {
      describe('when an answer is not a number', function () {
        it('should throw an error', function () {
          expect(() =>
            mds_updrs_calculation.calculate({
              payload: {
                ...worst_response,
                PART_1_Q1_COGNITIVE_IMPAIRMENT: "I'm not a number",
              },
            }),
          ).toThrow(ZodError)
        })
      })
      describe('when an answer is not allowed (e.g. is below the expected range)', function () {
        it('should throw an error', function () {
          expect(() =>
            mds_updrs_calculation.calculate({
              payload: {
                ...worst_response,
                PART_1_Q1_COGNITIVE_IMPAIRMENT: -1,
              },
            }),
          ).toThrow(ZodError)
        })
      })
      describe('when an answer is not allowed (e.g. is above the expected range)', function () {
        it('should return throw an error', function () {
          expect(() =>
            mds_updrs_calculation.calculate({
              payload: {
                ...worst_response,
                PART_1_Q1_COGNITIVE_IMPAIRMENT: 5,
              },
            }),
          ).toThrow(ZodError)
        })
      })
    })
  })
})
