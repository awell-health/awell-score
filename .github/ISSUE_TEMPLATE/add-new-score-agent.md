---
name: Add New Score Agent
about: Describe this issue template's purpose here.
title: "[Score Agent] Add <Score Name>"
labels: score-agent
assignees: ''

---

name: New Medical Score Request
description: Request the creation of a new medical score calculation
labels: [new-score]
body:
  - type: input
    id: score_name
    attributes:
      label: "Score Name"
      description: "Enter the name of the medical score"
    validations:
      required: true

  - type: textarea
    id: description
    attributes:
      label: "Description"
      description: "Describe the medical score, its purpose, and how it is calculated"
    validations:
      required: true

  - type: textarea
    id: inputs
    attributes:
      label: "Inputs"
      description: "List the input variables, expected types, and possible values"
    validations:
      required: true

  - type: textarea
    id: outputs
    attributes:
      label: "Outputs"
      description: "Define the outputs of the calculation, expected types, and units"
    validations:
      required: true

  - type: textarea
    id: calculation
    attributes:
      label: "Calculation Logic"
      description: "Describe the formula, rules, and logic for computing the score"
    validations:
      required: true
