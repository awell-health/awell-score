```bash
#!/bin/bash

# Create directories
mkdir -p src/scores/bmi/definition

# Create index.ts
cat <<'EOF' > src/scores/bmi/index.ts
export * from './bmi'
EOF

# Create bmi.ts
cat <<"EOF" > src/scores/bmi/bmi.ts
import { type ScoreType } from '../../types'
import { BMI_INPUTS, BMI_OUTPUT } from './definition'

export const bmi: ScoreType<typeof BMI_INPUTS, typeof BMI_OUTPUT> = {
  name: 'Body Mass Index (BMI)',
  readmeLocation: __dirname,
  inputSchema: BMI_INPUTS,
  outputSchema: BMI_OUTPUT,
  calculate: ({ data }) => {
    return {
      bmi: data.weight / ((data.height / 100) ** 2),
    }
  }
}
EOF

# Create bmi.test.ts
cat <<"EOF" > src/scores/bmi/bmi.test.ts
import { ScoreLibrary } from '../library'
import { bmi } from './bmi'
import { Score } from '../../classes'
import { ZodError } from 'zod'

const bmi_calculation = new Score(bmi)

describe('bmi', function () {
  it('bmi calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('bmi')
  })

  describe('basic assumptions', function () {
    const outcome = bmi_calculation.calculate({
      payload: {
        weight: 70, // 70 kg
        height: 175, // 175 cm
      },
    })

    it('should return bmi value', function () {
      const EXPECTED_RESULT = 22.86
      expect(outcome.bmi).toEqual(EXPECTED_RESULT)
    })
  })

  describe('validations', function () {
    describe('the score includes the correct input fields', function () {
      it('should have all the expected input ids configured', function () {
        const EXPECTED_INPUT_IDS = ['weight', 'height']
        const configured_calculation_input_ids = Object.keys(
          bmi_calculation.inputSchemaAsObject.shape,
        )

        expect(EXPECTED_INPUT_IDS).toEqual(configured_calculation_input_ids)
      })
    })

    describe('when called with a response containing invalid data', function () {
      it('should throw an error', function () {
        expect(() =>
          bmi_calculation.calculate({
            payload: {
              weight: 'not a number',
            },
          }),
        ).toThrow(ZodError)
      })
    })
  })
})
EOF

# Create bmi_inputs.ts
cat <<"EOF" > src/scores/bmi/definition/bmi_inputs.ts
import { z } from 'zod'
import type { ScoreInputSchemaType } from '../../../types'

export const BMI_INPUTS = {
  weight: { 
    label: { en: 'Weight (kg)' },
    type: z.number().nonnegative(),
    unit: 'kg',
  },
  height: { 
    label: { en: 'Height (cm)' },
    type: z.number().positive(),
    unit: 'cm',
  }
} satisfies ScoreInputSchemaType
EOF

# Create bmi_output.ts
cat <<"EOF" > src/scores/bmi/definition/bmi_output.ts
import { z } from 'zod'
import type { ScoreOutputSchemaType } from '../../../types'

export const BMI_OUTPUT = {
  bmi: { 
    label: { en: 'Body Mass Index (BMI)' },
    type: z.number(), 
    unit: 'kg/m²' 
  }
} satisfies ScoreOutputSchemaType
EOF

# Create bmi_subscales.ts
cat <<"EOF" > src/scores/bmi/definition/bmi_subscales.ts
// No subscales or domains are defined for BMI
EOF

# Create README.md using printf to handle special characters
printf 'Add documentation here' > src/scores/bmi/README.md
```