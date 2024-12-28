import { expect } from 'chai'
import R from 'ramda'

import { InvalidInputsError } from '../../errors'
import { execute_test_calculation } from '../../lib/execute_test_calculation'
import { get_result_ids_from_calculation_output } from '../../lib/get_result_ids_from_calculation_output'
import { view_result } from '../../lib/view_result'
import { view_status } from '../../lib/view_status'
import { MISSING_STATUS } from '../../PARAMETERS'
import { CALCULATIONS } from '../calculation_library'
import { get_input_ids_from_calculation_blueprint } from '../shared_functions'
import {
  best_response,
  median_response,
  random_response,
  worst_response,
} from './__testdata__/pcl_5_test_responses'
import { CLUSTERS } from './definition/pcl_5_clusters'
import { PCL5_INPUTS } from './definition/pcl_5_inputs'
import { pcl_5 } from './pcl_5'

const PCL5_BEST_SCORE = 0
const PCL5_MEDIAN_SCORE = 40
const PCL5_WORST_SCORE = 80

const pcl_5_calculation = execute_test_calculation(pcl_5)

const RESULT_IDS = {
  total_symptom_severity_score: 'PCL5_TOTAL_SYMPTOM_SEVERITY_SCORE',
  cluster_b: 'PCL5_DSM_5_SYMPTOM_CLUSTER_B',
  cluster_c: 'PCL5_DSM_5_SYMPTOM_CLUSTER_C',
  cluster_d: 'PCL5_DSM_5_SYMPTOM_CLUSTER_D',
  cluster_e: 'PCL5_DSM_5_SYMPTOM_CLUSTER_E',
  ptss_indication: 'PCL5_PTSS_INDICATION',
}

describe('pcl_5', function () {
  it('pcl_5 calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).to.have.property('pcl_5')
  })

  describe('basic assumptions', function () {
    const outcome = pcl_5_calculation(best_response)

    it('should return 6 calculation results', function () {
      expect(outcome).to.have.length(6)
    })

    it('should have the expected calculation ids', function () {
      const EXPECTED_CALCULATION_IDS = [
        'PCL5_TOTAL_SYMPTOM_SEVERITY_SCORE',
        'PCL5_DSM_5_SYMPTOM_CLUSTER_B',
        'PCL5_DSM_5_SYMPTOM_CLUSTER_C',
        'PCL5_DSM_5_SYMPTOM_CLUSTER_D',
        'PCL5_DSM_5_SYMPTOM_CLUSTER_E',
        'PCL5_PTSS_INDICATION',
      ]
      const configured_calculation_ids =
        get_result_ids_from_calculation_output(outcome)

      expect(configured_calculation_ids).to.eql(EXPECTED_CALCULATION_IDS)
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

        const configured_input_ids =
          get_input_ids_from_calculation_blueprint(PCL5_INPUTS)

        expect(EXPECTED_INPUT_IDS).to.eql(configured_input_ids)
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

        expect(EXPECTED_INPUT_IDS).to.eql(CLUSTERS.B)
      })
    })

    describe('cluster C has correct input fields', function () {
      it('should be true', function () {
        const EXPECTED_INPUT_IDS = ['PCL5_Q06', 'PCL5_Q07']

        expect(EXPECTED_INPUT_IDS).to.eql(CLUSTERS.C)
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

        expect(EXPECTED_INPUT_IDS).to.eql(CLUSTERS.D)
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

        expect(EXPECTED_INPUT_IDS).to.eql(CLUSTERS.E)
      })
    })

    describe('when an answer is below the expected range', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          pcl_5_calculation({
            PCL5_Q01: -1,
          })
        ).to.throw(InvalidInputsError)
      })
    })

    describe('when an answer is above the expected range', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          pcl_5_calculation({
            PCL5_Q01: 5,
          })
        ).to.throw(InvalidInputsError)
      })
    })

    describe('when there are non-numerical answers', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          pcl_5_calculation({
            PCL5_Q01: "I'm not a number",
          })
        ).to.throw(InvalidInputsError)
      })
    })

    describe('when called with an empty response', function () {
      describe('Total Symptom Severity Score', function () {
        it('should return undefined for the score', function () {
          const score = R.compose(
            view_result(RESULT_IDS.total_symptom_severity_score),
            pcl_5_calculation
          )({})

          expect(score).to.eql(undefined)
        })

        it('should return MISSING for the status', function () {
          const score = R.compose(
            view_status(RESULT_IDS.total_symptom_severity_score),
            pcl_5_calculation
          )({})

          expect(score).to.eql(MISSING_STATUS)
        })
      })
      describe('DSM-5 Symptom Cluster B (items 1-5)', function () {
        it('should return undefined for the score', function () {
          const score = R.compose(
            view_result(RESULT_IDS.cluster_b),
            pcl_5_calculation
          )({})

          expect(score).to.eql(undefined)
        })

        it('should return MISSING for the status', function () {
          const score = R.compose(
            view_status(RESULT_IDS.cluster_b),
            pcl_5_calculation
          )({})

          expect(score).to.eql(MISSING_STATUS)
        })
      })
      describe('DSM-5 Symptom Cluster C (items 6-7)', function () {
        it('should return undefined for the score', function () {
          const score = R.compose(
            view_result(RESULT_IDS.cluster_c),
            pcl_5_calculation
          )({})

          expect(score).to.eql(undefined)
        })

        it('should return MISSING for the status', function () {
          const score = R.compose(
            view_status(RESULT_IDS.cluster_c),
            pcl_5_calculation
          )({})

          expect(score).to.eql(MISSING_STATUS)
        })
      })
      describe('DSM-5 Symptom Cluster D (items 8-14)', function () {
        it('should return undefined for the score', function () {
          const score = R.compose(
            view_result(RESULT_IDS.cluster_d),
            pcl_5_calculation
          )({})

          expect(score).to.eql(undefined)
        })

        it('should return MISSING for the status', function () {
          const score = R.compose(
            view_status(RESULT_IDS.cluster_d),
            pcl_5_calculation
          )({})

          expect(score).to.eql(MISSING_STATUS)
        })
      })
      describe('DSM-5 Symptom Cluster E (items 15-20)', function () {
        it('should return undefined for the score', function () {
          const score = R.compose(
            view_result(RESULT_IDS.cluster_e),
            pcl_5_calculation
          )({})

          expect(score).to.eql(undefined)
        })

        it('should return MISSING for the status', function () {
          const score = R.compose(
            view_status(RESULT_IDS.cluster_e),
            pcl_5_calculation
          )({})

          expect(score).to.eql(MISSING_STATUS)
        })
      })
      describe('PTSS Indication (based on DSM-5 diagnostic rule)', function () {
        it('should return false', function () {
          const score = R.compose(
            view_result(RESULT_IDS.ptss_indication),
            pcl_5_calculation
          )({})

          expect(score).to.eql(0)
        })
      })
    })
  })

  describe('score calculation', function () {
    describe('when called with the worst response', function () {
      const outcome = pcl_5_calculation(worst_response)

      describe('Total Symptom Severity Score', function () {
        it('should return the worst score', function () {
          const score = view_result(RESULT_IDS.total_symptom_severity_score)(
            outcome
          )

          expect(score).to.eql(PCL5_WORST_SCORE)
        })
      })
      describe('DSM-5 Symptom Cluster B (items 1-5)', function () {
        it('should return the worst score', function () {
          const score = view_result(RESULT_IDS.cluster_b)(outcome)
          const WORST_SCORE_CLUSTER_B = 20

          expect(score).to.eql(WORST_SCORE_CLUSTER_B)
        })
      })
      describe('DSM-5 Symptom Cluster C (items 6-7)', function () {
        it('should return the worst score', function () {
          const score = view_result(RESULT_IDS.cluster_c)(outcome)
          const WORST_SCORE_CLUSTER_C = 8

          expect(score).to.eql(WORST_SCORE_CLUSTER_C)
        })
      })
      describe('DSM-5 Symptom Cluster D (items 8-14)', function () {
        it('should return the worst score', function () {
          const score = view_result(RESULT_IDS.cluster_d)(outcome)
          const WORST_SCORE_CLUSTER_D = 28

          expect(score).to.eql(WORST_SCORE_CLUSTER_D)
        })
      })
      describe('DSM-5 Symptom Cluster E (items 15-20)', function () {
        it('should return the worst score', function () {
          const score = view_result(RESULT_IDS.cluster_e)(outcome)
          const WORST_SCORE_CLUSTER_E = 24

          expect(score).to.eql(WORST_SCORE_CLUSTER_E)
        })
      })
      describe('PTSS Indication (based on DSM-5 diagnostic rule)', function () {
        it('should return true', function () {
          const score = view_result(RESULT_IDS.ptss_indication)(outcome)

          expect(score).to.eql(1)
        })
      })
    })

    describe('when called with a median response', function () {
      const outcome = pcl_5_calculation(median_response)

      describe('Total Symptom Severity Score', function () {
        it('should return the median score', function () {
          const score = view_result(RESULT_IDS.total_symptom_severity_score)(
            outcome
          )

          expect(score).to.eql(PCL5_MEDIAN_SCORE)
        })
      })
      describe('DSM-5 Symptom Cluster B (items 1-5)', function () {
        it('should return the median score', function () {
          const score = view_result(RESULT_IDS.cluster_b)(outcome)
          const MEDIAN_SCORE_CLUSTER_C = 10

          expect(score).to.eql(MEDIAN_SCORE_CLUSTER_C)
        })
      })
      describe('DSM-5 Symptom Cluster C (items 6-7)', function () {
        it('should return the median score', function () {
          const score = view_result(RESULT_IDS.cluster_c)(outcome)
          const MEDIAN_SCORE_CLUSTER_C = 4

          expect(score).to.eql(MEDIAN_SCORE_CLUSTER_C)
        })
      })
      describe('DSM-5 Symptom Cluster D (items 8-14)', function () {
        it('should return the median score', function () {
          const score = view_result(RESULT_IDS.cluster_d)(outcome)
          const MEDIAN_SCORE_CLUSTER_D = 14

          expect(score).to.eql(MEDIAN_SCORE_CLUSTER_D)
        })
      })
      describe('DSM-5 Symptom Cluster E (items 15-20)', function () {
        it('should return the median score', function () {
          const score = view_result(RESULT_IDS.cluster_e)(outcome)
          const MEDIAN_SCORE_CLUSTER_E = 12

          expect(score).to.eql(MEDIAN_SCORE_CLUSTER_E)
        })
      })
      describe('PTSS Indication (based on DSM-5 diagnostic rule)', function () {
        it('should return true', function () {
          const score = view_result(RESULT_IDS.ptss_indication)(outcome)

          expect(score).to.eql(1)
        })
      })
    })

    describe('when called with the best response', function () {
      const outcome = pcl_5_calculation(best_response)

      describe('Total Symptom Severity Score', function () {
        it('should return the best score', function () {
          const score = view_result(RESULT_IDS.total_symptom_severity_score)(
            outcome
          )

          expect(score).to.eql(PCL5_BEST_SCORE)
        })
      })
      describe('DSM-5 Symptom Cluster B (items 1-5)', function () {
        it('should return the best score', function () {
          const score = view_result(RESULT_IDS.cluster_b)(outcome)

          expect(score).to.eql(PCL5_BEST_SCORE)
        })
      })
      describe('DSM-5 Symptom Cluster C (items 6-7)', function () {
        it('should return the best score', function () {
          const score = view_result(RESULT_IDS.cluster_c)(outcome)

          expect(score).to.eql(PCL5_BEST_SCORE)
        })
      })
      describe('DSM-5 Symptom Cluster D (items 8-14)', function () {
        it('should return the best score', function () {
          const score = view_result(RESULT_IDS.cluster_d)(outcome)

          expect(score).to.eql(PCL5_BEST_SCORE)
        })
      })
      describe('DSM-5 Symptom Cluster E (items 15-20)', function () {
        it('should return the best score', function () {
          const score = view_result(RESULT_IDS.cluster_e)(outcome)

          expect(score).to.eql(PCL5_BEST_SCORE)
        })
      })
      describe('PTSS Indication (based on DSM-5 diagnostic rule)', function () {
        it('should return false', function () {
          const score = view_result(RESULT_IDS.ptss_indication)(outcome)

          expect(score).to.eql(0)
        })
      })
    })

    describe('when called with a random response', function () {
      const outcome = pcl_5_calculation(random_response)

      describe('Total Symptom Severity Score', function () {
        it('should return the expeced score', function () {
          const score = view_result(RESULT_IDS.total_symptom_severity_score)(
            outcome
          )
          const EXPECTED_SCORE = 35

          expect(score).to.eql(EXPECTED_SCORE)
        })
      })
      describe('DSM-5 Symptom Cluster B (items 1-5)', function () {
        it('should return the expeced score', function () {
          const score = view_result(RESULT_IDS.cluster_b)(outcome)
          const EXPECTED_SCORE = 11

          expect(score).to.eql(EXPECTED_SCORE)
        })
      })
      describe('DSM-5 Symptom Cluster C (items 6-7)', function () {
        it('should return the expeced score', function () {
          const score = view_result(RESULT_IDS.cluster_c)(outcome)
          const EXPECTED_SCORE = 7

          expect(score).to.eql(EXPECTED_SCORE)
        })
      })
      describe('DSM-5 Symptom Cluster D (items 8-14)', function () {
        it('should return the expeced score', function () {
          const score = view_result(RESULT_IDS.cluster_d)(outcome)
          const EXPECTED_SCORE = 7

          expect(score).to.eql(EXPECTED_SCORE)
        })
      })
      describe('DSM-5 Symptom Cluster E (items 15-20)', function () {
        it('should return the expeced score', function () {
          const score = view_result(RESULT_IDS.cluster_e)(outcome)
          const EXPECTED_SCORE = 10

          expect(score).to.eql(EXPECTED_SCORE)
        })
      })
      describe('PTSS Indication (based on DSM-5 diagnostic rule)', function () {
        it('should return true', function () {
          const score = view_result(RESULT_IDS.ptss_indication)(outcome)

          expect(score).to.eql(1)
        })
      })
    })
  })
})
