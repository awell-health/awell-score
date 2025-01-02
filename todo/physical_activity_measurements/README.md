# Physical Activity Measurement

## Introduction

The purpose of the International Physical Activity Questionnaires (IPAQ) is to provide common instruments that can be used to obtain internationally comparable data on health–related physical activity [1]. It was developed by the International Consensus Group on Physical Activity Measurement during the 90's [2].

The subject is asked a few questions about their physical activity (PA) during a typical week. The questions are categorized per level of physical activity:
1. Light PA (eg walking)
2. Moderate PA (eg cycling)
3. Vigorous PA (eg running)

**For each category (light, moderate or vigorous PA) there are two questions asked:**
1. How many days in a typical week do you perfom that kind of activity? (answer between [0-7])
2. How much time in a typical day do you usually spend on that activity? (answer in minutes/day)

Question 2 is not asked when answer on question 1 is 0.

## Questionnaire

**So the questionnaire contains 6 questions:**
1. How many days of light PA in a typical week? (`LIGHT_PA_DAYS_PER_WEEK`)
2. How much time in a typical day do you usually spend on light PA? (`LIGHT_PA_MINUTES_PER_DAY`)
3. How many days of moderate PA in a typical week? (`MODERATE_PA_DAYS_PER_WEEK`)
4. How much time in a typical day do you usually spend on light PA? (`MODERATE_PA_MINUTES_PER_DAY`)
5. How many days of vigorous PA in a typical week? (`VIGOROUS_PA_DAYS_PER_WEEK`)
6. How much time in a typical day do you usually spend on vigorous PA? (`VIGOROUS_PA_MINUTES_PER_DAY`)
 
[Click here to open the Dutch version of the PA in PDF](https://www.gezondleven.be/files/beweging/Korte-vragenlijst-beweging.pdf)

## Scoring

**The calculation yields 2 results:**
1. The total amount of PA expressed in minutes/week
2. The total amount of PA expressed in MET-minutes/week

### Total amount of PA in minutes/week

`(( MODERATE_PA_DAYS_PER_WEEK x MODERATE_PA_MINUTES_PER_DAY ) x 2 ) + (VIGOROUS_PA_DAYS_PER_WEEK x VIGOROUS_PA_MINUTES_PER_DAY)`

Moderate PA is multiplied with a weight of 2. Not sure why but this is how the calculation should be done accoring to the scoring manual.

### Total amount of PA in MET-minutes/week

The metabolic equivalent of a task (MET) is the objective measure of the ratio of the rate at which a person expends energy, relative to the mass of that person, while performing some specific physical activity compared to a reference, set by convention at 3.5 mL of oxygen per kilogram per minute, which is roughly equivalent to the energy expended when sitting quietly (i.e. 1 MET is the equivalent of the energy expense while sitting quietly).

**MET scores for our activities can be classified as followed:**

| Type of PA 	| MET score 	|
|------------	|-----------	|
| Light      	| 3.3 METs  	|
| Moderate   	| 4.0 METs  	|
| Vigorous   	| 8.0 METs  	|

**To calculate the total amount of PA in MET-minutes/week we can apply the following formula:**
``` 
MET-minutes/week light PA = 3.3 * LIGHT_PA_DAYS_PER_WEEK * LIGHT_PA_MINUTES_PER_DAY
MET-minutes/week moderate PA = 4.0 * MODERATE_PA_DAYS_PER_WEEK * MODERATE_PA_MINUTES_PER_DAY
MET-minutes/week vigorous PA = 8.0 * VIGOROUS_PA_DAYS_PER_WEEK * VIGOROUS_PA_MINUTES_PER_DAY
----------------
Total amount of PA in MET-minutes/week = sum of MET-minutes/week for light, moderate and vigorous PA
```

## Interpretation

You perform sufficient physical activity when the total amount of PA in minutes/week > 150 or the total amount of PA in MET-minutes/week >= 600.

## Missing data

All 6 data points are necessary in order to calculate a result.

## References
[1] Ainsworth BE, Bassett DR Jr, Strath SJ, Swartz AM, O'Brien WL, Thompson RW, Jones DA, Macera CA, Kimsey CD. Comparison of three methods for measuring the time spent in physical activity. Med Sci Sports Exerc. 2000 Sep;32(9 Suppl):S457-64. doi: 10.1097/00005768-200009001-00004. PMID: 10993415.\
[2] MICHAEL BOOTH, International Consensus Group on Physical Activity Measurement, International Journal of Epidemiology, Volume 25, Issue 6, December 1996, Pages 1312–1313, https://doi.org/10.1093/ije/25.6.1312
