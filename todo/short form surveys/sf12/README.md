# Short Form 12 (SF-12)

## Introduction

The SF-12 questionnaire (Short Form 12) is a general health questionnaire that allows statements to be made about the patient's state of health over 2 different dimensions. It is the short form of the Short Form 36 questionnaire (SF-36). Some patients have complained that completing 36 questions is cumbersome. Consequently, the originators of the SF-36 developed the SF-12 [1]. Using regression analysis, Ware et al. [1] were able to select 12 questions from the SF-36 that reliably produced scores that mirrored those from the SF-36. This calculation uses the second edition of the calculation as described by Ware et al. [2].

This version of the SF-12 is non-proprietary, and the scores calculated are in reference to the United States population profile at the time of the original publication in 1994. Subsequent updates to the SF-12 have been made that align the scores with more recent U.S. demographics. However, these updates are proprietary, unlike the original SF-12. Although differences in scores between different scoring systems for the sf-12 may be minor, clinicians and researchers should note the version of the SF-12 they are using.

## Questions and Scoring

You can view the official SF-12 form we used for this calculation [here](https://drive.google.com/file/d/1w3KG5S-hjRVOc51k6aMm5dhRoUJWhQ-J/view?usp=sharing).


## Calculations

1. Questions 1, 8, 9 & 10 are adjusted because they are reverse-scored, meaning that higher values indicate lower health status.
2. Each response option in the questionnaire items is converted into binary indicator variables.
3. The score then applies regression weights to these indicator variables. These weights are derived from statistical analyses that determine the contribution of each item to the overall physical and mental health scores. Click [here](https://drive.google.com/file/d/1w3KG5S-hjRVOc51k6aMm5dhRoUJWhQ-J/view?usp=sharing) to view these weights.
4. After weighting and aggregation, the raw scores for physical and mental health components are obtained. These raw scores are then standardized using population-based norms, resulting in final Physical Component Summary (PCS12) and Mental Component Summary (MCS12) scores.

## Missing data

All questions on the SF-12 must be completed before the component scores can be calculated.

## Interpretation

Generally, highest scores indicate better outcome and lowest worse.

## References
[1] Ware J Jr, Kosinski M, Keller SD. A 12-Item Short-Form Health Survey: construction of scales and preliminary tests of reliability and validity. Med Care. 1996;34(3):220-233. doi:10.1097/00005650-199603000-00003
[2] [How To Score the SF-12 Physical & Mental Health Summary Scales (Second Edition)](https://www.researchgate.net/profile/John-Ware-6/publication/291994160_How_to_score_SF-12_items/links/58dfc42f92851c369548e04e/How-to-score-SF-12-items.pdf)
[3] [Other](https://github.com/lbraglia/lbscorer/blob/master/R/sf12.R)
