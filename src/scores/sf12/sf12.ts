import { areAllValuesDefined } from '../../lib'
import { ScoreType } from '../../types'
import { SF12_INPUT, SF12_OUTPUT } from './definition'
import { round } from 'lodash'

export const sf12: ScoreType<typeof SF12_INPUT, typeof SF12_OUTPUT> = {
  name: '12-Item Short Form Survey (SF12)',
  readmeLocation: __dirname,
  inputSchema: SF12_INPUT,
  outputSchema: SF12_OUTPUT,
  calculate: ({ data }) => {
    if (!areAllValuesDefined(data)) {
      return {
        PHYSICAL_COMPONENT_SCORE: null,
        MENTAL_COMPONENT_SCORE: null,
      }
    }

    /**
     * MAPPING
     *
     * SF12_Q01 -> rgh1   SF12_Q02 -> pf02
     * SF12_Q03 -> pf04   SF12_Q04 -> rp2
     * SF12_Q05 -> rp3    SF12_Q06 -> re2
     * SF12_Q07 -> re3    SF12_Q08 -> rbp2
     * SF12_Q09 -> rmh3   SF12_Q10 -> rvt2
     * SF12_Q11 -> mh4    SF12_Q12 -> sf2
     *
     * Data cleaning and reverse scoring
     */
    const rgh1 = 6 - data.SF12_Q01
    const rbp2 = 6 - data.SF12_Q08
    const rmh3 = 7 - data.SF12_Q09
    const rvt2 = 7 - data.SF12_Q10
    const pf02 = data.SF12_Q02
    const pf04 = data.SF12_Q03
    const rp2 = data.SF12_Q04
    const rp3 = data.SF12_Q05
    const re2 = data.SF12_Q06
    const re3 = data.SF12_Q07
    const mh4 = data.SF12_Q11
    const sf2 = data.SF12_Q12

    // Creating indicator variables
    const indicators = {
      pf02_1: pf02 === 1 ? 1 : 0,
      pf02_2: pf02 === 2 ? 1 : 0,
      pf04_1: pf04 === 1 ? 1 : 0,
      pf04_2: pf04 === 2 ? 1 : 0,
      rp2_1: rp2 === 1 ? 1 : 0,
      rp3_1: rp3 === 1 ? 1 : 0,
      bp2_1: rbp2 === 1 ? 1 : 0,
      bp2_2: rbp2 === 2 ? 1 : 0,
      bp2_3: rbp2 === 3 ? 1 : 0,
      bp2_4: rbp2 === 4 ? 1 : 0,
      gh1_1: rgh1 === 1 ? 1 : 0,
      gh1_2: rgh1 === 2 ? 1 : 0,
      gh1_3: rgh1 === 3 ? 1 : 0,
      gh1_4: rgh1 === 4 ? 1 : 0,
      vt2_1: rvt2 === 1 ? 1 : 0,
      vt2_2: rvt2 === 2 ? 1 : 0,
      vt2_3: rvt2 === 3 ? 1 : 0,
      vt2_4: rvt2 === 4 ? 1 : 0,
      vt2_5: rvt2 === 5 ? 1 : 0,
      sf2_1: sf2 === 1 ? 1 : 0,
      sf2_2: sf2 === 2 ? 1 : 0,
      sf2_3: sf2 === 3 ? 1 : 0,
      sf2_4: sf2 === 4 ? 1 : 0,
      re2_1: re2 === 1 ? 1 : 0,
      re3_1: re3 === 1 ? 1 : 0,
      mh3_1: rmh3 === 1 ? 1 : 0,
      mh3_2: rmh3 === 2 ? 1 : 0,
      mh3_3: rmh3 === 3 ? 1 : 0,
      mh3_4: rmh3 === 4 ? 1 : 0,
      mh3_5: rmh3 === 5 ? 1 : 0,
      mh4_1: mh4 === 1 ? 1 : 0,
      mh4_2: mh4 === 2 ? 1 : 0,
      mh4_3: mh4 === 3 ? 1 : 0,
      mh4_4: mh4 === 4 ? 1 : 0,
      mh4_5: mh4 === 5 ? 1 : 0,
    }

    // Weighting and aggregation for PCS12 and MCS12 scores

    // PHYSICAL_COMPONENT_SCORE
    const RAWPCS12 =
      -7.23216 * indicators.pf02_1 +
      -3.45555 * indicators.pf02_2 +
      -6.24397 * indicators.pf04_1 +
      -2.73557 * indicators.pf04_2 +
      -4.61617 * indicators.rp2_1 +
      -5.51747 * indicators.rp3_1 +
      -11.25544 * indicators.bp2_1 +
      -8.38063 * indicators.bp2_2 +
      -6.50522 * indicators.bp2_3 +
      -3.8013 * indicators.bp2_4 +
      -8.37399 * indicators.gh1_1 +
      -5.56461 * indicators.gh1_2 +
      -3.02396 * indicators.gh1_3 +
      -1.31872 * indicators.gh1_4 +
      -2.44706 * indicators.vt2_1 +
      -2.02168 * indicators.vt2_2 +
      -1.6185 * indicators.vt2_3 +
      -1.14387 * indicators.vt2_4 +
      -0.42251 * indicators.vt2_5 +
      -0.33682 * indicators.sf2_1 +
      -0.94342 * indicators.sf2_2 +
      -0.18043 * indicators.sf2_3 +
      0.11038 * indicators.sf2_4 +
      3.04365 * indicators.re2_1 +
      2.32091 * indicators.re3_1 +
      3.46638 * indicators.mh3_1 +
      2.90426 * indicators.mh3_2 +
      2.37241 * indicators.mh3_3 +
      1.36689 * indicators.mh3_4 +
      0.66514 * indicators.mh3_5 +
      4.61446 * indicators.mh4_1 +
      3.41593 * indicators.mh4_2 +
      2.34247 * indicators.mh4_3 +
      1.28044 * indicators.mh4_4 +
      0.41188 * indicators.mh4_5 +
      56.57706

    // MENTAL_COMPONENT_SCORE
    const RAWMCS12 =
      3.93115 * indicators.pf02_1 +
      1.8684 * indicators.pf02_2 +
      2.68282 * indicators.pf04_1 +
      1.43103 * indicators.pf04_2 +
      1.4406 * indicators.rp2_1 +
      1.66968 * indicators.rp3_1 +
      1.48619 * indicators.bp2_1 +
      1.76691 * indicators.bp2_2 +
      1.49384 * indicators.bp2_3 +
      0.90384 * indicators.bp2_4 +
      -1.71175 * indicators.gh1_1 +
      -0.16891 * indicators.gh1_2 +
      0.03482 * indicators.gh1_3 +
      -0.06064 * indicators.gh1_4 +
      -6.02409 * indicators.vt2_1 +
      -4.88962 * indicators.vt2_2 +
      -3.29805 * indicators.vt2_3 +
      -1.65178 * indicators.vt2_4 +
      -0.92057 * indicators.vt2_5 +
      -6.29724 * indicators.sf2_1 +
      -8.26066 * indicators.sf2_2 +
      -5.63286 * indicators.sf2_3 +
      -3.13896 * indicators.sf2_4 +
      -6.82672 * indicators.re2_1 +
      -5.69921 * indicators.re3_1 +
      -10.19085 * indicators.mh3_1 +
      -7.92717 * indicators.mh3_2 +
      -6.31121 * indicators.mh3_3 +
      -4.09842 * indicators.mh3_4 +
      -1.94949 * indicators.mh3_5 +
      -16.15395 * indicators.mh4_1 +
      -10.77911 * indicators.mh4_2 +
      -8.09914 * indicators.mh4_3 +
      -4.59055 * indicators.mh4_4 +
      -1.95934 * indicators.mh4_5 +
      60.75781

    return {
      PHYSICAL_COMPONENT_SCORE: round(RAWPCS12, 5),
      MENTAL_COMPONENT_SCORE: round(RAWMCS12, 5),
    }
  },
}
