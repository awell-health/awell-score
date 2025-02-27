import { ZodError } from 'zod'
import { Score } from '../../classes'
import { ScoreLibrary } from '../library'
import {
  best_response,
  median_response,
  random_response,
  worst_response,
} from './__testdata__/pcl_5_test_responses'
import { CLUSTERS } from './definition/pcl_5_clusters'
import { pcl_5 } from './pcl_5'

const PCL5_BEST_SCORE = 0
const PCL5_MEDIAN_SCORE = 40
const PCL5_WORST_SCORE = 80

const pcl_5_calculation = new Score(pcl_5)

describe('pcl_5', function () {
  it('pcl_5 calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('pcl_5')
  })

  describe('basic assumptions', function () {
    const outcome = pcl_5_calculation.calculate({ payload: best_response })

    it('should return 6 calculation results', function () {
      expect(Object.keys(outcome).length).toEqual(6)
    })

    it('should have the expected calculation ids', function () {
      const EXPECTED_CALCULATION_IDS = [
        'PCL5_PTSS_INDICATION',
        'PCL5_TOTAL_SYMPTOM_SEVERITY_SCORE',
        'PCL5_DSM_5_SYMPTOM_CLUSTER_B',
        'PCL5_DSM_5_SYMPTOM_CLUSTER_C',
        'PCL5_DSM_5_SYMPTOM_CLUSTER_D',
        'PCL5_DSM_5_SYMPTOM_CLUSTER_E',
      ]
      const configured_calculation_ids = Object.keys(outcome)

      expect(configured_calculation_ids).toEqual(EXPECTED_CALCULATION_IDS)
    })
  })

  describe('validation', function () {
    describe('the score includes the correct input fields', function () {
      it('should have all the expected input ids configured', function () {
        const EXPECTED_INPUT_IDS = [
          'PCL5_Q01',
          'PCL5_Q02',
          'PCL5_Q03',
          'PCL5_Q04',
          'PCL5_Q05',
          'PCL5_Q06',
          'PCL5_Q07',
          'PCL5_Q08',
          'PCL5_Q09',
          'PCL5_Q10',
          'PCL5_Q11',
          'PCL5_Q12',
          'PCL5_Q13',
          'PCL5_Q14',
          'PCL5_Q15',
          'PCL5_Q16',
          'PCL5_Q17',
          'PCL5_Q18',
          'PCL5_Q19',
          'PCL5_Q20',
        ]

        const configured_input_ids = Object.keys(pcl_5_calculation.inputSchema)

        expect(EXPECTED_INPUT_IDS).toEqual(configured_input_ids)
      })
    })

    describe('cluster B has correct input fields', function () {
      it('should be true', function () {
        const EXPECTED_INPUT_IDS = [
          'PCL5_Q01',
          'PCL5_Q02',
          'PCL5_Q03',
          'PCL5_Q04',
          'PCL5_Q05',
        ]

        expect(EXPECTED_INPUT_IDS).toEqual(CLUSTERS.B)
      })
    })

    describe('cluster C has correct input fields', function () {
      it('should be true', function () {
        const EXPECTED_INPUT_IDS = ['PCL5_Q06', 'PCL5_Q07']

        expect(EXPECTED_INPUT_IDS).toEqual(CLUSTERS.C)
      })
    })

    describe('cluster D has correct input fields', function () {
      it('should be true', function () {
        const EXPECTED_INPUT_IDS = [
          'PCL5_Q08',
          'PCL5_Q09',
          'PCL5_Q10',
          'PCL5_Q11',
          'PCL5_Q12',
          'PCL5_Q13',
          'PCL5_Q14',
        ]

        expect(EXPECTED_INPUT_IDS).toEqual(CLUSTERS.D)
      })
    })

    describe('cluster E has correct input fields', function () {
      it('should be true', function () {
        const EXPECTED_INPUT_IDS = [
          'PCL5_Q15',
          'PCL5_Q16',
          'PCL5_Q17',
          'PCL5_Q18',
          'PCL5_Q19',
          'PCL5_Q20',
        ]

        expect(EXPECTED_INPUT_IDS).toEqual(CLUSTERS.E)
      })
    })

    describe('when an answer is below the expected range', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          pcl_5_calculation.calculate({
            payload: {
              ...best_response,
              PCL5_Q01: -1,
            },
          }),
        ).toThrow(ZodError)
      })
    })

    describe('when an answer is above the expected range', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          pcl_5_calculation.calculate({
            payload: {
              PCL5_Q01: 5,
            },
          }),
        ).toThrow(ZodError)
      })
    })

    describe('when there are non-numerical answers', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          pcl_5_calculation.calculate({
            payload: {
              PCL5_Q01: "I'm not a number",
            },
          }),
        ).toThrow(ZodError)
      })
    })

    describe('when called with an empty response', function () {
      const outcome = pcl_5_calculation.calculate({ payload: {} })

      describe('Total Symptom Severity Score', function () {
        it('should return null for the score', function () {
          expect(outcome.PCL5_TOTAL_SYMPTOM_SEVERITY_SCORE).toEqual(null)
        })
      })

      describe('DSM-5 Symptom Cluster B (items 1-5)', function () {
        it('should return null for the score', function () {
          expect(outcome.PCL5_DSM_5_SYMPTOM_CLUSTER_B).toEqual(null)
        })
      })

      describe('DSM-5 Symptom Cluster C (items 6-7)', function () {
        it('should return null for the score', function () {
          expect(outcome.PCL5_DSM_5_SYMPTOM_CLUSTER_C).toEqual(null)
        })
      })

      describe('DSM-5 Symptom Cluster D (items 8-14)', function () {
        it('should return null for the score', function () {
          expect(outcome.PCL5_DSM_5_SYMPTOM_CLUSTER_D).toEqual(null)
        })
      })

      describe('DSM-5 Symptom Cluster D (items 8-14)', function () {
        it('should return null for the score', function () {
          expect(outcome.PCL5_DSM_5_SYMPTOM_CLUSTER_E).toEqual(null)
        })
      })

      describe('DSM-5 Symptom Cluster E (items 15-20)', function () {
        it('should return null for the score', function () {
          expect(outcome.PCL5_DSM_5_SYMPTOM_CLUSTER_E).toEqual(null)
        })
      })

      describe('PTSS Indication (based on DSM-5 diagnostic rule)', function () {
        it('should return false', function () {
          expect(outcome.PCL5_PTSS_INDICATION).toEqual(0)
        })
      })
    })
  })

  describe('score calculation', function () {
    describe('when called with the worst response', function () {
      const outcome = pcl_5_calculation.calculate({ payload: worst_response })

      describe('Total Symptom Severity Score', function () {
        it('should return the worst score', function () {
          expect(outcome.PCL5_TOTAL_SYMPTOM_SEVERITY_SCORE).toEqual(
            PCL5_WORST_SCORE,
          )
        })
      })
      describe('DSM-5 Symptom Cluster B (items 1-5)', function () {
        it('should return the worst score', function () {
          expect(outcome.PCL5_DSM_5_SYMPTOM_CLUSTER_B).toEqual(20)
        })
      })
      describe('DSM-5 Symptom Cluster C (items 6-7)', function () {
        it('should return the worst score', function () {
          expect(outcome.PCL5_DSM_5_SYMPTOM_CLUSTER_C).toEqual(8)
        })
      })
      describe('DSM-5 Symptom Cluster D (items 8-14)', function () {
        it('should return the worst score', function () {
          expect(outcome.PCL5_DSM_5_SYMPTOM_CLUSTER_D).toEqual(28)
        })
      })
      describe('DSM-5 Symptom Cluster E (items 15-20)', function () {
        it('should return the worst score', function () {
          expect(outcome.PCL5_DSM_5_SYMPTOM_CLUSTER_E).toEqual(24)
        })
      })
      describe('PTSS Indication (based on DSM-5 diagnostic rule)', function () {
        it('should return true', function () {
          expect(outcome.PCL5_PTSS_INDICATION).toEqual(1)
        })
      })
    })

    describe('when called with a median response', function () {
      const outcome = pcl_5_calculation.calculate({ payload: median_response })

      describe('Total Symptom Severity Score', function () {
        it('should return the median score', function () {
          expect(outcome.PCL5_TOTAL_SYMPTOM_SEVERITY_SCORE).toEqual(
            PCL5_MEDIAN_SCORE,
          )
        })
      })
      describe('DSM-5 Symptom Cluster B (items 1-5)', function () {
        it('should return the median score', function () {
          expect(outcome.PCL5_DSM_5_SYMPTOM_CLUSTER_B).toEqual(10)
        })
      })
      describe('DSM-5 Symptom Cluster C (items 6-7)', function () {
        it('should return the median score', function () {
          expect(outcome.PCL5_DSM_5_SYMPTOM_CLUSTER_C).toEqual(4)
        })
      })
      describe('DSM-5 Symptom Cluster D (items 8-14)', function () {
        it('should return the median score', function () {
          expect(outcome.PCL5_DSM_5_SYMPTOM_CLUSTER_D).toEqual(14)
        })
      })
      describe('DSM-5 Symptom Cluster E (items 15-20)', function () {
        it('should return the median score', function () {
          expect(outcome.PCL5_DSM_5_SYMPTOM_CLUSTER_E).toEqual(12)
        })
      })
      describe('PTSS Indication (based on DSM-5 diagnostic rule)', function () {
        it('should return true', function () {
          expect(outcome.PCL5_PTSS_INDICATION).toEqual(1)
        })
      })
    })

    describe('when called with the best response', function () {
      const outcome = pcl_5_calculation.calculate({ payload: best_response })

      describe('Total Symptom Severity Score', function () {
        it('should return the best score', function () {
          expect(outcome.PCL5_TOTAL_SYMPTOM_SEVERITY_SCORE).toEqual(
            PCL5_BEST_SCORE,
          )
        })
      })
      describe('DSM-5 Symptom Cluster B (items 1-5)', function () {
        it('should return the best score', function () {
          expect(outcome.PCL5_DSM_5_SYMPTOM_CLUSTER_B).toEqual(PCL5_BEST_SCORE)
        })
      })
      describe('DSM-5 Symptom Cluster C (items 6-7)', function () {
        it('should return the best score', function () {
          expect(outcome.PCL5_DSM_5_SYMPTOM_CLUSTER_C).toEqual(PCL5_BEST_SCORE)
        })
      })
      describe('DSM-5 Symptom Cluster D (items 8-14)', function () {
        it('should return the best score', function () {
          expect(outcome.PCL5_DSM_5_SYMPTOM_CLUSTER_D).toEqual(PCL5_BEST_SCORE)
        })
      })
      describe('DSM-5 Symptom Cluster E (items 15-20)', function () {
        it('should return the best score', function () {
          expect(outcome.PCL5_DSM_5_SYMPTOM_CLUSTER_E).toEqual(PCL5_BEST_SCORE)
        })
      })
      describe('PTSS Indication (based on DSM-5 diagnostic rule)', function () {
        it('should return false', function () {
          expect(outcome.PCL5_PTSS_INDICATION).toEqual(0)
        })
      })
    })

    describe('when called with a random response', function () {
      const outcome = pcl_5_calculation.calculate({ payload: random_response })

      describe('Total Symptom Severity Score', function () {
        it('should return the expeced score', function () {
          expect(outcome.PCL5_TOTAL_SYMPTOM_SEVERITY_SCORE).toEqual(35)
        })
      })
      describe('DSM-5 Symptom Cluster B (items 1-5)', function () {
        it('should return the expeced score', function () {
          expect(outcome.PCL5_DSM_5_SYMPTOM_CLUSTER_B).toEqual(11)
        })
      })
      describe('DSM-5 Symptom Cluster C (items 6-7)', function () {
        it('should return the expeced score', function () {
          expect(outcome.PCL5_DSM_5_SYMPTOM_CLUSTER_C).toEqual(7)
        })
      })
      describe('DSM-5 Symptom Cluster D (items 8-14)', function () {
        it('should return the expeced score', function () {
          expect(outcome.PCL5_DSM_5_SYMPTOM_CLUSTER_D).toEqual(7)
        })
      })
      describe('DSM-5 Symptom Cluster E (items 15-20)', function () {
        it('should return the expeced score', function () {
          expect(outcome.PCL5_DSM_5_SYMPTOM_CLUSTER_E).toEqual(10)
        })
      })
      describe('PTSS Indication (based on DSM-5 diagnostic rule)', function () {
        it('should return true', function () {
          expect(outcome.PCL5_PTSS_INDICATION).toEqual(1)
        })
      })
    })
  })
})
