import { expect } from 'chai'

import { pro_ctcae_calculation } from './pro_ctcae_calculation'

describe('pro_ctcae_calculation', function () {
  describe('when response is {}', function () {
    it('it should return {}', function () {
      const outcome = pro_ctcae_calculation({})
      expect(outcome).to.deep.equal({})
    })
  })

  describe('when response is {proctcae_1_dry_mouth_severity: 3}', function () {
    it('it should return {dry_mouth: 3}', function () {
      const outcome = pro_ctcae_calculation({
        proctcae_1_dry_mouth_severity: '3',
      })
      expect(outcome).to.deep.equal({
        dry_mouth: 3,
      })
    })
  })

  describe('when response is {proctcae_3_mouth_throat_sores_severity: 4, proctcae_3_mouth_throat_sores_impact: 3}', function () {
    it('it should return {dry_mouth: 3}', function () {
      const outcome = pro_ctcae_calculation({
        proctcae_3_mouth_throat_sores_severity: '4',
        proctcae_3_mouth_throat_sores_impact: '3',
      })
      expect(outcome).to.deep.equal({
        mouth_throat_sores: 3,
      })
    })
  })

  describe('when response is {proctcae_5_voice_quality_changes_boolean: 1 }', function () {
    it('it should return {voice_quality_changes: 1}', function () {
      const outcome = pro_ctcae_calculation({
        proctcae_5_voice_quality_changes_boolean: 1,
      })
      expect(outcome).to.deep.equal({
        voice_quality_changes: 1,
      })
    })
  })

  describe('when response is {<...>_mouth_throat_<...>: <...>, }', function () {
    it('it should return {dry_mouth: 3}', function () {
      const outcome = pro_ctcae_calculation({
        proctcae_1_dry_mouth_severity: 3,
        proctcae_2_difficulty_swallowing_severity: 4,
        proctcae_3_mouth_throat_sores_severity: 4,
        proctcae_3_mouth_throat_sores_impact: 3,
        proctcae_4_cheilosis_cheilitis_severity: 4,
        proctcae_5_voice_quality_changes_boolean: 1,
        proctcae_6_hoarseness_severity: 3,
        proctcae_7_taste_changes_severity: 3,
        proctcae_8_decreased_appetite_severity: 2,
        proctcae_8_decreased_appetite_impact: 3,
        proctcae_9_nausea_frequency: 3,
        proctcae_9_nausea_severity: 4,
        proctcae_10_vomiting_frequency: 3,
        proctcae_10_vomiting_severity: 4,
        proctcae_11_heartburn_frequency: 3,
      })

      expect(outcome).to.deep.equal({
        cheilosis_cheilitis: 3,
        decreased_appetite: 2,
        difficulty_swallowing: 3,
        dry_mouth: 3,
        heartburn: 2,
        hoarseness: 3,
        mouth_throat_sores: 3,
        nausea: 2,
        taste_changes: 3,
        voice_quality_changes: 1,
        vomiting: 2,
      })
    })
  })
})
