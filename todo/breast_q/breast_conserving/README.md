# BREAST-Q

## Introduction 

The BREAST-Q, a patient-reported outcome instrument, quantifies the impact of cosmetic and reconstructive breast surgery (i.e., augmentation, reduction/mastopexy, mastectomy, reconstruction, and breast conserving-therapy), pre- and post-operatively, on health-related quality of life (HR-QOL; including physical, psychosocial, and sexual well-being) and patient satisfaction (including satisfaction with breasts, outcome, and care). Investigators and clinicians can choose to use only those scales that are relevant to their research question. While each scale produces an independent score from 0–100, there is no overall BREAST-Q score [1, 2]. Scores are transformed via the Q-Score program (http://qportfolio.org/breast-q/breast-cancer/) or designated tables. BREAST-Q Version 1.0 was published in 2009 and Version 2.0 was published in 2017.

## Questions and Scoring

There are currently 6 BREAST-Q modules of which the Breast Cancer module consists of 4 modules to give clinicians the oportunity to tailor the BREAST-Q to their needs. Each module is divided into multiple scales that can be used independently.
The modules are as follows: 
1. Augmentation 
2. Reduction/Mastopexy 
3. Breast Cancer 
   - Mastectomy 
   - Reconstruction 
   - Breast Reconstruction Expectations Modul
   - Breast Conserving Therapy (BCT)

The conceptual framework of the BREAST-Q modules is comprised of the following two overarching themes (or domains) consisting of the diffrent scales:
1. Health-Related Quality of Life (QOL)
   - Psychosocial 
   - Physical 
   - Sexual well-being
2. Patient Satisfaction
   - Satisfaction with Breasts
   - Satisfaction with Outcome
   - Satisfaction with Care

Each module of the BREAST-Q has a pre-operative and a post-operative version. The post-operative version includes all the pre-operative items in addition to items that address unique postoperative issues. The preoperative and postoperative scales are linked so the scores can be compared.

A detailed overview of the original BREAST-Q modules and scales, including the number of items, response options, time frame and the Flesch-Kincaid grade level (FK) can be found here: https://drive.google.com/file/d/1acNq7i4eM_yTRP2kZxmq4EDgm8PxjZiP/view?usp=sharing

An example to clarify the terminonlogy within this document.

| Module | Scale | Items/Questions | Answers | Scores |
| ------ | ----- | --------------- | ------- |------- |
| Masectomy (pre-operative) | Satisfaction with Breasts | How do you look in the mirror with your clothes on?, How comfortable are your bras?, Being able to wear tighter clothes?, How do you look in the mirror without clothes on? | Very dissatisfied, Slightly dissatisfied, Somewhat satisfied, Very satisfied | 1-4 |

## Calculations

First a raw score also called sum score is calculated for each scale. For this each answer specific score per item/question within the scale is summed up.

For sacles that have less than 50% of items/questions answered the mean of the compleated questions is inserted to the missing ones.
Then the raw scores are then converted to the equivalent Rasch transformed score (range 0-100) with the help of the conversion tables.
The scores of each individual scale are displayed.

To illustrate this here is an example of the Satisfaction with Breasts scale of the Masectomy (pre-operative) module:

| | Very dissatisfied | Slightly dissatisfied | Somewhat satisfied | Very satisfied |
| ----------- | ----------- | ----------- | ----------- |  ----------- |
| How do you look in the mirror with your clothes on? |  |  |  | 4 | 
| How comfortable are your bras? | 1 |  |  |  |
| Being able to wear tighter clothes? |  | 2 |  |  |
| How do you look in the mirror without clothes on?| 1 |  |  |  |

```
Raw/Sum score = 4+1+2+1 = 8
```

**Conversion table for this scale:**

|Sum score | Equivalent Rasch transfomed score (0-100)|
| ----------- | ----------- | 
| 4 | 0 |
| 5 | 23 |
| 6 | 29 |
| 7 | 34 |
| **8** | **39** |
| 9 | 44 |
| 10 | 48 |
| 11 | 53 |
| 12 | 58 |
| 13 | 64 |
| 14 | 71 |
| 15 | 82 |
| 16 | 100 |

The Raw score of 8 equals a Rasch score of 39

### Calculation in Awell

**The current Breast-Q calculation only calculates a score for following pre-operative scales:**
1. Psychosocial well-being
2. Sexual well-being
3. Satisfaction with breasts
4. Physical well-being: chest

This because the current calculation is only used in a pre-operative setting. Other scales can be added when there's a need for it.

## Missing data

If missing data is less than 50% of the scale’s items, insert the mean of the completed items.

## Interpretation

In general terms, for all BREAST-Q scales a higher score means greater satisfaction or better QOL (depending on the scale). 


## References
[1] Pusic AL, Klassen AF,Scott AM, Klok JA, Cordeiro PG, Cano SJ. Development of a new patient-reported outcome measure for breast  surgery: The BREAST-Q. Plast Reconstr Surg. 2009;124:345–353.\
[2] Cohen WA, Mundy LR, Ballard TN, et al. The BREAST-Q in surgical research: A review of the literature 2009-2015. J Plast Reconstr Aesthet Surg. 2016;69:149–162.
