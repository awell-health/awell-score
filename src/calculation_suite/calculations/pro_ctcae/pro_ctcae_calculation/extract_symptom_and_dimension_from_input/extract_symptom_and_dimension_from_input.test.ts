import { expect } from 'chai'

import { extract_symptom_and_dimension_from_input } from './extract_symptom_and_dimension_from_input'

describe('extract_symptom_and_dimension_from_input', function () {
  describe('when input does not follow expected format (e.g., proctcae_1_boolean)', function () {
    it('should throw an error', function () {
      expect(() =>
        extract_symptom_and_dimension_from_input('proctcae_1_boolean')
      ).to.throw()
    })
  })

  describe('when input does not follow expected format (e.g., "")', function () {
    it('should throw an error', function () {
      expect(() => extract_symptom_and_dimension_from_input('')).to.throw()
    })
  })

  describe('when input does not follow expected format (e.g., "_a_b_")', function () {
    it('should throw an error', function () {
      expect(() => extract_symptom_and_dimension_from_input('_a_b_')).to.throw()
    })
  })

  describe('when input_id is proctcae_1_dry_mouth_severity', function () {
    it('should return {symptom: `dry_mouth`, dimension: `severity`}', function () {
      expect(
        extract_symptom_and_dimension_from_input(
          'proctcae_1_dry_mouth_severity'
        )
      ).to.deep.equal({ symptom: `dry_mouth`, dimension: `severity` })
    })
  })
  describe('when input_id is proctcae_1_voice_quality_changes_severity', function () {
    it('should return {symptom: `voice_quality_changes`, dimension: `severity`}', function () {
      expect(
        extract_symptom_and_dimension_from_input(
          'proctcae_1_voice_quality_changes_severity'
        )
      ).to.deep.equal({
        symptom: `voice_quality_changes`,
        dimension: `severity`,
      })
    })
  })

  describe('when input_id is proctcae_1_word_severity', function () {
    it('should return {symptom: `word`, dimension: `severity`}', function () {
      expect(
        extract_symptom_and_dimension_from_input('proctcae_1_word_severity')
      ).to.deep.equal({
        symptom: `word`,
        dimension: `severity`,
      })
    })
  })

  describe('when input_id is proctcae_20_word_severity', function () {
    it('should return {symptom: `word`, dimension: `severity`}', function () {
      expect(
        extract_symptom_and_dimension_from_input('proctcae_20_word_severity')
      ).to.deep.equal({
        symptom: `word`,
        dimension: `severity`,
      })
    })
  })
})
