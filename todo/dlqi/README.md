# Dermatology Life Quality Index

## Introduction
The Dermatology Life Quality Index (DLQI) is a simple, self-administered and user-friendly validated questionnaire **designed to measure the health-related quality of life of adult patients suffering from a skin disease** [1,2].

The DLQI consists of **10 questions concerning patients' perception of the impact of skin diseases** on different aspects of their health-related quality of life over the last week.

## Scoring, validation and utility values

**Each question is scored on a four-point Likert scale:**
* Very much = 3
* A lot = 2
* A little = 1
* Not at all = 0
* Not relevant = 0
* Question unanswered = 0

**IMPORTANT:** Since "not at all" and "not relevant" have the same underlying value we will use `999` to indicate "not relevant" in the front-end.

The DLQI is calculated by adding the score of each question, resulting in a **maximum of 30 and a minimum of 0**. The higher the score, the more quality of life is impaired. A score higher than 10 indicates that the patient's life is being severely affected by their skin disease [3].

The score can be expressed as a percentage of the maximum possible score of 30, but we don't recommend this, because the original score is much easier to understand.

## Sub-scales
| Section                	| Questions         	| Score     	|
|------------------------	|-------------------	|-----------	|
| Symptoms and feelings  	| Questions 1 and 2 	| Maximum 6 	|
| Daily activities       	| Questions 3 and 4 	| Maximum 6 	|
| Leisure                	| Questions 5 and 6 	| Maximum 6 	|
| Work and school        	| Question 7        	| Maximum 3 	|
| Personal relationships 	| Questions 8 and 9 	| Maximum 6 	|
| Treatment              	| Question 10       	| Maximum 3 	|

The scores for each of these sections can also be expressed as a percentage of either 6 or 3. For reference only: scores can indeed be expressed as a percentage of the maximum possible score, but it's not recommended to do this so it's not applied in our calculation.

## Scoring question 7
The first part of question 7 asks: 'Over the last week, has your skin prevented you from working or studying?'
- If working or studying are not relevant to the subject, the response is 'Not relevant' (scored 0).
- If the skin disease has prevented the subject from working or studying, the answer is 'Yes'. As 'prevention' is the biggest possible impact it is scored the maximum, 3.
- If the skin disease has not prevented the subject from working or studying, the answer is 'No'. It is therefore assumed that as the skin disease has not prevented the subject from working or studying, the subject is able to continue to work or study, but that the skin disease may be a problem while doing so.

The subject is therefore asked the following question about the magnitude of the impact thus: 'If "No" (in other words 'If the skin disease has not prevented you from working or studying”), over the last week how much has your skin been a problem at work or studying?'

There are three possible responses to the question 'How much has your skin been a problem at work or studying': 
1. 'A lot' (scored 2)
2. 'A little' (scored 1)
3. 'Not at all' (scored 0).

## Missing data
If one question is unanswered, this is allocated a score of 0 and the DLQI score summed in the usual way, out of 30. If two or more questions are unanswered, the questionnaire is not scored.

### Scoring
The total score is simply calculated by summing all the values of the above questions.

## References
[1] Finlay, A. Y. and Khan, G. K. 1994. Dermatology Life Quality Index (DLQI)--a simple practical measure for routine clinical use. Clinical and Experimental Dermatology 19 (3), pp.210-216. (10.1111/j.1365-2230.1994.tb01167.x )
[2] https://www.cardiff.ac.uk/medicine/resources/quality-of-life-questionnaires/dermatology-life-quality-index \
[3] Finlay AY, Sampogna F. What do scores mean? Informed interpretation and clinical judgement are needed .Br J Dermatol 2018; 179: 1021-1022.