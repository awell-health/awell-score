import { ZodError } from 'zod'
import { Score } from '../../classes'
import { ScoreLibrary } from '../library'
import {
  best_response,
  median_response,
  worst_response,
} from './__testdata__/msq_test_responses'
import { MSQ_DOMAINS } from './definition/msq_domains'
import { msq } from './msq'

const msq_calculation = new Score(msq)

const MAX_TOTAL_SCORE = 284
const MEDIAN_TOTAL_SCORE = 142
const MIN_TOTAL_SCORE = 0

describe('msq', function () {
  it('msq calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('msq')
  })

  describe('basic assumptions', function () {
    const outcome = msq_calculation.calculate({
      payload: worst_response,
    })

    it('should have the expected calculation ids', function () {
      const EXPECTED_CALCULATION_IDS = [
        'MSQ_GRAND_TOTAL',
        'MSQ_HEAD_TOTAL',
        'MSQ_EYES_TOTAL',
        'MSQ_EARS_TOTAL',
        'MSQ_NOSE_TOTAL',
        'MSQ_MOUTH_THROAT_TOTAL',
        'MSQ_SKIN_TOTAL',
        'MSQ_HEART_TOTAL',
        'MSQ_LUNGS_TOTAL',
        'MSQ_DIGESTIVE_TRACT_TOTAL',
        'MSQ_JOINTS_MUSCLE_TOTAL',
        'MSQ_WEIGHT_TOTAL',
        'MSQ_ENERGY_ACTIVITY_TOTAL',
        'MSQ_MIND_TOTAL',
        'MSQ_EMOTIONS_TOTAL',
        'MSQ_OTHER_TOTAL',
        'MSQ_INTERPRETATION',
      ]

      const configured_calculation_ids = Object.keys(outcome)

      expect(configured_calculation_ids).toEqual(EXPECTED_CALCULATION_IDS)
    })
  })

  describe('validation', function () {
    describe('the score includes the correct input fields', function () {
      it('should have all the expected input ids configured', function () {
        const EXPECTED_INPUT_IDS = [
          'DIGESTIVE_TRACT_Q01_NAUSEA_VOMITING',
          'DIGESTIVE_TRACT_Q02_DIARRHEA',
          'DIGESTIVE_TRACT_Q03_CONSTIPATION',
          'DIGESTIVE_TRACT_Q04_BLOATED_FEELING',
          'DIGESTIVE_TRACT_Q05_BELCHING_PASSING_GAS',
          'DIGESTIVE_TRACT_Q06_HEARTBURN',
          'DIGESTIVE_TRACT_Q07_INTESTINAL_STOMACH_PAIN',
          'EARS_Q01_ITCHY_EARS',
          'EARS_Q02_EARACHES_EAR_INFECTIONS',
          'EARS_Q03_DRAINAGE_FROM_EAR',
          'EARS_Q04_RINGING_EARS_HEARING_LOSS',
          'EMOTIONS_Q01_MOOD_SWINGS',
          'EMOTIONS_Q02_ANXIETY_FEAR_NERVOUSNESS',
          'EMOTIONS_Q03_ANGER_IRRITABILITY_AGGRESSIVENESS',
          'EMOTIONS_Q04_DEPRESSION',
          'ENERGY_ACTIVITY_Q01_FATIGUE_SLUGGISHNESS',
          'ENERGY_ACTIVITY_Q02_APATHY_LETHARGY',
          'ENERGY_ACTIVITY_Q03_HYPERACTIVITY',
          'ENERGY_ACTIVITY_Q04_RESTLESSNESS',
          'EYES_Q01_WATERY_OR_ITCHY_EYES',
          'EYES_Q02_SWOLLEN_REDDENED_OR_STICKY_EYELIDS',
          'EYES_Q03_BAGS_OR_DARK_CIRCLES_UNDER_EYES',
          'EYES_Q04_BLURRED_OR_TUNNEL_VISION',
          'HEAD_Q01_HEADACHES',
          'HEAD_Q02_FAINTNESS',
          'HEAD_Q03_DIZZINESS',
          'HEAD_Q04_INSOMNIA',
          'HEART_Q01_IRREGULAR_OR_SKIPPED_HEARTBEAT',
          'HEART_Q02_RAPID_OR_POUNDING_HEARTBEAT',
          'HEART_Q03_CHEST_PAIN',
          'JOINTS_MUSCLE_Q01_PAIN_OR_ACHES_IN_JOINTS',
          'JOINTS_MUSCLE_Q02_ARTHRITIS',
          'JOINTS_MUSCLE_Q03_STIFFNESS_OR_LIMITATION_OF_MOVEMENT',
          'JOINTS_MUSCLE_Q04_PAIN_OR_ACHES_IN_MUSCLES',
          'JOINTS_MUSCLE_Q05_FEELING_OF_WEAKNESS_OR_TIREDNESS',
          'LUNGS_Q01_CHEST_CONGESTION',
          'LUNGS_Q02_ASTHMA_BRONCHITIS',
          'LUNGS_Q03_SHORTNESS_OF_BREATH',
          'LUNGS_Q04_DIFFICULTY_BREATHING',
          'MIND_Q01_POOR_MEMORY',
          'MIND_Q02_CONFUSION_POOR_COMPREHENSION',
          'MIND_Q03_POOR_CONCENTRATION',
          'MIND_Q04_POOR_PHYSICAL_COORDINATION',
          'MIND_Q05_DIFFICULTY_IN_MAKING_DECISIONS',
          'MIND_Q06_STUTTERING_OR_STAMMERING',
          'MIND_Q07_SLURRED_SPEECH',
          'MIND_Q08_LEARNING_DISABILITIES',
          'MOUTH_THROAT_Q01_CHRONIC_COUGHING',
          'MOUTH_THROAT_Q02_GAGGING_FREQUENT_NEED_TO_CLEAR_THROAT',
          'MOUTH_THROAT_Q03_SORE_THROAT_HOARSENESS_LOSS_OF_VOUICE',
          'MOUTH_THROAT_Q04_SWOLLEN_OR_DISCOLORED_TONGUE_GUMS_LIPS',
          'MOUTH_THROAT_Q05_CANKER_SORES',
          'NOSE_Q01_STUFFY_NOSE',
          'NOSE_Q02_SINUS_PROBLEMS',
          'NOSE_Q03_HAY_FEVER',
          'NOSE_Q04_SNEEZING_ATTACKS',
          'NOSE_Q05_EXCESSIVE_MUCUS_FORMATION',
          'OTHER_Q01_FREQUENT_ILLNESS',
          'OTHER_Q02_FREQUENT_OR_URGENT_URINATION',
          'OTHER_Q03_GENITAL_ITCH_OR_DISCHARGE',
          'SKIN_Q01_ACNE',
          'SKIN_Q02_HIVES_RASHES_DRY_SKIN',
          'SKIN_Q03_HAIR_LOSS',
          'SKIN_Q04_FLUSHING_HOT_FLASHES',
          'SKIN_Q05_EXCESSIVE_SWEATING',
          'WEIGHT_Q01_BINGE_EATING_DRINKING',
          'WEIGHT_Q02_CRAVING_CERTAIN_FOODS',
          'WEIGHT_Q03_EXCESSIVE_WEIGHT',
          'WEIGHT_Q04_COMPULSIVE_EATING',
          'WEIGHT_Q05_WATER_RETENTION',
          'WEIGHT_Q06_UNDERWEIGHT',
        ].sort()

        const configured_input_ids = Object.keys(
          msq_calculation.inputSchema,
        ).sort()

        expect(EXPECTED_INPUT_IDS).toEqual(configured_input_ids)
      })
    })

    describe('Head domain has correct input fields', function () {
      it('should be true', function () {
        const EXPECTED_INPUT_IDS = [
          'HEAD_Q01_HEADACHES',
          'HEAD_Q02_FAINTNESS',
          'HEAD_Q03_DIZZINESS',
          'HEAD_Q04_INSOMNIA',
        ]

        expect(EXPECTED_INPUT_IDS).toEqual(MSQ_DOMAINS.HEAD)
      })
    })

    describe('Eyes domain has correct input fields', function () {
      it('should be true', function () {
        const EXPECTED_INPUT_IDS = [
          'EYES_Q01_WATERY_OR_ITCHY_EYES',
          'EYES_Q02_SWOLLEN_REDDENED_OR_STICKY_EYELIDS',
          'EYES_Q03_BAGS_OR_DARK_CIRCLES_UNDER_EYES',
          'EYES_Q04_BLURRED_OR_TUNNEL_VISION',
        ]

        expect(EXPECTED_INPUT_IDS).toEqual(MSQ_DOMAINS.EYES)
      })
    })

    describe('Ears domain has correct input fields', function () {
      it('should be true', function () {
        const EXPECTED_INPUT_IDS = [
          'EARS_Q01_ITCHY_EARS',
          'EARS_Q02_EARACHES_EAR_INFECTIONS',
          'EARS_Q03_DRAINAGE_FROM_EAR',
          'EARS_Q04_RINGING_EARS_HEARING_LOSS',
        ]

        expect(EXPECTED_INPUT_IDS).toEqual(MSQ_DOMAINS.EARS)
      })
    })

    describe('Nose domain has correct input fields', function () {
      it('should be true', function () {
        const EXPECTED_INPUT_IDS = [
          'NOSE_Q01_STUFFY_NOSE',
          'NOSE_Q02_SINUS_PROBLEMS',
          'NOSE_Q03_HAY_FEVER',
          'NOSE_Q04_SNEEZING_ATTACKS',
          'NOSE_Q05_EXCESSIVE_MUCUS_FORMATION',
        ]

        expect(EXPECTED_INPUT_IDS).toEqual(MSQ_DOMAINS.NOSE)
      })
    })

    describe('Mouth/throat domain has correct input fields', function () {
      it('should be true', function () {
        const EXPECTED_INPUT_IDS = [
          'MOUTH_THROAT_Q01_CHRONIC_COUGHING',
          'MOUTH_THROAT_Q02_GAGGING_FREQUENT_NEED_TO_CLEAR_THROAT',
          'MOUTH_THROAT_Q03_SORE_THROAT_HOARSENESS_LOSS_OF_VOUICE',
          'MOUTH_THROAT_Q04_SWOLLEN_OR_DISCOLORED_TONGUE_GUMS_LIPS',
          'MOUTH_THROAT_Q05_CANKER_SORES',
        ]

        expect(EXPECTED_INPUT_IDS).toEqual(MSQ_DOMAINS.MOUTH_THROAT)
      })
    })

    describe('Skin domain has correct input fields', function () {
      it('should be true', function () {
        const EXPECTED_INPUT_IDS = [
          'SKIN_Q01_ACNE',
          'SKIN_Q02_HIVES_RASHES_DRY_SKIN',
          'SKIN_Q03_HAIR_LOSS',
          'SKIN_Q04_FLUSHING_HOT_FLASHES',
          'SKIN_Q05_EXCESSIVE_SWEATING',
        ]

        expect(EXPECTED_INPUT_IDS).toEqual(MSQ_DOMAINS.SKIN)
      })
    })

    describe('Heart domain has correct input fields', function () {
      it('should be true', function () {
        const EXPECTED_INPUT_IDS = [
          'HEART_Q01_IRREGULAR_OR_SKIPPED_HEARTBEAT',
          'HEART_Q02_RAPID_OR_POUNDING_HEARTBEAT',
          'HEART_Q03_CHEST_PAIN',
        ]

        expect(EXPECTED_INPUT_IDS).toEqual(MSQ_DOMAINS.HEART)
      })
    })

    describe('Lungs domain has correct input fields', function () {
      it('should be true', function () {
        const EXPECTED_INPUT_IDS = [
          'LUNGS_Q01_CHEST_CONGESTION',
          'LUNGS_Q02_ASTHMA_BRONCHITIS',
          'LUNGS_Q03_SHORTNESS_OF_BREATH',
          'LUNGS_Q04_DIFFICULTY_BREATHING',
        ]

        expect(EXPECTED_INPUT_IDS).toEqual(MSQ_DOMAINS.LUNGS)
      })
    })

    describe('Digestive tract domain has correct input fields', function () {
      it('should be true', function () {
        const EXPECTED_INPUT_IDS = [
          'DIGESTIVE_TRACT_Q01_NAUSEA_VOMITING',
          'DIGESTIVE_TRACT_Q02_DIARRHEA',
          'DIGESTIVE_TRACT_Q03_CONSTIPATION',
          'DIGESTIVE_TRACT_Q04_BLOATED_FEELING',
          'DIGESTIVE_TRACT_Q05_BELCHING_PASSING_GAS',
          'DIGESTIVE_TRACT_Q06_HEARTBURN',
          'DIGESTIVE_TRACT_Q07_INTESTINAL_STOMACH_PAIN',
        ]

        expect(EXPECTED_INPUT_IDS).toEqual(MSQ_DOMAINS.DIGESTIVE_TRACT)
      })
    })

    describe('Joints/muscle domain has correct input fields', function () {
      it('should be true', function () {
        const EXPECTED_INPUT_IDS = [
          'JOINTS_MUSCLE_Q01_PAIN_OR_ACHES_IN_JOINTS',
          'JOINTS_MUSCLE_Q02_ARTHRITIS',
          'JOINTS_MUSCLE_Q03_STIFFNESS_OR_LIMITATION_OF_MOVEMENT',
          'JOINTS_MUSCLE_Q04_PAIN_OR_ACHES_IN_MUSCLES',
          'JOINTS_MUSCLE_Q05_FEELING_OF_WEAKNESS_OR_TIREDNESS',
        ]

        expect(EXPECTED_INPUT_IDS).toEqual(MSQ_DOMAINS.JOINTS_MUSCLE)
      })
    })

    describe('Weight domain has correct input fields', function () {
      it('should be true', function () {
        const EXPECTED_INPUT_IDS = [
          'WEIGHT_Q01_BINGE_EATING_DRINKING',
          'WEIGHT_Q02_CRAVING_CERTAIN_FOODS',
          'WEIGHT_Q03_EXCESSIVE_WEIGHT',
          'WEIGHT_Q04_COMPULSIVE_EATING',
          'WEIGHT_Q05_WATER_RETENTION',
          'WEIGHT_Q06_UNDERWEIGHT',
        ]

        expect(EXPECTED_INPUT_IDS).toEqual(MSQ_DOMAINS.WEIGHT)
      })
    })

    describe('Energy/activity domain has correct input fields', function () {
      it('should be true', function () {
        const EXPECTED_INPUT_IDS = [
          'ENERGY_ACTIVITY_Q01_FATIGUE_SLUGGISHNESS',
          'ENERGY_ACTIVITY_Q02_APATHY_LETHARGY',
          'ENERGY_ACTIVITY_Q03_HYPERACTIVITY',
          'ENERGY_ACTIVITY_Q04_RESTLESSNESS',
        ]

        expect(EXPECTED_INPUT_IDS).toEqual(MSQ_DOMAINS.ENERGY_ACTIVITY)
      })
    })

    describe('Mind domain has correct input fields', function () {
      it('should be true', function () {
        const EXPECTED_INPUT_IDS = [
          'MIND_Q01_POOR_MEMORY',
          'MIND_Q02_CONFUSION_POOR_COMPREHENSION',
          'MIND_Q03_POOR_CONCENTRATION',
          'MIND_Q04_POOR_PHYSICAL_COORDINATION',
          'MIND_Q05_DIFFICULTY_IN_MAKING_DECISIONS',
          'MIND_Q06_STUTTERING_OR_STAMMERING',
          'MIND_Q07_SLURRED_SPEECH',
          'MIND_Q08_LEARNING_DISABILITIES',
        ]

        expect(EXPECTED_INPUT_IDS).toEqual(MSQ_DOMAINS.MIND)
      })
    })

    describe('Emotions domain has correct input fields', function () {
      it('should be true', function () {
        const EXPECTED_INPUT_IDS = [
          'EMOTIONS_Q01_MOOD_SWINGS',
          'EMOTIONS_Q02_ANXIETY_FEAR_NERVOUSNESS',
          'EMOTIONS_Q03_ANGER_IRRITABILITY_AGGRESSIVENESS',
          'EMOTIONS_Q04_DEPRESSION',
        ]

        expect(EXPECTED_INPUT_IDS).toEqual(MSQ_DOMAINS.EMOTIONS)
      })
    })

    describe('Other domain has correct input fields', function () {
      it('should be true', function () {
        const EXPECTED_INPUT_IDS = [
          'OTHER_Q01_FREQUENT_ILLNESS',
          'OTHER_Q02_FREQUENT_OR_URGENT_URINATION',
          'OTHER_Q03_GENITAL_ITCH_OR_DISCHARGE',
        ]

        expect(EXPECTED_INPUT_IDS).toEqual(MSQ_DOMAINS.OTHER)
      })
    })

    describe('when an answer is below the expected range', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          msq_calculation.calculate({
            payload: {
              ...worst_response,
              DIGESTIVE_TRACT_Q01_NAUSEA_VOMITING: -1,
            },
          }),
        ).toThrow(ZodError)
      })
    })

    describe('when an answer is above the expected range', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          msq_calculation.calculate({
            payload: {
              ...worst_response,
              DIGESTIVE_TRACT_Q01_NAUSEA_VOMITING: 5,
            },
          }),
        ).toThrow(ZodError)
      })
    })

    describe('when there are non-numerical answers', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          msq_calculation.calculate({
            payload: {
              ...worst_response,
              DIGESTIVE_TRACT_Q01_NAUSEA_VOMITING: "I'm not a number",
            },
          }),
        ).toThrow(ZodError)
      })
    })

    describe('when called with an empty response', function () {
      const outcome = msq_calculation.calculate({
        payload: {},
      })

      describe('Head domain', function () {
        it('should return a null score', function () {
          expect(outcome.MSQ_HEAD_TOTAL).toEqual(null)
        })
      })

      describe('Eyes domain', function () {
        it('should return a null score', function () {
          expect(outcome.MSQ_EYES_TOTAL).toEqual(null)
        })
      })

      describe('Ears domain', function () {
        it('should return a null score', function () {
          expect(outcome.MSQ_EARS_TOTAL).toEqual(null)
        })
      })

      describe('Nose domain', function () {
        it('should return a null score', function () {
          expect(outcome.MSQ_NOSE_TOTAL).toEqual(null)
        })
      })

      describe('Mouth/throat domain', function () {
        it('should return a null score', function () {
          expect(outcome.MSQ_MOUTH_THROAT_TOTAL).toEqual(null)
        })
      })

      describe('Skin domain', function () {
        it('should return a null score', function () {
          expect(outcome.MSQ_SKIN_TOTAL).toEqual(null)
        })
      })

      describe('Heart domain', function () {
        it('should return a null score', function () {
          expect(outcome.MSQ_HEART_TOTAL).toEqual(null)
        })
      })

      describe('Lungs domain', function () {
        it('should return a null score', function () {
          expect(outcome.MSQ_LUNGS_TOTAL).toEqual(null)
        })
      })

      describe('Digestive tract domain', function () {
        it('should return a null score', function () {
          expect(outcome.MSQ_DIGESTIVE_TRACT_TOTAL).toEqual(null)
        })
      })

      describe('Joints/muscle domain', function () {
        it('should return a null score', function () {
          expect(outcome.MSQ_JOINTS_MUSCLE_TOTAL).toEqual(null)
        })
      })

      describe('Weight domain', function () {
        it('should return a null score', function () {
          expect(outcome.MSQ_WEIGHT_TOTAL).toEqual(null)
        })
      })

      describe('Energy/activity domain', function () {
        it('should return a null score', function () {
          expect(outcome.MSQ_ENERGY_ACTIVITY_TOTAL).toEqual(null)
        })
      })

      describe('Mind domain', function () {
        it('should return a null score', function () {
          expect(outcome.MSQ_MIND_TOTAL).toEqual(null)
        })
      })

      describe('Emotions domain', function () {
        it('should return a null score', function () {
          expect(outcome.MSQ_EMOTIONS_TOTAL).toEqual(null)
        })
      })

      describe('Other domain', function () {
        it('should return a null score', function () {
          expect(outcome.MSQ_OTHER_TOTAL).toEqual(null)
        })
      })

      describe('Grand total', function () {
        it('should return a null score', function () {
          expect(outcome.MSQ_GRAND_TOTAL).toEqual(null)
        })
      })

      describe('Interpretation', function () {
        it('should return null interpretation', function () {
          expect(outcome.MSQ_INTERPRETATION).toEqual(null)
        })
      })
    })
  })

  describe('score calculation', function () {
    describe('when called with the worst response', function () {
      const outcome = msq_calculation.calculate({
        payload: worst_response,
      })

      describe('Head domain', function () {
        it('should return the worst score', function () {
          expect(outcome.MSQ_HEAD_TOTAL).toEqual(16)
        })
      })

      describe('Eyes domain', function () {
        it('should return the worst score', function () {
          expect(outcome.MSQ_EYES_TOTAL).toEqual(16)
        })
      })

      describe('Ears domain', function () {
        it('should return the worst score', function () {
          expect(outcome.MSQ_EARS_TOTAL).toEqual(16)
        })
      })

      describe('Nose domain', function () {
        it('should return the worst score', function () {
          expect(outcome.MSQ_NOSE_TOTAL).toEqual(20)
        })
      })

      describe('Mouth/throat domain', function () {
        it('should return the worst score', function () {
          expect(outcome.MSQ_MOUTH_THROAT_TOTAL).toEqual(20)
        })
      })

      describe('Skin domain', function () {
        it('should return the worst score', function () {
          expect(outcome.MSQ_SKIN_TOTAL).toEqual(20)
        })
      })

      describe('Heart domain', function () {
        it('should return the worst score', function () {
          expect(outcome.MSQ_HEART_TOTAL).toEqual(12)
        })
      })

      describe('Lungs domain', function () {
        it('should return the worst score', function () {
          expect(outcome.MSQ_LUNGS_TOTAL).toEqual(16)
        })
      })

      describe('Digestive tract domain', function () {
        it('should return the worst score', function () {
          expect(outcome.MSQ_DIGESTIVE_TRACT_TOTAL).toEqual(28)
        })
      })

      describe('Joints/muscle domain', function () {
        it('should return the worst score', function () {
          expect(outcome.MSQ_JOINTS_MUSCLE_TOTAL).toEqual(20)
        })
      })

      describe('Weight domain', function () {
        it('should return the worst score', function () {
          expect(outcome.MSQ_WEIGHT_TOTAL).toEqual(24)
        })
      })

      describe('Energy/activity domain', function () {
        it('should return the worst score', function () {
          expect(outcome.MSQ_ENERGY_ACTIVITY_TOTAL).toEqual(16)
        })
      })

      describe('Mind domain', function () {
        it('should return the worst score', function () {
          expect(outcome.MSQ_MIND_TOTAL).toEqual(32)
        })
      })

      describe('Emotions domain', function () {
        it('should return the worst score', function () {
          expect(outcome.MSQ_EMOTIONS_TOTAL).toEqual(16)
        })
      })

      describe('Other domain', function () {
        it('should return the worst score', function () {
          expect(outcome.MSQ_OTHER_TOTAL).toEqual(12)
        })
      })

      describe('Grand total', function () {
        it('should return the worst score', function () {
          expect(outcome.MSQ_GRAND_TOTAL).toEqual(MAX_TOTAL_SCORE)
        })
      })

      describe('Interpretation', function () {
        it('should return "Severe toxicity"', function () {
          expect(outcome.MSQ_INTERPRETATION).toEqual('Severe toxicity')
        })
      })
    })

    describe('when called with a median response', function () {
      const outcome = msq_calculation.calculate({
        payload: median_response,
      })

      describe('Head domain', function () {
        it('should return the median  score', function () {
          expect(outcome.MSQ_HEAD_TOTAL).toEqual(8)
        })
      })

      describe('Eyes domain', function () {
        it('should return the median  score', function () {
          expect(outcome.MSQ_EYES_TOTAL).toEqual(8)
        })
      })

      describe('Ears domain', function () {
        it('should return the median  score', function () {
          expect(outcome.MSQ_EARS_TOTAL).toEqual(8)
        })
      })

      describe('Nose domain', function () {
        it('should return the median  score', function () {
          expect(outcome.MSQ_NOSE_TOTAL).toEqual(10)
        })
      })

      describe('Mouth/throat domain', function () {
        it('should return the median  score', function () {
          expect(outcome.MSQ_MOUTH_THROAT_TOTAL).toEqual(10)
        })
      })

      describe('Skin domain', function () {
        it('should return the median  score', function () {
          expect(outcome.MSQ_SKIN_TOTAL).toEqual(10)
        })
      })

      describe('Heart domain', function () {
        it('should return the median  score', function () {
          expect(outcome.MSQ_HEART_TOTAL).toEqual(6)
        })
      })

      describe('Lungs domain', function () {
        it('should return the median  score', function () {
          expect(outcome.MSQ_LUNGS_TOTAL).toEqual(8)
        })
      })

      describe('Digestive tract domain', function () {
        it('should return the median  score', function () {
          expect(outcome.MSQ_DIGESTIVE_TRACT_TOTAL).toEqual(14)
        })
      })

      describe('Joints/muscle domain', function () {
        it('should return the median  score', function () {
          expect(outcome.MSQ_JOINTS_MUSCLE_TOTAL).toEqual(10)
        })
      })

      describe('Weight domain', function () {
        it('should return the median  score', function () {
          expect(outcome.MSQ_WEIGHT_TOTAL).toEqual(12)
        })
      })

      describe('Energy/activity domain', function () {
        it('should return the median  score', function () {
          expect(outcome.MSQ_ENERGY_ACTIVITY_TOTAL).toEqual(8)
        })
      })

      describe('Mind domain', function () {
        it('should return the median  score', function () {
          expect(outcome.MSQ_MIND_TOTAL).toEqual(16)
        })
      })

      describe('Emotions domain', function () {
        it('should return the median  score', function () {
          expect(outcome.MSQ_EMOTIONS_TOTAL).toEqual(8)
        })
      })

      describe('Other domain', function () {
        it('should return the median  score', function () {
          expect(outcome.MSQ_OTHER_TOTAL).toEqual(6)
        })
      })

      describe('Grand total', function () {
        it('should return the median  score', function () {
          expect(outcome.MSQ_GRAND_TOTAL).toEqual(MEDIAN_TOTAL_SCORE)
        })
      })

      describe('Interpretation', function () {
        it('should return "Severe toxicity"', function () {
          expect(outcome.MSQ_INTERPRETATION).toEqual('Severe toxicity')
        })
      })
    })

    describe('when called with the best response', function () {
      const outcome = msq_calculation.calculate({
        payload: best_response,
      })

      describe('Head domain', function () {
        it('should return the best score', function () {
          expect(outcome.MSQ_HEAD_TOTAL).toEqual(0)
        })
      })

      describe('Eyes domain', function () {
        it('should return the best score', function () {
          expect(outcome.MSQ_EYES_TOTAL).toEqual(0)
        })
      })

      describe('Ears domain', function () {
        it('should return the best score', function () {
          expect(outcome.MSQ_EARS_TOTAL).toEqual(0)
        })
      })

      describe('Nose domain', function () {
        it('should return the best score', function () {
          expect(outcome.MSQ_NOSE_TOTAL).toEqual(0)
        })
      })

      describe('Mouth/throat domain', function () {
        it('should return the best score', function () {
          expect(outcome.MSQ_MOUTH_THROAT_TOTAL).toEqual(0)
        })
      })

      describe('Skin domain', function () {
        it('should return the best score', function () {
          expect(outcome.MSQ_SKIN_TOTAL).toEqual(0)
        })
      })

      describe('Heart domain', function () {
        it('should return the best score', function () {
          expect(outcome.MSQ_HEART_TOTAL).toEqual(0)
        })
      })

      describe('Lungs domain', function () {
        it('should return the best score', function () {
          expect(outcome.MSQ_LUNGS_TOTAL).toEqual(0)
        })
      })

      describe('Digestive tract domain', function () {
        it('should return the best score', function () {
          expect(outcome.MSQ_DIGESTIVE_TRACT_TOTAL).toEqual(0)
        })
      })

      describe('Joints/muscle domain', function () {
        it('should return the best score', function () {
          expect(outcome.MSQ_JOINTS_MUSCLE_TOTAL).toEqual(0)
        })
      })

      describe('Weight domain', function () {
        it('should return the best score', function () {
          expect(outcome.MSQ_WEIGHT_TOTAL).toEqual(0)
        })
      })

      describe('Energy/activity domain', function () {
        it('should return the best score', function () {
          expect(outcome.MSQ_ENERGY_ACTIVITY_TOTAL).toEqual(0)
        })
      })

      describe('Mind domain', function () {
        it('should return the best score', function () {
          expect(outcome.MSQ_MIND_TOTAL).toEqual(0)
        })
      })

      describe('Emotions domain', function () {
        it('should return the best score', function () {
          expect(outcome.MSQ_EMOTIONS_TOTAL).toEqual(0)
        })
      })

      describe('Other domain', function () {
        it('should return the best score', function () {
          expect(outcome.MSQ_OTHER_TOTAL).toEqual(0)
        })
      })

      describe('Grand total', function () {
        it('should return the best score', function () {
          expect(outcome.MSQ_GRAND_TOTAL).toEqual(MIN_TOTAL_SCORE)
        })
      })

      describe('Interpretation', function () {
        it('should return "Clinically not signifcant / optimal"', function () {
          expect(outcome.MSQ_INTERPRETATION).toEqual(
            'Clinically not signifcant / optimal',
          )
        })
      })
    })
  })
})
