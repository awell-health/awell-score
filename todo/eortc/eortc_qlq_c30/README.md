# EORTC QLQ-C30

## Introduction

The European Organisation for Research and Treatment of Cancer (EORTC) Quality of Life Group (QLG) develops and validates PRO instruments for use in oncology. Their quality of life (QoL) core questionnaire, the QLQ-C30, was developed more than 25 years ago and is one of the most widely used cancer-specific PRO instruments [1]. The ICHOM standard sets for malignant neoplasms frequently recommends the use of the QLQ-C30 as part of the clinical routine  (e.g. [2]).

## Questions and Scoring

The QLQ-C30 is composed of both multi-item scales and single-item measures. These include five functional scales, three symptom scales, a global health status / QoL scale, and six single items. Each of the multi-item scales includes a different set of items - no item occurs in more than one scale [3]. As shown in this table:

| Scale | Scale type | Scale ID | Number of items | Item range | Items/questions IDs |
| ------| ------ | ------ | ------ | ------ | ------ |
| Global health status/QoL | Global | QL2 | 2 | 6 | 29, 30 |
| Physical functioning | Functional | PF2 | 5 | 3 | 1 - 5 |
| Role functioning | Functional | RF2 | 2 | 3 | 6, 7 |
| Emotinal functioning | Functional | EF | 4 | 3 | 21 - 24 |
| Cognitive functioning | Functional | CF | 2 | 3 | 20, 25 |
| Social functioning | Functional | SF | 2 | 3 | 26, 27 |
| Fatigue | Symptom | FA | 3 | 3 | 10, 12, 18 |
| Nausea and vomiting | Symptom | NV | 2 | 3 | 14, 15 |
| Pain | Symptom | PA | 2 | 3 | 9, 19 |
| Dyspnoea | Symptom | DY | 1 | 3 | 8 |
| Insomnia | Symptom | SL | 1 | 3 | 11 |
| Appetite loss | Symptom | AP | 1 | 3 | 13 |
| Constipation | Symptom | CO | 1 | 3 | 16 |
| Diarrhoea | Symptom | DI | 1 | 3 | 17 |
| Financial difficulties | Symptom | FI | 1 | 3 | 28 |

**Remarks:**
* “Item range” is the difference between the possible maximum and the minimum response to individual items. All items are scored 1 to 4, giving range = 3

## Calculations

### Raw score

For all scales, the Raw Score, RS, is the mean of the component items:

```
Raw score = RS = sum of all items / amount of items
``` 

### Linear Transformation
To obtain the Score S, standardize the raw score to a 0 – 100 range following the appropriate transformation:

1. Functional scales
```
S = (1 − ((RS−1)/range)) × 100
```
2. Symptom scales and Global health status
```
S = ((RS−1)/range) × 100
```

## Missing data

* Have at least half of the items from the scale been answered?
* If Yes, use all the items that were completed, and apply the standard equations given on the previous pages for calculating the scale scores; ignore any items with missing values when making the calculations.
* If No, set scale score to missing.
* For single-item measures, set score to missing.


## Interpretation

A high scale score represents a higher response level. Thus a high score for a functional scale represents a high / healthy level of functioning, a high score for the global health status / QoL represents a high QoL, but a high score for a symptom scale / item represents a high level of symptomatology / problems [3].

## References
[1] Aaronson NK, Ahmedzai S, Bergman B, et al. The European Organization for Research and Treatment of Cancer QLQ-C30: a quality-of-life instrument for use in international clinical trials in oncology. J Natl Cancer Inst. 1993;85(5):365-376. doi:10.1093/jnci/85.5.365\
[2] Ong WL, Schouwenburg MG, van Bommel ACM, et al. A Standard Set of Value-Based Patient-Centered Outcomes for Breast Cancer: The International Consortium for Health Outcomes Measurement (ICHOM) Initiative. JAMA Oncol. 2017;3(5):677-685. doi:10.1001/jamaoncol.2016.4851\
[3] https://drive.google.com/file/d/1GwwqedEOj6pfzzSCU1ihrQbxABL3db3M/view?usp=sharing
