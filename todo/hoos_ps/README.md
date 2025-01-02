# HOOS-PS

## Introduction 

The Hip disability and Osteoarthritis Outcome Score (HOOS) – Physical Function Shortform (HOOS-PS)-Control was developed from the original long version using Rasch analysis. The Rasch analysis resulted in a 5 item questionnaire that is cross culturally valid and that provides a true interval level measure such that it can be used to **measure change in physical function**. The reliability of the 5 items is 0.80 (Cronbach’s alpha). It is a unidimensional construct as demonstrated by the fit to the Rasch model [1].

## Questions and Scoring

**All five items are coded from 0 to 4, none to extreme respectively.**

| Question                             | Calculation input id | Answer values |
|--------------------------------------|----------------------|---------------|
| Descending stairs                    | 1_stairs             | [0,4]         |
| Getting in/out of bath or shower     | 2_bath_shower        | [0,4]         |
| Sitting                              | 3_sit                | [0,4]         |
| Running                              | 4_running            | [0,4]         |
| Twisting/pivoting on your loaded leg | 5_turn_on_leg        | [0,4]         |

### Missing data

Each question must have a response (i.e. no missing data).

## Calculation

The HOOS-PS questionnaire is scored by summing the raw response (range 0-20) and then using the nomogram in Table 2 to convert the raw score to a true interval score (0-100). HOOS-PS can be scored in two directions, best to worst and worst to best (see section "Interpretation" for more information).

## Interpretation

**HOOS-PS can be scored in two directions:**
1. From no difficulty (0) to extreme difficulty (100), as in the original HOOS-PS publication [2]
2. From extreme difficulty (0) to no difficulty (100) in accordance with HOOS. 

The method of interpretation used in Awell is according to direction #2 (0 = extreme difficulty and 100 = no difficulty).

**Nomogram for converting raw summed HOOS-PS scores to 0 representing extreme difficulty and 100 representing no difficulty:**

| Raw summed score (0-20) | 100 (no difficulty) to 0 (extreme difficulty) scale |
|-------------------------|-----------------------------------------------------|
| 0                       | 100                                                 |
| 1                       | 95.4                                                |
| 2                       | 91.2                                                |
| 3                       | 87.3                                                |
| 4                       | 83.6                                                |
| 5                       | 80.0                                                |
| 6                       | 76.6                                                |
| 7                       | 73.1                                                |
| 8                       | 69.6                                                |
| 9                       | 66.1                                                |
| 10                      | 62.3                                                |
| 11                      | 58.3                                                |
| 12                      | 53.9                                                |
| 13                      | 49.2                                                |
| 14                      | 44.1                                                |
| 15                      | 38.4                                                |
| 16                      | 32.1                                                |
| 17                      | 25.2                                                |
| 18                      | 17.6                                                |
| 19                      | 9.2                                                 |
| 20                      | 0.0                                                 |

## References
[1] HOOS-PS User’s Guide. http://www.koos.nu/hoospsusers.html \
[2] Davis AM et al. 2008, Osteoarthritis Cartilage