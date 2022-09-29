# EORTC QLQ-BR45

## Introduction

A group of researchers published in the February 2020 issue of the Annals of Oncology about process of updating and testing of the European Organization for Research and Treatment of Cancer (EORTC) questionnaire to assess quality of life (QoL) in breast cancer patients. The EORTC QLQ-BR23 was one of the first disease-specific questionnaires developed in 1996 to assess QoL in patients with breast cancer [1]. However due to changes in breast cancer treatment it needed an update.

The final updated module (EORTC QLQ-BR45) contains a total of 45 items from which 22 are new [2]. The EORTC QLQ-BR45 is available for use in research and clinical practice. It provides a more accurate and comprehensive assessment of the impact of new treatments on patients' QoL.

## Questions and Scoring

The EORTC QLQ-BR45 incorporates nine multi-item scales to assess body image, sexual functioning, breast satisfaction, systemic therapy side
effects, arm symptoms, breast symptoms, endocrine therapy symptoms, skin mucosis symptoms, endocrine sexual symptoms [3]. In addition, single items assess sexual enjoyment, future perspective and being upset by hair loss. As shown in this table:

| Scale | Scale type | Scale ID | Number of items | Item range | Items/questions ids | Reverse scoring items |
| ------| ------ | ------ | ------ | ------ | ------ | ------ |
| Body Image | Functional | BI | 4 | 3 | 39 - 42 | |
| Future Perspective | Functional | FU | 1 | 3 | 43 | |
| Sexual Functioning | Functional | SX | 2 | 3 | 44, 45 | 44, 45 |
| Sexual Enjoyment | Functional | SE | 1 | 3 | 46 | 46 |
| Breast Satisfaction | Functional | BS | 2 | 3 | 74, 75 | 74, 75 |
| Systemic Therapy Side Effects | Symptom | SYS | 7 | 3 | 31 - 34, 36-38 | |
| Upset by Hair Loss | Symptom | HU | 1 | 3 | 35 | |
| Arm Symptoms | Symptom | ARM | 3 | 3 | 47 - 49 | |
| Breast Symptoms | Symptom | BR | 4 | 3 | 50 - 53 | |
| Endocrine Therapy Symptoms | Symptom | ET | 10 | 3 | 54 - 56, 63 - 69 | |
| Skin Mucosis Symptoms | Symptom | SM | 6 | 3 | 57 - 62 | |
| Endocrine Sexual Symptoms | Symptom | ES | 4 | 3 | 70 - 73 | |

**Remarks:**
* “Item range” is the difference between the possible maximum and the minimum response to individual items. All items are scored 1 to 4, giving range = 3
* SE and HU are not applicable if item 45 is “not at all” and item 34 "is not at all", respectively

## Calculations

### Raw score

For the single-item measure the score of the concerning item corresponds to the raw score.

Take into account that the scoring of questions 44, 45, 46, 74 and 75 must be reversed prior to statistical analysis.

For each multi-item scale, calculate the average of the corresponding items.

```
Raw score = RS = sum of all items / amount of items
``` 

### Linear Transformation
To obtain the Score S, standardize the raw score to a 0 – 100 range following the appropriate transformation:

1. Functional scales
```
S = (1 − ((RS−1)/range)) × 100
```
2. Symptom scales
```
S = ((RS−1)/range) × 100
```

## Missing data

* Have at least half of the items from the scale been answered?
* If Yes, use all the items that were completed, and apply the standard equations given on the previous pages for calculating the scale scores; ignore any items with missing values when making the calculations.
* If No, set scale score to missing.
* For single-item measures, set score to missing.


## Interpretation

All of the scales and single item measures range in score from 0 to 100. A high score for the functional scales and functional single items represents a high/healthy level of functioning, whereas a high score for the symptom scales and symptom item represents a high level of symptomatology or problems [3].

## References
[1] Sprangers MA, Groenvold M, Arraras JI, et al. The European Organization for Research and Treatment of Cancer breast cancer-specific quality-of-life questionnaire module: first results from a three-country field study. J Clin Oncol. 1996;14(10):2756-2768. doi:10.1200/JCO.1996.14.10.2756\
[2] Bjelic-Radisic V, Cardoso F, Cameron D, et al. An international update of the EORTC questionnaire for assessing quality of life in breast cancer patients: EORTC QLQ-BR45 [published correction appears in Ann Oncol. 2020 Apr;31(4):552]. Ann Oncol. 2020;31(2):283-288. doi:10.1016/j.annonc.2019.10.027\
[3] https://drive.google.com/file/d/1qWloecXkud3DZXiWcMtSv9DDb3LXmIIS/view?usp=sharing
