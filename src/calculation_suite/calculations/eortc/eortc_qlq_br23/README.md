# EORTC QLQ-BR23
## Introduction
The BR-23 is a questionnaire for measuring the quality of life in patients with breast cancer, which was developed in 1996 [1].

## BR23 is outdated - why an update was needed (BR23 to BR45)
In the last years many changes regarding treatment and diagnostics have occurred. For this reason the QLQ BR-23 was updated and 22 new questions were added. Now this new BR-45 questionnaire will be tested in patients with breast cancer in different countries [2].

The standard therapy of breast cancer has been changed, new therapies brought new side effects and different impacts on quality of life are not sufficiently covered by  EORTC QLQ BR-23 which was developed in 1996. In Phase 1-3 the BR-23 Module was updated, 22 items were added, resulting in a new 45 item Module (EORTC QLQ BR-45). The aim of phase 4 is to test the psychometric properties and the validity of the EORTC QLQ-BR45 in conjunction with the EORTC QLQ-C30 in female patients diagnosed with breast cancer at different stages of the disease and with different therapy options.


## Subscales

[Link to English version of the EORTC-QLQ-BR23.](https://drive.google.com/file/d/1v_GNOaR_gdGP708TAgsvHd67HGGduf6c/view?usp=sharing)

| Scale                         | Scale type | Scale ID | Number of items | Item range | Items/questions ids | Reverse scoring |
|-------------------------------|------------|----------|-----------------|------------|---------------------|-----------------|
| Body image                    | Functional | BRBI     | 4               | 3          | 9-12                |                 |
| Sexual functioning            | Functional | BRSEF    | 2               | 3          | 14,15               | 14,15           |
| Sexual enjoyment              | Functional | BRSEE    | 1               | 3          | 16                  | 16              |
| Future perspective            | Functional | BRFU     | 1               | 3          | 13                  |                 |
| Systemic therapy side effects | Symptoms   | BRST     | 7               | 3          | 1-4,6,7,8           |                 |
| Breast symptoms               | Symptoms   | BRBS     | 4               | 3          | 20-23               |                 |
| Arm symptoms                  | Symptoms   | BRAS     | 3               | 3          | 17,18,19            |                 |
| Upset by hair loss            | Symptoms   | BRHL     | 1               | 3          | 5                   |                 |

**Remarks:**
- “Item range” is the difference between the possible maximum and the minimum response to individual items. All items are scored 1 to 4, giving range = 3
- BRSEE, sexual enjoyment, is not applicable if item 15 is “not at all.”
- BRHL, upset by hair loss, is not applicable if item 4 is “not at all.”

## Scoring
### Raw score
For the single-item measure Incontinence Aid, the score of the concerning item corresponds to the raw score.

For each multi-item scale, calculate the average of the corresponding items.

```
Raw score = RS = sum of all items / amount of items
``` 

Take into account that the scoring of questions 50, 51, and 52 must be reversed prior to statistical analysis.

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

## References
[1] Sprangers MA, Groenvold M, Arraras JI, Franklin J, te Velde A, Muller M, Franzini L, Williams A, de Haes HC, Hopwood P, Cull A, Aaronson NK. The European Organization for Research and Treatment of Cancer breast cancer-specific quality-of-life questionnaire module: first results from a three-country field study. J Clin Oncol. 1996 Oct;14(10):2756-68. doi: 10.1200/JCO.1996.14.10.2756. PMID: 8874337.\
[2] Bjelic-Radisic V, Cardoso F, Cameron D, et al. An international update of the EORTC questionnaire for assessing quality of life in breast cancer patients: EORTC QLQ-BR45 [published correction appears in Ann Oncol. 2020 Apr;31(4):552]. Ann Oncol. 2020;31(2):283-288. doi:10.1016/j.annonc.2019.10.027