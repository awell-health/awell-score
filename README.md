<h1 align="center">
  <a href="https://developers.awellhealth.com/awell-score/">
    Awell Score
  </a>
</h1>

<p align="center">
  <strong>A library of clinically validated score calculations</strong><br>
  for (para)medical use.
</p>

<p align="center">
  <i>Licensed under the MIT license.</i>
</p>

<p align="center">
    <img src="https://badgen.net/badge/-/TypeScript?icon=typescript&label&labelColor=blue&color=555555" alt="Built with TypeScript" />
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome!" />
</p>

**Awell Score** is a library of clinically validated score calculations designed for easy integration into proprietary software systems. It helps developers and healthcare professionals save time and ensure accuracy when incorporating clinical scoring algorithms into their applications.

### Key Benefits:

- **⏱️ Save time and resources**: No need to build scoring algorithms from scratch.
- **📏 Reliability and validity**: Open peer review ensures high-quality, clinically assured calculations.
- **🧑‍🤝‍🧑 Collaboration**: Contribute to and benefit from a shared knowledge base.

## Contents

- [Background](#-background)
- [Documentation](#-documentation)
- [Installation and running the app](#-installation-and-running-the-app)
- [Test suite](#-test-suite)
- [How to Contribute](#-how-to-contribute)
- [License policy](#-license-policy)

## 📜 Background

Patient-Reported Outcome Measures (PROMs) and clinical scores are widely used to assess health conditions. While platforms like [MDCalc](https://www.mdcalc.com/) offer UI-based solutions, these are not ideal for direct integration into custom software. Awell Score bridges this gap by providing a package of scoring functions for seamless integration.

## 📖 Documentation

### 🎉 Installation

Install the package using your preferred package manager:

```bash
npm install @awell-health/awell-score
```

```bash
yarn add @awell-health/awell-score
```

### Usage

Import the `ScoreLibrary` and access the scores you need.

```typescript
import { ScoreLibrary } from '@awell-health/awell-score'

const bmiScore = ScoreLibrary.bmi
const result = bmi.calculate({
  payload: {
    height: 180,
    weight: 70,
  },
})

console.log(result) // { BMI: 21.6 }
```

You can browse all availables scores in the [Github repository](https://github.com/awell-health/awell-score/tree/main/src/scores) here or use [Awell's Playground](https://score.awellhealth.com).

### Simulation

Each score includes a simulate method to generate example inputs and results:

```typescript
import { ScoreLibrary } from '@awell-health/awell-score'

const simulation = ScoreLibrary.bmi.simulate()

console.log(simulation)
// {
//   simulatedInput: {
//     height: 122,
//     weight: 75,
//   },
//   results: {
//     BMI: 21.604938271604937
//   }
// }
```

## 👏 How to Contribute

We welcome contributions from the community to improve and expand the Awell Score library. Here's how you can get involved:

### Adding a new Score

Use the provided SDK to create new scores in the src/scores/library folder. Define your score like this:

```typescript
import { ScoreType } from '../../types'
import { z } from 'zod'

const inputSchema = {
  weight: {
    type: z.number(),
    label: { en: 'Weight' },
  },
  height: {
    type: z.number(),
    label: { en: 'Height' },
  },
}

const outputSchema = {
  bmi: {
    type: z.number(),
    label: { en: 'BMI' },
  },
}

export const bmi: ScoreType<
  typeof inputSchema,
  typeof outputSchema
> = {
  name: 'BMI',
  readmeLocation: __dirname,
  inputSchema,
  outputSchema,
  calculate: ({ data }) => {
    // Your calculation logic here
    const numeric_height_in_m = data.height / 100
    const BMI = data.weight / numeric_height_in_m ** 2

    return {
      BMI,
    }
  },
}
```

#### Input schema

The following types are supported:

- `z.boolean()` for boolean inputs
- `z.number()` for numeric inputs (supports defining a range with `.min()` and `.max()`)
- `z.string()` for string inputs
- `z.string().date()` for date inputs
- `z.union([z.literal(number), z.literal(number), ...])` for numeric inputs with a fixed set of options
- `z.union([z.literal(string), z.literal(string), ...])` for string inputs with a fixed set of options
- `z.array(z.union([z.literal(number), z.literal(number), ...]))` for numeric arrays with a fixed set of options
- `z.array(z.union([z.literal(string), z.literal(string), ...]))` for string arrays with a fixed set of options

Every type can be optional with `.optional()`. If not set, the input is required and the score will not be able if the input is not provided. If you'd like to handle missing inputs inside the score calculation, you can set the input to `z.number().optional()`.

#### Output schema

Output types are limited to `z.number()`, `z.string()`, and `z.boolean()`. They cannot be optional.

#### Calculate function

The calculate function is a function that takes the input data and returns the output data (=the calculated score with one or more results).

It always needs to return an object with the same keys as the output schema and values of the correct types. However, the value can also be set to `null` if the score cannot be calculated.

## 🪪 License policy

Awell Score is open-source and supports various clinical questionnaires. Some questionnaires may have licensing requirements. Users are responsible for ensuring they hold the appropriate licenses. We do not manage or provide these licenses. Misuse of licensed questionnaires is the sole responsibility of the user.