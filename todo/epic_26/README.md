# Expanded Prostate cancer Index Composite (EPIC) 

## Introduction 

The Expanded Prostate cancer Index Composite measures health related quality of life among men with prostate cancer [1]. It represents an adaptation of the UCLA Prostate Cancer Index [2]. It is modified to enhance sensitivity to therapy effects by increasing the number of prostate-targeted items to 50 (compared to 20 in the original UCLA-PCI).
However, 50 items constitute a lengthy assessment tool and raises questions about feasibility of use in routine clinical care. Therefore, a short 26-item version of EPIC (**EPIC-26**) was developed to enhance its utility [3]. It contains only 26 items and the same 5 domains as the full version of EPIC: Urinary Incontinence, Urinary Irritative/Obstructive, Bowel, Sexual, and Hormonal. 

## Questions and Scoring

The questionaire, as well as the scores for each answer can be found here:
https://drive.google.com/file/d/1xFOLD60Pk5Lm_1YM_4BBqe8EfI7ZGo0i/view?usp=sharing

## Calculations
Response options for each EPIC item form a Likert scale, and multi-item scale scores are transformed linearly to a 0-100 scale.

There are 2 steps involved in calculating a score for the EPIC-26: 

**Note** In the Awell calculation before step 1, all question ids are assigned an item number.

Step 1. The response for each item/question is standardized to a 0 to 100 scale according to the table below. 

|Item number | Item response value | Standardized Value
| ----------- | ----------- | ---------- |
| 23, 57, 58, 60, 64 | 1 | 0 |
|  | 2 | 25 |
|  | 3 | 50 |
|  | 4 | 75 |
|  | 5 | 100 |
| 26, 59 | 1 | 0 |
|  | 2 | 33 |
|  | 3 | 67 |
|  | 4 | 100 |
| 27 | 0 | 100 |
|  | 1 | 67 |
|  | 2 | 33 |
|  | 3 | 0 |
| 28, 29, 30, 31, 33, 49, 50, 52-54, | 0 | 100 |
| 74, 75, 77-79| 1 | 75 |
|  | 2 | 50 |
|  | 3 | 25 |
|  | 4 | 0 |
| 33, 55, 68 | 1 | 100 |
|  | 2 | 75 |
|  | 3 | 50 |
|  | 4 | 25 |
|  | 5 | 0 |

Step 2. As stated above, the EPIC-26 consists of 5 domains. The average of the standardized values (see Step 1, above) for all items within a domain is calculated to create the summary or subscale score. If >20% of the items that comprise a domain summary score or subscale score are missing a response, the corresponding domain summary or subscale score can not be calculated. 
To calculate the following health-related quality of life (HRQOL) domain Summary Score or Subscale Score: 

| HRQOL Domain Summary Scores | Item that form the HRQOL Domain | Number of non-missing items needed |
| ----------- | ----------- | ---------- |
| Urinary Incontinence | 23, 26-28 | 4 |
| Urinary Irritative/Obstructive | 29-31, 33 | 4 |
| Bowel | 49,50,52-55| 5 |
| Sexual | 57-60, 64, 68 | 5 |
| Hormonal | 74,75,77-79 | 4 |


## Interpretation

In general terms, a higher score represents a better HRQOL. 


## References
[1] Wei JT, Dunn RL, Litwin MS, Sandler HM, Sanda MG. Development and validation of the expanded prostate cancer index composite (EPIC) for comprehensive assessment of health-related quality of life in men with prostate cancer. Urology. 2000;56(6):899-905. doi:10.1016/s0090-4295(00)00858-x\
[2] Litwin MS, Hays RD, Fink A, Ganz PA, Leake B, Brook RH. The UCLA Prostate Cancer Index: development, reliability, and validity of a health-related quality of life measure. Med Care. 1998;36(7):1002-1012. doi:10.1097/00005650-199807000-00007\
[3] Szymanski KM, Wei JT, Dunn RL, Sanda MG. Development and validation of an abbreviated version of the expanded prostate cancer index composite instrument for measuring health-related quality of life among prostate cancer survivors. Urology. 2010;76(5):1245-1250. doi:10.1016/j.urology.2010.01.027
