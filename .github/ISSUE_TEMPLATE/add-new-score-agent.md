---
name: Add New Score Agent
about: Describe this issue template's purpose here.
title: "[Score Agent] Add <Score Name>"
labels: score-agent
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