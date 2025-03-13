import fs from 'fs'
import { Octokit } from '@octokit/rest'
import OpenAI from 'openai'
import yaml from 'yaml'

const GITHUB_TOKEN = process.env.GITHUB_TOKEN
const OPENAI_API_KEY = process.env.OPENAI_KEY

if (!GITHUB_TOKEN || !OPENAI_API_KEY) {
  console.error('❌ Missing required secrets. Ensure they are set in GitHub Actions.')
  process.exit(1)
}

const octokit = new Octokit({ auth: GITHUB_TOKEN })
const openai = new OpenAI({ apiKey: OPENAI_API_KEY })

async function getIssueDetails(issueNumber) {
  const { data } = await octokit.issues.get({
    owner: 'awell-health',
    repo: 'awell-score',
    issue_number: issueNumber,
  })
  return data
}

async function generateScoreCode(issue) {
  const { title, body } = issue
  // const parsedBody = yaml.parse(body)

  const parsedBody = {
    score_name: 'bmi',
    description: 'BMI = Weight in kg / Height in m^2',
  }

  const response = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: [{ role: 'system', content: getPrompt(parsedBody) }],
  })

  return response.choices[0].message.content
}

async function writeGeneratedFiles(scoreName, generatedCode) {
  const baseDir = `src/scores/${scoreName}`
  if (!fs.existsSync(baseDir)) fs.mkdirSync(baseDir, { recursive: true })

  fs.writeFileSync(`${baseDir}/index.ts`, generatedCode.index)
  fs.writeFileSync(`${baseDir}/definition/${scoreName}_inputs.ts`, generatedCode.inputs)
  fs.writeFileSync(`${baseDir}/definition/${scoreName}_output.ts`, generatedCode.outputs)
  fs.writeFileSync(`${baseDir}/README.md`, generatedCode.readme)
}

async function main(issueNumber) {
  console.log(`Fetching issue #${issueNumber}`)
  const issue = await getIssueDetails(issueNumber)
  console.log(issue)

  console.log(`Generating score code for ${issue.title}`)

  const generatedCode = await generateScoreCode(issue)
  console.log(generatedCode)

  console.log(`Writing files to repository...`)
  
  await writeGeneratedFiles(issue.title, generatedCode)

  console.log(`✅ Done!`)
}

const getPrompt = (parsedBody) => `
You are an expert TypeScript developer. Given the following medical score details:

**Score Name**: ${parsedBody.score_name}
**Description**: ${parsedBody.description}

Generate:
1. Input schema for the score.
2. Output schema for the score.
3. A Score object of Score class with a calculate method.
4. A subscale or domain file for the score if applicable.
4. A test file for the score.
5. A README.md with an explanation of the score.

Output must follow this structure:
---
src/scores/${parsedBody.score_name}/index.ts
src/scores/${parsedBody.score_name}/${parsedBody.score_name}.ts // the main score file
src/scores/${parsedBody.score_name}/${parsedBody.score_name}.test.ts // the test file
src/scores/${parsedBody.score_name}/definition/${parsedBody.score_name}_inputs.ts
src/scores/${parsedBody.score_name}/definition/${parsedBody.score_name}_output.ts
src/scores/${parsedBody.score_name}/definition/${parsedBody.score_name}_subscales.ts // if there are subscales or domains
src/scores/${parsedBody.score_name}/README.md
---

Here are examples of some scores:
---
================================================
File: src/scores/library.ts
================================================
import { ten_meter_walk_test } from './10_meter_walk_test/10_meter_walk_test'
import { age_calc } from './age_calc/age_calc'
import { asrs } from './asrs/asrs'
import { audit } from './audit/audit'
import { aq_10 } from './AQ_10/aq_10'
import { basdai } from './basdai/basdai'
import { basfi } from './basfi/basfi'
import { beck } from './beck/beck'
import { blcs } from './blcs/blcs'
import { bpses } from './bpses/bpses'
import { bwcs } from './bwcs/bwcs'
import { bmi_metric, bmi_imperial } from './bmi'
import { cade_q_sv } from './cade_q'
import { caregiver_strain_index } from './caregiver_strain_index/caregiver_strain_index'
import { cat } from './cat/cat'
import { ccq } from './ccq/ccq'
import { cfws } from './cfws/cfws'
import { CHA2DS2_VASc_Score } from './CHA2DS2_VASc_Score/CHA2DS2_VASc_Score'
import { comi_back, comi_neck } from './comi'
import { compass_31 } from './compass_31/compass_31'
import { constant_murley_score_orthotoolkit } from './constant_murley_score'
import { core_om } from './core_om/core_om'
import { cdr } from './cdr/cdr'
import { cpdi } from './cpdi/cpdi'
import { csi } from './csi/csi'
import { dast_10 } from './dast_10/dast_10'
import { dn4 } from './dn4/dn4'
import { dri } from './dri/dri'
import { epic_26 } from './epic_26/epic_26'
import { eq5d_3l, eq5d_5l } from './eq5d'
import { ess } from './ess/ess'
import { faam } from './faam/faam'
import { short_fes_i } from './fes_i'
import { fnd } from './fnd/fnd'
import { foot_function_index_5pt } from './foot_function_index'
import {
  forgotten_joint_score_hip,
  forgotten_joint_score_knee,
} from './forgotten_joint_score_12'
import { pss_4 } from './pss_4/pss_4'
import { stop_bang } from './stop_bang/stop_bang'
import { gad_2 } from './GAD_2/gad_2'
import { gad_7 } from './GAD_7/gad_7'
import { ghq_12 } from './ghq_12/ghq_12'
import { hads } from './hads/HADS_score'
import { harris_hip_score } from './harris_hip_score/harris_hip_score'
import { haq } from './haq/haq'
import { hoos_extended } from './hoos_extended/hoos_extended'
import { hoos_ps } from './hoos_ps/hoos_ps'
import { hos } from './hos/hos'
import { hrqol_4 } from './hrqol_4/hrqol_4'
import { ias } from './ias/ias'
import { IBD_control } from './IBD_control/IBD_control'
import { ibd_disk_total_score } from './ibd_disk_total_score/ibd_disk_total_score'
import { iief5 } from './iief5/iief5'
import { ikdc } from './ikdc/ikdc'
import { ipss } from './ipss/ipss'
import { isi } from './isi/isi'
import { k_bild } from './k_bild/k_bild'
import { KCCQ_12 } from './KCCQ_12/KCCQ_12'
import { koos_ps } from './koos_ps/koos_ps'
import { mds_updrs } from './mds_updrs/mds_updrs'
import { mini_best_test } from './mini_best_test/mini_best_test'
import { mfis } from './mfis/mfis'
import { mmse } from './mmse/mmse'
import { moca } from './moca/moca'
import { modified_caregiver_strain_index } from './modified_caregiver_strain_index/modified_caregiver_strain_index'
import { mpi } from './mpi/mpi'
import { msq } from './msq/msq'
import { ndi } from './ndi/ndi'
import { oas } from './oas/oas'
import { ompq, ompq_10 } from './orebro'
import { oswestry } from './oswestry/oswestry'
import { oxford_hip_score } from './oxford_hip_score/oxford_hip_score'
import { oxford_knee_score } from './oxford_knee_score/oxford_knee_score'
import { packyears } from './packyears/packyears'
import { panss_6 } from './panss_6/panss_6'
import { paq_c } from './paq_c/paq_c'
import { pci } from './pci/pci'
import { pcl_5 } from './pcl_5/pcl_5'
import { pcs } from './pcs/pcs'
import { pdi } from './pdi/pdi'
import { pdq_8 } from './pdq_8/pdq_8'
import { phq_2 } from './phq_2/phq_2'
import { phq_4 } from './phq_4/phq_4'
import { phq_8 } from './phq_8/phq_8'
import { phq_9 } from './phq_9/phq_9'
import { physical_activity_measurement } from './physical_activity_measurement/physical_activity_measurement'
import { pro2 as PRO2 } from './pro2/pro2'
import { promis_10 } from './promis_10/promis_10'
import { prtee } from './prtee/prtee'
import { paid_20 } from './PAID_20/paid_20'
import { psk } from './psk/psk'
import { qol_stoma } from './qol_stoma/qol_stoma'
import { quickdash } from './quickdash/quickdash'
import { sccai } from './sccai/sccai'
import { snap_teacher } from './snap_teacher/snap_teacher'
import { snap_parent } from './snap_parent/snap_parent'
import { scl90 } from './scl90/scl90'
import { scl90r } from './scl90r/scl90r'
import { sdq } from './sdq/sdq'
import { sf12 } from './sf12/sf12'
import { sf36 } from './sf36/sf36'
import { spadi } from './spadi/spadi'
import { simple_shoulder_test } from './sst/simple_shoulder_test'
import { start_back_screening_tool } from './start_back_screening_tool/start_back_screening_tool'
import { tampa } from './tampa/tampa'
import { visa_a, visa_g, visa_p } from './visa'
import { yp_core } from './yp_core/yp_core'
import { zarit_12 } from './zarit_12/zarit_12'
import { womac } from './womac/womac'
import { acro } from './acro/acro'
import { Score } from '../classes'
import { ScoreType } from '../types'
import { korq } from './korq/korq'
import { mlks } from './mlks/mlks'
import { psqi } from './psqi/psqi'
import { test_calculation } from './test_calculation/test_caculation'

const createScoreLibrary = <T extends Record<string, ScoreType<any, any>>>(
  scoreObjects: T,
): { [K in keyof T]: Score<T[K]['inputSchema'], T[K]['outputSchema']> } => {
  return Object.fromEntries(
    Object.entries(scoreObjects).map(([key, value]) => [
      key,
      new Score({ ...value, id: key }),
    ]),
  ) as {
    [K in keyof T]: Score<T[K]['inputSchema'], T[K]['outputSchema']>
  }
}

export const ScoreLibrary = createScoreLibrary({
  test_calculation,
  age_calc,
  acro,
  asrs,
  audit,
  aq_10,
  basdai,
  basfi,
  beck,
  bmi: bmi_metric,
  bmi_imperial,
  blcs,
  bpses,
  bwcs,
  // breast_q_conserving_therapy_pre_and_postoperative,
  cade_q_sv,
  caregiver_strain_index,
  cat,
  ccq,
  cfws,
  CHA2DS2_VASc_Score,
  comi_back,
  comi_neck,
  compass_31,
  constant_murley_score_orthotoolkit,
  core_om,
  cdr,
  cpdi,
  csi,
  dast_10,
  dn4,
  dri,
  // eortc_qlq_br23,
  // eortc_qlq_br45,
  // eortc_qlq_c30,
  // eortc_qlq_cr29,
  // eortc_qlq_lc13,
  // eortc_qlq_lc29,
  // eortc_qlq_pr25,
  epic_26,
  eq5d_3l,
  eq5d_5l,
  ess,
  faam,
  fnd,
  foot_function_index_5pt,
  forgotten_joint_score_hip,
  forgotten_joint_score_knee,
  gad_2,
  gad_7,
  ghq_12,
  hads,
  harris_hip_score,
  haq,
  hoos_extended,
  hoos_ps,
  hos,
  hrqol_4,
  ias,
  IBD_control,
  ibd_disk_total_score,
  iief5,
  ikdc,
  isi,
  ipss,
  k_bild,
  KCCQ_12,
  koos_ps,
  korq,
  mds_updrs,
  mini_best_test,
  mfis,
  mlks,
  mmse,
  moca,
  modified_caregiver_strain_index,
  mpi,
  msq,
  ndi,
  oas,
  ompq,
  ompq_short_form: ompq_10,
  oswestry,
  oxford_hip_score,
  oxford_knee_score,
  packyears,
  panss_6,
  paq_c,
  pci,
  pcl_5,
  pcs,
  pdi,
  pdq_8,
  phq_2,
  phq_4,
  phq_8,
  phq_9,
  physical_activity_measurement,
  PRO2,
  promis_10,
  prtee,
  paid_20,
  psk,
  psqi,
  pss_4,
  qol_stoma,
  quickdash,
  sccai,
  snap_teacher,
  snap_parent,
  scl90,
  scl90r,
  sdq,
  sf12,
  sf36,
  short_fes_i,
  spadi,
  simple_shoulder_test,
  start_back_screening_tool,
  stop_bang,
  tampa,
  ten_meter_walk_test,
  visa_a,
  visa_g,
  visa_p,
  yp_core,
  zarit_12,
  womac,
})



================================================
File: src/scores/10_meter_walk_test/10_meter_walk_test.test.ts
================================================
import { ScoreLibrary } from '../library'
import { ten_meter_walk_test } from './10_meter_walk_test'
import { Score } from '../../classes'
import { ZodError } from 'zod'

const tmwt_calculation = new Score(ten_meter_walk_test)

describe('ten_meter_walk_test', function () {
  it('ten_meter_walk_test calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('ten_meter_walk_test')
  })

  describe('specific_steps_ten_meter_walk_test_calc', function () {
    describe('basic assumptions', function () {
      const outcome = tmwt_calculation.calculate({
        payload: {
          TRIAL_1: 10,
        },
      })

      it('should return 3 calculation results', function () {
        const AMOUNT_OF_RESULTS = 3
        expect(Object.keys(outcome)).toHaveLength(AMOUNT_OF_RESULTS)
      })

      it('should the calculation names', function () {
        const EXPECTED_CALCULATION_IDS = [
          'TMWT_MEAN_IN_SECONDS',
          'TMWT_MEAN_IN_METERS_PER_SECOND',
          'TMWT_MEAN_IN_KILOMETERS_PER_HOUR',
        ]

        const EXTRACTED_CALCULATION_IDS_FROM_RESULT = Object.keys(outcome)

        expect(EXTRACTED_CALCULATION_IDS_FROM_RESULT).toEqual(
          EXPECTED_CALCULATION_IDS,
        )
      })
    })

    describe('validations', function () {
      describe('the score includes the correct input fields', function () {
        it('should have all the expected input ids configured', function () {
          const EXPECTED_INPUT_IDS = ['TRIAL_1', 'TRIAL_2', 'TRIAL_3']
          const configured_calculation_input_ids = Object.keys(
            tmwt_calculation.inputSchemaAsObject.shape,
          )

          expect(EXPECTED_INPUT_IDS).toEqual(configured_calculation_input_ids)
        })
      })

      describe('when called with a response with answers out of the expected [0,4] range', function () {
        describe('when an answer is not a number', function () {
          it('should throw an error', function () {
            expect(() =>
              tmwt_calculation.calculate({
                payload: {
                  TRIAL_1: 'hello',
                },
              }),
            ).toThrow(ZodError)
          })
        })

        describe('when the response is empty', function () {
          it('should throw an error', function () {
            expect(() =>
              tmwt_calculation.calculate({
                payload: {},
              }),
            ).toThrow(ZodError)
          })
        })
      })
    })

    describe('score calculation', function () {
      describe('when called with a single trial', function () {
        const outcome = tmwt_calculation.calculate({
          payload: {
            TRIAL_1: 7, // Took the patient 7 seconds to walk 10 meters
          },
        })

        it('should return the correct result for the mean in seconds', function () {
          const EXPECTED_RESULT = 7
          expect(outcome.TMWT_MEAN_IN_SECONDS).toEqual(EXPECTED_RESULT)
        })

        it('should return the correct result for the mean in meters per second', function () {
          const EXPECTED_RESULT = 1.43
          expect(outcome.TMWT_MEAN_IN_METERS_PER_SECOND).toEqual(
            EXPECTED_RESULT,
          )
        })

        it('should return the correct result for the mean in kilometers per hour', function () {
          const EXPECTED_RESULT = 5.14
          expect(outcome.TMWT_MEAN_IN_KILOMETERS_PER_HOUR).toEqual(
            EXPECTED_RESULT,
          )
        })
      })

      describe('when called with multiple trials', function () {
        const outcome = tmwt_calculation.calculate({
          payload: {
            TRIAL_1: 7, // Took the patient 7 seconds to walk 10 meters in trial 1
            TRIAL_2: 8, // Took the patient 8 seconds to walk 10 meters in trial 2
            TRIAL_3: 6, // Took the patient 6 seconds to walk 10 meters in trial 3
          },
        })

        it('should return the correct result for the mean in seconds', function () {
          const EXPECTED_RESULT = 7
          expect(outcome.TMWT_MEAN_IN_SECONDS).toEqual(EXPECTED_RESULT)
        })

        it('should return the correct result for the mean in meters per second', function () {
          const EXPECTED_RESULT = 1.43
          expect(outcome.TMWT_MEAN_IN_METERS_PER_SECOND).toEqual(
            EXPECTED_RESULT,
          )
        })

        it('should return the correct result for the mean in kilometers per hour', function () {
          const EXPECTED_RESULT = 5.14
          expect(outcome.TMWT_MEAN_IN_KILOMETERS_PER_HOUR).toEqual(
            EXPECTED_RESULT,
          )
        })
      })
    })
  })
})



================================================
File: src/scores/10_meter_walk_test/10_meter_walk_test.ts
================================================
import { ScoreType } from '../../types'
import {
  TEN_METER_WALK_TEST_INPUTS,
  TEN_METER_WALK_TEST_OUTPUT,
} from './definition'
import { sum, round, mean } from 'lodash'

export const ten_meter_walk_test: ScoreType<
  typeof TEN_METER_WALK_TEST_INPUTS,
  typeof TEN_METER_WALK_TEST_OUTPUT
> = {
  name: '10 Metre Walk Test (TMWT)',
  readmeLocation: __dirname,
  inputSchema: TEN_METER_WALK_TEST_INPUTS,
  outputSchema: TEN_METER_WALK_TEST_OUTPUT,
  calculate: ({ data }) => {
    const DISTANCE_PER_TRIAL = 10 // 10 meters per trial
    const TOTAL_DISTANCE =
      Object.values(data).filter(v => v !== undefined).length *
      DISTANCE_PER_TRIAL
    const TOTAL_TIME = sum(Object.values(data))

    const ROUND_TO = 2

    const MEAN_IN_SECONDS_RESULT = round(mean(Object.values(data)), ROUND_TO)

    /**
     * Calculate average speed in meters per second
     */
    const WIP_MEAN_IN_METERS_PER_SECOND_RESULT = TOTAL_DISTANCE / TOTAL_TIME
    const MEAN_IN_METERS_PER_SECOND_RESULT = round(
      WIP_MEAN_IN_METERS_PER_SECOND_RESULT,
      ROUND_TO,
    )

    /**
     * Calculate average speed in kilometers per hour
     */
    const CONVERSION_FACTOR = 3.6 // 1m per second = 3.6km per hour
    const MEAN_IN_KILOMETERS_PER_HOUR_RESULT = round(
      WIP_MEAN_IN_METERS_PER_SECOND_RESULT * CONVERSION_FACTOR,
      ROUND_TO,
    )

    return {
      TMWT_MEAN_IN_SECONDS: MEAN_IN_SECONDS_RESULT,
      TMWT_MEAN_IN_METERS_PER_SECOND: MEAN_IN_METERS_PER_SECOND_RESULT,
      TMWT_MEAN_IN_KILOMETERS_PER_HOUR: MEAN_IN_KILOMETERS_PER_HOUR_RESULT,
    }
  },
}



================================================
File: src/scores/10_meter_walk_test/definition/10_meter_walk_test_inputs.ts
================================================
import { z } from 'zod'
import { ScoreInputSchemaType } from '../../../types'

export const TEN_METER_WALK_TEST_INPUTS = {
  TRIAL_1: {
    type: z.number(),
    label: {
      en: 'Trial 1',
      nl: 'Poging 1',
    },
  },
  TRIAL_2: {
    type: z.number().optional(),
    label: {
      en: 'Trial 2',
      nl: 'Poging 2',
    },
  },
  TRIAL_3: {
    type: z.number().optional(),
    label: {
      en: 'Trial 3',
      nl: 'Poging 3',
    },
  },
} satisfies ScoreInputSchemaType



================================================
File: src/scores/10_meter_walk_test/definition/10_meter_walk_test_output.ts
================================================
import { z } from 'zod'
import { ScoreOutputSchemaType } from '../../../types'

export const TEN_METER_WALK_TEST_OUTPUT = {
  TMWT_MEAN_IN_SECONDS: {
    label: { en: 'Mean in seconds', nl: 'Gemiddelde in seconden' },
    type: z.number(),
    unit: { en: 'sec' },
  },
  TMWT_MEAN_IN_METERS_PER_SECOND: {
    label: {
      en: 'Mean in meters per second',
      nl: 'Gemiddelde in meter per seconde',
    },
    type: z.number(),
    unit: { en: 'm/sec' },
  },
  TMWT_MEAN_IN_KILOMETERS_PER_HOUR: {
    label: {
      en: 'Mean in kilometers per hour',
      nl: 'Gemiddelde in kilometer per uur',
    },
    type: z.number(),
    unit: { en: 'km/u' },
  },
} satisfies ScoreOutputSchemaType



================================================
File: src/scores/10_meter_walk_test/definition/index.ts
================================================
export { TEN_METER_WALK_TEST_INPUTS } from './10_meter_walk_test_inputs'
export { TEN_METER_WALK_TEST_OUTPUT } from './10_meter_walk_test_output'



================================================
File: src/scores/acro/acro.test.ts
================================================
import { ScoreLibrary } from '../library'
import {
  best_response,
  median_response,
  random_response,
  worst_response,
} from './__testdata__/acro_test_responses'
import { acro } from './acro'
import { ACRO_SUBSCALES } from './definition'
import { Score } from '../../classes'
import { ZodError } from 'zod'

const acro_calculation = new Score(acro)

describe('acro', function () {
  it('acro calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('acro')
  })

  describe('basic assumptions', function () {
    const outcome = acro_calculation.calculate({ payload: best_response })

    it('should have the expected result ids', function () {
      const EXPECTED_RESULT_IDS = [
        'ACRO_GLOBAL_SCORE',
        'ACRO_PHYSICAL_SUBSCALE_SCORE',
        'ACRO_PSYCHOLOGICAL_APPEARANCE_SUBSCALE',
        'ACRO_PSYCHOLOGICAL_PERSONAL_RELATIONSHIPS_SUBSCALE',
      ]
      const configured_calculation_ids = Object.keys(outcome)
      expect(configured_calculation_ids).toEqual(EXPECTED_RESULT_IDS)
    })
  })

  describe('validation', function () {
    describe('the score includes the correct input fields', function () {
      it('should have all the expected input ids configured', function () {
        const EXPECTED_INPUT_IDS = [
          'Q01',
          'Q02',
          'Q03',
          'Q04',
          'Q05',
          'Q06',
          'Q07',
          'Q08',
          'Q09',
          'Q10',
          'Q11',
          'Q12',
          'Q13',
          'Q14',
          'Q15',
          'Q16',
          'Q17',
          'Q18',
          'Q19',
          'Q20',
          'Q21',
          'Q22',
        ]

        const configured_input_ids = Object.keys(
          acro_calculation.inputSchemaAsObject.shape,
        )

        expect(EXPECTED_INPUT_IDS).toEqual(configured_input_ids)
      })
    })

    describe('acro subscales', function () {
      describe('Physical subscale', function () {
        it('should have the expected input ids', function () {
          const EXPECTED_INPUT_IDS = [
            'Q01',
            'Q03',
            'Q09',
            'Q13',
            'Q14',
            'Q15',
            'Q19',
            'Q22',
          ]

          expect(EXPECTED_INPUT_IDS).toEqual(ACRO_SUBSCALES.PHYSICAL_SUBSCALE)
        })
      })

      describe('Psychological appearance subscale', function () {
        it('should have the expected input ids', function () {
          const EXPECTED_INPUT_IDS = [
            'Q02',
            'Q04',
            'Q07',
            'Q11',
            'Q12',
            'Q16',
            'Q17',
          ]

          expect(EXPECTED_INPUT_IDS).toEqual(
            ACRO_SUBSCALES.PSYCHOLOGICAL_APPEARANCE_SUBSCALE,
          )
        })
      })

      describe('Psychosocial personal relationships subscale', function () {
        it('should have the expected input ids', function () {
          const EXPECTED_INPUT_IDS = [
            'Q05',
            'Q06',
            'Q08',
            'Q10',
            'Q18',
            'Q20',
            'Q21',
          ]
          expect(EXPECTED_INPUT_IDS).toEqual(
            ACRO_SUBSCALES.PSYCHOLOGICAL_PERSONAL_RELATIONSHIPS_SUBSCALE,
          )
        })
      })
    })

    describe('when an answer is below the expected range', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          acro_calculation.calculate({
            payload: {
              Q01: -1,
            },
          }),
        ).toThrow(ZodError)
      })
    })

    describe('when an answer is above the expected range', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          acro_calculation.calculate({
            payload: {
              Q01: 6,
            },
          }),
        ).toThrow(ZodError)
      })
    })

    describe('when there are non-numerical answers', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          acro_calculation.calculate({
            payload: {
              Q01: "I'm not a number",
            },
          }),
        ).toThrow(ZodError)
      })
    })

    describe('when called with an empty response', function () {
      const outcome = acro_calculation.calculate({ payload: {} })

      describe('Global score', function () {
        it('should return missing for the result status and undefined score', function () {
          expect(outcome.ACRO_GLOBAL_SCORE).toEqual(null)
        })
      })

      describe('Physical subscale', function () {
        it('should return missing for the result status and undefined score', function () {
          expect(outcome.ACRO_PHYSICAL_SUBSCALE_SCORE).toEqual(null)
        })
      })

      describe('Psychological appearance subscale score subscale', function () {
        it('should return missing for the result status and undefined score', function () {
          expect(outcome.ACRO_PSYCHOLOGICAL_APPEARANCE_SUBSCALE).toEqual(null)
        })
      })

      describe('Psychosocial personal relationships subscale', function () {
        it('should return missing for the result status and undefined score', function () {
          expect(
            outcome.ACRO_PSYCHOLOGICAL_PERSONAL_RELATIONSHIPS_SUBSCALE,
          ).toEqual(null)
        })
      })
    })

    describe('when called with a partial response', function () {
      const outcome = acro_calculation.calculate({
        payload: {
          Q02: 1, // Belongs to psychological appearance subscale
        },
      })

      describe('Total score', function () {
        it('should return the expected (partial) total score', function () {
          expect(outcome.ACRO_GLOBAL_SCORE).toEqual(null)
        })
      })

      describe('Physical subscale', function () {
        it('should return missing for the result status and undefined score', function () {
          expect(outcome.ACRO_PHYSICAL_SUBSCALE_SCORE).toEqual(null)
        })
      })

      describe('Psychological appearance subscale', function () {
        it('should return missing for the result status and undefined score as the partial response', function () {
          expect(outcome.ACRO_PSYCHOLOGICAL_APPEARANCE_SUBSCALE).toEqual(null)
        })
      })

      describe('Psychosocial personal relationships subscale', function () {
        it('should return missing for the result status and undefined score', function () {
          expect(
            outcome.ACRO_PSYCHOLOGICAL_PERSONAL_RELATIONSHIPS_SUBSCALE,
          ).toEqual(null)
        })
      })
    })
  })

  describe('score calculation', function () {
    describe('when called with the worst response', function () {
      const outcome = acro_calculation.calculate({
        payload: worst_response,
      })

      describe('Total score', function () {
        it('should return the worst score', function () {
          expect(outcome.ACRO_GLOBAL_SCORE).toEqual(0)
        })
      })

      describe('Physical subscale', function () {
        it('should return the worst score', function () {
          expect(outcome.ACRO_PHYSICAL_SUBSCALE_SCORE).toEqual(0)
        })
      })

      describe('Psychological appearance subscale', function () {
        it('should return the worst score', function () {
          expect(outcome.ACRO_PSYCHOLOGICAL_APPEARANCE_SUBSCALE).toEqual(0)
        })
      })

      describe('Psychosocial personal relationships subscale', function () {
        it('should return the worst score', function () {
          expect(
            outcome.ACRO_PSYCHOLOGICAL_PERSONAL_RELATIONSHIPS_SUBSCALE,
          ).toEqual(0)
        })
      })
    })

    describe('when called with the best response', function () {
      const outcome = acro_calculation.calculate({
        payload: best_response,
      })

      describe('Total score', function () {
        it('should return the best score', function () {
          expect(outcome.ACRO_GLOBAL_SCORE).toEqual(100)
        })
      })

      describe('Physical subscale', function () {
        it('should return the best score', function () {
          expect(outcome.ACRO_PHYSICAL_SUBSCALE_SCORE).toEqual(100)
        })
      })

      describe('Psychological appearance subscale', function () {
        it('should return the best score', function () {
          expect(outcome.ACRO_PSYCHOLOGICAL_APPEARANCE_SUBSCALE).toEqual(100)
        })
      })

      describe('Psychosocial personal relationships subscale', function () {
        it('should return the best score', function () {
          expect(
            outcome.ACRO_PSYCHOLOGICAL_PERSONAL_RELATIONSHIPS_SUBSCALE,
          ).toEqual(100)
        })
      })
    })

    describe('when called with a median response', function () {
      const outcome = acro_calculation.calculate({
        payload: median_response,
      })

      describe('Total score', function () {
        it('should return the median score', function () {
          expect(outcome.ACRO_GLOBAL_SCORE).toEqual(50)
        })
      })

      describe('Physical subscale', function () {
        it('should return the median score', function () {
          expect(outcome.ACRO_PHYSICAL_SUBSCALE_SCORE).toEqual(50)
        })
      })

      describe('Psychological appearance subscale', function () {
        it('should return the median score', function () {
          expect(outcome.ACRO_PSYCHOLOGICAL_APPEARANCE_SUBSCALE).toEqual(50)
        })
      })

      describe('Psychosocial personal relationships subscale', function () {
        it('should return the median score', function () {
          expect(
            outcome.ACRO_PSYCHOLOGICAL_PERSONAL_RELATIONSHIPS_SUBSCALE,
          ).toEqual(50)
        })
      })
    })

    describe('when called with the random response', function () {
      const outcome = acro_calculation.calculate({
        payload: random_response,
      })

      describe('Total score', function () {
        it('should return the exepected score', function () {
          expect(outcome.ACRO_GLOBAL_SCORE).toEqual(53.41)
        })
      })

      describe('Physical subscale', function () {
        it('should return the exepected score', function () {
          expect(outcome.ACRO_PHYSICAL_SUBSCALE_SCORE).toEqual(50)
        })
      })

      describe('Psychological appearance subscale', function () {
        it('should return the exepected score', function () {
          expect(outcome.ACRO_PSYCHOLOGICAL_APPEARANCE_SUBSCALE).toEqual(67.86)
        })
      })
      describe('Psychosocial personal relationships subscale', function () {
        it('should return the exepected score', function () {
          expect(
            outcome.ACRO_PSYCHOLOGICAL_PERSONAL_RELATIONSHIPS_SUBSCALE,
          ).toEqual(42.86)
        })
      })
    })
  })
})



================================================
File: src/scores/acro/acro.ts
================================================
import { ACRO_INPUTS, ACRO_OUTPUT } from './definition'
import { calculate_scores } from './helpers'
import { ScoreType } from '../../types'

export const acro: ScoreType<typeof ACRO_INPUTS, typeof ACRO_OUTPUT> = {
  name: 'Acromegaly Quality of Life Questionnaire (AcroQoL)',
  readmeLocation: __dirname,
  inputSchema: ACRO_INPUTS,
  outputSchema: ACRO_OUTPUT,
  calculate: ({ data }) => {
    const PHYSICAL_SUBSCALE_SCORE = calculate_scores(data, 'PHYSICAL_SUBSCALE')
    const PSYCHOLOGICAL_APPEARANCE_SUBSCALE = calculate_scores(
      data,
      'PSYCHOLOGICAL_APPEARANCE_SUBSCALE',
    )
    const PSYCHOLOGICAL_PERSONAL_RELATIONSHIPS_SUBSCALE = calculate_scores(
      data,
      'PSYCHOLOGICAL_PERSONAL_RELATIONSHIPS_SUBSCALE',
    )
    const TOTAL_SCORE = calculate_scores(data, 'TOTAL_SCORE')

    return {
      ACRO_GLOBAL_SCORE: TOTAL_SCORE,
      ACRO_PHYSICAL_SUBSCALE_SCORE: PHYSICAL_SUBSCALE_SCORE,
      ACRO_PSYCHOLOGICAL_APPEARANCE_SUBSCALE: PSYCHOLOGICAL_APPEARANCE_SUBSCALE,
      ACRO_PSYCHOLOGICAL_PERSONAL_RELATIONSHIPS_SUBSCALE:
        PSYCHOLOGICAL_PERSONAL_RELATIONSHIPS_SUBSCALE,
    }
  },
}



================================================
File: src/scores/acro/__testdata__/acro_test_responses.ts
================================================
import {
  ALWAYS,
  COMPLETELY_AGREE,
  COMPLETELY_DISAGREE,
  MODERATELY_AGREE,
  MODERATELY_DISAGREE,
  MOST_OF_THE_TIME,
  NEITHER_AGREE_NOR_DISAGREE,
  NEVER,
  RARELY,
  SOMETIMES,
} from '../definition/acro_inputs'
// LOWER THE TOTAL THE WORSE IT IS 100 is the best 0 is the worst

// TOTAL 110
export const best_response = {
  Q01: COMPLETELY_DISAGREE,
  Q02: NEVER,
  Q03: COMPLETELY_DISAGREE,
  Q04: NEVER,
  Q05: NEVER,
  Q06: NEVER,
  Q07: NEVER,
  Q08: NEVER,
  Q09: COMPLETELY_DISAGREE,
  Q10: NEVER,
  Q11: NEVER,
  Q12: NEVER,
  Q13: COMPLETELY_DISAGREE,
  Q14: COMPLETELY_DISAGREE,
  Q15: COMPLETELY_DISAGREE,
  Q16: NEVER,
  Q17: NEVER,
  Q18: NEVER,
  Q19: COMPLETELY_DISAGREE,
  Q20: NEVER,
  Q21: NEVER,
  Q22: COMPLETELY_DISAGREE,
}

/**
 * Physicial subscale score = 18
 * Psychological appearance subscale score = 19
 * Psychological personal relationships subscale score = 18
 * Total = 55
 */
export const median_response = {
  Q01: NEITHER_AGREE_NOR_DISAGREE, // physical
  Q02: SOMETIMES, // appearance
  Q03: NEITHER_AGREE_NOR_DISAGREE, // physical
  Q04: SOMETIMES, // appearance
  Q05: SOMETIMES, // personal relationships
  Q06: SOMETIMES, // personal relationships
  Q07: SOMETIMES, // appearance
  Q08: SOMETIMES, // personal relationships
  Q09: SOMETIMES, // physical
  Q10: SOMETIMES, // personal relationships
  Q11: SOMETIMES, // appearance
  Q12: SOMETIMES, // appearance
  Q13: NEITHER_AGREE_NOR_DISAGREE, // physical
  Q14: NEITHER_AGREE_NOR_DISAGREE, // physical
  Q15: NEITHER_AGREE_NOR_DISAGREE, // physical
  Q16: SOMETIMES, // appearance
  Q17: SOMETIMES, // appearance
  Q18: SOMETIMES, // personal relationships
  Q19: NEITHER_AGREE_NOR_DISAGREE, // physical
  Q20: SOMETIMES, // personal relationships
  Q21: SOMETIMES, // personal relationships
  Q22: NEITHER_AGREE_NOR_DISAGREE, // physical
}

// TOTAL 22
export const worst_response = {
  Q01: COMPLETELY_AGREE,
  Q02: ALWAYS,
  Q03: COMPLETELY_AGREE,
  Q04: ALWAYS,
  Q05: ALWAYS,
  Q06: ALWAYS,
  Q07: ALWAYS,
  Q08: ALWAYS,
  Q09: COMPLETELY_AGREE,
  Q10: ALWAYS,
  Q11: ALWAYS,
  Q12: ALWAYS,
  Q13: COMPLETELY_AGREE,
  Q14: COMPLETELY_AGREE,
  Q15: COMPLETELY_AGREE,
  Q16: ALWAYS,
  Q17: ALWAYS,
  Q18: ALWAYS,
  Q19: COMPLETELY_AGREE,
  Q20: ALWAYS,
  Q21: ALWAYS,
  Q22: COMPLETELY_AGREE,
}

/**
 * Physicial subscale score = 24
 * Psychological appearance subscale score = 26
 * Psychological personal relationships subscale score = 19
 * Total = 69
 */
export const random_response = {
  Q01: MODERATELY_AGREE, // 2 Physicial subscale
  Q02: RARELY, // 4 Psychological appearance subscale
  Q03: MODERATELY_AGREE, // 2 Physicial subscale
  Q04: NEVER, // 5 Psychological appearance subscale
  Q05: MOST_OF_THE_TIME, // 2 Psychological personal relationships subscale
  Q06: RARELY, // 4 Psychological personal relationships subscale
  Q07: RARELY, // 4 Psychological appearance subscale
  Q08: NEVER, // 5 Psychological personal relationships subscale
  Q09: NEITHER_AGREE_NOR_DISAGREE, // 3 Physicial subscale
  Q10: ALWAYS, // 1 Psychological personal relationships subscale
  Q11: SOMETIMES, // 3 Psychological appearance subscale
  Q12: SOMETIMES, // 3 Psychological appearance subscale
  Q13: COMPLETELY_AGREE, // 1 Physicial subscale
  Q14: MODERATELY_DISAGREE, // 4 Physicial subscale
  Q15: COMPLETELY_DISAGREE, // 5 Physicial subscale
  Q16: SOMETIMES, // 3 Psychological appearance subscale
  Q17: RARELY, // 4 Psychological appearance subscale
  Q18: ALWAYS, // 1 Psychological personal relationships subscale
  Q19: MODERATELY_AGREE, // 2 Physicial subscale
  Q20: ALWAYS, // 1 Psychological personal relationships subscale
  Q21: NEVER, // 5 Psychological personal relationships subscale
  Q22: COMPLETELY_DISAGREE, // 5 Physicial subscale
}



================================================
File: src/scores/acro/definition/acro_inputs.ts
================================================
import { z } from 'zod'
import { ScoreInputSchemaType } from '../../../types'

export const NEVER = 5
export const RARELY = 4
export const SOMETIMES = 3
export const MOST_OF_THE_TIME = 2
export const ALWAYS = 1

export const COMPLETELY_AGREE = 1
export const MODERATELY_AGREE = 2
export const NEITHER_AGREE_NOR_DISAGREE = 3
export const MODERATELY_DISAGREE = 4
export const COMPLETELY_DISAGREE = 5

const FrequencyInputSchema = z.union([
  z.literal(NEVER),
  z.literal(RARELY),
  z.literal(SOMETIMES),
  z.literal(MOST_OF_THE_TIME),
  z.literal(ALWAYS),
])

const AgreementInputSchema = z.union([
  z.literal(COMPLETELY_AGREE),
  z.literal(MODERATELY_AGREE),
  z.literal(NEITHER_AGREE_NOR_DISAGREE),
  z.literal(MODERATELY_DISAGREE),
  z.literal(COMPLETELY_DISAGREE),
])

const options_frequency = [
  {
    value: ALWAYS,
    label: { en: 'Always' },
  },
  {
    value: MOST_OF_THE_TIME,
    label: {
      en: 'Most of the time',
    },
  },
  {
    value: SOMETIMES,
    label: {
      en: 'Sometimes',
    },
  },
  {
    value: RARELY,
    label: {
      en: 'Rarely',
    },
  },
  {
    value: NEVER,
    label: {
      en: 'Never',
    },
  },
]

const options_agreement = [
  {
    value: COMPLETELY_AGREE,
    label: { en: 'Completely agree' },
  },
  {
    value: MODERATELY_AGREE,
    label: {
      en: 'Moderately agree',
    },
  },
  {
    value: NEITHER_AGREE_NOR_DISAGREE,
    label: {
      en: 'Neither agree nor disagree',
    },
  },
  {
    value: MODERATELY_DISAGREE,
    label: {
      en: 'Moderately disagree',
    },
  },
  {
    value: COMPLETELY_DISAGREE,
    label: {
      en: 'Completely disagree',
    },
  },
]

export const ACRO_INPUTS = {
  Q01: {
    type: AgreementInputSchema.optional(),
    label: {
      en: 'My legs are weak',
    },
    uiOptions: {
      options: options_agreement,
    },
  },
  Q02: {
    type: FrequencyInputSchema.optional(),
    label: {
      en: 'I feel ugly',
    },
    uiOptions: {
      options: options_frequency,
    },
  },
  Q03: {
    type: AgreementInputSchema.optional(),
    label: {
      en: 'I get depressed',
    },
    uiOptions: {
      options: options_agreement,
    },
  },
  Q04: {
    type: FrequencyInputSchema.optional(),
    label: {
      en: 'I look awful in photographs',
    },
    uiOptions: {
      options: options_frequency,
    },
  },
  Q05: {
    type: FrequencyInputSchema.optional(),
    label: {
      en: 'I avoid going out very much with friends because of my appearance',
    },
    uiOptions: {
      options: options_frequency,
    },
  },
  Q06: {
    type: FrequencyInputSchema.optional(),
    label: {
      en: 'I try to avoid socializing',
    },
    uiOptions: {
      options: options_frequency,
    },
  },
  Q07: {
    type: FrequencyInputSchema.optional(),
    label: {
      en: 'I look different in the mirror.',
    },
    uiOptions: {
      options: options_frequency,
    },
  },
  Q08: {
    type: FrequencyInputSchema.optional(),
    label: {
      en: 'I feel rejected by people because of my illness',
    },
    uiOptions: {
      options: options_frequency,
    },
  },
  Q09: {
    type: AgreementInputSchema.optional(),
    label: {
      en: 'I have problems carrying out my usual activities',
    },
    uiOptions: {
      options: options_agreement,
    },
  },
  Q10: {
    type: FrequencyInputSchema.optional(),
    label: {
      en: 'People stare at me because of my appearance',
    },
    uiOptions: {
      options: options_frequency,
    },
  },
  Q11: {
    type: FrequencyInputSchema.optional(),
    label: {
      en: 'Some part of my body (nose, feet, hands,...) are too big',
    },
    uiOptions: {
      options: options_frequency,
    },
  },
  Q12: {
    type: FrequencyInputSchema.optional(),
    label: {
      en: 'I have problems doing things with my hands, for example, sewing or handling tools',
    },
    uiOptions: {
      options: options_frequency,
    },
  },
  Q13: {
    type: AgreementInputSchema.optional(),
    label: {
      en: 'The illness affects my performance at work or in my usual tasks',
    },
    uiOptions: {
      options: options_agreement,
    },
  },
  Q14: {
    type: AgreementInputSchema.optional(),
    label: {
      en: 'My joints ache',
    },
    uiOptions: {
      options: options_agreement,
    },
  },
  Q15: {
    type: AgreementInputSchema.optional(),
    label: {
      en: 'I am usually tired',
    },
    uiOptions: {
      options: options_agreement,
    },
  },
  Q16: {
    type: FrequencyInputSchema.optional(),
    label: {
      en: 'I snore at night',
    },
    uiOptions: {
      options: options_frequency,
    },
  },
  Q17: {
    type: FrequencyInputSchema.optional(),
    label: {
      en: 'It is hard for me to articulate words due to the size of my tongue',
    },
    uiOptions: {
      options: options_frequency,
    },
  },
  Q18: {
    type: FrequencyInputSchema.optional(),
    label: {
      en: 'I have problems with sexual relationships',
    },
    uiOptions: {
      options: options_frequency,
    },
  },
  Q19: {
    type: AgreementInputSchema.optional(),
    label: {
      en: 'I feel like a sick person',
    },
    uiOptions: {
      options: options_agreement,
    },
  },
  Q20: {
    type: FrequencyInputSchema.optional(),
    label: {
      en: 'The physical changes produced by my illness govern my life',
    },
    uiOptions: {
      options: options_frequency,
    },
  },
  Q21: {
    type: FrequencyInputSchema.optional(),
    label: {
      en: 'I have little sexual appetite',
    },
    uiOptions: {
      options: options_frequency,
    },
  },
  Q22: {
    type: AgreementInputSchema.optional(),
    label: {
      en: 'I feel weak',
    },
    uiOptions: {
      options: options_agreement,
    },
  },
} satisfies ScoreInputSchemaType



================================================
File: src/scores/acro/definition/acro_output.ts
================================================
import { z } from 'zod'
import { ScoreOutputSchemaType } from '../../../types'

export const ACRO_OUTPUT = {
  ACRO_GLOBAL_SCORE: {
    label: { en: 'Global score' },
    type: z.number(),
  },
  ACRO_PHYSICAL_SUBSCALE_SCORE: {
    label: { en: 'Physical subscale score' },
    type: z.number(),
  },
  ACRO_PSYCHOLOGICAL_APPEARANCE_SUBSCALE: {
    label: { en: 'Psychological subscale - Appearance score' },
    type: z.number(),
  },
  ACRO_PSYCHOLOGICAL_PERSONAL_RELATIONSHIPS_SUBSCALE: {
    label: { en: 'Psychosocial - Personal relationship score' },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType



================================================
File: src/scores/acro/definition/acro_subscales.ts
================================================
export type SubscaleType =
  | 'PHYSICAL_SUBSCALE'
  | 'PSYCHOLOGICAL_APPEARANCE_SUBSCALE'
  | 'PSYCHOLOGICAL_PERSONAL_RELATIONSHIPS_SUBSCALE'
  | 'TOTAL_SCORE'

export const ACRO_SUBSCALES: Record<SubscaleType, string[]> = {
  PHYSICAL_SUBSCALE: ['Q01', 'Q03', 'Q09', 'Q13', 'Q14', 'Q15', 'Q19', 'Q22'],
  PSYCHOLOGICAL_APPEARANCE_SUBSCALE: [
    'Q02',
    'Q04',
    'Q07',
    'Q11',
    'Q12',
    'Q16',
    'Q17',
  ],
  PSYCHOLOGICAL_PERSONAL_RELATIONSHIPS_SUBSCALE: [
    'Q05',
    'Q06',
    'Q08',
    'Q10',
    'Q18',
    'Q20',
    'Q21',
  ],
  TOTAL_SCORE: [
    'Q01',
    'Q02',
    'Q03',
    'Q04',
    'Q05',
    'Q06',
    'Q07',
    'Q08',
    'Q09',
    'Q10',
    'Q11',
    'Q12',
    'Q13',
    'Q14',
    'Q15',
    'Q16',
    'Q17',
    'Q18',
    'Q19',
    'Q20',
    'Q21',
    'Q22',
  ],
}



================================================
File: src/scores/acro/definition/index.ts
================================================
export { ACRO_INPUTS } from './acro_inputs'
export { ACRO_OUTPUT } from './acro_output'
export { ACRO_SUBSCALES } from './acro_subscales'



================================================
File: src/scores/acro/helpers/calculate_scores.ts
================================================
import { ACRO_SUBSCALES, type SubscaleType } from '../definition/acro_subscales'
import { z } from 'zod'
import { sum, compact, filter } from 'lodash'
import { ACRO_INPUTS } from '../definition'

export const calculate_scores = (
  inputs_with_answers: z.infer<
    z.ZodObject<{
      [K in keyof typeof ACRO_INPUTS]: (typeof ACRO_INPUTS)[K]['type']
    }>
  >,
  subscale: SubscaleType,
): number | null => {
  const INPUT_IDS_NEEDED_FOR_SCORING = ACRO_SUBSCALES[subscale]

  const valid_answers_in_subscale = compact(
    filter(inputs_with_answers, (_i, key) =>
      INPUT_IDS_NEEDED_FOR_SCORING.includes(key),
    ),
  )

  if (
    valid_answers_in_subscale.length !== INPUT_IDS_NEEDED_FOR_SCORING.length
  ) {
    return null
  }

  const subscaleTotal = sum(valid_answers_in_subscale)

  const bestScores = {
    PHYSICAL_SUBSCALE: 40,
    PSYCHOLOGICAL_APPEARANCE_SUBSCALE: 35,
    PSYCHOLOGICAL_PERSONAL_RELATIONSHIPS_SUBSCALE: 35,
    TOTAL_SCORE: 110,
  }

  const hundred = 100
  /**
   * Original Calculcation:
   * 22 in this case is number of questions in the subscale
   * ( (x) - 22 / (110 - 22) ) * 100
   */
  const subscaleScore =
    ((subscaleTotal - INPUT_IDS_NEEDED_FOR_SCORING.length) /
      (bestScores[subscale] - INPUT_IDS_NEEDED_FOR_SCORING.length)) *
    hundred

  // we want to round the results to two decimal places
  return Math.round(subscaleScore * 1e2) / 1e2
}



================================================
File: src/scores/acro/helpers/index.ts
================================================
export { calculate_scores } from './calculate_scores'



================================================
File: src/scores/age_calc/age_calc.test.ts
================================================
import { ScoreLibrary } from '../library'
import { age_calc } from './age_calc'
import { Score } from '../../classes'
import MockDate from 'mockdate'
const calculate_age = new Score(age_calc)

describe('age_calc', function () {
  it('age_calc calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('age_calc')
  })

  describe('the score includes the correct input fields', function () {
    it('should use the correct input fields', function () {
      const EXPECTED_CALCULATION_INPUT_IDS = ['date_of_birth']

      const configured_calculation_input_ids = Object.keys(
        calculate_age.inputSchemaAsObject.shape,
      )

      expect(configured_calculation_input_ids).toEqual(
        EXPECTED_CALCULATION_INPUT_IDS,
      )
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = calculate_age.calculate({
      payload: { date_of_birth: '1993-11-30' },
    })

    it('should return 1 calculation result', function () {
      expect(Object.keys(outcome)).toHaveLength(1)
    })

    it('should have the expected calculation id', function () {
      const EXPECTED_CALCULATION_ID = ['AGE']
      const configured_calculation_id = Object.keys(outcome)

      expect(configured_calculation_id).toEqual(EXPECTED_CALCULATION_ID)
    })
  })

  describe('each calculated score shall include the correct formula and output the correct result', function () {
    it('should return correct result age', function () {
      const dob = '1993-11-30'
      MockDate.set('2025-01-01T00:00:00Z')
      const EXPECTED_AGE = 31

      const result = calculate_age.calculate({
        payload: { date_of_birth: '1993-11-30' },
      })

      expect(result.AGE).toEqual(EXPECTED_AGE)
    })
  })
})



================================================
File: src/scores/age_calc/age_calc.ts
================================================
import { ScoreType } from '../../types'
import { AGE_CALC_OUTPUT, AGE_CALC_INPUTS } from './definition'

export const age_calc: ScoreType<
  typeof AGE_CALC_INPUTS,
  typeof AGE_CALC_OUTPUT
> = {
  name: 'Age Calculator',
  readmeLocation: __dirname,
  inputSchema: AGE_CALC_INPUTS,
  outputSchema: AGE_CALC_OUTPUT,
  calculate: ({ data }) => {
    const dateOfBirth = new Date(data.date_of_birth)
    const today = new Date()

    const age = today.getFullYear() - dateOfBirth.getFullYear()
    const isBirthdayPassed =
      today.getMonth() > dateOfBirth.getMonth() ||
      (today.getMonth() === dateOfBirth.getMonth() &&
        today.getDate() >= dateOfBirth.getDate())

    const adjustedAge = isBirthdayPassed ? age : age - 1

    return {
      AGE: adjustedAge,
    }
  },
}



================================================
File: src/scores/age_calc/definition/age_calc_inputs.ts
================================================
import { z } from 'zod'
import { ScoreInputSchemaType } from '../../../types'

export const AGE_CALC_INPUTS = {
  date_of_birth: {
    type: z.string().date(),
    label: {
      nl: 'Geboortedatum',
      en: 'Date of Birth',
      fr: 'Date de naissance',
      de: 'Geburtsdatum',
    },
  },
} satisfies ScoreInputSchemaType



================================================
File: src/scores/age_calc/definition/age_calc_output.ts
================================================
import { z } from 'zod'

export const AGE_CALC_OUTPUT = {
  AGE: {
    label: { en: 'Age' },
    unit: { en: 'years' },
    type: z.number(),
  },
}



================================================
File: src/scores/age_calc/definition/index.ts
================================================
export { AGE_CALC_INPUTS } from './age_calc_inputs'
export { AGE_CALC_OUTPUT } from './age_calc_output'



================================================
File: src/scores/AQ_10/aq_10.test.ts
================================================
import { ZodError } from 'zod'
import { Score } from '../../classes'
import { ScoreLibrary } from '../library'
import {
  best_response,
  random_response,
  worst_response,
} from './__testdata__/aq_10_test_responses'
import { aq_10 } from './aq_10'

const BEST_SCORE = 0
const WORST_SCORE = 10

const aq_10_calculation = new Score(aq_10)

describe('aq_10', function () {
  it('aq_10 calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('aq_10')
  })

  describe('basic assumptions', function () {
    const outcome = aq_10_calculation.calculate({ payload: best_response })

    it('should return 2 calculation results', function () {
      expect(Object.keys(outcome).length).toEqual(2)
    })

    it('should have the expected calculation result ids', function () {
      const EXPECTED_CALCULATION_ID = ['AQ10_SCORE', 'AQ10_INTERPRETATION']

      const configured_calculation_id = Object.keys(outcome)

      expect(configured_calculation_id).toEqual(EXPECTED_CALCULATION_ID)
    })
  })

  describe('validation', function () {
    describe('the score includes the correct input fields', function () {
      it('should have all the expected input ids configured', function () {
        const EXPECTED_INPUT_IDS = [
          'AQ10_Q01',
          'AQ10_Q02',
          'AQ10_Q03',
          'AQ10_Q04',
          'AQ10_Q05',
          'AQ10_Q06',
          'AQ10_Q07',
          'AQ10_Q08',
          'AQ10_Q09',
          'AQ10_Q10',
        ]

        const configured_input_ids = Object.keys(aq_10_calculation.inputSchema)

        expect(EXPECTED_INPUT_IDS).toEqual(configured_input_ids)
      })
    })

    describe('when an answer is not not one of the allowed answers', function () {
      it('should throw a ZodError', function () {
        expect(() =>
          aq_10_calculation.calculate({
            payload: {
              AQ10_Q01: -1,
            },
          }),
        ).toThrow(ZodError)
      })
    })

    describe('when called with an empty response', function () {
      const outcome = aq_10_calculation.calculate({
        payload: {},
        opts: {
          nullOnMissingInputs: true,
        },
      })

      it('should return null result', function () {
        expect(outcome.AQ10_SCORE).toEqual(null)
      })

      it('should return null result for the interpretation', function () {
        expect(outcome.AQ10_INTERPRETATION).toEqual(null)
      })
    })
  })

  describe('score calculation', function () {
    describe('when called with the best response', function () {
      const outcome = aq_10_calculation.calculate({ payload: best_response })

      it('should return the best score', function () {
        expect(outcome.AQ10_SCORE).toEqual(BEST_SCORE)
      })
    })

    describe('when called with the worst response', function () {
      const outcome = aq_10_calculation.calculate({ payload: worst_response })

      it('should return the worst score', function () {
        expect(outcome.AQ10_SCORE).toEqual(WORST_SCORE)
      })
    })

    describe('when called with a random response', function () {
      const outcome = aq_10_calculation.calculate({ payload: random_response })

      it('should return the expected score', function () {
        const EXPECTED_SCORE = 6
        expect(outcome.AQ10_SCORE).toEqual(EXPECTED_SCORE)
      })
    })
  })
})



================================================
File: src/scores/AQ_10/aq_10.ts
================================================
import { ScoreType } from '../../types'
import { AQ10_INPUTS, AQ10_OUTPUT } from './definition'
import { sum } from 'lodash'

export const aq_10: ScoreType<typeof AQ10_INPUTS, typeof AQ10_OUTPUT> = {
  name: 'Autism Spectrum Quotient (AQ) - Adolescent Version - (AQ-10)',
  readmeLocation: __dirname,
  inputSchema: AQ10_INPUTS,
  outputSchema: AQ10_OUTPUT,
  calculate: ({ data }) => {
    return {
      AQ10_SCORE: sum(Object.values(data)),
      AQ10_INTERPRETATION:
        'If the individual scores 6 or above, consider referring them for a specialist diagnostic assessment.',
    }
  },
}



================================================
File: src/scores/AQ_10/__testdata__/aq_10_test_responses.ts
================================================
export const best_response = {
  AQ10_Q01: 0,
  AQ10_Q02: 0,
  AQ10_Q03: 0,
  AQ10_Q04: 0,
  AQ10_Q05: 0,
  AQ10_Q06: 0,
  AQ10_Q07: 0,
  AQ10_Q08: 0,
  AQ10_Q09: 0,
  AQ10_Q10: 0,
}

export const worst_response = {
  AQ10_Q01: 1,
  AQ10_Q02: 1,
  AQ10_Q03: 1,
  AQ10_Q04: 1,
  AQ10_Q05: 1,
  AQ10_Q06: 1,
  AQ10_Q07: 1,
  AQ10_Q08: 1,
  AQ10_Q09: 1,
  AQ10_Q10: 1,
}

/**
 * Expected score: 6
 */
export const random_response = {
  AQ10_Q01: 1,
  AQ10_Q02: 0,
  AQ10_Q03: 1,
  AQ10_Q04: 0,
  AQ10_Q05: 0,
  AQ10_Q06: 1,
  AQ10_Q07: 1,
  AQ10_Q08: 1,
  AQ10_Q09: 0,
  AQ10_Q10: 1,
}



================================================
File: src/scores/AQ_10/definition/aq_10_inputs.ts
================================================
import { z } from 'zod'
import {
  type EnumNumberInputType,
  type ScoreInputSchemaType,
} from '../../../types'

// for questions 1, 5, 8 and 10
const inputType1 = {
  type: z.union([z.literal(1), z.literal(0)]),
  uiOptions: {
    options: [
      {
        label: { en: 'Definitely Agree' },
        value: 1,
      },
      {
        label: { en: 'Slightly Agree' },
        value: 1,
      },
      {
        label: { en: 'Slightly Disagree' },
        value: 0,
      },
      {
        label: { en: 'Definitely Disagree' },
        value: 0,
      },
    ],
  },
} satisfies EnumNumberInputType

const inputType2 = {
  type: z.union([z.literal(1), z.literal(0)]),
  uiOptions: {
    options: [
      {
        label: { en: 'Definitely Agree' },
        value: 0,
      },
      {
        label: { en: 'Slightly Agree' },
        value: 0,
      },
      {
        label: { en: 'Slightly Disagree' },
        value: 1,
      },
      {
        label: { en: 'Definitely Disagree' },
        value: 1,
      },
    ],
  },
} satisfies EnumNumberInputType

export const AQ10_INPUTS = {
  AQ10_Q01: {
    label: {
      en: 'S/he notices patterns in things all the time',
    },
    ...inputType1,
  },
  AQ10_Q02: {
    label: {
      en: 'S/he usually concentrates more on the whole picture, rather than the small details',
    },
    ...inputType2,
  },
  AQ10_Q03: {
    label: {
      en: 'In a social group, s/he can easily keep track of several different peoples conversations',
    },
    ...inputType2,
  },
  AQ10_Q04: {
    label: {
      en: 'If there is an interruption, s/he can switch back to what s/he was doing very quickly',
    },
    ...inputType2,
  },
  AQ10_Q05: {
    label: {
      en: 'S/he frequently finds that s/he doesnt know how to keep a conversation going',
    },
    ...inputType1,
  },
  AQ10_Q06: {
    label: {
      en: 'S/he is good at social chit-chat',
    },
    ...inputType2,
  },
  AQ10_Q07: {
    label: {
      en: 'When s/he was younger, s/he used to enjoy playing games involving pretending with other children',
    },
    ...inputType2,
  },
  AQ10_Q08: {
    label: {
      en: 'S/he finds it difficult to imagine what it would be like to be someone else',
    },
    ...inputType1,
  },
  AQ10_Q09: {
    label: {
      en: 'S/he finds social situations easy',
    },
    ...inputType2,
  },
  AQ10_Q10: {
    label: {
      en: 'S/he finds it hard to make new friends',
    },
    ...inputType1,
  },
} satisfies ScoreInputSchemaType



================================================
File: src/scores/AQ_10/definition/aq_10_output.ts
================================================
import { z } from 'zod'
import { type ScoreOutputSchemaType } from '../../../types'

export const AQ10_OUTPUT = {
  AQ10_SCORE: {
    label: { en: 'AQ-10 Score' },
    type: z.number(),
  },
  AQ10_INTERPRETATION: {
    label: { en: 'AQ-10 Interpretation' },
    type: z.string(),
  },
} satisfies ScoreOutputSchemaType



================================================
File: src/scores/AQ_10/definition/index.ts
================================================
export { AQ10_INPUTS } from './aq_10_inputs'
export { AQ10_OUTPUT } from './aq_10_output'



================================================
File: src/scores/asrs/asrs.test.ts
================================================
import { ScoreLibrary } from '../library'
import {
  best_response,
  random_response,
  worst_response,
} from './__testdata__/asrs_test_responses'
import { asrs } from './asrs'
import { ASRS_PARTS, ASRS_SUBSCALES } from './definition'
import { Score } from '../../classes'
import { ZodError } from 'zod'

const asrs_calculation = new Score(asrs)

describe('asrs', function () {
  it('asrs calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('asrs')
  })

  describe('basic assumptions', function () {
    const outcome = asrs_calculation.calculate({ payload: best_response })

    it('should have the expected calculation ids', function () {
      const EXPECTED_CALCULATION_IDS = [
        'ASRS_TOTAL_SCORE',
        'ASRS_PART_A_SCORE',
        'ASRS_PART_B_SCORE',
        'ASRS_INATTENTIVE_SUBSCALE_SCORE',
        'ASRS_HYPERACTIVE_IMPULSIVE_SUBSCALE_MOTOR_SCORE',
        'ASRS_HYPERACTIVE_IMPULSIVE_SUBSCALE_VERBAL_SCORE',
      ]
      const configured_calculation_ids = Object.keys(outcome)

      expect(configured_calculation_ids).toEqual(EXPECTED_CALCULATION_IDS)
    })
  })

  describe('validation', function () {
    describe('the score includes the correct input fields', function () {
      it('should have all the expected input ids configured', function () {
        const EXPECTED_INPUT_IDS = [
          'Q01',
          'Q02',
          'Q03',
          'Q04',
          'Q05',
          'Q06',
          'Q07',
          'Q08',
          'Q09',
          'Q10',
          'Q11',
          'Q12',
          'Q13',
          'Q14',
          'Q15',
          'Q16',
          'Q17',
          'Q18',
        ]

        const configured_input_ids = Object.keys(
          asrs_calculation.inputSchemaAsObject.shape,
        )

        expect(EXPECTED_INPUT_IDS).toEqual(configured_input_ids)
      })
    })

    describe('ASRS parts', function () {
      describe('Part A', function () {
        it('should have the expected input ids', function () {
          const EXPECTED_INPUT_IDS = ['Q01', 'Q02', 'Q03', 'Q04', 'Q05', 'Q06']

          expect(EXPECTED_INPUT_IDS).toEqual(ASRS_PARTS.PART_A)
        })
      })

      describe('Part B', function () {
        it('should have the expected input ids', function () {
          const EXPECTED_INPUT_IDS = [
            'Q07',
            'Q08',
            'Q09',
            'Q10',
            'Q11',
            'Q12',
            'Q13',
            'Q14',
            'Q15',
            'Q16',
            'Q17',
            'Q18',
          ]

          expect(EXPECTED_INPUT_IDS).toEqual(ASRS_PARTS.PART_B)
        })
      })
    })

    describe('ASRS subscales', function () {
      describe('Inattentive subscale', function () {
        it('should have the expected input ids', function () {
          const EXPECTED_INPUT_IDS = [
            'Q01',
            'Q02',
            'Q03',
            'Q04',
            'Q07',
            'Q08',
            'Q09',
            'Q10',
            'Q11',
          ]

          expect(EXPECTED_INPUT_IDS).toEqual(
            ASRS_SUBSCALES.INATTENTIVE_SUBSCALE,
          )
        })
      })

      describe('Hyperactive/Impulsive subscale (Motor)', function () {
        it('should have the expected input ids', function () {
          const EXPECTED_INPUT_IDS = ['Q05', 'Q06', 'Q12', 'Q13', 'Q14']

          expect(EXPECTED_INPUT_IDS).toEqual(
            ASRS_SUBSCALES.HYPERACTIVE_IMPULSIVE_SUBSCALE_MOTOR,
          )
        })
      })

      describe('Hyperactive/Impulsive subscale (Verbal)', function () {
        it('should have the expected input ids', function () {
          const EXPECTED_INPUT_IDS = ['Q15', 'Q16', 'Q17', 'Q18']

          expect(EXPECTED_INPUT_IDS).toEqual(
            ASRS_SUBSCALES.HYPERACTIVE_IMPULSIVE_SUBSCALE_VERBAL,
          )
        })
      })
    })

    describe('when an answer is below the expected range', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          asrs_calculation.calculate({
            payload: {
              Q01: -1,
            },
          }),
        ).toThrow(ZodError)
      })
    })

    describe('when an answer is above the expected range', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          asrs_calculation.calculate({
            payload: {
              Q01: 5,
            },
          }),
        ).toThrow(ZodError)
      })
    })

    describe('when there are non-numerical answers', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          asrs_calculation.calculate({
            payload: {
              Q01: "I'm not a number",
            },
          }),
        ).toThrow(ZodError)
      })
    })

    describe('when called with an empty response', function () {
      const outcome = asrs_calculation.calculate({ payload: {} })
      describe('Part A', function () {
        it('should return undefined for the score', function () {
          expect(outcome.ASRS_PART_A_SCORE).toEqual(null)
        })

        // it('should return MISSING for the status', function () {
        //   const score = view_status('ASRS_PART_A_SCORE')(outcome)

        //   expect(score).toEqual(MISSING_STATUS)
        // })
      })
      describe('Part B', function () {
        it('should return undefined for the score', function () {
          expect(outcome.ASRS_PART_B_SCORE).toEqual(null)
        })

        // it('should return MISSING for the status', function () {
        //   const score = view_status('ASRS_PART_B_SCORE')(outcome)

        //   expect(score).toEqual(MISSING_STATUS)
        // })
      })
      describe('Total score', function () {
        it('should return undefined for the score', function () {
          expect(outcome.ASRS_TOTAL_SCORE).toEqual(null)
        })

        // it('should return MISSING for the status', function () {
        //   const score = view_status('ASRS_TOTAL_SCORE')(outcome)

        //   expect(score).toEqual(MISSING_STATUS)
        // })
      })
      describe('Inattentive Subscale', function () {
        it('should return undefined for the score', function () {
          expect(outcome.ASRS_INATTENTIVE_SUBSCALE_SCORE).toEqual(null)
        })

        // it('should return MISSING for the status', function () {
        //   const score = view_status('ASRS_INATTENTIVE_SUBSCALE_SCORE')(outcome)

        //   expect(score).toEqual(MISSING_STATUS)
        // })
      })
      describe('Hyperactive/Impulsive Subscale (Motor)', function () {
        it('should return undefined for the score', function () {
          expect(
            outcome.ASRS_HYPERACTIVE_IMPULSIVE_SUBSCALE_MOTOR_SCORE,
          ).toEqual(null)
        })

        // it('should return MISSING for the status', function () {
        //   const score = view_status('ASRS_INATTENTIVE_SUBSCALE_SCORE')(outcome)

        //   expect(score).toEqual(MISSING_STATUS)
        // })
      })
      describe('Hyperactive/Impulsive Subscale (Motor)', function () {
        it('should return undefined for the score', function () {
          expect(
            outcome.ASRS_HYPERACTIVE_IMPULSIVE_SUBSCALE_VERBAL_SCORE,
          ).toEqual(null)
        })

        // it('should return MISSING for the status', function () {
        //   const score = view_status(
        //     'ASRS_HYPERACTIVE_IMPULSIVE_SUBSCALE_MOTOR_SCORE'
        //   )(outcome)

        //   expect(score).toEqual(MISSING_STATUS)
        // })
      })
      describe('Hyperactive/Impulsive Subscale (Verbal)', function () {
        it('should return undefined for the score', function () {
          expect(
            outcome.ASRS_HYPERACTIVE_IMPULSIVE_SUBSCALE_VERBAL_SCORE,
          ).toEqual(null)
        })

        // it('should return MISSING for the status', function () {
        //   const score = view_status(
        //     'ASRS_HYPERACTIVE_IMPULSIVE_SUBSCALE_VERBAL_SCORE'
        // )(outcome)

        //   expect(score).toEqual(MISSING_STATUS)
        // })
      })
    })
  })

  describe('score calculation', function () {
    describe('when called with the worst response', function () {
      const outcome = asrs_calculation.calculate({
        payload: worst_response,
      })

      describe('Part A', function () {
        it('should return the worst score', function () {
          const score = outcome.ASRS_PART_A_SCORE
          expect(score).toEqual(6)
        })
      })
      describe('Part B', function () {
        it('should return the worst score', function () {
          const score = outcome.ASRS_PART_B_SCORE
          expect(score).toEqual(12)
        })
      })
      describe('Total score', function () {
        it('should return the worst score', function () {
          const score = outcome.ASRS_TOTAL_SCORE
          expect(score).toEqual(18)
        })
      })
      describe('Inattentive Subscale', function () {
        it('should return the worst score', function () {
          const score = outcome.ASRS_INATTENTIVE_SUBSCALE_SCORE
          expect(score).toEqual(9)
        })
      })
      describe('Hyperactive/Impulsive Subscale (Motor)', function () {
        it('should return the worst score', function () {
          const score = outcome.ASRS_HYPERACTIVE_IMPULSIVE_SUBSCALE_MOTOR_SCORE
          expect(score).toEqual(5)
        })
      })
      describe('Hyperactive/Impulsive Subscale (Verbal)', function () {
        it('should return the worst score', function () {
          const score = outcome.ASRS_HYPERACTIVE_IMPULSIVE_SUBSCALE_VERBAL_SCORE
          expect(score).toEqual(4)
        })
      })
    })

    describe('when called with the best response', function () {
      const outcome = asrs_calculation.calculate({
        payload: best_response,
      })

      describe('Part A', function () {
        it('should return the best score', function () {
          const score = outcome.ASRS_PART_A_SCORE
          expect(score).toEqual(0)
        })
      })
      describe('Part B', function () {
        it('should return the best score', function () {
          const score = outcome.ASRS_PART_B_SCORE
          expect(score).toEqual(0)
        })
      })
      describe('Total score', function () {
        it('should return the best score', function () {
          const score = outcome.ASRS_TOTAL_SCORE
          expect(score).toEqual(0)
        })
      })
      describe('Inattentive Subscale', function () {
        it('should return the best score', function () {
          const score = outcome.ASRS_INATTENTIVE_SUBSCALE_SCORE
          expect(score).toEqual(0)
        })
      })
      describe('Hyperactive/Impulsive Subscale (Motor)', function () {
        it('should return the best score', function () {
          const score = outcome.ASRS_HYPERACTIVE_IMPULSIVE_SUBSCALE_MOTOR_SCORE
          expect(score).toEqual(0)
        })
      })
      describe('Hyperactive/Impulsive Subscale (Verbal)', function () {
        it('should return the best score', function () {
          const score = outcome.ASRS_HYPERACTIVE_IMPULSIVE_SUBSCALE_VERBAL_SCORE
          expect(score).toEqual(0)
        })
      })
    })

    describe('when called with the random response', function () {
      const outcome = asrs_calculation.calculate({
        payload: random_response,
      })

      describe('Part A', function () {
        it('should return the exepected score', function () {
          const score = outcome.ASRS_PART_A_SCORE
          expect(score).toEqual(2)
        })
      })
      describe('Part B', function () {
        it('should return the exepected score', function () {
          const score = outcome.ASRS_PART_B_SCORE
          expect(score).toEqual(5)
        })
      })
      describe('Total score', function () {
        it('should return the exepected score', function () {
          const score = outcome.ASRS_TOTAL_SCORE
          expect(score).toEqual(7)
        })
      })
      describe('Inattentive Subscale', function () {
        it('should return the exepected score', function () {
          const score = outcome.ASRS_INATTENTIVE_SUBSCALE_SCORE
          expect(score).toEqual(4)
        })
      })
      describe('Hyperactive/Impulsive Subscale (Motor)', function () {
        it('should return the exepected score', function () {
          const score = outcome.ASRS_HYPERACTIVE_IMPULSIVE_SUBSCALE_MOTOR_SCORE
          expect(score).toEqual(2)
        })
      })
      describe('Hyperactive/Impulsive Subscale (Verbal)', function () {
        it('should return the exepected score', function () {
          const score = outcome.ASRS_HYPERACTIVE_IMPULSIVE_SUBSCALE_VERBAL_SCORE
          expect(score).toEqual(1)
        })
      })
    })
  })
})



================================================
File: src/scores/asrs/asrs.ts
================================================
import { ASRS_INPUTS, ASRS_OUTPUT } from './definition'
import { calculate_part_scores, calculate_subscale_scores } from './helpers'
import { ScoreType } from '../../types'

export const asrs: ScoreType<typeof ASRS_INPUTS, typeof ASRS_OUTPUT> = {
  name: 'Adult ADHD Self-Report Scale (ASRS-v1.1)',
  readmeLocation: __dirname,
  inputSchema: ASRS_INPUTS,
  outputSchema: ASRS_OUTPUT,
  calculate: ({ data }) => {
    const PART_A_SCORE = calculate_part_scores(data, 'PART_A')
    const PART_B_SCORE = calculate_part_scores(data, 'PART_B')
    const TOTAL_SCORE =
      PART_A_SCORE === null || PART_B_SCORE === null
        ? null
        : PART_A_SCORE + PART_B_SCORE

    const ASRS_INATTENTIVE_SUBSCALE_SCORE = calculate_subscale_scores(
      data,
      'INATTENTIVE_SUBSCALE',
    )
    const ASRS_HYPERACTIVE_IMPULSIVE_SUBSCALE_MOTOR_SCORE =
      calculate_subscale_scores(data, 'HYPERACTIVE_IMPULSIVE_SUBSCALE_MOTOR')
    const ASRS_HYPERACTIVE_IMPULSIVE_SUBSCALE_VERBAL_SCORE =
      calculate_subscale_scores(data, 'HYPERACTIVE_IMPULSIVE_SUBSCALE_VERBAL')

    return {
      ASRS_TOTAL_SCORE: TOTAL_SCORE,
      ASRS_PART_A_SCORE: PART_A_SCORE,
      ASRS_PART_B_SCORE: PART_B_SCORE,
      ASRS_INATTENTIVE_SUBSCALE_SCORE: ASRS_INATTENTIVE_SUBSCALE_SCORE,
      ASRS_HYPERACTIVE_IMPULSIVE_SUBSCALE_MOTOR_SCORE:
        ASRS_HYPERACTIVE_IMPULSIVE_SUBSCALE_MOTOR_SCORE,
      ASRS_HYPERACTIVE_IMPULSIVE_SUBSCALE_VERBAL_SCORE:
        ASRS_HYPERACTIVE_IMPULSIVE_SUBSCALE_VERBAL_SCORE,
    }
  },
}



================================================
File: src/scores/asrs/__testdata__/asrs_test_responses.ts
================================================
import {
  NEVER,
  OFTEN,
  RARELY,
  SOMETIMES,
  VERY_OFTEN,
} from '../definition/asrs_inputs'

export const best_response = {
  Q01: NEVER,
  Q02: NEVER,
  Q03: NEVER,
  Q04: NEVER,
  Q05: NEVER,
  Q06: NEVER,
  Q07: NEVER,
  Q08: NEVER,
  Q09: NEVER,
  Q10: NEVER,
  Q11: NEVER,
  Q12: NEVER,
  Q13: NEVER,
  Q14: NEVER,
  Q15: NEVER,
  Q16: NEVER,
  Q17: NEVER,
  Q18: NEVER,
}

export const worst_response = {
  Q01: VERY_OFTEN,
  Q02: VERY_OFTEN,
  Q03: VERY_OFTEN,
  Q04: VERY_OFTEN,
  Q05: VERY_OFTEN,
  Q06: VERY_OFTEN,
  Q07: VERY_OFTEN,
  Q08: VERY_OFTEN,
  Q09: VERY_OFTEN,
  Q10: VERY_OFTEN,
  Q11: VERY_OFTEN,
  Q12: VERY_OFTEN,
  Q13: VERY_OFTEN,
  Q14: VERY_OFTEN,
  Q15: VERY_OFTEN,
  Q16: VERY_OFTEN,
  Q17: VERY_OFTEN,
  Q18: VERY_OFTEN,
}

/**
 * Part A = 2
 * Part B = 5
 * Total = 7
 * Inattentive Subscale = 4
 * Hyperactive/Impulsive Subscale (Motor) = 2
 * Hyperactive/Impulsive Subscale (Verbal) = 1
 */
export const random_response = {
  Q01: NEVER,
  Q02: VERY_OFTEN, // 1
  Q03: OFTEN, // 1
  Q04: RARELY,
  Q05: SOMETIMES,
  Q06: RARELY,
  Q07: NEVER,
  Q08: RARELY,
  Q09: SOMETIMES, // 1
  Q10: VERY_OFTEN, // 1
  Q11: RARELY,
  Q12: SOMETIMES, // 1
  Q13: VERY_OFTEN, // 1
  Q14: RARELY,
  Q15: NEVER,
  Q16: SOMETIMES, // 1
  Q17: NEVER,
  Q18: NEVER,
}



================================================
File: src/scores/asrs/definition/asrs_inputs.ts
================================================
import { z } from 'zod'
import { ScoreInputSchemaType } from '../../../types'

export const NEVER = 0
export const RARELY = 1
export const SOMETIMES = 2
export const OFTEN = 3
export const VERY_OFTEN = 4

const OPTIONS = [
  {
    value: NEVER,
    label: { en: 'Never' },
  },
  {
    value: RARELY,
    label: {
      en: 'Rarely',
    },
  },
  {
    value: SOMETIMES,
    label: {
      en: 'Sometimes',
    },
  },
  {
    value: OFTEN,
    label: {
      en: 'Often',
    },
  },
  {
    value: VERY_OFTEN,
    label: {
      en: 'Very often',
    },
  },
]

const InputTypeSchema = z
  .union([
    z.literal(NEVER),
    z.literal(RARELY),
    z.literal(SOMETIMES),
    z.literal(OFTEN),
    z.literal(VERY_OFTEN),
  ])
  .optional()

export const ASRS_INPUTS = {
  Q01: {
    type: InputTypeSchema,
    label: {
      en: 'How often do you have trouble wrapping up the final details of a project, once the challenging parts have been done?',
    },
    uiOptions: {
      options: OPTIONS,
    },
  },
  Q02: {
    type: InputTypeSchema,
    label: {
      en: 'How often do you have difficulty getting things in order when you have to do a task that requires organization?',
    },
    uiOptions: {
      options: OPTIONS,
    },
  },
  Q03: {
    type: InputTypeSchema,
    label: {
      en: 'How often do you have problems remembering appointments or obligations?',
    },
    uiOptions: {
      options: OPTIONS,
    },
  },
  Q04: {
    type: InputTypeSchema,
    label: {
      en: 'When you have a task that requires a lot of thought, how often do you avoid or delay getting started?',
    },
    uiOptions: {
      options: OPTIONS,
    },
  },
  Q05: {
    type: InputTypeSchema,
    label: {
      en: 'How often do you fidget or squirm with your hands or feet when you have to sit down for a long time?',
    },
    uiOptions: {
      options: OPTIONS,
    },
  },
  Q06: {
    type: InputTypeSchema,
    label: {
      en: 'How often do you feel overly active and compelled to do things, like you were driven by a motor?',
    },
    uiOptions: {
      options: OPTIONS,
    },
  },
  Q07: {
    type: InputTypeSchema,
    label: {
      en: 'How often do you make careless mistakes when you have to work on a boring or difficult project?',
    },
    uiOptions: {
      options: OPTIONS,
    },
  },
  Q08: {
    type: InputTypeSchema,
    label: {
      en: 'How often do you have difficulty keeping your attention when you are doing boring or repetitive work?',
    },
    uiOptions: {
      options: OPTIONS,
    },
  },
  Q09: {
    type: InputTypeSchema,
    label: {
      en: 'How often do you have difficulty concentrating on what people say to you, even when they are speaking to you directly?',
    },
    uiOptions: {
      options: OPTIONS,
    },
  },
  Q10: {
    type: InputTypeSchema,
    label: {
      en: 'How often do you misplace or have difficulty finding things at home or at work?',
    },
    uiOptions: {
      options: OPTIONS,
    },
  },
  Q11: {
    type: InputTypeSchema,
    label: {
      en: 'How often are you distracted by activity or noise around you?',
    },
    uiOptions: {
      options: OPTIONS,
    },
  },
  Q12: {
    type: InputTypeSchema,
    label: {
      en: 'How often do you leave your seat in meetings or other situations in which you are expected to remain seated?',
    },
    uiOptions: {
      options: OPTIONS,
    },
  },
  Q13: {
    type: InputTypeSchema,
    label: {
      en: 'How often do you feel restless or fidgety?',
    },
    uiOptions: {
      options: OPTIONS,
    },
  },
  Q14: {
    type: InputTypeSchema,
    label: {
      en: 'How often do you have difficulty unwinding and relaxing when you have time to yourself?',
    },
    uiOptions: {
      options: OPTIONS,
    },
  },
  Q15: {
    type: InputTypeSchema,
    label: {
      en: 'How often do you find yourself talking too much when you are in social situations?',
    },
    uiOptions: {
      options: OPTIONS,
    },
  },
  Q16: {
    type: InputTypeSchema,
    label: {
      en: 'When you’re in a conversation, how often do you find yourself finishing the sentences of the people you are talking to, before they can finish them themselves?',
    },
    uiOptions: {
      options: OPTIONS,
    },
  },
  Q17: {
    type: InputTypeSchema,
    label: {
      en: 'How often do you have difficulty waiting your turn in situations when turn taking is required?',
    },
    uiOptions: {
      options: OPTIONS,
    },
  },
  Q18: {
    type: InputTypeSchema,
    label: {
      en: 'How often do you interrupt others when they are busy?',
    },
    uiOptions: {
      options: OPTIONS,
    },
  },
} satisfies ScoreInputSchemaType

export const POSITIVE_SCORES = {
  Q01: [SOMETIMES, OFTEN, VERY_OFTEN],
  Q02: [SOMETIMES, OFTEN, VERY_OFTEN],
  Q03: [SOMETIMES, OFTEN, VERY_OFTEN],
  Q04: [OFTEN, VERY_OFTEN],
  Q05: [OFTEN, VERY_OFTEN],
  Q06: [OFTEN, VERY_OFTEN],
  Q07: [OFTEN, VERY_OFTEN],
  Q08: [OFTEN, VERY_OFTEN],
  Q09: [SOMETIMES, OFTEN, VERY_OFTEN],
  Q10: [OFTEN, VERY_OFTEN],
  Q11: [OFTEN, VERY_OFTEN],
  Q12: [SOMETIMES, OFTEN, VERY_OFTEN],
  Q13: [OFTEN, VERY_OFTEN],
  Q14: [OFTEN, VERY_OFTEN],
  Q15: [OFTEN, VERY_OFTEN],
  Q16: [SOMETIMES, OFTEN, VERY_OFTEN],
  Q17: [OFTEN, VERY_OFTEN],
  Q18: [SOMETIMES, OFTEN, VERY_OFTEN],
} satisfies Record<keyof typeof ASRS_INPUTS, number[]>



================================================
File: src/scores/asrs/definition/asrs_output.ts
================================================
import { z } from 'zod'
import { ScoreOutputSchemaType } from '../../../types'

export const ASRS_OUTPUT = {
  ASRS_TOTAL_SCORE: {
    label: { en: 'ASRS - Total Score' },
    type: z.number(),
  },
  ASRS_PART_A_SCORE: {
    label: { en: 'ASRS - Part A' },
    type: z.number(),
  },
  ASRS_PART_B_SCORE: {
    label: { en: 'ASRS - Part B' },
    type: z.number(),
  },
  ASRS_INATTENTIVE_SUBSCALE_SCORE: {
    label: { en: 'ASRS - Inattentive Subscale Score' },
    type: z.number(),
  },
  ASRS_HYPERACTIVE_IMPULSIVE_SUBSCALE_MOTOR_SCORE: {
    label: { en: 'ASRS - Hyperactive/Impulsive Subscale (Motor)' },
    type: z.number(),
  },
  ASRS_HYPERACTIVE_IMPULSIVE_SUBSCALE_VERBAL_SCORE: {
    label: { en: 'ASRS - Hyperactive/Impulsive Subscale (Verbal)' },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType



================================================
File: src/scores/asrs/definition/asrs_parts.ts
================================================
export type PartType = 'PART_A' | 'PART_B'

export const ASRS_PARTS: Record<PartType, string[]> = {
  PART_A: ['Q01', 'Q02', 'Q03', 'Q04', 'Q05', 'Q06'],
  PART_B: [
    'Q07',
    'Q08',
    'Q09',
    'Q10',
    'Q11',
    'Q12',
    'Q13',
    'Q14',
    'Q15',
    'Q16',
    'Q17',
    'Q18',
  ],
}



================================================
File: src/scores/asrs/definition/asrs_subscales.ts
================================================
export type SubscaleType =
  | 'INATTENTIVE_SUBSCALE'
  | 'HYPERACTIVE_IMPULSIVE_SUBSCALE_MOTOR'
  | 'HYPERACTIVE_IMPULSIVE_SUBSCALE_VERBAL'

export const ASRS_SUBSCALES: Record<SubscaleType, string[]> = {
  INATTENTIVE_SUBSCALE: [
    'Q01',
    'Q02',
    'Q03',
    'Q04',
    'Q07',
    'Q08',
    'Q09',
    'Q10',
    'Q11',
  ],
  HYPERACTIVE_IMPULSIVE_SUBSCALE_MOTOR: ['Q05', 'Q06', 'Q12', 'Q13', 'Q14'],
  HYPERACTIVE_IMPULSIVE_SUBSCALE_VERBAL: ['Q15', 'Q16', 'Q17', 'Q18'],
}



================================================
File: src/scores/asrs/definition/index.ts
================================================
export { ASRS_INPUTS, POSITIVE_SCORES } from './asrs_inputs'
export { ASRS_OUTPUT } from './asrs_output'
export { ASRS_PARTS } from './asrs_parts'
export { ASRS_SUBSCALES } from './asrs_subscales'



================================================
File: src/scores/asrs/helpers/calculate_part_scores.ts
================================================
import { ASRS_PARTS, type PartType } from '../definition/asrs_parts'
import { ASRS_INPUTS, POSITIVE_SCORES } from '../definition'
import { sum, map, pick } from 'lodash'
import { z } from 'zod'

export const calculate_part_scores = (
  inputs_with_answers: z.infer<
    z.ZodObject<{
      [K in keyof typeof ASRS_INPUTS]: (typeof ASRS_INPUTS)[K]['type']
    }>
  >,
  part: PartType,
): number | null => {
  const INPUT_IDS_NEEDED_FOR_SCORING = ASRS_PARTS[part]

  const inputs_in_part = pick(inputs_with_answers, INPUT_IDS_NEEDED_FOR_SCORING)
  const standardized_input_scores = map(inputs_in_part, (_i, key: string) => {
    const positive_scores = POSITIVE_SCORES[key as keyof typeof POSITIVE_SCORES]

    if (positive_scores === undefined || _i === undefined) return null

    if (positive_scores.includes(_i)) return 1

    return 0
  }).filter(v => v !== null)

  if (standardized_input_scores.length === 0) return null

  return sum(standardized_input_scores as number[])
}



================================================
File: src/scores/asrs/helpers/calculate_subscale_scores.ts
================================================
import { ASRS_SUBSCALES, type SubscaleType } from '../definition/asrs_subscales'
import { ASRS_INPUTS, POSITIVE_SCORES } from '../definition'
import { z } from 'zod'
import { sum, map, pick } from 'lodash'

export const calculate_subscale_scores = (
  inputs_with_answers: z.infer<
    z.ZodObject<{
      [K in keyof typeof ASRS_INPUTS]: (typeof ASRS_INPUTS)[K]['type']
    }>
  >,
  subscale: SubscaleType,
): number | null => {
  const INPUT_IDS_NEEDED_FOR_SCORING = ASRS_SUBSCALES[subscale]

  const inputs_in_subscale = pick(
    inputs_with_answers,
    INPUT_IDS_NEEDED_FOR_SCORING,
  )

  const standardized_input_scores = map(inputs_in_subscale, (_i, key) => {
    const positive_scores = POSITIVE_SCORES[key as keyof typeof POSITIVE_SCORES]

    if (positive_scores === undefined || _i === undefined) return null

    if (positive_scores.includes(_i)) return 1

    return 0
  }).filter(v => v !== null)

  if (standardized_input_scores.length === 0) return null

  return sum(standardized_input_scores as number[])
}



================================================
File: src/scores/asrs/helpers/index.ts
================================================
export { calculate_part_scores } from './calculate_part_scores'
export { calculate_subscale_scores } from './calculate_subscale_scores'



================================================
File: src/scores/audit/audit.test.ts
================================================
import { ZodError } from 'zod'
import { Score } from '../../classes'
import { ScoreLibrary } from '../library'
import {
  maximum_response,
  median_response,
  minimum_response,
  random_response,
} from './__testdata__/audit_responses'
import { audit } from './audit'
import { AUDIT_SUBSCALES } from './definition'

const AUDIT_MIN_SCORE = 0
const AUDIT_MEDIAN_SCORE = 20
const AUDIT_MAX_SCORE = 40

const audit_calculation = new Score(audit)

describe('audit', function () {
  it('audit calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('audit')
  })

  describe('basic assumptions', function () {
    const outcome = audit_calculation.calculate({ payload: minimum_response })

    it('should return 4 calculation results', function () {
      const AMOUNT_OF_RESULTS_IN_AUDIT_SCORE = 4

      expect(Object.keys(outcome).length).toEqual(
        AMOUNT_OF_RESULTS_IN_AUDIT_SCORE,
      )
    })

    it('should contain all the correct calculation ids', function () {
      const EXPECTED_CALCULATION_IDS = [
        'TOTAL',
        'CONSUMPTION',
        'DEPENDENCE',
        'ALCOHOL_RELATED_PROBLEMS',
      ]

      const EXTRACTED_CALCULATION_IDS_FROM_RESULT = Object.keys(outcome)

      expect(EXTRACTED_CALCULATION_IDS_FROM_RESULT).toEqual(
        EXPECTED_CALCULATION_IDS,
      )
    })
  })

  describe('validation', function () {
    describe('when called with a response where there are answers out of the expected [0-4] range', function () {
      describe('when an answer is above the expected [0,4] range', function () {
        it('should throw an ZodError', function () {
          try {
            audit_calculation.calculate({
              payload: {
                AUDIT_Q01: 10,
              },
            })
          } catch (error) {
            expect(error).toBeInstanceOf(ZodError)

            const err = error as ZodError
            expect(err.issues).toEqual(
              expect.arrayContaining([
                expect.objectContaining({
                  message: 'Invalid input',
                  path: ['AUDIT_Q01'],
                }),
              ]),
            )
          }
        })
      })
      describe('when an answer is not a number', function () {
        it('should throw an ZodError', function () {
          try {
            audit_calculation.calculate({
              payload: {
                AUDIT_Q01: 'I am not a number',
              },
            })
          } catch (error) {
            expect(error).toBeInstanceOf(ZodError)

            const err = error as ZodError
            expect(err.issues).toEqual(
              expect.arrayContaining([
                expect.objectContaining({
                  message: 'Invalid input',
                  path: ['AUDIT_Q01'],
                }),
              ]),
            )
          }
        })
      })
      describe('when an answer is below the expected [0,4] range', function () {
        it('should throw an ZodError', function () {
          try {
            audit_calculation.calculate({
              payload: {
                AUDIT_Q01: -1,
              },
            })
          } catch (error) {
            expect(error).toBeInstanceOf(ZodError)

            const err = error as ZodError
            expect(err.issues).toEqual(
              expect.arrayContaining([
                expect.objectContaining({
                  message: 'Invalid input',
                  path: ['AUDIT_Q01'],
                }),
              ]),
            )
          }
        })
      })
    })

    describe('the score includes the correct input fields', function () {
      it('should have all the expected input ids configured', function () {
        const EXPECTED_INPUT_IDS = [
          'AUDIT_Q01',
          'AUDIT_Q02',
          'AUDIT_Q03',
          'AUDIT_Q04',
          'AUDIT_Q05',
          'AUDIT_Q06',
          'AUDIT_Q07',
          'AUDIT_Q08',
          'AUDIT_Q09',
          'AUDIT_Q10',
        ]

        const configured_input_ids = Object.keys(audit_calculation.inputSchema)

        expect(EXPECTED_INPUT_IDS).toEqual(configured_input_ids)
      })

      it('should have the expected input ids configured for the Consumption scale', function () {
        const EXPECTED_INPUT_IDS = ['AUDIT_Q01', 'AUDIT_Q02', 'AUDIT_Q03']

        expect(EXPECTED_INPUT_IDS).toEqual(AUDIT_SUBSCALES.CONSUMPTION)
      })

      it('should have the expected input ids configured for the Dependence scale', function () {
        const EXPECTED_INPUT_IDS = ['AUDIT_Q04', 'AUDIT_Q05', 'AUDIT_Q06']

        expect(EXPECTED_INPUT_IDS).toEqual(AUDIT_SUBSCALES.DEPENDENCE)
      })

      it('should have the expected input ids configured for the Alcohol Related Problem scale', function () {
        const EXPECTED_INPUT_IDS = [
          'AUDIT_Q07',
          'AUDIT_Q08',
          'AUDIT_Q09',
          'AUDIT_Q10',
        ]

        expect(EXPECTED_INPUT_IDS).toEqual(
          AUDIT_SUBSCALES.ALCOHOL_RELATED_PROBLEMS,
        )
      })
    })

    describe('when called with an empty response', function () {
      const outcome = audit_calculation.calculate({ payload: {} })
      it('should return the 0 as score for Consumption scale', function () {
        expect(outcome.CONSUMPTION).toEqual(0)
      })

      it('should return the 0 as score for Dependence scale', function () {
        expect(outcome.DEPENDENCE).toEqual(0)
      })

      it('should return the 0 as score for Alcohol Related Problem scale', function () {
        expect(outcome.ALCOHOL_RELATED_PROBLEMS).toEqual(0)
      })

      it('should return the 0 as score for Total', function () {
        expect(outcome.TOTAL).toEqual(0)
      })
    })
  })

  describe('score calculation', function () {
    describe('when called with a minimum response', function () {
      const outcome = audit_calculation.calculate({ payload: minimum_response })

      it('should return the minimum score for Consumption scale', function () {
        expect(outcome.CONSUMPTION).toEqual(0)
      })

      it('should return the minimum score for Dependence scale', function () {
        expect(outcome.DEPENDENCE).toEqual(0)
      })

      it('should return the minimum score for Alcohol Related Problem scale', function () {
        expect(outcome.ALCOHOL_RELATED_PROBLEMS).toEqual(0)
      })

      it('should return the minimum score for Total', function () {
        expect(outcome.TOTAL).toEqual(AUDIT_MIN_SCORE)
      })
    })

    describe('when called with a median response', function () {
      const outcome = audit_calculation.calculate({ payload: median_response })
      it('should return the median score for Consumption scale', function () {
        expect(outcome.CONSUMPTION).toEqual(6)
      })

      it('should return the median score for Dependence scale', function () {
        expect(outcome.DEPENDENCE).toEqual(6)
      })

      it('should return the median score for Alcohol Related Problem scale', function () {
        expect(outcome.ALCOHOL_RELATED_PROBLEMS).toEqual(8)
      })

      it('should return the median score for Total', function () {
        expect(outcome.TOTAL).toEqual(AUDIT_MEDIAN_SCORE)
      })
    })

    describe('when called with a maximum response', function () {
      const outcome = audit_calculation.calculate({ payload: maximum_response })

      it('should return the max score for Consumption scale', function () {
        expect(outcome.CONSUMPTION).toEqual(12)
      })

      it('should return the max score for Dependence scale', function () {
        expect(outcome.DEPENDENCE).toEqual(12)
      })

      it('should return the max score for Alcohol Related Problem scale', function () {
        expect(outcome.ALCOHOL_RELATED_PROBLEMS).toEqual(16)
      })

      it('should return the max score for Total', function () {
        expect(outcome.TOTAL).toEqual(AUDIT_MAX_SCORE)
      })
    })

    describe('when called with a random response', function () {
      const outcome = audit_calculation.calculate({ payload: random_response })

      it('should return the expected score Consumption score', function () {
        const EXPECTED_CONSUMPTION_SCORE = 7
        expect(outcome.CONSUMPTION).toEqual(EXPECTED_CONSUMPTION_SCORE)
      })

      it('should return the expected Dependence score', function () {
        const EXPECTED_DEPENDENCE_SCORE = 7
        expect(outcome.DEPENDENCE).toEqual(EXPECTED_DEPENDENCE_SCORE)
      })

      it('should return the expected Alcohol related problems score', function () {
        const EXPECTED_ALCOHOL_RELATED_PROBLEMS_SCORE = 10
        expect(outcome.ALCOHOL_RELATED_PROBLEMS).toEqual(
          EXPECTED_ALCOHOL_RELATED_PROBLEMS_SCORE,
        )
      })

      it('should return the expected Total score', function () {
        const EXPECTED_TOTAL_SCORE = 24
        expect(outcome.TOTAL).toEqual(EXPECTED_TOTAL_SCORE)
      })
    })
  })
})



================================================
File: src/scores/audit/audit.ts
================================================
import { sum, pick } from 'lodash'
import { ScoreType } from '../../types'
import {
  AUDIT_OUTPUT,
  AUDIT_INPUTS,
  AUDIT_SUBSCALES,
  type SubscaleType,
} from './definition'

export const audit: ScoreType<typeof AUDIT_INPUTS, typeof AUDIT_OUTPUT> = {
  name: 'Alcohol Use Disorders Identification Test (AUDIT)',
  readmeLocation: __dirname,
  inputSchema: AUDIT_INPUTS,
  outputSchema: AUDIT_OUTPUT,
  calculate: ({ data }) => {
    const calculateSubscaleScore = (subscale: SubscaleType) => {
      const inputIds = AUDIT_SUBSCALES[subscale]

      const subscaleItems = pick(data, inputIds)
      const validSubscaleItems = Object.values(subscaleItems).filter(
        v => v !== undefined,
      )
      return sum(validSubscaleItems)
    }

    const consumptionScore = calculateSubscaleScore('CONSUMPTION')
    const dependenceScore = calculateSubscaleScore('DEPENDENCE')
    const alcoholRelatedProblemsScore = calculateSubscaleScore(
      'ALCOHOL_RELATED_PROBLEMS',
    )

    return {
      TOTAL: consumptionScore + dependenceScore + alcoholRelatedProblemsScore,
      CONSUMPTION: consumptionScore,
      DEPENDENCE: dependenceScore,
      ALCOHOL_RELATED_PROBLEMS: alcoholRelatedProblemsScore,
    }
  },
}



================================================
File: src/scores/audit/__testdata__/audit_responses.ts
================================================
/**
 * Each input needs to have an answer between [0-4]
 * When this rule is violated, we will throw an error
 */
export const minimum_response = {
  AUDIT_Q01: 0,
  AUDIT_Q02: 0,
  AUDIT_Q03: 0,
  AUDIT_Q04: 0,
  AUDIT_Q05: 0,
  AUDIT_Q06: 0,
  AUDIT_Q07: 0,
  AUDIT_Q08: 0,
  AUDIT_Q09: 0,
  AUDIT_Q10: 0,
}

export const median_response = {
  AUDIT_Q01: 2,
  AUDIT_Q02: 2,
  AUDIT_Q03: 2,
  AUDIT_Q04: 2,
  AUDIT_Q05: 2,
  AUDIT_Q06: 2,
  AUDIT_Q07: 2,
  AUDIT_Q08: 2,
  AUDIT_Q09: 2,
  AUDIT_Q10: 2,
}

export const maximum_response = {
  AUDIT_Q01: 4,
  AUDIT_Q02: 4,
  AUDIT_Q03: 4,
  AUDIT_Q04: 4,
  AUDIT_Q05: 4,
  AUDIT_Q06: 4,
  AUDIT_Q07: 4,
  AUDIT_Q08: 4,
  AUDIT_Q09: 4,
  AUDIT_Q10: 4,
}

/**
 * Expected score = 24
 */
export const random_response = {
  AUDIT_Q01: 4,
  AUDIT_Q02: 1,
  AUDIT_Q03: 2,
  AUDIT_Q04: 3,
  AUDIT_Q05: 3,
  AUDIT_Q06: 1,
  AUDIT_Q07: 4,
  AUDIT_Q08: 2,
  AUDIT_Q09: 2,
  AUDIT_Q10: 2,
}



================================================
File: src/scores/audit/definition/audit_inputs.ts
================================================
import { z } from 'zod'
import {
  type ScoreInputSchemaType,
  type EnumNumberInputType,
} from '../../../types'

const INPUT_TYPES: Record<string, EnumNumberInputType> = {
  input_1: {
    type: z
      .union([
        z.literal(0),
        z.literal(1),
        z.literal(2),
        z.literal(3),
        z.literal(4),
      ])
      .optional(),
    uiOptions: {
      options: [
        { value: 0, label: { nl: 'Nooit', en: 'Never' } },
        {
          value: 1,
          label: { nl: 'Maandelijks of minder', en: 'Monthly or less' },
        },
        {
          value: 2,
          label: { nl: '2 of 4 keer per maand', en: '2-4 times a months' },
        },
        {
          value: 3,
          label: { nl: '2 of 3 keer per week', en: '2-3 times a week' },
        },
        {
          value: 4,
          label: {
            nl: '4 of meer keer per week',
            en: '4 or more times a week',
          },
        },
      ],
    },
  },
  input_2: {
    type: z
      .union([
        z.literal(0),
        z.literal(1),
        z.literal(2),
        z.literal(3),
        z.literal(4),
      ])
      .optional(),
    uiOptions: {
      options: [
        { value: 0, label: { nl: '1 of 2', en: '1 or 2' } },
        { value: 1, label: { nl: '3 of 4', en: '3 or 4' } },
        { value: 2, label: { nl: '5 of 6', en: '5 or 6' } },
        { value: 3, label: { nl: '7 of 9', en: '7 to 9' } },
        { value: 4, label: { nl: '10 of meer', en: '10 or more' } },
      ],
    },
  },
  inputs_3_to_8: {
    type: z
      .union([
        z.literal(0),
        z.literal(1),
        z.literal(2),
        z.literal(3),
        z.literal(4),
      ])
      .optional(),
    uiOptions: {
      options: [
        { value: 0, label: { nl: 'Nooit', en: 'Never' } },
        {
          value: 1,
          label: { nl: 'Minder dan maandelijks', en: 'Less than monthly' },
        },
        { value: 2, label: { nl: 'Maandelijks', en: 'Monthly' } },
        { value: 3, label: { nl: 'Wekelijks', en: 'Weekly' } },
        {
          value: 4,
          label: {
            nl: 'Dagelijks of bijna dagelijks',
            en: 'Daily or almost daily',
          },
        },
      ],
    },
  },
  inputs_9_and_10: {
    type: z.union([z.literal(0), z.literal(2), z.literal(4)]).optional(),
    uiOptions: {
      options: [
        { value: 0, label: { nl: 'Nooit', en: 'No' } },
        {
          value: 2,
          label: {
            nl: 'Ja, maar niet in het laatste jaar',
            en: 'Yes, but not in the last year',
          },
        },
        {
          value: 4,
          label: {
            nl: 'Ja, in het laatste jaar',
            en: 'Yes, during the last year',
          },
        },
      ],
    },
  },
}

export const AUDIT_INPUTS = {
  AUDIT_Q01: {
    ...INPUT_TYPES.input_1,
    label: {
      nl: 'Hoe vaak drink je alcohol?',
      en: 'How often do you have a drink containing alcohol?',
    },
  },
  AUDIT_Q02: {
    ...INPUT_TYPES.input_2,
    label: {
      nl: 'Wanneer je drinkt, hoeveel standaardglazen* drink je dan gewoonlijk op een dag?',
      en: 'How many standard drinks do you have on a typical day when you are drinking?',
    },
  },
  AUDIT_Q03: {
    ...INPUT_TYPES.inputs_3_to_8,
    label: {
      nl: 'Hoe vaak gebeurt het dat je zes of meer standaardglazen drinkt bij één enkele gelegenheid?',
      en: 'How often do you have six or more standard drinks on one occasion?',
    },
  },

  AUDIT_Q04: {
    ...INPUT_TYPES.inputs_3_to_8,
    label: {
      nl: 'Hoe vaak had je het afgelopen jaar het gevoel dat je, van zodra je begon, niet meer kon stoppen met drinken?',
      en: 'How often during the last year have you found that you were not able to stop drinking once you had started?',
    },
  },
  AUDIT_Q05: {
    ...INPUT_TYPES.inputs_3_to_8,
    label: {
      nl: 'Hoe vaak ben je er, door je drinkgedrag, het afgelopen jaar niet in geslaagd te doen wat normaal van je werd verwacht?',
      en: 'How often during the last year have you failed to do what was normally expected of you because of drinking?',
    },
  },
  AUDIT_Q06: {
    ...INPUT_TYPES.inputs_3_to_8,
    label: {
      nl: 'Hoe vaak heb je het afgelopen jaar ’s morgens behoefte gehad aan alcohol om jezelf er weer bovenop te helpen nadat je zwaar was doorgezakt?',
      en: 'How often during the last year have you needed a first drink in the morning to get yourself going after a heavy drinking session?',
    },
  },

  AUDIT_Q07: {
    ...INPUT_TYPES.inputs_3_to_8,
    label: {
      nl: 'Hoe vaak heb je het afgelopen jaar schuld of berouw gevoeld nadat je gedronken had?',
      en: 'How often during the last year have you had a feeling of guilt or remorse after drinking?',
    },
  },
  AUDIT_Q08: {
    ...INPUT_TYPES.inputs_3_to_8,
    label: {
      nl: 'Hoe vaak kon je je het afgelopen jaar de gebeurtenissen van de avond voordien niet herinneren omdat je gedronken had?',
      en: 'How often during the last year have you been unable to remember what happened the night before because you had been drinking?',
    },
  },
  AUDIT_Q09: {
    ...INPUT_TYPES.inputs_9_and_10,
    label: {
      nl: 'Raakte jij zelf of iemand anders ooit gewond ten gevolge van je drinkgedrag?',
      en: 'Have you or someone else been injured because of your drinking?',
    },
  },
  AUDIT_Q10: {
    ...INPUT_TYPES.inputs_9_and_10,
    label: {
      nl: 'Heeft een vriend, dokter of andere gezondheidswerker zich ooit zorgen gemaakt over je drinkgedrag of je aangeraden minder te drinken?',
      en: 'Has a relative, friend, doctor, or other health care worker been concerned about your drinking or suggested you cut down?',
    },
  },
} satisfies ScoreInputSchemaType



================================================
File: src/scores/audit/definition/audit_output.ts
================================================
import { z } from 'zod'
import { type ScoreOutputSchemaType } from '../../../types'

export const AUDIT_OUTPUT = {
  TOTAL: {
    label: { en: 'Total AUDIT score' },
    type: z.number(),
  },
  CONSUMPTION: {
    label: { en: 'Consumption score' },
    type: z.number(),
  },
  DEPENDENCE: {
    label: { en: 'Dependence score' },
    type: z.number(),
  },
  ALCOHOL_RELATED_PROBLEMS: {
    label: { en: 'Alcohol-related problems score' },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType



================================================
File: src/scores/audit/definition/audit_subscales.ts
================================================
export type SubscaleType =
  | 'CONSUMPTION'
  | 'DEPENDENCE'
  | 'ALCOHOL_RELATED_PROBLEMS'

export const AUDIT_SUBSCALES: Record<SubscaleType, string[]> = {
  CONSUMPTION: ['AUDIT_Q01', 'AUDIT_Q02', 'AUDIT_Q03'],
  DEPENDENCE: ['AUDIT_Q04', 'AUDIT_Q05', 'AUDIT_Q06'],
  ALCOHOL_RELATED_PROBLEMS: [
    'AUDIT_Q07',
    'AUDIT_Q08',
    'AUDIT_Q09',
    'AUDIT_Q10',
  ],
}



================================================
File: src/scores/audit/definition/index.ts
================================================
export * from './audit_output'
export * from './audit_inputs'
export * from './audit_subscales'



================================================
File: src/scores/basdai/basdai.test.ts
================================================
import { ZodError } from 'zod'
import { Score } from '../../classes'
import { ScoreLibrary } from '../library'
import {
  max_response,
  median_response,
  min_response,
  random_response,
} from './__testdata__/basdai_form_responses'
import { basdai } from './basdai'

const BASDAI_MIN_SCORE = 0
const BASDAI_MEDIAN_SCORE = 5
const BASDAI_MAX_SCORE = 10

const basdai_10_calculation = new Score(basdai)

describe('basdai', function () {
  it('basdai calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('basdai')
  })

  describe('the score includes the correct input fields', function () {
    it('should use the correct input fields', function () {
      const EXPECTED_CALCULATION_INPUT_IDS = [
        'Q1',
        'Q2',
        'Q3',
        'Q4',
        'Q5',
        'Q6',
      ]

      const configured_calculation_input_ids = Object.keys(
        basdai_10_calculation.inputSchema,
      )

      expect(configured_calculation_input_ids).toEqual(
        EXPECTED_CALCULATION_INPUT_IDS,
      )
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = basdai_10_calculation.calculate({ payload: min_response })

    it('should calculate a single score', function () {
      expect(Object.keys(outcome).length).toEqual(1)
    })

    it('should have the correct calculation id', function () {
      const configured_calculation_id = Object.keys(outcome)

      expect(configured_calculation_id).toEqual(['BASDAI_TOTAL_SCORE'])
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when called with a minimum response', function () {
      it('should return the minimum score', function () {
        const outcome = basdai_10_calculation.calculate({
          payload: min_response,
        })
        expect(outcome.BASDAI_TOTAL_SCORE).toEqual(BASDAI_MIN_SCORE)
      })
    })

    describe('when called with a median response', function () {
      it('should return the median score', function () {
        const outcome = basdai_10_calculation.calculate({
          payload: median_response,
        })
        expect(outcome.BASDAI_TOTAL_SCORE).toEqual(BASDAI_MEDIAN_SCORE)
      })
    })

    describe('when called with a maximum response', function () {
      it('should return the maximum score', function () {
        const outcome = basdai_10_calculation.calculate({
          payload: max_response,
        })
        expect(outcome.BASDAI_TOTAL_SCORE).toEqual(BASDAI_MAX_SCORE)
      })
    })

    describe('when called with a random response', function () {
      it('should return the expected score', function () {
        const outcome = basdai_10_calculation.calculate({
          payload: random_response,
        })
        const EXPECTED_SCORE = 4.3
        expect(outcome.BASDAI_TOTAL_SCORE).toEqual(EXPECTED_SCORE)
      })
    })
  })

  describe('a score is only calculated when all mandatory fields are entered', function () {
    describe('when an empty response is passed', function () {
      it('should return null as the result', function () {
        const outcome = basdai_10_calculation.calculate({
          payload: {},
          opts: {
            nullOnMissingInputs: true,
          },
        })

        expect(outcome.BASDAI_TOTAL_SCORE).toEqual(null)
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw a ZodError', function () {
        try {
          basdai_10_calculation.calculate({
            payload: {
              Q01: "I'm not a number",
            },
            opts: {
              nullOnMissingInputs: true,
            },
          })
        } catch (error) {
          expect(error).toBeInstanceOf(ZodError)

          const err = error as ZodError
          expect(err.issues).toEqual(
            expect.arrayContaining([
              expect.objectContaining({
                message: 'Expected number, received string',
                path: ['Q01'],
              }),
            ]),
          )
        }
      })
    })
    describe('when an answer is below one of the expected answers', function () {
      it('should throw a ZodError', function () {
        try {
          basdai_10_calculation.calculate({
            payload: {
              Q01: -1,
            },
            opts: {
              nullOnMissingInputs: true,
            },
          })
        } catch (error) {
          expect(error).toBeInstanceOf(ZodError)

          const err = error as ZodError
          expect(err.issues).toEqual(
            expect.arrayContaining([
              expect.objectContaining({
                message: 'Number must be greater than or equal to 0',
                path: ['Q01'],
              }),
            ]),
          )
        }
      })
    })
    describe('when an answer is above one of the expected answers', function () {
      it('should throw a ZodError', function () {
        try {
          basdai_10_calculation.calculate({
            payload: {
              Q01: 11,
            },
            opts: {
              nullOnMissingInputs: true,
            },
          })
        } catch (error) {
          expect(error).toBeInstanceOf(ZodError)

          const err = error as ZodError
          expect(err.issues).toEqual(
            expect.arrayContaining([
              expect.objectContaining({
                message: 'Number must be less than or equal to 10',
                path: ['Q01'],
              }),
            ]),
          )
        }
      })
    })
  })
})



================================================
File: src/scores/basdai/basdai.ts
================================================
import { sum, round } from 'lodash'
import { ScoreType } from '../../types'
import { BASDAI_OUTPUT, BASDAI_INPUTS } from './definition'

export const basdai: ScoreType<typeof BASDAI_INPUTS, typeof BASDAI_OUTPUT> = {
  name: 'Bath Ankylosing Spondylitis Disease Activity Index (BASDAI)',
  readmeLocation: __dirname,
  inputSchema: BASDAI_INPUTS,
  outputSchema: BASDAI_OUTPUT,
  calculate: ({ data }) => {
    const PART_A = [data.Q1, data.Q2, data.Q3, data.Q4]

    const PART_A_SCORE = sum(PART_A)

    const PART_B = [data.Q5, data.Q6]

    const PART_B_SCORE = sum(PART_B) / 2

    const ROUND_TO = 2
    const TOTAL_SCORE = round((PART_A_SCORE + PART_B_SCORE) / 5, ROUND_TO)

    return {
      BASDAI_TOTAL_SCORE: TOTAL_SCORE,
    }
  },
}



================================================
File: src/scores/basdai/__testdata__/basdai_form_responses.ts
================================================
export const min_response = {
  Q1: 0,
  Q2: 0,
  Q3: 0,
  Q4: 0,
  Q5: 0,
  Q6: 0,
}

export const median_response = {
  Q1: 5,
  Q2: 5,
  Q3: 5,
  Q4: 5,
  Q5: 5,
  Q6: 5,
}

export const max_response = {
  Q1: 10,
  Q2: 10,
  Q3: 10,
  Q4: 10,
  Q5: 10,
  Q6: 10,
}

/**
 * PART A = 14
 * PART B = 7.5
 * TOTAL = 4.3
 */
export const random_response = {
  Q1: 2,
  Q2: 7,
  Q3: 1,
  Q4: 4,
  Q5: 9,
  Q6: 6,
}



================================================
File: src/scores/basdai/definition/basdai_inputs.ts
================================================
import { z } from 'zod'
import { type ScoreInputSchemaType } from '../../../types'

export const BASDAI_INPUTS = {
  Q1: {
    label: {
      en: 'How would you describe the overall level of FATIGUE/TIREDNESS you have experienced?',
      nl: 'Hoe moe was u?',
    },
    type: z.number().min(0).max(10),
    uiOptions: {
      component: 'slider',
      range: {
        min: {
          label: { en: 'None', nl: 'Niet' },
        },
        max: {
          label: { en: 'Very severe', nl: 'Heel erg' },
        },
      },
    },
  },
  Q2: {
    label: {
      en: 'How would you describe the overall level of AS NECK, BACK or HIP pain you have had?',
      nl: 'Hoeveel pijn in de nek, rug of heup had u als gevolg van de ziekte van Bechterew?',
    },
    type: z.number().min(0).max(10),
    uiOptions: {
      component: 'slider',
      range: {
        min: {
          label: { en: 'None', nl: 'Geen' },
        },
        max: {
          label: { en: 'Very severe', nl: 'Zeer veel' },
        },
      },
    },
  },
  Q3: {
    label: {
      en: 'How would you describe the overall level of pain/swelling in joints OTHER THAN neck, back or hips you have had?',
      nl: 'Hoeveel pijn en zwelling had u in andere gewrichten dan de nek, rug en heupen?',
    },
    type: z.number().min(0).max(10),
    uiOptions: {
      component: 'slider',
      range: {
        min: {
          label: { en: 'None', nl: 'Geen' },
        },
        max: {
          label: { en: 'Very severe', nl: 'Zeer veel' },
        },
      },
    },
  },
  Q4: {
    label: {
      en: 'How would you describe the overall level of DISCOMFORT you have had from any areas tender to touch or pressure?',
      nl: 'Hoeveel last had u van plaatsen op uw lichaam die gevoelig zijn bij aanraken of druk?',
    },
    type: z.number().min(0).max(10),
    uiOptions: {
      component: 'slider',
      range: {
        min: {
          label: { en: 'None', nl: 'Geen' },
        },
        max: {
          label: { en: 'Very severe', nl: 'Zeer veel' },
        },
      },
    },
  },
  Q5: {
    label: {
      en: 'How would you describe the overall LEVEL of MORNING STIFFNESS you have had from the time you wake up?',
      nl: 'Hoeveel last had u van ochtendstijfheid vanaf het moment dat u opstond?',
    },
    type: z.number().min(0).max(10),
    uiOptions: {
      component: 'slider',
      range: {
        min: {
          label: { en: 'None', nl: 'Geen' },
        },
        max: {
          label: { en: 'Very severe', nl: 'Zeer veel' },
        },
      },
    },
  },
  Q6: {
    label: {
      en: 'HOW LONG does your MORNING STIFFNESS last from the time you wake up?',
      nl: 'Hoe lang duurde de ochtendstijfheid vanaf het moment dat u opstond?',
    },
    type: z.number().min(0).max(10),
    uiOptions: {
      component: 'slider',
      range: {
        min: {
          label: { en: '0', nl: '0 uur' },
        },
        max: {
          label: { en: '2+ hours', nl: '2 of meer' },
        },
      },
    },
  },
} satisfies ScoreInputSchemaType



================================================
File: src/scores/basdai/definition/basdai_output.ts
================================================
import { type ScoreOutputSchemaType } from '../../../types'
import { z } from 'zod'

export const BASDAI_OUTPUT = {
  BASDAI_TOTAL_SCORE: {
    label: { en: 'Total' },
    type: z.number(),
    terminology: {
      code: {
        coding: [
          {
            system: 'http://snomed.info/sct',
            code: '441562009',
            display:
              'Bath Ankylosing Spondylitis Disease Activity Index score (observable entity)',
          },
          // BASDAI has no LOINC code
        ],
        text: 'BASDAI Index Score',
      },
    },
  },
} satisfies ScoreOutputSchemaType



================================================
File: src/scores/basdai/definition/index.ts
================================================
export * from './basdai_output'
export * from './basdai_inputs'



================================================
File: src/scores/basfi/basfi.test.ts
================================================
import { ZodError } from 'zod'
import { Score } from '../../classes'
import { ScoreLibrary } from '../library'
import {
  max_response,
  median_response,
  min_response,
  random_response,
} from './__testdata__/basfi_form_responses'
import { basfi } from './basfi'

const BASFI_MIN_SCORE = 0
const BASFI_MEDIAN_SCORE = 5
const BASFI_MAX_SCORE = 10

const basfi_calculation = new Score(basfi)

describe('basfi', function () {
  it('basfi calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('basfi')
  })

  describe('the score includes the correct input fields', function () {
    it('should use the correct input fields', function () {
      const EXPECTED_CALCULATION_INPUT_IDS = [
        'Q01',
        'Q02',
        'Q03',
        'Q04',
        'Q05',
        'Q06',
        'Q07',
        'Q08',
        'Q09',
        'Q10',
      ]

      const configured_calculation_input_ids = Object.keys(
        basfi_calculation.inputSchema,
      )

      expect(configured_calculation_input_ids).toEqual(
        EXPECTED_CALCULATION_INPUT_IDS,
      )
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = basfi_calculation.calculate({ payload: min_response })

    it('should calculate a single score', function () {
      expect(Object.keys(outcome).length).toEqual(1)
    })

    it('should have the correct calculation id', function () {
      const configured_calculation_id = Object.keys(outcome)

      expect(configured_calculation_id).toEqual(['BASFI_SCORE'])
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when called with a minimum response', function () {
      it('should return the minimum score', function () {
        const outcome = basfi_calculation.calculate({ payload: min_response })
        expect(outcome.BASFI_SCORE).toEqual(BASFI_MIN_SCORE)
      })
    })

    describe('when called with a median response', function () {
      it('should return the median score', function () {
        const outcome = basfi_calculation.calculate({
          payload: median_response,
        })
        expect(outcome.BASFI_SCORE).toEqual(BASFI_MEDIAN_SCORE)
      })
    })

    describe('when called with a maximum response', function () {
      it('should return the maximum score', function () {
        const outcome = basfi_calculation.calculate({ payload: max_response })
        expect(outcome.BASFI_SCORE).toEqual(BASFI_MAX_SCORE)
      })
    })

    describe('when called with a random response', function () {
      it('should return the expected score', function () {
        const outcome = basfi_calculation.calculate({
          payload: random_response,
        })
        const EXPECTED_SCORE = 4.6
        expect(outcome.BASFI_SCORE).toEqual(EXPECTED_SCORE)
      })
    })
  })

  describe('a score is only calculated when all mandatory fields are entered', function () {
    describe('when an empty response is passed', function () {
      it('should return null as the result', function () {
        const outcome = basfi_calculation.calculate({
          payload: {},
          opts: {
            nullOnMissingInputs: true,
          },
        })
        expect(outcome.BASFI_SCORE).toEqual(null)
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw a ZodError', function () {
        try {
          basfi_calculation.calculate({
            payload: {
              Q01: "I'm not a number",
            },
            opts: {
              nullOnMissingInputs: true,
            },
          })
        } catch (error) {
          expect(error).toBeInstanceOf(ZodError)

          const err = error as ZodError
          expect(err.issues).toEqual(
            expect.arrayContaining([
              expect.objectContaining({
                message: 'Expected number, received string',
                path: ['Q01'],
              }),
            ]),
          )
        }
      })
    })
    describe('when an answer is below one of the expected answers', function () {
      it('should throw a ZodError', function () {
        try {
          basfi_calculation.calculate({
            payload: {
              Q01: -1,
            },
            opts: {
              nullOnMissingInputs: true,
            },
          })
        } catch (error) {
          expect(error).toBeInstanceOf(ZodError)

          const err = error as ZodError
          expect(err.issues).toEqual(
            expect.arrayContaining([
              expect.objectContaining({
                message: 'Number must be greater than or equal to 0',
                path: ['Q01'],
              }),
            ]),
          )
        }
      })
    })
    describe('when an answer is above one of the expected answers', function () {
      it('should throw a ZodError', function () {
        try {
          basfi_calculation.calculate({
            payload: {
              Q01: 11,
            },
            opts: {
              nullOnMissingInputs: true,
            },
          })
        } catch (error) {
          expect(error).toBeInstanceOf(ZodError)

          const err = error as ZodError
          expect(err.issues).toEqual(
            expect.arrayContaining([
              expect.objectContaining({
                message: 'Number must be less than or equal to 10',
                path: ['Q01'],
              }),
            ]),
          )
        }
      })
    })
  })
})



================================================
File: src/scores/basfi/basfi.ts
================================================
import { sum } from 'lodash'
import { ScoreType } from '../../types'
import { BASFI_OUTPUT, BASFI_INPUTS } from './definition'

export const basfi: ScoreType<typeof BASFI_INPUTS, typeof BASFI_OUTPUT> = {
  name: 'Bath Ankylosing Spondylitis Functional Index (BASFI)',
  readmeLocation: __dirname,
  inputSchema: BASFI_INPUTS,
  outputSchema: BASFI_OUTPUT,
  calculate: ({ data }) => {
    const DIVISOR = 10
    const score = sum(Object.values(data)) / DIVISOR

    return {
      BASFI_SCORE: score,
    }
  },
}



================================================
File: src/scores/basfi/__testdata__/basfi_form_responses.ts
================================================
export const min_response = {
  Q01: 0,
  Q02: 0,
  Q03: 0,
  Q04: 0,
  Q05: 0,
  Q06: 0,
  Q07: 0,
  Q08: 0,
  Q09: 0,
  Q10: 0,
}

export const median_response = {
  Q01: 5,
  Q02: 5,
  Q03: 5,
  Q04: 5,
  Q05: 5,
  Q06: 5,
  Q07: 5,
  Q08: 5,
  Q09: 5,
  Q10: 5,
}

export const max_response = {
  Q01: 10,
  Q02: 10,
  Q03: 10,
  Q04: 10,
  Q05: 10,
  Q06: 10,
  Q07: 10,
  Q08: 10,
  Q09: 10,
  Q10: 10,
}

/**
 * Score = 4.6
 */
export const random_response = {
  Q01: 1,
  Q02: 10,
  Q03: 2,
  Q04: 10,
  Q05: 0,
  Q06: 4,
  Q07: 5,
  Q08: 7,
  Q09: 6,
  Q10: 1,
}



================================================
File: src/scores/basfi/definition/basfi_inputs.ts
================================================
import { z } from 'zod'
import { type ScoreInputSchemaType } from '../../../types'

export const BASFI_INPUTS = {
  Q01: {
    label: {
      en: 'Putting on your socks or tighs without help or aids (e.g. sock aid)',
      nl: 'Uw kousen of panty’s aantrekken zonder hulp of hulpmiddelen (b.v. kousentrekker)?',
    },
    type: z.number().min(0).max(10),
    uiOptions: {
      component: 'slider',
      range: {
        min: {
          label: { en: 'Easy', nl: 'Gemakkelijk' },
        },
        max: {
          label: { en: 'Impossible', nl: 'Onmogelijk' },
        },
      },
    },
  },
  Q02: {
    label: {
      en: 'Bending forward from the waist to pick up a pen from the fl oor without an aid',
      nl: 'Vanuit de heup naar voren buigen om zonder hulp een pen van de grond te rapen?',
    },
    type: z.number().min(0).max(10),
    uiOptions: {
      component: 'slider',
      range: {
        min: {
          label: { en: 'Easy', nl: 'Gemakkelijk' },
        },
        max: {
          label: { en: 'Impossible', nl: 'Onmogelijk' },
        },
      },
    },
  },
  Q03: {
    label: {
      en: 'Reaching up to a high shelf without help or aids (e.g. helping hand)',
      nl: 'Iets van een hoge plank pakken zonder hulp of hulpmiddelen (b.v. helpende hand)?',
    },
    type: z.number().min(0).max(10),
    uiOptions: {
      component: 'slider',
      range: {
        min: {
          label: { en: 'Easy', nl: 'Gemakkelijk' },
        },
        max: {
          label: { en: 'Impossible', nl: 'Onmogelijk' },
        },
      },
    },
  },
  Q04: {
    label: {
      en: 'Getting up out of an armless dining room chair without using your hands or any other help',
      nl: 'Rechtop gaan staan vanaf een eetkamerstoel zonder armleuning, zonder uw handen of andere hulp te gebruiken?',
    },
    type: z.number().min(0).max(10),
    uiOptions: {
      component: 'slider',
      range: {
        min: {
          label: { en: 'Easy', nl: 'Gemakkelijk' },
        },
        max: {
          label: { en: 'Impossible', nl: 'Onmogelijk' },
        },
      },
    },
  },
  Q05: {
    label: {
      en: 'Getting up off the floor without help from lying on your back',
      nl: 'Zonder hulp overeind komen als u op uw rug op de grond ligt?',
    },
    type: z.number().min(0).max(10),
    uiOptions: {
      component: 'slider',
      range: {
        min: {
          label: { en: 'Easy', nl: 'Gemakkelijk' },
        },
        max: {
          label: { en: 'Impossible', nl: 'Onmogelijk' },
        },
      },
    },
  },
  Q06: {
    label: {
      en: 'Standing unsupported for 10 minutes without discomfort',
      nl: 'Gedurende 10 minuten zonder steun blijven staan zonder ongemakken?',
    },
    type: z.number().min(0).max(10),
    uiOptions: {
      component: 'slider',
      range: {
        min: {
          label: { en: 'Easy', nl: 'Gemakkelijk' },
        },
        max: {
          label: { en: 'Impossible', nl: 'Onmogelijk' },
        },
      },
    },
  },
  Q07: {
    label: {
      en: 'Climbing 12–15 steps without using a handrail or walking aid, one foot on each step',
      nl: 'Een trap van 12-15 treden opgaan zonder een leuning of wandelstok of iets dergelijke te gebruiken. Eén voet op elke trede?',
    },
    type: z.number().min(0).max(10),
    uiOptions: {
      component: 'slider',
      range: {
        min: {
          label: { en: 'Easy', nl: 'Gemakkelijk' },
        },
        max: {
          label: { en: 'Impossible', nl: 'Onmogelijk' },
        },
      },
    },
  },
  Q08: {
    label: {
      en: 'Looking over your shoulder without turning your body',
      nl: 'Over uw schouder kijken zonder uw lichaam te draaien?',
    },
    type: z.number().min(0).max(10),
    uiOptions: {
      component: 'slider',
      range: {
        min: {
          label: { en: 'Easy', nl: 'Gemakkelijk' },
        },
        max: {
          label: { en: 'Impossible', nl: 'Onmogelijk' },
        },
      },
    },
  },
  Q09: {
    label: {
      en: 'Doing physically demanding activities (e.g. physiotherapy exercises, gardening or sports)',
      nl: 'Fysiek zware activiteiten uitvoeren (b.v. fysiotherapie oefeningen, tuinieren of sport)?',
    },
    type: z.number().min(0).max(10),
    uiOptions: {
      component: 'slider',
      range: {
        min: {
          label: { en: 'Easy', nl: 'Gemakkelijk' },
        },
        max: {
          label: { en: 'Impossible', nl: 'Onmogelijk' },
        },
      },
    },
  },
  Q10: {
    label: {
      en: 'Doing a full day‘s activities whether it be at home or at work',
      nl: 'Een volledige dagtaak thuis of op het werk uitvoeren?',
    },
    type: z.number().min(0).max(10),
    uiOptions: {
      component: 'slider',
      range: {
        min: {
          label: { en: 'Easy', nl: 'Gemakkelijk' },
        },
        max: {
          label: { en: 'Impossible', nl: 'Onmogelijk' },
        },
      },
    },
  },
} satisfies ScoreInputSchemaType



================================================
File: src/scores/basfi/definition/basfi_output.ts
================================================
import { z } from 'zod'
import { ScoreOutputSchemaType } from '../../../types'

export const BASFI_OUTPUT = {
  BASFI_SCORE: {
    label: { en: 'Total' },
    type: z.number(),
    terminology: {
      code: {
        coding: [
          {
            system: 'http://snomed.info/sct',
            code: '441680005',
            display:
              'Bath Ankylosing Spondylitis Functional Index score (observable entity)',
          },
          // BASFI has no LOINC code
        ],
        text: 'BASFI Score',
      },
    },
  },
} satisfies ScoreOutputSchemaType



================================================
File: src/scores/basfi/definition/index.ts
================================================
export { BASFI_OUTPUT } from './basfi_output'
export { BASFI_INPUTS } from './basfi_inputs'



================================================
File: src/scores/beck/beck.test.ts
================================================
import { ScoreLibrary } from '../library'
import {
  max_response,
  median_response,
  min_response,
  random_response,
} from './__testdata__/beck_form_responses'
import { beck } from './beck'
import { Score } from '../../classes'
import { ZodError } from 'zod'

const BECK_MIN_SCORE = 0
const BECK_MEDIAN_SCORE = 32
const BECK_MAX_SCORE = 63

const beck_calculation = new Score(beck)

describe('beck', function () {
  it('beck calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('beck')
  })

  describe('basic assumptions', function () {
    const outcome = beck_calculation.calculate({ payload: min_response })

    it('should return 1 calculation result', function () {
      expect(Object.keys(outcome)).toHaveLength(1)
    })

    it('should have the expected calculation id', function () {
      const EXPECTED_CALCULATION_ID = ['beck']
      const configured_calculation_id = Object.keys(outcome)

      expect(configured_calculation_id).toEqual(EXPECTED_CALCULATION_ID)
    })
  })

  describe('validation', function () {
    describe('the score includes the correct input fields', function () {
      it('should have all the expected input ids configured', function () {
        const EXPECTED_INPUT_IDS = [
          'Q01',
          'Q02',
          'Q03',
          'Q04',
          'Q05',
          'Q06',
          'Q07',
          'Q08',
          'Q09',
          'Q10',
          'Q11',
          'Q12',
          'Q13',
          'Q14',
          'Q15',
          'Q16',
          'Q17',
          'Q18',
          'Q19',
          'Q20',
          'Q21',
        ]

        const configured_calculation_input_ids = Object.keys(
          beck_calculation.inputSchemaAsObject.shape,
        )

        expect(EXPECTED_INPUT_IDS).toEqual(configured_calculation_input_ids)
      })
    })

    describe('when called with a response with answers out of the expected [0,3] range', function () {
      describe('when an answer is not a number', function () {
        it('should throw an ZodError', function () {
          expect(() =>
            beck_calculation.calculate({
              payload: {
                Q01: "I'm not a number",
              },
            }),
          ).toThrow(ZodError)
        })
      })
      describe('when an answer is below the expected [0,3] range', function () {
        it('should throw an ZodError', function () {
          expect(() =>
            beck_calculation.calculate({
              payload: {
                Q01: -1,
              },
            }),
          ).toThrow(ZodError)
        })
      })

      describe('when an answer is above the expected [0,3] range', function () {
        it('should throw an ZodError', function () {
          expect(() =>
            beck_calculation.calculate({
              payload: {
                Q01: 5,
              },
            }),
          ).toThrow(ZodError)
        })
      })
    })

    describe('when called with an empty', function () {
      it('should throw an error', function () {
        expect(() => beck_calculation.calculate({ payload: {} })).toThrow(
          ZodError,
        )
      })
    })
  })

  describe('score calcualtion', function () {
    describe('when called with a minimum response', function () {
      it('should return the minimum score', function () {
        const score = beck_calculation.calculate({ payload: min_response })
        expect(score.beck).toEqual(BECK_MIN_SCORE)
      })
    })

    describe('when called with a median response', function () {
      it('should return the median score', function () {
        const score = beck_calculation.calculate({
          payload: median_response,
        })

        expect(score.beck).toEqual(BECK_MEDIAN_SCORE)
      })
    })

    describe('when called with a maximum response', function () {
      it('should return the maximum score', function () {
        const score = beck_calculation.calculate({
          payload: max_response,
        })
        expect(score.beck).toEqual(BECK_MAX_SCORE)
      })
    })
    describe('when called with a random response', function () {
      it('should return the expected score', function () {
        const score = beck_calculation.calculate({
          payload: random_response,
        })

        const EXPECTED_SCORE = 40

        expect(score.beck).toEqual(EXPECTED_SCORE)
      })
    })
  })
})



================================================
File: src/scores/beck/beck.ts
================================================
import { ScoreType } from '../../types'
import { BECK_OUTPUT, BECK_INPUTS } from './definition'
import { sum, mapValues } from 'lodash'

/**
 * The answer values of question 16 and 18 have to be standardized
 */
const RAW_ANSWER_TO_VALUE_DICT: Record<string, number> = {
  '0': 0,
  '1': 1, // 1a
  '2': 1, // 1b
  '3': 2, // 2a
  '4': 2, // 2b
  '5': 3, // 3a
  '6': 3, // 3b
}

const preprocess_beck_response = (
  beck_inputs_with_answers: Record<string, number>,
): Record<string, number> => {
  const QUESTIONS_TO_PREPROCESS = ['Q16', 'Q18']

  return mapValues(beck_inputs_with_answers, (val, key) => {
    if (QUESTIONS_TO_PREPROCESS.includes(key)) {
      const value_in_dict = RAW_ANSWER_TO_VALUE_DICT[String(val)]
      return value_in_dict
    }

    return val
  })
}

export const beck: ScoreType<typeof BECK_INPUTS, typeof BECK_OUTPUT> = {
  name: 'Beck Depression Inventory (BDI)',
  readmeLocation: __dirname,
  inputSchema: BECK_INPUTS,
  outputSchema: BECK_OUTPUT,
  calculate: ({ data }) => {
    const preprocessed_data = preprocess_beck_response(data)
    const score = sum(Object.values(preprocessed_data))

    return {
      beck: score,
    }
  },
}



================================================
File: src/scores/beck/__testdata__/beck_form_responses.ts
================================================
export const min_response = {
  Q01: 0,
  Q02: 0,
  Q03: 0,
  Q04: 0,
  Q05: 0,
  Q06: 0,
  Q07: 0,
  Q08: 0,
  Q09: 0,
  Q10: 0,
  Q11: 0,
  Q12: 0,
  Q13: 0,
  Q14: 0,
  Q15: 0,
  Q16: 0,
  Q17: 0,
  Q18: 0,
  Q19: 0,
  Q20: 0,
  Q21: 0,
}

/**
 * Median response can be a total score of 31 or 32 (max score is /63)
 */
export const median_response = {
  Q01: 1,
  Q02: 1,
  Q03: 1,
  Q04: 1,
  Q05: 1,
  Q06: 1,
  Q07: 1,
  Q08: 1,
  Q09: 1,
  Q10: 1,
  Q11: 2,
  Q12: 2,
  Q13: 2,
  Q14: 2,
  Q15: 2,
  Q16: 3,
  Q17: 2,
  Q18: 3,
  Q19: 2,
  Q20: 2,
  Q21: 2,
}

export const max_response = {
  Q01: 3,
  Q02: 3,
  Q03: 3,
  Q04: 3,
  Q05: 3,
  Q06: 3,
  Q07: 3,
  Q08: 3,
  Q09: 3,
  Q10: 3,
  Q11: 3,
  Q12: 3,
  Q13: 3,
  Q14: 3,
  Q15: 3,
  Q16: 6,
  Q17: 3,
  Q18: 6,
  Q19: 3,
  Q20: 3,
  Q21: 3,
}

export const random_response = {
  Q01: 1,
  Q02: 2,
  Q03: 2,
  Q04: 3,
  Q05: 2,
  Q06: 3,
  Q07: 0,
  Q08: 3,
  Q09: 1,
  Q10: 2,
  Q11: 1,
  Q12: 1,
  Q13: 1,
  Q14: 2,
  Q15: 1,
  Q16: 3,
  Q17: 3,
  Q18: 5,
  Q19: 3,
  Q20: 3,
  Q21: 1,
}



================================================
File: src/scores/beck/definition/beck_inputs.ts
================================================
import { z } from 'zod'
import { ScoreInputSchemaType } from '../../../types'

const InputTypeSchema = z.union([
  z.literal(0),
  z.literal(1),
  z.literal(2),
  z.literal(3),
])

export const BECK_INPUTS = {
  Q01: {
    type: InputTypeSchema,
    label: { nl: 'Somberheid, verdriet', en: 'Sadness' },
    uiOptions: {
      options: [
        {
          label: { nl: 'Ik voel me niet somber.', en: 'I do not feel sad.' },
          value: 0,
        },
        {
          label: {
            nl: 'Ik voel me een groot deel van de tijd somber.',
            en: 'I feel sad much of the time.',
          },
          value: 1,
        },
        {
          label: {
            nl: 'Ik ben de hele tijd somber.',
            en: 'I am sad all the time.',
          },
          value: 2,
        },
        {
          label: {
            nl: 'Ik ben zó somber of ongelukkig dat ik het niet verdragen kan.',
            en: "I am so sad or unhappy that I can't stand it.",
          },
          value: 3,
        },
      ],
    },
  },
  Q02: {
    type: InputTypeSchema,
    label: { nl: 'Pessimisme', en: 'Pessimism' },
    uiOptions: {
      options: [
        {
          label: {
            nl: 'Ik ben niet ontmoedigd over mijn toekomst.',
            en: 'I am not discouraged about my future.',
          },
          value: 0,
        },
        {
          label: {
            nl: 'Ik ben meer ontmoedigd over mijn toekomst dan vroeger.',
            en: 'I feel more discouraged about my future than I used to.',
          },
          value: 1,
        },
        {
          label: {
            nl: 'Ik verwacht niet dat de dingen goed voor mij zullen uitpakken.',
            en: 'I do not expect things to work out for me.',
          },
          value: 2,
        },
        {
          label: {
            nl: 'Ik heb het gevoel dat mijn toekomst hopeloos is en dat het alleen maar erger zal worden.',
            en: 'I feel my future is hopeless and will only get worse.',
          },
          value: 3,
        },
      ],
    },
  },
  Q03: {
    type: InputTypeSchema,
    label: { nl: 'Mislukkingen', en: 'Past Failure' },
    uiOptions: {
      options: [
        {
          label: {
            nl: 'Ik voel me geen mislukking.',
            en: 'I do not feel like a failure.',
          },
          value: 0,
        },
        {
          label: {
            nl: 'Ik heb te veel dingen laten mislukken.',
            en: 'I have failed more than I should have.',
          },
          value: 1,
        },
        {
          label: {
            nl: 'Als ik terugkijk, zie ik een hoop mislukkingen.',
            en: 'As I look back, I see a lot of failures.',
          },
          value: 2,
        },
        {
          label: {
            nl: 'Ik vind dat ik als persoon een totale mislukking ben.',
            en: 'I feel I am a total failure as a person.',
          },
          value: 3,
        },
      ],
    },
  },
  Q04: {
    type: InputTypeSchema,
    label: { nl: 'Verlies van plezier', en: 'Loss of Pleasure' },
    uiOptions: {
      options: [
        {
          label: {
            nl: 'Ik beleef net zo veel plezier als altijd aan de dingen die ik leuk vind.',
            en: 'I get as much pleasure as I ever did from the things I enjoy.',
          },
          value: 0,
        },
        {
          label: {
            nl: 'Ik geniet niet meer zoveel van dingen als vroeger.',
            en: "I don't enjoy things as much as I used to.",
          },
          value: 1,
        },
        {
          label: {
            nl: 'Ik beleef heel weinig plezier aan de dingen die ik vroeger leuk vond.',
            en: 'I get very little pleasure from the things I used to enjoy.',
          },
          value: 2,
        },
        {
          label: {
            nl: 'Ik beleef geen enkel plezier aan de dingen die ik vroeger leuk vond.',
            en: "I can't get any pleasure from the things I used to enjoy.",
          },
          value: 3,
        },
      ],
    },
  },
  Q05: {
    type: InputTypeSchema,
    label: { nl: 'Schuldgevoelens', en: 'Guilty Feelings' },
    uiOptions: {
      options: [
        {
          label: {
            nl: 'Ik voel me niet bijzonder schuldig.',
            en: "I don't feel particularly guilty.",
          },
          value: 0,
        },
        {
          label: {
            nl: 'Ik voel me schuldig over veel dingen die ik heb gedaan of had moeten doen.',
            en: 'I feel guilty over many things I have done or should have done.',
          },
          value: 1,
        },
        {
          label: {
            nl: 'Ik voel me meestal erg schuldig.',
            en: 'I feel quite guilty most of the time.',
          },
          value: 2,
        },
        {
          label: {
            nl: 'Ik voel me de hele tijd schuldig.',
            en: 'I feel guilty all of the time.',
          },
          value: 3,
        },
      ],
    },
  },
  Q06: {
    type: InputTypeSchema,
    label: { nl: 'Gevoel gestraft te worden', en: 'Punishment Feelings' },
    uiOptions: {
      options: [
        {
          label: {
            nl: 'Ik heb niet het gevoel dat ik gestraft word.',
            en: "I don't feel I am being punished.",
          },
          value: 0,
        },
        {
          label: {
            nl: 'Ik heb het gevoel dat ik misschien gestraft zal worden.',
            en: 'I feel I may be punished.',
          },
          value: 1,
        },
        {
          label: {
            nl: 'Ik verwacht gestraft te worden.',
            en: 'I expect to be punished.',
          },
          value: 2,
        },
        {
          label: {
            nl: 'Ik heb het gevoel dat ik nu gestraft word.',
            en: 'I feel I am being punished.',
          },
          value: 3,
        },
      ],
    },
  },
  Q07: {
    type: InputTypeSchema,
    label: { nl: 'Afkeer van zichzelf', en: 'Self-Dislike' },
    uiOptions: {
      options: [
        {
          label: {
            nl: 'Ik voel me over mezelf net als altijd.',
            en: 'I feel the same about myself as ever.',
          },
          value: 0,
        },
        {
          label: {
            nl: 'Ik heb minder zelfvertrouwen.',
            en: 'I have lost confidence in myself.',
          },
          value: 1,
        },
        {
          label: {
            nl: 'Ik ben teleurgesteld in mezelf.',
            en: 'I am disappointed in myself.',
          },
          value: 2,
        },
        {
          label: {
            nl: 'Ik heb een hekel aan mezelf.',
            en: 'I dislike myself.',
          },
          value: 3,
        },
      ],
    },
  },
  Q08: {
    type: InputTypeSchema,
    label: { nl: 'Zelfkritiek', en: 'Self-Criticalness' },
    uiOptions: {
      options: [
        {
          label: {
            nl: 'Ik bekritiseer of verwijt mijzelf niet meer dan gewoonlijk.',
            en: "I don't criticize or blame myself more than usual.",
          },
          value: 0,
        },
        {
          label: {
            nl: 'Ik ben meer kritisch op mezelf dan vroeger.',
            en: 'I am more critical of myself than I used to be.',
          },
          value: 1,
        },
        {
          label: {
            nl: 'Ik bekritiseer mezelf voor al mijn tekortkomingen.',
            en: 'I criticize myself for all of my faults.',
          },
          value: 2,
        },
        {
          label: {
            nl: 'Ik verwijt mijzelf al het slechte wat gebeurt.',
            en: 'I blame myself for everything bad that happens.',
          },
          value: 3,
        },
      ],
    },
  },
  Q09: {
    type: InputTypeSchema,
    label: {
      nl: 'Suïcidale gedachten of wensen',
      en: 'Suicidal Thoughts or Wishes',
    },
    uiOptions: {
      options: [
        {
          label: {
            nl: 'Ik heb geen enkele gedachte aan zelfdoding.',
            en: "I don't have any thoughts of killing myself.",
          },
          value: 0,
        },
        {
          label: {
            nl: 'Ik heb gedachten aan zelfdoding, maar ik zou ze niet ten uitvoer brengen.',
            en: 'I have thoughts of killing myself, but I would not carry them out.',
          },
          value: 1,
        },
        {
          label: {
            nl: 'Ik zou liever een eind aan mijn leven maken.',
            en: 'I would like to kill myself.',
          },
          value: 2,
        },
        {
          label: {
            nl: 'Ik zou een eind aan mijn leven maken als ik de kans kreeg.',
            en: 'I would kill myself if I had the chance.',
          },
          value: 3,
        },
      ],
    },
  },
  Q10: {
    type: InputTypeSchema,
    label: { nl: 'Huilen', en: 'Crying' },
    uiOptions: {
      options: [
        {
          label: {
            nl: 'Ik huil niet meer dan vroeger.',
            en: "I don't cry anymore than I used to.",
          },
          value: 0,
        },
        {
          label: {
            nl: 'Ik huil meer dan vroeger.',
            en: 'I cry more than I used to.',
          },
          value: 1,
        },
        {
          label: {
            nl: 'Ik huil om elk klein ding.',
            en: 'I cry over every little thing.',
          },
          value: 2,
        },
        {
          label: {
            nl: 'Ik wil graag huilen, maar ik kan het niet.',
            en: "I feel like crying, but I can't.",
          },
          value: 3,
        },
      ],
    },
  },
  Q11: {
    type: InputTypeSchema,
    label: { nl: 'Agitatie, onrust', en: 'Agitation' },
    uiOptions: {
      options: [
        {
          label: {
            nl: 'Ik ben niet rustelozer of meer gespannen dan anders.',
            en: 'I am no more restless or wound up than usual.',
          },
          value: 0,
        },
        {
          label: {
            nl: 'Ik ben rustelozer of meer gespannen dan anders.',
            en: 'I feel more restless or wound up than usual.',
          },
          value: 1,
        },
        {
          label: {
            nl: 'Ik ben zo rusteloos of opgewonden dat ik moeilijk stil kan zitten.',
            en: "I am so restless or agitated, it's hard to stay still.",
          },
          value: 2,
        },
        {
          label: {
            nl: 'Ik ben zo rusteloos of opgewonden dat ik moet blijven bewegen of iets doen.',
            en: 'I am so restless or agitated that I have to keep moving or doing something.',
          },
          value: 3,
        },
      ],
    },
  },
  Q12: {
    type: InputTypeSchema,
    label: { nl: 'Verlies van interesse', en: 'Loss of Interest' },
    uiOptions: {
      options: [
        {
          label: {
            nl: 'Mijn belangstelling voor andere mensen of activiteiten is niet verminderd.',
            en: 'I have not lost interest in other people or activities.',
          },
          value: 0,
        },
        {
          label: {
            nl: 'Ik heb nu minder belangstelling voor andere mensen of dingen dan vroeger.',
            en: 'I am less interested in other people or things than before.',
          },
          value: 1,
        },
        {
          label: {
            nl: 'Ik heb mijn belangstelling voor andere mensen of dingen grotendeels verloren.',
            en: 'I have lost most of my interest in other people or things.',
          },
          value: 2,
        },
        {
          label: {
            nl: 'Het is moeilijk om nog ergens belangstelling voor op te brengen.',
            en: "It's hard to get interested in anything.",
          },
          value: 3,
        },
      ],
    },
  },
  Q13: {
    type: InputTypeSchema,
    label: { nl: 'Besluiteloosheid', en: 'Indecisiveness' },
    uiOptions: {
      options: [
        {
          label: {
            nl: 'Ik neem beslissingen ongeveer even makkelijk als altijd.',
            en: 'I make decisions about as well as ever.',
          },
          value: 0,
        },
        {
          label: {
            nl: 'Ik vind het moeilijker om beslissingen te nemen dan gewoonlijk.',
            en: 'I find it more difficult to make decisions than usual.',
          },
          value: 1,
        },
        {
          label: {
            nl: 'Ik heb veel meer moeite met het nemen van beslissingen dan vroeger.',
            en: 'I have much greater difficulty in making decisions than I used to.',
          },
          value: 2,
        },
        {
          label: {
            nl: 'Ik heb moeite met alle beslissingen.',
            en: 'I have trouble making any decisions.',
          },
          value: 3,
        },
      ],
    },
  },
  Q14: {
    type: InputTypeSchema,
    label: { nl: 'Waardeloosheid', en: 'Worthlessness' },
    uiOptions: {
      options: [
        {
          label: {
            nl: 'Ik heb niet het gevoel dat ik waardeloos ben.',
            en: 'I do not feel I am worthless.',
          },
          value: 0,
        },
        {
          label: {
            nl: 'Ik zie mezelf niet meer zo waardevol en nuttig als vroeger.',
            en: "I don't consider myself as worthwhile and useful as I used to.",
          },
          value: 1,
        },
        {
          label: {
            nl: 'Vergeleken met anderen voel ik me meer waardeloos.',
            en: 'I feel more worthless as compared to others.',
          },
          value: 2,
        },
        {
          label: {
            nl: 'Ik voel me volstrekt waardeloos.',
            en: 'I feel utterly worthless.',
          },
          value: 3,
        },
      ],
    },
  },
  Q15: {
    type: InputTypeSchema,
    label: { nl: 'Energieverlies', en: 'Loss of Energy' },
    uiOptions: {
      options: [
        {
          label: {
            nl: 'Ik heb nog evenveel energie als altijd.',
            en: 'I have as much energy as ever.',
          },
          value: 0,
        },
        {
          label: {
            nl: 'Ik heb minder energie dan vroeger.',
            en: 'I have less energy than I used to have.',
          },
          value: 1,
        },
        {
          label: {
            nl: 'Ik heb niet voldoende energie om veel te doen.',
            en: "I don't have enough energy to do very much.",
          },
          value: 2,
        },
        {
          label: {
            nl: 'Ik heb niet genoeg energie om wat dan ook te doen.',
            en: "I don't have enough energy to do anything.",
          },
          value: 3,
        },
      ],
    },
  },
  Q16: {
    type: z.union([
      z.literal(0),
      z.literal(1),
      z.literal(2),
      z.literal(3),
      z.literal(4),
      z.literal(5),
      z.literal(6),
    ]),
    label: {
      nl: 'Verandering van slaappatroon',
      en: 'Changes in Sleeping Pattern',
    },
    uiOptions: {
      options: [
        {
          label: {
            nl: 'Mijn slaappatroon is niet veranderd.',
            en: 'I have not experienced any change in my sleeping.',
          },
          value: 0,
        },
        {
          label: {
            nl: 'Ik slaap wat meer dan gewoonlijk.',
            en: 'I sleep somewhat more than usual.',
          },
          value: 1,
        },
        {
          label: {
            nl: 'Ik slaap wat minder dan gewoonlijk.',
            en: 'I sleep somewhat less than usual.',
          },
          value: 2,
        },
        {
          label: {
            nl: 'Ik slaap veel meer dan gewoonlijk.',
            en: 'I sleep a lot more than usual.',
          },
          value: 3,
        },
        {
          label: {
            nl: 'Ik slaap veel minder dan gewoonlijk.',
            en: 'I sleep a lot less than usual.',
          },
          value: 4,
        },
        {
          label: {
            nl: 'Ik slaap het grootste deel van de dag.',
            en: 'I sleep most of the day.',
          },
          value: 5,
        },
        {
          label: {
            nl: 'Ik word 1-2uren te vroeg wakker en kan niet meer inslapen.',
            en: "I wake up 1-2 hours early and can't get back to sleep.",
          },
          value: 6,
        },
      ],
    },
  },
  Q17: {
    type: InputTypeSchema,
    label: { nl: 'Prikkelbaarheid', en: 'Irritability' },
    uiOptions: {
      options: [
        {
          label: {
            nl: 'Ik ben niet meer prikkelbaar dan anders.',
            en: 'I am not more irritable than usual.',
          },
          value: 0,
        },
        {
          label: {
            nl: 'Ik ben meer prikkelbaar dan anders.',
            en: 'I am more irritable than usual.',
          },
          value: 1,
        },
        {
          label: {
            nl: 'Ik ben veel meer prikkelbaar dan anders.',
            en: 'I am much more irritable than usual.',
          },
          value: 2,
        },
        {
          label: {
            nl: 'Ik ben de hele tijd prikkelbaar.',
            en: 'I am irritable all the time.',
          },
          value: 3,
        },
      ],
    },
  },
  Q18: {
    type: z.union([
      z.literal(0),
      z.literal(1),
      z.literal(2),
      z.literal(3),
      z.literal(4),
      z.literal(5),
      z.literal(6),
    ]),
    label: { nl: 'Verandering van eetlust', en: 'Changes in Appetite' },
    uiOptions: {
      options: [
        {
          label: {
            nl: 'Mijn eetlust is niet veranderd.',
            en: 'I have not experienced any change in my appetite.',
          },
          value: 0,
        },
        {
          label: {
            nl: 'Mijn eetlust is wat kleiner dan gewoonlijk.',
            en: 'My appetite is somewhat less than usual.',
          },
          value: 1,
        },
        {
          label: {
            nl: 'Mijn eetlust is wat groter dan gewoonlijk.',
            en: 'My appetite is somewhat greater than usual.',
          },
          value: 2,
        },
        {
          label: {
            nl: 'Mijn eetlust is veel kleiner dan vroeger.',
            en: 'My appetite is much less than before.',
          },
          value: 3,
        },
        {
          label: {
            nl: 'Mijn eetlust is veel groter dan gewoonlijk.',
            en: 'My appetite is much greater than usual.',
          },
          value: 4,
        },
        {
          label: {
            nl: 'Ik heb helemaal geen eetlust.',
            en: 'I have no appetite at all.',
          },
          value: 5,
        },
        {
          label: {
            nl: 'Ik verlang de hele tijd naar eten.',
            en: 'I crave food all the time.',
          },
          value: 6,
        },
      ],
    },
  },
  Q19: {
    type: InputTypeSchema,
    label: {
      nl: 'Concentratieproblemen',
      en: 'Concentration Difficulty',
    },
    uiOptions: {
      options: [
        {
          label: {
            nl: 'Ik kan me net zo goed concentreren als altijd.',
            en: 'I can concentrate as well as ever.',
          },
          value: 0,
        },
        {
          label: {
            nl: 'Ik kan me niet zo goed concentreren als anders.',
            en: "I can't concentrate as well as usual.",
          },
          value: 1,
        },
        {
          label: {
            nl: 'Het is lastig om mijn gedachten ergens lang bij te houden.',
            en: "It's hard to keep my mind on anything for very long.",
          },
          value: 2,
        },
        {
          label: {
            nl: 'Ik kan me nergens op concentreren.',
            en: "I find I can't concentrate on anything.",
          },
          value: 3,
        },
      ],
    },
  },
  Q20: {
    type: InputTypeSchema,
    label: { nl: 'Moeheid', en: 'Tiredness or Fatigue' },
    uiOptions: {
      options: [
        {
          label: {
            nl: 'Ik ben niet meer moe of afgemat dan gewoonlijk.',
            en: 'I am no more tired or fatigued than usual.',
          },
          value: 0,
        },
        {
          label: {
            nl: 'Ik word sneller moe of afgemat dan gewoonlijk.',
            en: 'I get more tired or fatigued more easily than usual.',
          },
          value: 1,
        },
        {
          label: {
            nl: 'Ik ben te moe of afgemat voor veel dingen die ik vroeger wel deed.',
            en: 'I am too tired or fatigued to do a lot of the things I used to do.',
          },
          value: 2,
        },
        {
          label: {
            nl: 'Ik ben te moe of afgemat voor de meeste dingen die ik vroeger wel deed.',
            en: 'I am too tired or fatigued to do most of the things I used to do.',
          },
          value: 3,
        },
      ],
    },
  },
  Q21: {
    type: InputTypeSchema,
    label: {
      nl: 'Verlies van interesse in sex',
      en: 'Loss of Interest in Sex',
    },
    uiOptions: {
      options: [
        {
          label: {
            nl: 'Ik heb de laatste tijd geen verandering gemerkt in mijn belangstelling voor sex.',
            en: 'I have not noticed any recent change in my interest in sex.',
          },
          value: 0,
        },
        {
          label: {
            nl: 'Ik heb minder belangstelling voor sex dan vroeger.',
            en: 'I am less interested in sex than I used to be.',
          },
          value: 1,
        },
        {
          label: {
            nl: 'Ik heb tegenwoordig veel minder belangstelling voor sex.',
            en: 'I am much less interested in sex now.',
          },
          value: 2,
        },
        {
          label: {
            nl: 'Ik heb alle belangstelling voor sex verloren.',
            en: 'I have lost interest in sex completely.',
          },
          value: 3,
        },
      ],
    },
  },
} satisfies ScoreInputSchemaType



================================================
File: src/scores/beck/definition/beck_output.ts
================================================
import { z } from 'zod'
import { ScoreOutputSchemaType } from '../../../types'

export const BECK_OUTPUT = {
  beck: {
    label: { en: 'Total BDI score' },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType



================================================
File: src/scores/beck/definition/index.ts
================================================
export { BECK_INPUTS } from './beck_inputs'
export { BECK_OUTPUT } from './beck_output'



================================================
File: src/scores/blcs/blcs.test.ts
================================================
import { ScoreLibrary } from '../library'
import {
  best_response,
  median_response,
  random_response,
  worst_response,
} from './__testdata__/blcs_test_responses'
import { blcs } from './blcs'
import { Score } from '../../classes'
import { ZodError } from 'zod'

const blcs_calculation = new Score(blcs)

describe('blcs', function () {
  it('blcs calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('blcs')
  })

  describe('basic assumptions', function () {
    const outcome = blcs_calculation.calculate({ payload: best_response })

    it('should have the expected result ids', function () {
      const EXPECTED_RESULT_IDS = ['BLCS_TOTAL_SCORE']

      const configured_calculation_ids = Object.keys(outcome)

      expect(configured_calculation_ids).toEqual(EXPECTED_RESULT_IDS)
    })
  })

  describe('validation', function () {
    describe('the score includes the correct input fields', function () {
      it('should have all the expected input ids configured', function () {
        const EXPECTED_INPUT_IDS = ['Q01', 'Q02', 'Q03', 'Q04']

        const configured_input_ids = Object.keys(
          blcs_calculation.inputSchemaAsObject.shape,
        )

        expect(EXPECTED_INPUT_IDS).toEqual(configured_input_ids)
      })
    })
  })

  describe('when an answer is below the expected range', function () {
    it('should throw an ZodError', function () {
      expect(() =>
        blcs_calculation.calculate({
          payload: {
            Q01: -1,
          },
        }),
      ).toThrow(ZodError)
    })
  })

  describe('when an answer is above the expected range', function () {
    it('should throw an ZodError', function () {
      expect(() =>
        blcs_calculation.calculate({
          payload: {
            Q01: 5,
          },
        }),
      ).toThrow(ZodError)
    })
  })

  describe('when an answer is above the expected range for Q04', function () {
    it('should throw an ZodError', function () {
      expect(() =>
        blcs_calculation.calculate({
          payload: {
            Q04: 11,
          },
        }),
      ).toThrow(ZodError)
    })
  })

  describe('when there are non-numerical answers', function () {
    it('should throw an ZodError', function () {
      expect(() =>
        blcs_calculation.calculate({
          payload: {
            Q01: "I'm not a number",
          },
        }),
      ).toThrow(ZodError)
    })
  })

  describe('when called with an empty response', function () {
    const outcome = blcs_calculation.calculate({ payload: {} })

    it('should return null for the score', function () {
      expect(outcome.BLCS_TOTAL_SCORE).toEqual(null)
    })
  })

  describe('score calculation', function () {
    describe('when called with the worst response', function () {
      const outcome = blcs_calculation.calculate({ payload: worst_response })

      it('should return the worst score', function () {
        expect(outcome.BLCS_TOTAL_SCORE).toEqual(22)
      })
    })

    describe('when called with the best response', function () {
      const outcome = blcs_calculation.calculate({ payload: best_response })
      it('should return the best score', function () {
        expect(outcome.BLCS_TOTAL_SCORE).toEqual(0)
      })
    })

    describe('when called with a median response', function () {
      const outcome = blcs_calculation.calculate({ payload: median_response })

      it('should return the median score', function () {
        expect(outcome.BLCS_TOTAL_SCORE).toEqual(11)
      })
    })

    describe('when called with the random response', function () {
      const outcome = blcs_calculation.calculate({ payload: random_response })

      it('should return the exepected score', function () {
        expect(outcome.BLCS_TOTAL_SCORE).toEqual(10)
      })
    })
  })
})



================================================
File: src/scores/blcs/blcs.ts
================================================
import { sum } from 'lodash'
import { BLCS_INPUTS, BLCS_OUTPUT } from './definition'
import { ScoreType } from '../../types'

export const blcs: ScoreType<typeof BLCS_INPUTS, typeof BLCS_OUTPUT> = {
  name: 'Bladder Control Scale (BLCS)',
  readmeLocation: __dirname,
  inputSchema: BLCS_INPUTS,
  outputSchema: BLCS_OUTPUT,
  calculate: ({ data }) => {
    const valid_answers = Object.values(data).filter(d => d !== undefined)

    if (valid_answers.length === 0) return { BLCS_TOTAL_SCORE: null }

    return {
      BLCS_TOTAL_SCORE: sum(valid_answers),
    }
  },
}



================================================
File: src/scores/blcs/__testdata__/blcs_test_responses.ts
================================================
import {
  DAILY,
  MORE_THAN_WEEKLY,
  NEVER,
  ONCE,
  TWO_TO_FOUR_TIMES,
} from '../definition/blcs_inputs'

export const best_response = {
  Q01: NEVER,
  Q02: NEVER,
  Q03: NEVER,
  Q04: 0,
}

export const median_response = {
  Q01: TWO_TO_FOUR_TIMES,
  Q02: TWO_TO_FOUR_TIMES,
  Q03: TWO_TO_FOUR_TIMES,
  Q04: 5,
}

export const worst_response = {
  Q01: DAILY,
  Q02: DAILY,
  Q03: DAILY,
  Q04: 10,
}

/**
 * Total = 10
 */
export const random_response = {
  Q01: ONCE, // 1
  Q02: DAILY, // 4
  Q03: MORE_THAN_WEEKLY, // 3
  Q04: 2, // 2
}



================================================
File: src/scores/blcs/definition/blcs_inputs.ts
================================================
import { z } from 'zod'
import { ScoreInputSchemaType } from '../../../types'

export const NEVER = 0
export const ONCE = 1
export const TWO_TO_FOUR_TIMES = 2
export const MORE_THAN_WEEKLY = 3
export const DAILY = 4

const InputTypeSchema = z.union([
  z.literal(NEVER),
  z.literal(ONCE),
  z.literal(TWO_TO_FOUR_TIMES),
  z.literal(MORE_THAN_WEEKLY),
  z.literal(DAILY),
])

const OPTIONS = [
  {
    value: NEVER,
    label: { en: 'Not at all' },
  },
  {
    value: ONCE,
    label: {
      en: 'Once',
    },
  },
  {
    value: TWO_TO_FOUR_TIMES,
    label: {
      en: 'Two to four times',
    },
  },
  {
    value: MORE_THAN_WEEKLY,
    label: {
      en: 'More than weekly but not daily',
    },
  },
  {
    value: DAILY,
    label: {
      en: 'Daily',
    },
  },
]

export const BLCS_INPUTS = {
  Q01: {
    type: InputTypeSchema.optional(),
    label: {
      en: 'During the past 4 weeks, how often have you lost control of your bladder or had an accident?',
    },
    uiOptions: {
      options: OPTIONS,
    },
  },
  Q02: {
    type: InputTypeSchema.optional(),
    label: {
      en: 'During the past 4 weeks, how often have you almost lost control of your bladder or had an accident?',
    },
    uiOptions: {
      options: OPTIONS,
    },
  },
  Q03: {
    type: InputTypeSchema.optional(),
    label: {
      en: 'During the past 4 weeks, how often have you altered your activities because of bladder problems?',
    },
    uiOptions: {
      options: OPTIONS,
    },
  },
  Q04: {
    type: z
      .union([
        z.literal(0),
        z.literal(1),
        z.literal(2),
        z.literal(3),
        z.literal(4),
        z.literal(5),
        z.literal(6),
        z.literal(7),
        z.literal(8),
        z.literal(9),
        z.literal(10),
      ])
      .optional(),
    label: {
      en: 'During the past 4 weeks, how much have bladder problems restricted your overall lifestyle?',
    },
    uiOptions: {
      options: [
        {
          label: { en: 'Not at all' },
          value: 0,
        },
        {
          label: { en: '' },
          value: 1,
        },
        {
          label: { en: '' },
          value: 2,
        },
        {
          label: { en: '' },
          value: 3,
        },
        {
          label: { en: '' },
          value: 4,
        },
        {
          label: { en: '' },
          value: 5,
        },
        {
          label: { en: '' },
          value: 6,
        },
        {
          label: { en: '' },
          value: 7,
        },
        {
          label: { en: '' },
          value: 8,
        },
        {
          label: { en: '' },
          value: 9,
        },
        {
          label: { en: 'Severly' },
          value: 10,
        },
      ],
    },
  },
} satisfies ScoreInputSchemaType



================================================
File: src/scores/blcs/definition/blcs_output.ts
================================================
import { z } from 'zod'
import { ScoreOutputSchemaType } from '../../../types'

export const BLCS_OUTPUT = {
  BLCS_TOTAL_SCORE: {
    label: { en: 'Total score' },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType



================================================
File: src/scores/blcs/definition/index.ts
================================================
export { BLCS_INPUTS } from './blcs_inputs'
export { BLCS_OUTPUT } from './blcs_output'
`

main(process.argv[2])