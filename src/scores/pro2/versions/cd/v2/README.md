# PRO2 CD (Version 2 | 10-2025)

## Introduction 

The PRO2 is a Patient-reported outcome derived from the Crohn's Disease Activity Index (CDAI) and determines the current severity of Crohn’s disease[1,2].

This second version of the PRO2, added in October 2025, is specifically for Crohn's disease and was developed in collaboration with AZ Maria Middelares for benchmarking purposes with other Belgian hospitals. This instrument may deviate from the original PRO2.

## Questionnaire

The questionnaire has two questions:

1. Hoeveel vloeibare of zeer zachte stoelgangen had u gemiddeld per dag tijdens de laatste 7 dagen?
2. Duid het antwoord aan dat het best uw buikpijn beschrijft, gemiddeld gezien tijdens de laatste 7 dagen.
    - Geen (0)
    - Mild (1)
    - Matig (2)
    - Ernstig (3)

The calculation has a third input to collect the PRO2 baseline score which is used to determine whether an alert should be triggered.

If the response to question 1 is 0, the calculation will default it to 1 as defined in the specification:

> Gelieve ook score 1 in te geven indien u tijdens de laatste 7 dagen vloeibare of zeer zachte stoelgang heeft aangemaakt maar minder dan 1x per dag.

## Calculation

### PRO2 CD Score

Both items are multiplied by a factor for scoring purposes (2 for stool frequency and 5 for abdominal pain). Then they are summed to get the total score.

```
PRO2 CD Score = (Q1 * 2) + (Q2 * 5)
```

### Alert

An alert is triggered when **both** of the following conditions are met:

- PRO2 CD score > 14, **AND**
- PRO2 CD score increase ≥ 5 compared to baseline

If a baseline score is not provided to the calculator, the alert will always return `false`.

## References

[1] Jairath V, Khanna R, Zou GY, Stitt L, Mosli M, Vandervoort MK, D'Haens G, Sandborn WJ, Feagan BG, Levesque BG. Development of interim patient-reported outcome measures for the assessment of ulcerative colitis disease activity in clinical trials. Aliment Pharmacol Ther. 2015 Nov;42(10):1200-10. doi: 10.1111/apt.13408. Epub 2015 Sep 21. PMID: 26388424.

[2] de Jong MJ, Huibregtse R, Masclee AAM, Jonkers DMAE, Pierik MJ. Patient-Reported Outcome Measures for Use in Clinical Trials and Clinical Practice in Inflammatory Bowel Diseases: A Systematic Review. Clin Gastroenterol Hepatol. 2018 May;16(5):648-663.e3. doi: 10.1016/j.cgh.2017.10.019. PMID: 29066372.