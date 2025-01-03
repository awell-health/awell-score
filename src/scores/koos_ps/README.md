# KOOS-PS

## Introduction 

The Knee disability and Osteoarthritis Outcome Score (KOOS) – Physical Function Shortform (KOOS-PS)-Control is a 7-item measure of physical functional derived from the items of the Function, daily living and Function, sports and recreational activity subscales of the KOOS. As with the KOOS it is intended to elicit people’s opinions about the difficulties they experience with activity due to problems with their knee [1].

## Questions and Scoring

**All seven items are coded from 0 to 4, none to extreme respectively.**

| Question                               | Calculation input id | Answer values |
|----------------------------------------|----------------------|---------------|
| Rising from bed                        | 1_rise_from_bed      | [0,4]         |
| Putting on socks/stockings             | 2_socks              | [0,4]         |
| Rising from sitting                    | 3_rise_from_chair    | [0,4]         |
| Bending to floor                       | 4_pickup_from_floor  | [0,4]         |
| Twisting/pivoting on your injured knee | 5_turn_on_knee       | [0,4]         |
| Kneeling                               | 6_kneel              | [0,4]         |
| Squatting                              | 7_staying_squat      | [0,4]         |

### Missing data

Each question must have a response (i.e. no missing data).

## Calculation

The KOOS-PS questionnaire is scored by summing the raw response (range 0-28) and then using the nomogram in Table 2 to convert the raw score to a true interval score (0-100). KOOS-PS can be scored in two directions, best to worst and worst to best (see section "Interpretation" for more information).

## Interpretation

**KOOS-PS can be scored in two directions:**
1. From no difficulty (0) to extreme difficulty (100), as in the original KOOS-PS publication [1]
2. From extreme difficulty (0) to no difficulty (100) in accordance with KOOS. 

The method of interpretation used in Awell is according to direction #2 (0 = extreme difficulty and 100 = no difficulty).

**Nomogram for converting raw summed KOOS-PS scores to 0 representing extreme difficulty and 100 representing no difficulty:**

| Raw summed score (0-20) | 100 (no difficulty) to 0 (extreme difficulty) scale |
|-------------------------|-----------------------------------------------------|
| 0                       | 100                                                 |
| 1                       | 94.4                                                |
| 2                       | 89.5                                                |
| 3                       | 85.2                                                |
| 4                       | 81.4                                                |
| 5                       | 78                                                  |
| 6                       | 75.1                                                |
| 7                       | 72.5                                                |
| 8                       | 70.3                                                |
| 9                       | 68.2                                                |
| 10                      | 66.4                                                |
| 11                      | 67.7                                                |
| 12                      | 63                                                  |
| 13                      | 61.4                                                |
| 14                      | 59.7                                                |
| 15                      | 58                                                  |
| 16                      | 56                                                  |
| 17                      | 53.9                                                |
| 18                      | 51.5                                                |
| 19                      | 48.8                                                |
| 20                      | 45.6                                                |
| 21                      | 42.1                                                |
| 22                      | 38                                                  |
| 23                      | 33.4                                                |
| 24                      | 28.2                                                |
| 25                      | 22.3                                                |
| 26                      | 15.7                                                |
| 27                      | 8.2                                                 |
| 28                      | 0.0                                                 |

## References
[1] Perruccio AV, Lohmander, LS, Canizares M, Tennant A, Hawker GA, Conaghan PG, Roos EM, Jordan JM, Maillefert JF, Dougados M, Davis AM. The Development of a Short Measure of Physical Function for Knee OA - KOOS-Physical Function Short-form (KOOS-PS) – An OARSI/OMERACT Initiative. Osteoarthritis and Cartilage, 2008; 16: 542-550.
