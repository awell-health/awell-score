import { expect } from 'chai'

import { transform_response } from './transform_response'

describe('transform_response', function () {
  describe('when has invalid form response', function () {
    describe('when has form response with symptoms that has boolean + other dimension', function () {
      expect(() =>
        transform_response({
          proctcae_3_mouth_throat_sores_severity: 4,
          proctcae_3_mouth_throat_sores_boolean: 3,
        })
      ).to.throw()
    })
  })

  describe('when has valid form response', function () {
    it('should transform to more structured object', function () {
      const outcome = transform_response({
        proctcae_1_dry_mouth_severity: 3,
        proctcae_2_difficulty_swallowing_severity: 4,
        proctcae_3_mouth_throat_sores_severity: 4,
        proctcae_3_mouth_throat_sores_impact: 3,
        proctcae_9_nausea_frequency: 0,
      })
      expect(outcome).to.deep.equal({
        nausea: {
          frequency: 0,
        },
        dry_mouth: {
          severity: 3,
        },
        difficulty_swallowing: {
          severity: 4,
        },
        mouth_throat_sores: {
          severity: 4,
          impact: 3,
        },
      })
    })
  })
})
