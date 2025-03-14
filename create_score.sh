```bash
#!/bin/bash

# Create directories
mkdir -p src/scores/bmi_test/definition

# Create index.ts
cat <<"EOF" > src/scores/bmi_test/index.ts
export * from './bmi_test'
EOF

# Create bmi_test.ts
cat <<"EOF" > src/scores/bmi_test/bmi_test.ts
import { ScoreType } from '../../types'
import { BMI_TEST_INPUTS, BMI_TEST_OUTPUT } from './definition'

export const bmi_test: ScoreType<typeof BMI_TEST_INPUTS, typeof BMI_TEST_OUTPUT> = {
  name: 'BMI Test',
  readmeLocation: __dirname,
  inputSchema: BMI_TEST_INPUTS,
  outputSchema: BMI_TEST_OUTPUT,
  calculate: ({ data }) => {
    return {
      bmi: data.weight / ((data.height / 100) ** 2),
    }
  }
}
EOF

# Create definition files
cat <<"EOF" > src/scores/bmi_test/definition/bmi_test_inputs.ts
import { z } from 'zod'
import type { ScoreInputSchemaType } from '../../../types'

export const BMI_TEST_INPUTS = {
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

cat <<"EOF" > src/scores/bmi_test/definition/bmi_test_output.ts
import { z } from 'zod'
import type { ScoreOutputSchemaType } from '../../../types'

export const BMI_TEST_OUTPUT = {
  bmi: { 
    label: { en: 'Body Mass Index (BMI)' },
    type: z.number(), 
    unit: 'kg/m²' 
  }
} satisfies ScoreOutputSchemaType
EOF

cat <<"EOF" > src/scores/bmi_test/definition/bmi_test_subscales.ts
// Example of subscales for explanation purposes, replace with real subscales if applicable
export type SubscaleType = 'EXAMPLE_SUBSCALE_1' | 'EXAMPLE_SUBSCALE_2'

export const BMI_TEST_SUBSCALES: Record<SubscaleType, string[]> = {
  EXAMPLE_SUBSCALE_1: ['subscale_item_1', 'subscale_item_2'],
  EXAMPLE_SUBSCALE_2: ['subscale_item_3'],
}
EOF

# Create README.md using printf to handle special characters
printf 'Add documentation here' > src/scores/bmi_test/README.md

# Create bmi_test.test.ts
cat <<"EOF" > src/scores/bmi_test/bmi_test.test.ts
import { ScoreLibrary } from '../library'
import { bmi_test } from './bmi_test'
import { Score } from '../../classes'
import { ZodError } from 'zod'

const bmi_test_calculation = new Score(bmi_test)

describe('bmi_test', function () {
  it('bmi_test calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('bmi_test')
  })

  describe('basic assumptions', function () {
    const outcome = bmi_test_calculation.calculate({
      payload: {
        weight: 70,
        height: 175,
      },
    })

    it('should return 1 calculation result', function () {
      expect(Object.keys(outcome)).toHaveLength(1)
    })

    it('should return the correct result for BMI', function () {
      const EXPECTED_RESULT = 22.86
      expect(outcome.bmi).toBeCloseTo(EXPECTED_RESULT, 2)
    })
  })

  describe('validations', function () {

    describe('when given a negative weight', function () {
      it('should throw an error', function () {
        expect(() =>
          bmi_test_calculation.calculate({
            payload: {
              weight: -70,
              height: 175,
            },
          }),
        ).toThrow(ZodError)
      })
    })

    describe('when the height is zero', function () {
      it('should throw an error', function () {
        expect(() =>
          bmi_test_calculation.calculate({
            payload: {
              weight: 70,
              height: 0,
            },
          }),
        ).toThrow(ZodError)
      })
    })
  })
})
EOF
```