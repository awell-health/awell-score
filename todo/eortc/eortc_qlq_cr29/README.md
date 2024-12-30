# EORTC QLQ-CR29

## Introduction

The European Organisation for Research and Treatment of Cancer (EORTC) developed the colorectal QoL module QLQ-CR38 [1] as an adjunct to the generic EORTC QLQ-C30. Later, this was revised to the shorter QLQ-CR29 [2] and validated in an international study [3].


## Questions and Scoring

The QLQ-CR29 includes 29 items that evaluate symptoms (gastrointestinal, urinary, pain and others) and functional areas (sexual, body image and others) that are associated with CRC and its treatments (see here for scoring: https://drive.google.com/file/d/16j3pr9bEVYBRa2tMp6B_2QLnxJ85kaDP/view?usp=sharing). There are separate items for patients with and without a stoma (items 49 to 54, with item 55 only for patients with a stoma) and separate items to evaluate the sexual function of men and women. The questionnaires ask for all items in the past week except those pertaining to sexuality, which request the patients to evaluate the items in the past four weeks. The QLQ-CR29 has a Likert scale of four response categories (item 48 requires a yes or no answer)[3]. All patient-rated scores are linearly converted into a scale from 0 to 100 for the QLQ-CR29 [4].

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
2. Symptom scales
```
S = ((RS−1)/range) × 100
```

In order for the two sexual interest scales to be interpreted as functional scales (ie. a higher score is better), they should be scored according to the symptom scale algorithm.

## Missing data

* Have at least half of the items from the scale been answered?
* If Yes, use all the items that were completed, and apply the standard equations given on the previous pages for calculating the scale scores; ignore any items with missing values when making the calculations.
* If No, set scale score to missing.
* For single-item measures, set score to missing.

## References
[1] Sprangers MA, te Velde A, Aaronson NK. The construction and testing of the EORTC colorectal cancer-specific quality of life questionnaire module (QLQ-CR38). European Organization for Research and Treatment of Cancer Study Group on Quality of Life. Eur J Cancer. 1999;35(2):238-247. doi:10.1016/s0959-8049(98)00357-8\
[2] Gujral S, Conroy T, Fleissner C, et al. Assessing quality of life in patients with colorectal cancer: an update of the EORTC quality of life questionnaire. Eur J Cancer. 2007;43(10):1564-1573. doi:10.1016/j.ejca.2007.04.005\
[3] Whistance RN, Conroy T, Chie W, et al. Clinical and psychometric validation of the EORTC QLQ-CR29 questionnaire module to assess health-related quality of life in patients with colorectal cancer. Eur J Cancer. 2009;45(17):3017-3026. doi:10.1016/j.ejca.2009.08.014\
[4] https://drive.google.com/file/d/16j3pr9bEVYBRa2tMp6B_2QLnxJ85kaDP/view?usp=sharing