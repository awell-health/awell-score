# EORTC QLQ-PR25
## Introduction
The Prostate Cancer Module is a supplementary questionnaire module to be employed in conjunction with the QLQ-C30. The QLQ-PR25 incorporates five multi-item scales to assess sexual activity, sexual functioning, urinary symptoms, bowel symptoms, and hormonal treatment-related symptoms. In addition, one single item assesses incontinence aid.

## Subscales
The scoring approach for the QLQ-PR25 is identical in principle to that for the function and symptom scales / single items of the QLQ-C30 [2].

| Scale                	              | Scale type      | Scale ID  | Number of items       | Item range| Items/questions ids   | Reverse scoring items  
|------------------------	            |--------------	  |-----------|---------------------	|-----------|---------------------  |---------------------
| Urinary symptoms  	                | Symptoms 	      | URI	      | 8                     | 3         | 31-37, 39             |
| Incontinence aid       	            | Symptoms 	      | AID 	    | 1                     | 3         | 38                    |
| Bowel symptoms                	    | Symptoms 	      | BOW 	    | 4                     | 3         | 40-43                 | 
| Hormonal treatment-related symptoms | Symptoms        | HTR 	    | 6                     | 3         | 44-49                 |
| Sexual activity 	                  | Functional      | SAC 	    | 2                     | 3         | 50, 51                | 50, 51
| Sexual functioning              	  | Functional     	| SFU 	    | 4                     | 3         | 52-55                 | 52

**Remarks:**
* “Item range” is the difference between the possible maximum and the minimum response to individual items. All items are scored 1 to 4, giving range = 3
* Sexual functioning (SFU) is not applicable if item 51 is “not at all.”

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
[1] van Andel G, Bottomley A, Fosså SD, Efficace F, Coens C, Guerif S, Kynaston H, Gontero P, Thalmann G, Akdas A, D'Haese S, Aaronson NK. An international field study of the EORTC QLQ-PR25: a questionnaire for assessing the health-related quality of life of patients with prostate cancer. Eur J Cancer. 2008 Nov;44(16):2418-24. doi: 10.1016/j.ejca.2008.07.030. Epub 2008 Sep 5. PMID: 18774706.\
[2] https://drive.google.com/open?id=1zjorS6MxKyEOZuKQZHJRqVhuQ2fzZwx0