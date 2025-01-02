/* eslint-disable no-magic-numbers */
import { expect } from 'chai'
import R from 'ramda'

import { inputIdLens } from '../../lib/calculation_variants/api/input/lenses'
import {
  inputsInSubscaleLens,
  subscaleIdLens,
} from '../../lib/calculation_variants/api/subscale/lenses'
import { PRO_CTCAE_SYMPTOMS } from './definition/pro_ctcae_symptoms'
import { extract_symptom_and_dimension_from_input } from './pro_ctcae_calculation/extract_symptom_and_dimension_from_input/extract_symptom_and_dimension_from_input'

//@ts-expect-error to do
const amount_of_inputs_in_symptom_scale = scale_id =>
  R.compose(
    R.length,
    R.view(inputsInSubscaleLens),
    R.find(symptom_scale => R.view(subscaleIdLens, symptom_scale) === scale_id),
  )(PRO_CTCAE_SYMPTOMS)

//@ts-expect-error to do
const input_types_in_scale = scale_id =>
  R.compose(
    //@ts-expect-error to do
    R.map(q => q.dimension),
    R.map(input =>
      extract_symptom_and_dimension_from_input(R.view(inputIdLens, input)),
    ),
    R.view(inputsInSubscaleLens),
    R.find(symptom_scale => R.view(subscaleIdLens, symptom_scale) === scale_id),
  )(PRO_CTCAE_SYMPTOMS)

describe('pro_ctcae_symptoms', function () {
  describe('generic validation of the symptom scales', function () {
    it('should have 78 symptom scales', function () {
      /**
       * README mentions that there are only 78 symptom scales but
       * there are actually 81 symptom scales
       */
      const EXPECTED_AMOUNT_OF_SYMPTOMS = 81
      expect(PRO_CTCAE_SYMPTOMS.length).toEqual(EXPECTED_AMOUNT_OF_SYMPTOMS)
    })
  })

  describe('in depth validation per symptom scale', function () {
    describe('for the dry mouth symptom scale', function () {
      it('should have 1 input in the scale', function () {
        expect(amount_of_inputs_in_symptom_scale('dry_mouth')).toEqual(1)
      })

      it('should have the correct input types', function () {
        expect(input_types_in_scale('dry_mouth')).to.have.members(['severity'])
      })
    })

    describe('for the difficulty swallowing symptom scale', function () {
      it('should have 1 input in the scale', function () {
        expect(
          amount_of_inputs_in_symptom_scale('difficulty_swallowing'),
        ).toEqual(1)
      })

      it('should have the correct input types', function () {
        expect(input_types_in_scale('difficulty_swallowing')).to.have.members([
          'severity',
        ])
      })
    })

    describe('for the mouth/throat sores symptom scale', function () {
      it('should have 2 input in the scale', function () {
        expect(amount_of_inputs_in_symptom_scale('mouth_throat_sores')).toEqual(
          2,
        )
      })

      it('should have the correct input types', function () {
        expect(input_types_in_scale('mouth_throat_sores')).to.have.members([
          'severity',
          'impact',
        ])
      })
    })

    describe('for the cheilosis/cheilitis symptom scale', function () {
      it('should have 1 input in the scale', function () {
        expect(
          amount_of_inputs_in_symptom_scale('cheilosis_cheilitis'),
        ).toEqual(1)
      })

      it('should have the correct input types', function () {
        expect(input_types_in_scale('cheilosis_cheilitis')).to.have.members([
          'severity',
        ])
      })
    })

    describe('for the voice quality changes symptom scale', function () {
      it('should have 1 input in the scale', function () {
        expect(
          amount_of_inputs_in_symptom_scale('voice_quality_changes'),
        ).toEqual(1)
      })

      it('should have the correct input types', function () {
        expect(input_types_in_scale('voice_quality_changes')).to.have.members([
          'boolean',
        ])
      })
    })

    describe('for the hoarseness symptom scale', function () {
      it('should have 1 input in the scale', function () {
        expect(amount_of_inputs_in_symptom_scale('hoarseness')).toEqual(1)
      })

      it('should have the correct input types', function () {
        expect(input_types_in_scale('hoarseness')).to.have.members(['severity'])
      })
    })

    describe('for the taste changes symptom scale', function () {
      it('should have 1 input in the scale', function () {
        expect(amount_of_inputs_in_symptom_scale('taste_changes')).toEqual(1)
      })

      it('should have the correct input types', function () {
        expect(input_types_in_scale('taste_changes')).to.have.members([
          'severity',
        ])
      })
    })

    describe('for the decreased appetite symptom scale', function () {
      it('should have 2 input in the scale', function () {
        expect(amount_of_inputs_in_symptom_scale('decreased_appetite')).toEqual(
          2,
        )
      })

      it('should have the correct input types', function () {
        expect(input_types_in_scale('decreased_appetite')).to.have.members([
          'severity',
          'impact',
        ])
      })
    })

    describe('for the nausea symptom scale', function () {
      it('should have 2 input in the scale', function () {
        expect(amount_of_inputs_in_symptom_scale('nausea')).toEqual(2)
      })

      it('should have the correct input types', function () {
        expect(input_types_in_scale('nausea')).to.have.members([
          'frequency',
          'severity',
        ])
      })
    })

    describe('for the vomiting symptom scale', function () {
      it('should have 2 input in the scale', function () {
        expect(amount_of_inputs_in_symptom_scale('vomiting')).toEqual(2)
      })

      it('should have the correct input types', function () {
        expect(input_types_in_scale('vomiting')).to.have.members([
          'frequency',
          'severity',
        ])
      })
    })

    describe('for the heatburn symptom scale', function () {
      it('should have 2 input in the scale', function () {
        expect(amount_of_inputs_in_symptom_scale('heartburn')).toEqual(2)
      })

      it('should have the correct input types', function () {
        expect(input_types_in_scale('heartburn')).to.have.members([
          'frequency',
          'severity',
        ])
      })
    })

    describe('for the gas symptom scale', function () {
      it('should have 1 input in the scale', function () {
        expect(amount_of_inputs_in_symptom_scale('gas')).toEqual(1)
      })

      it('should have the correct input types', function () {
        expect(input_types_in_scale('gas')).to.have.members(['boolean'])
      })
    })

    describe('for the bloating symptom scale', function () {
      it('should have 2 input in the scale', function () {
        expect(amount_of_inputs_in_symptom_scale('bloating')).toEqual(2)
      })

      it('should have the correct input types', function () {
        expect(input_types_in_scale('bloating')).to.have.members([
          'frequency',
          'severity',
        ])
      })
    })

    describe('for the hiccups symptom scale', function () {
      it('should have 2 input in the scale', function () {
        expect(amount_of_inputs_in_symptom_scale('hiccups')).toEqual(2)
      })

      it('should have the correct input types', function () {
        expect(input_types_in_scale('hiccups')).to.have.members([
          'frequency',
          'severity',
        ])
      })
    })

    describe('for the constipation symptom scale', function () {
      it('should have 1 input in the scale', function () {
        expect(amount_of_inputs_in_symptom_scale('constipation')).toEqual(1)
      })

      it('should have the correct input types', function () {
        expect(input_types_in_scale('constipation')).to.have.members([
          'severity',
        ])
      })
    })

    describe('for the diarrhea symptom scale', function () {
      it('should have 1 input in the scale', function () {
        expect(amount_of_inputs_in_symptom_scale('diarrhea')).toEqual(1)
      })

      it('should have the correct input types', function () {
        expect(input_types_in_scale('diarrhea')).to.have.members(['frequency'])
      })
    })

    describe('for the abdominal pain symptom scale', function () {
      it('should have 3 input in the scale', function () {
        expect(amount_of_inputs_in_symptom_scale('abdominal_pain')).toEqual(3)
      })

      it('should have the correct input types', function () {
        expect(input_types_in_scale('abdominal_pain')).to.have.members([
          'frequency',
          'severity',
          'impact',
        ])
      })
    })

    describe('for the fecal incontinence symptom scale', function () {
      it('should have 2 input in the scale', function () {
        expect(amount_of_inputs_in_symptom_scale('fecal_incontinence')).toEqual(
          2,
        )
      })

      it('should have the correct input types', function () {
        expect(input_types_in_scale('fecal_incontinence')).to.have.members([
          'frequency',
          'impact',
        ])
      })
    })

    describe('for the shortness of breath symptom scale', function () {
      it('should have 2 input in the scale', function () {
        expect(
          amount_of_inputs_in_symptom_scale('shortness_of_breath'),
        ).toEqual(2)
      })

      it('should have the correct input types', function () {
        expect(input_types_in_scale('shortness_of_breath')).to.have.members([
          'severity',
          'impact',
        ])
      })
    })

    describe('for the cough symptom scale', function () {
      it('should have 2 input in the scale', function () {
        expect(amount_of_inputs_in_symptom_scale('cough')).toEqual(2)
      })

      it('should have the correct input types', function () {
        expect(input_types_in_scale('cough')).to.have.members([
          'severity',
          'impact',
        ])
      })
    })

    describe('for the wheezing symptom scale', function () {
      it('should have 1 input in the scale', function () {
        expect(amount_of_inputs_in_symptom_scale('wheezing')).toEqual(1)
      })

      it('should have the correct input types', function () {
        expect(input_types_in_scale('wheezing')).to.have.members(['severity'])
      })
    })

    describe('for the swelling symptom scale', function () {
      it('should have 3 input in the scale', function () {
        expect(amount_of_inputs_in_symptom_scale('swelling')).toEqual(3)
      })

      it('should have the correct input types', function () {
        expect(input_types_in_scale('swelling')).to.have.members([
          'frequency',
          'severity',
          'impact',
        ])
      })
    })

    describe('for the heart palpitations symptom scale', function () {
      it('should have 2 input in the scale', function () {
        expect(amount_of_inputs_in_symptom_scale('heart_palpitations')).toEqual(
          2,
        )
      })

      it('should have the correct input types', function () {
        expect(input_types_in_scale('heart_palpitations')).to.have.members([
          'frequency',
          'severity',
        ])
      })
    })

    describe('for the rash symptom scale', function () {
      it('should have 1 input in the scale', function () {
        expect(amount_of_inputs_in_symptom_scale('rash')).toEqual(1)
      })

      it('should have the correct input types', function () {
        expect(input_types_in_scale('rash')).to.have.members(['boolean'])
      })
    })

    describe('for the skin dryness symptom scale', function () {
      it('should have 1 input in the scale', function () {
        expect(amount_of_inputs_in_symptom_scale('skin_dryness')).toEqual(1)
      })

      it('should have the correct input types', function () {
        expect(input_types_in_scale('skin_dryness')).to.have.members([
          'severity',
        ])
      })
    })

    describe('for the acne symptom scale', function () {
      it('should have 1 input in the scale', function () {
        expect(amount_of_inputs_in_symptom_scale('acne')).toEqual(1)
      })

      it('should have the correct input types', function () {
        expect(input_types_in_scale('acne')).to.have.members(['severity'])
      })
    })

    describe('for the hair loss symptom scale', function () {
      it('should have 1 input in the scale', function () {
        expect(amount_of_inputs_in_symptom_scale('hair_loss')).toEqual(1)
      })

      it('should have the correct input types', function () {
        expect(input_types_in_scale('hair_loss')).to.have.members(['frequency'])
      })
    })

    describe('for the itching symptom scale', function () {
      it('should have 1 input in the scale', function () {
        expect(amount_of_inputs_in_symptom_scale('itching')).toEqual(1)
      })

      it('should have the correct input types', function () {
        expect(input_types_in_scale('itching')).to.have.members(['severity'])
      })
    })

    describe('for the hives symptom scale', function () {
      it('should have 1 input in the scale', function () {
        expect(amount_of_inputs_in_symptom_scale('hives')).toEqual(1)
      })

      it('should have the correct input types', function () {
        expect(input_types_in_scale('hives')).to.have.members(['boolean'])
      })
    })

    describe('for the hand-foot syndrome symptom scale', function () {
      it('should have 1 input in the scale', function () {
        expect(amount_of_inputs_in_symptom_scale('hand_foot_syndrome')).toEqual(
          1,
        )
      })

      it('should have the correct input types', function () {
        expect(input_types_in_scale('hand_foot_syndrome')).to.have.members([
          'severity',
        ])
      })
    })

    describe('for the nail loss symptom scale', function () {
      it('should have 1 input in the scale', function () {
        expect(amount_of_inputs_in_symptom_scale('nail_loss')).toEqual(1)
      })

      it('should have the correct input types', function () {
        expect(input_types_in_scale('nail_loss')).to.have.members(['boolean'])
      })
    })

    describe('for the nail ridging symptom scale', function () {
      it('should have 1 input in the scale', function () {
        expect(amount_of_inputs_in_symptom_scale('nail_ridging')).toEqual(1)
      })

      it('should have the correct input types', function () {
        expect(input_types_in_scale('nail_ridging')).to.have.members([
          'boolean',
        ])
      })
    })

    describe('for the nail discoloration symptom scale', function () {
      it('should have 1 input in the scale', function () {
        expect(amount_of_inputs_in_symptom_scale('nail_discoloration')).toEqual(
          1,
        )
      })

      it('should have the correct input types', function () {
        expect(input_types_in_scale('nail_discoloration')).to.have.members([
          'boolean',
        ])
      })
    })

    describe('for the sensitivity to sunlight symptom scale', function () {
      it('should have 1 input in the scale', function () {
        expect(
          amount_of_inputs_in_symptom_scale('sensitivity_to_sunlight'),
        ).toEqual(1)
      })

      it('should have the correct input types', function () {
        expect(input_types_in_scale('sensitivity_to_sunlight')).to.have.members(
          ['boolean'],
        )
      })
    })

    describe('for the bed/pressure sores symptom scale', function () {
      it('should have 1 input in the scale', function () {
        expect(amount_of_inputs_in_symptom_scale('bed_pressure_sores')).toEqual(
          1,
        )
      })

      it('should have the correct input types', function () {
        expect(input_types_in_scale('bed_pressure_sores')).to.have.members([
          'boolean',
        ])
      })
    })

    describe('for the radiation skin reaction symptom scale', function () {
      it('should have 1 input in the scale', function () {
        expect(
          amount_of_inputs_in_symptom_scale('radiation_skin_reaction'),
        ).toEqual(1)
      })

      it('should have the correct input types', function () {
        expect(input_types_in_scale('radiation_skin_reaction')).to.have.members(
          ['severity'],
        )
      })
    })

    describe('for the skin darkening symptom scale', function () {
      it('should have 1 input in the scale', function () {
        expect(amount_of_inputs_in_symptom_scale('skin_darkening')).toEqual(1)
      })

      it('should have the correct input types', function () {
        expect(input_types_in_scale('skin_darkening')).to.have.members([
          'boolean',
        ])
      })
    })

    describe('for the stretch marks symptom scale', function () {
      it('should have 1 input in the scale', function () {
        expect(amount_of_inputs_in_symptom_scale('stretch_marks')).toEqual(1)
      })

      it('should have the correct input types', function () {
        expect(input_types_in_scale('stretch_marks')).to.have.members([
          'boolean',
        ])
      })
    })

    describe('for the numbness & tingling symptom scale', function () {
      it('should have 2 input in the scale', function () {
        expect(amount_of_inputs_in_symptom_scale('numbness_tingling')).toEqual(
          2,
        )
      })

      it('should have the correct input types', function () {
        expect(input_types_in_scale('numbness_tingling')).to.have.members([
          'severity',
          'impact',
        ])
      })
    })

    describe('for the dizziness symptom scale', function () {
      it('should have 2 input in the scale', function () {
        expect(amount_of_inputs_in_symptom_scale('dizziness')).toEqual(2)
      })

      it('should have the correct input types', function () {
        expect(input_types_in_scale('dizziness')).to.have.members([
          'severity',
          'impact',
        ])
      })
    })

    describe('for the blurred vision symptom scale', function () {
      it('should have 2 input in the scale', function () {
        expect(amount_of_inputs_in_symptom_scale('blurred_vision')).toEqual(2)
      })

      it('should have the correct input types', function () {
        expect(input_types_in_scale('blurred_vision')).to.have.members([
          'severity',
          'impact',
        ])
      })
    })

    describe('for the flasing lights symptom scale', function () {
      it('should have 1 input in the scale', function () {
        expect(amount_of_inputs_in_symptom_scale('flashing_lights')).toEqual(1)
      })

      it('should have the correct input types', function () {
        expect(input_types_in_scale('flashing_lights')).to.have.members([
          'boolean',
        ])
      })
    })

    describe('for the visual floaters symptom scale', function () {
      it('should have 1 input in the scale', function () {
        expect(amount_of_inputs_in_symptom_scale('visual_floaters')).toEqual(1)
      })

      it('should have the correct input types', function () {
        expect(input_types_in_scale('visual_floaters')).to.have.members([
          'boolean',
        ])
      })
    })

    describe('for the watery eyes symptom scale', function () {
      it('should have 2 input in the scale', function () {
        expect(amount_of_inputs_in_symptom_scale('watery_eyes')).toEqual(2)
      })

      it('should have the correct input types', function () {
        expect(input_types_in_scale('watery_eyes')).to.have.members([
          'severity',
          'impact',
        ])
      })
    })

    describe('for the ringing in ears symptom scale', function () {
      it('should have 1 input in the scale', function () {
        expect(amount_of_inputs_in_symptom_scale('ringing_in_ears')).toEqual(1)
      })

      it('should have the correct input types', function () {
        expect(input_types_in_scale('ringing_in_ears')).to.have.members([
          'severity',
        ])
      })
    })

    describe('for the concentration symptom scale', function () {
      it('should have 2 input in the scale', function () {
        expect(amount_of_inputs_in_symptom_scale('concentration')).toEqual(2)
      })

      it('should have the correct input types', function () {
        expect(input_types_in_scale('concentration')).to.have.members([
          'severity',
          'impact',
        ])
      })
    })

    describe('for the general pain symptom scale', function () {
      it('should have 3 input in the scale', function () {
        expect(amount_of_inputs_in_symptom_scale('general_pain')).toEqual(3)
      })

      it('should have the correct input types', function () {
        expect(input_types_in_scale('general_pain')).to.have.members([
          'frequency',
          'severity',
          'impact',
        ])
      })
    })

    describe('for the headache symptom scale', function () {
      it('should have 3 input in the scale', function () {
        expect(amount_of_inputs_in_symptom_scale('headache')).toEqual(3)
      })

      it('should have the correct input types', function () {
        expect(input_types_in_scale('headache')).to.have.members([
          'frequency',
          'severity',
          'impact',
        ])
      })
    })

    describe('for the muscle pain symptom scale', function () {
      it('should have 3 input in the scale', function () {
        expect(amount_of_inputs_in_symptom_scale('muscle_pain')).toEqual(3)
      })

      it('should have the correct input types', function () {
        expect(input_types_in_scale('muscle_pain')).to.have.members([
          'frequency',
          'severity',
          'impact',
        ])
      })
    })

    describe('for the joint pain symptom scale', function () {
      it('should have 3 input in the scale', function () {
        expect(amount_of_inputs_in_symptom_scale('joint_pain')).toEqual(3)
      })

      it('should have the correct input types', function () {
        expect(input_types_in_scale('joint_pain')).to.have.members([
          'frequency',
          'severity',
          'impact',
        ])
      })
    })

    describe('for the insomnia symptom scale', function () {
      it('should have 2 input in the scale', function () {
        expect(amount_of_inputs_in_symptom_scale('insomnia')).toEqual(2)
      })

      it('should have the correct input types', function () {
        expect(input_types_in_scale('insomnia')).to.have.members([
          'severity',
          'impact',
        ])
      })
    })

    describe('for the fatigue symptom scale', function () {
      it('should have 2 input in the scale', function () {
        expect(amount_of_inputs_in_symptom_scale('fatigue')).toEqual(2)
      })

      it('should have the correct input types', function () {
        expect(input_types_in_scale('fatigue')).to.have.members([
          'severity',
          'impact',
        ])
      })
    })

    describe('for the anxious symptom scale', function () {
      it('should have 3 input in the scale', function () {
        expect(amount_of_inputs_in_symptom_scale('anxious')).toEqual(3)
      })

      it('should have the correct input types', function () {
        expect(input_types_in_scale('anxious')).to.have.members([
          'frequency',
          'severity',
          'impact',
        ])
      })
    })

    describe('for the discouraged symptom scale', function () {
      it('should have 3 input in the scale', function () {
        expect(amount_of_inputs_in_symptom_scale('discouraged')).toEqual(3)
      })

      it('should have the correct input types', function () {
        expect(input_types_in_scale('discouraged')).to.have.members([
          'frequency',
          'severity',
          'impact',
        ])
      })
    })

    describe('for the sad symptom scale', function () {
      it('should have 3 input in the scale', function () {
        expect(amount_of_inputs_in_symptom_scale('sad')).toEqual(3)
      })

      it('should have the correct input types', function () {
        expect(input_types_in_scale('sad')).to.have.members([
          'frequency',
          'severity',
          'impact',
        ])
      })
    })

    describe('for the irregular periods/vaginal bleeding symptom scale', function () {
      it('should have 1 input in the scale', function () {
        expect(
          amount_of_inputs_in_symptom_scale(
            'irregular_periods_vaginal_bleeding',
          ),
        ).toEqual(1)
      })

      it('should have the correct input types', function () {
        expect(
          input_types_in_scale('irregular_periods_vaginal_bleeding'),
        ).to.have.members(['boolean'])
      })
    })

    describe('for the missed expected menstrual period symptom scale', function () {
      it('should have 1 input in the scale', function () {
        expect(
          amount_of_inputs_in_symptom_scale(
            'missed_expected_menstruation_period',
          ),
        ).toEqual(1)
      })

      it('should have the correct input types', function () {
        expect(
          input_types_in_scale('missed_expected_menstruation_period'),
        ).to.have.members(['boolean'])
      })
    })

    describe('for the vaginal discharge symptom scale', function () {
      it('should have 1 input in the scale', function () {
        expect(amount_of_inputs_in_symptom_scale('vaginal_discharge')).toEqual(
          1,
        )
      })

      it('should have the correct input types', function () {
        expect(input_types_in_scale('vaginal_discharge')).to.have.members([
          'frequency',
        ])
      })
    })

    describe('for the vaginal dryness symptom scale', function () {
      it('should have 1 input in the scale', function () {
        expect(amount_of_inputs_in_symptom_scale('vaginal_dryness')).toEqual(1)
      })

      it('should have the correct input types', function () {
        expect(input_types_in_scale('vaginal_dryness')).to.have.members([
          'severity',
        ])
      })
    })

    describe('for the painful urination symptom scale', function () {
      it('should have 1 input in the scale', function () {
        expect(amount_of_inputs_in_symptom_scale('painful_urination')).toEqual(
          1,
        )
      })

      it('should have the correct input types', function () {
        expect(input_types_in_scale('painful_urination')).to.have.members([
          'severity',
        ])
      })
    })

    describe('for the urinary urgency symptom scale', function () {
      it('should have 2 input in the scale', function () {
        expect(amount_of_inputs_in_symptom_scale('urinary_urgency')).toEqual(2)
      })

      it('should have the correct input types', function () {
        expect(input_types_in_scale('urinary_urgency')).to.have.members([
          'frequency',
          'impact',
        ])
      })
    })

    describe('for the change in usual urine color symptom scale', function () {
      it('should have 1 input in the scale', function () {
        expect(
          amount_of_inputs_in_symptom_scale('change_in_usual_urine_color'),
        ).toEqual(1)
      })

      it('should have the correct input types', function () {
        expect(
          input_types_in_scale('change_in_usual_urine_color'),
        ).to.have.members(['boolean'])
      })
    })

    describe('for the urinary incontinence symptom scale', function () {
      it('should have 2 input in the scale', function () {
        expect(
          amount_of_inputs_in_symptom_scale('urinary_incontinence'),
        ).toEqual(2)
      })

      it('should have the correct input types', function () {
        expect(input_types_in_scale('urinary_incontinence')).to.have.members([
          'frequency',
          'impact',
        ])
      })
    })

    describe('for the achieve and maintain erection symptom scale', function () {
      it('should have 1 input in the scale', function () {
        expect(
          amount_of_inputs_in_symptom_scale('achieve_and_maintain_erection'),
        ).toEqual(1)
      })

      it('should have the correct input types', function () {
        expect(
          input_types_in_scale('achieve_and_maintain_erection'),
        ).to.have.members(['severity'])
      })
    })

    describe('for the ejaculation symptom scale', function () {
      it('should have 1 input in the scale', function () {
        expect(amount_of_inputs_in_symptom_scale('ejaculation')).toEqual(1)
      })

      it('should have the correct input types', function () {
        expect(input_types_in_scale('ejaculation')).to.have.members([
          'frequency',
        ])
      })
    })

    describe('for the decreased libido symptom scale', function () {
      it('should have 1 input in the scale', function () {
        expect(amount_of_inputs_in_symptom_scale('decreased_libido')).toEqual(1)
      })

      it('should have the correct input types', function () {
        expect(input_types_in_scale('decreased_libido')).to.have.members([
          'severity',
        ])
      })
    })

    describe('for the delayed orgasm symptom scale', function () {
      it('should have 1 input in the scale', function () {
        expect(amount_of_inputs_in_symptom_scale('delayed_orgasm')).toEqual(1)
      })

      it('should have the correct input types', function () {
        expect(input_types_in_scale('delayed_orgasm')).to.have.members([
          'boolean',
        ])
      })
    })

    describe('for the unable to have orgasm symptom scale', function () {
      it('should have 1 input in the scale', function () {
        expect(
          amount_of_inputs_in_symptom_scale('unable_to_have_orgasm'),
        ).toEqual(1)
      })

      it('should have the correct input types', function () {
        expect(input_types_in_scale('unable_to_have_orgasm')).to.have.members([
          'boolean',
        ])
      })
    })

    describe('for the pain with sexual intercourse symptom scale', function () {
      it('should have 1 input in the scale', function () {
        expect(
          amount_of_inputs_in_symptom_scale('pain_w_sexual_intercourse'),
        ).toEqual(1)
      })

      it('should have the correct input types', function () {
        expect(
          input_types_in_scale('pain_w_sexual_intercourse'),
        ).to.have.members(['severity'])
      })
    })

    describe('for the breast swelling and tenderness symptom scale', function () {
      it('should have 1 input in the scale', function () {
        expect(
          amount_of_inputs_in_symptom_scale('breast_swelling_and_tenderness'),
        ).toEqual(1)
      })

      it('should have the correct input types', function () {
        expect(
          input_types_in_scale('breast_swelling_and_tenderness'),
        ).to.have.members(['severity'])
      })
    })

    describe('for the bruising symptom scale', function () {
      it('should have 1 input in the scale', function () {
        expect(amount_of_inputs_in_symptom_scale('bruising')).toEqual(1)
      })

      it('should have the correct input types', function () {
        expect(input_types_in_scale('bruising')).to.have.members(['boolean'])
      })
    })

    describe('for the chills symptom scale', function () {
      it('should have 2 input in the scale', function () {
        expect(amount_of_inputs_in_symptom_scale('chills')).toEqual(2)
      })

      it('should have the correct input types', function () {
        expect(input_types_in_scale('chills')).to.have.members([
          'frequency',
          'severity',
        ])
      })
    })

    describe('for the increased sweating symptom scale', function () {
      it('should have 2 input in the scale', function () {
        expect(amount_of_inputs_in_symptom_scale('increased_sweating')).toEqual(
          2,
        )
      })

      it('should have the correct input types', function () {
        expect(input_types_in_scale('increased_sweating')).to.have.members([
          'frequency',
          'severity',
        ])
      })
    })

    describe('for the decreased sweating symptom scale', function () {
      it('should have 1 input in the scale', function () {
        expect(amount_of_inputs_in_symptom_scale('decreased_sweating')).toEqual(
          1,
        )
      })

      it('should have the correct input types', function () {
        expect(input_types_in_scale('decreased_sweating')).to.have.members([
          'boolean',
        ])
      })
    })

    describe('for the hot flashes symptom scale', function () {
      it('should have 2 input in the scale', function () {
        expect(amount_of_inputs_in_symptom_scale('hot_flashes')).toEqual(2)
      })

      it('should have the correct input types', function () {
        expect(input_types_in_scale('hot_flashes')).to.have.members([
          'frequency',
          'severity',
        ])
      })
    })

    describe('for the nosebleed symptom scale', function () {
      it('should have 2 input in the scale', function () {
        expect(amount_of_inputs_in_symptom_scale('nosebleed')).toEqual(2)
      })

      it('should have the correct input types', function () {
        expect(input_types_in_scale('nosebleed')).to.have.members([
          'frequency',
          'severity',
        ])
      })
    })

    describe('for the pain and swelling at injection side symptom scale', function () {
      it('should have 1 input in the scale', function () {
        expect(amount_of_inputs_in_symptom_scale('pain_and_swelling')).toEqual(
          1,
        )
      })

      it('should have the correct input types', function () {
        expect(input_types_in_scale('pain_and_swelling')).to.have.members([
          'boolean',
        ])
      })
    })

    describe('for the body odor symptom scale', function () {
      it('should have 1 input in the scale', function () {
        expect(amount_of_inputs_in_symptom_scale('body_odor')).toEqual(1)
      })

      it('should have the correct input types', function () {
        expect(input_types_in_scale('body_odor')).to.have.members(['severity'])
      })
    })

    describe('for the other symptoms symptom scale', function () {
      it('should have 1 input in the scale', function () {
        expect(amount_of_inputs_in_symptom_scale('other_symptoms')).toEqual(1)
      })

      it('should have the correct input types', function () {
        expect(input_types_in_scale('other_symptoms')).to.have.members([
          'boolean',
        ])
      })
    })
  })
})
