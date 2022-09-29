# EORTC QLQ-LC13

## Introduction

The European Organisation for Research and Treatment of Cancer (EORTC) Quality of Life Questionnaire‐Lung Cancer 13 (QLQ‐LC13) was the first module to be used in conjunction with the EORTC Core Quality of Life Questionnaire (EORTC QLQ‐C30) and was published in 1994 [1]. The LC13, as its name suggests, covers 13 typical symptoms of lung cancer patients, such as coughing, pain, dyspnea, sore mouth, peripheral neuropathy, and hair loss. In clinical research, the QLQ-LC13 is considered a standard instrument for measuring the quality of life (QL) of patients with lung cancer [2] 


## Questions and Scoring

The lung cancer module incorporates one multi-item scale to assess dyspnoea, and a series of single items assessing pain, coughing, sore  mouth, dysphagia, peripheral neuropathy, alopecia, and  haemoptysis [3]. As shown in this table:

| Scale | Scale type | Scale ID | Number of items | Item range | Items/questions IDs |
| ------| ------ | ------ | ------ | ------ | ------ |
| Dyspnoea | Symptom | LCDY | 3 | 3 | 3, 4, 5 |
| Coughing | Symptom | LCCO | 1 | 3 | 1 |
| Haemoptysis | Symptom | LCHA | 1 | 3 | 2 |
| Sore mouth | Symptom | LCSM | 1 | 3 | 6 |
| Dysphagia | Symptom | LCDS | 1 | 3 | 7 |
| Peripheral neuropathy | Symptom | LCPN | 1 | 3 | 8 |
| Alopecia | Symptom | LCHR | 1 | 3 | 9 |
| Pain in chest | Symptom | LCPC | 1 | 3 | 10 |
| Pain in arm or shoulder | Symptom | LCPA | 1 | 3 | 11 |
| Pain in other parts | Symptom | LCP0 | 1 | 3 | 12 |

**Remarks:**
- “Item range” is the difference between the possible maximum and the minimum response to individual items. All items are scored 1 to 4, giving range = 3
- The dyspnoea scale should only be used if all three items have been answered. Some respondents ignore question 5 because they never climb stairs; in this case, the score for the dyspnoea scale would be biased if it were based upon the other two items. Hence if item 5 is missing then items 3 and 4 should be used as single-item scores.

## Calculations

### Raw score

For all scales, the Raw Score, RS, is the mean of the component items:

```
Raw score = RS = sum of all items / amount of items
``` 

### Linear Transformation

To obtain the Score S, standardize the raw score to a 0 – 100 range following the appropriate transformation:


1. Symptom scales
```
S = ((RS−1)/range) × 100
```

## Missing data

* Have at least half of the items from the scale been answered?
* If Yes, use all the items that were completed, and apply the standard equations given on the previous pages for calculating the scale scores; ignore any items with missing values when making the calculations.
* If No, set scale score to missing.
* For single-item measures, set score to missing.

## References
[1] Bergman B, Aaronson NK, Ahmedzai S, Kaasa S, Sullivan M. The EORTC QLQ-LC13: a modular supplement to the EORTC Core Quality of Life Questionnaire (QLQ-C30) for use in lung cancer clinical trials. EORTC Study Group on Quality of Life. Eur J Cancer. 1994;30A(5):635-642. doi:10.1016/0959-8049(94)90535-5\
[2] Salvo N, Hadi S, Napolskikh J, Goh P, Sinclair E, Chow E. Quality of life measurement in cancer patients receiving palliative radiotherapy for symptomatic lung cancer: a literature review. Curr Oncol. 2009;16(2):16-28. doi:10.3747/co.v16i2.376\
[3] https://drive.google.com/file/d/1GwwqedEOj6pfzzSCU1ihrQbxABL3db3M/view?usp=sharing page 20
