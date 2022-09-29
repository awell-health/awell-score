# Neck Disability Index

## Introduction 

The Neck Disability Index (NDI) is a modification of the Oswestry Low Back Pain Disability Index. It's a patient-completed, condition-specific functional status questionnaire with **10 items** including pain, personal care, lifting, reading, headaches, concentration, work, driving, sleeping and recreation[1].

The NDI can be used to evaluate the patients status presence and to evaluate the evolution during the therapy

## Questions and Scoring

The NDI has 10 questions. Each question is scored on a 0 to 5 rating scale, in which zero means 'No pain' and 5 means 'Worst imaginable pain'. The total raw score is calculated by summing all the items, which results in a maximum score of 50. The raw score is, however, usually expressed as a percentage.

The official English questionnaire can be found here: https://drive.google.com/file/d/1Ri6qZGTG12OmB0OZv7YeBIy4-vFlNZKj/view?usp=sharing

### Missing data

There is no statement in the original literature on how to handle missing data[2]. Therefore we use the same principle as in the Oswestry.

If one question is not answered or not applicable the score is calculated as follows:
```
(sum of all 9 answer values / max score of all 9 answer values) * 100
```

The max total score when one question is missing is 45. So it'll be `(sum of all answers / 45) * 100`

When more than one response is missing (i.e. less than 9 questions answered), a score cannot be calculated

## Calculation

- Each section is scored on a 0 to 5 rating scale, in which zero means 'No pain' and 5 means 'Worst imaginable pain'. 
- Points summed to a total score.
- The raw score is then multiplied by 2 to achieve a percentage score on 100.

## Interpretation

- **0 points or 0% means** no activity limitations
- **50 points or 100% means** complete activity limitation.
- Thus, a higher score indicates more patient-rated disability.

## References
[1] Macdermid JC, Walton DM, Avery S, Blanchard A, Etruw E, McAlpine C, Goldsmith CH. Measurement properties of the neck disability index a sustematic review Journal of Orthopedic and Sports Physical Therapy. 2009 May;39(5):400-17.\
[2] NDI developed by: Vernon, H. & Mior, S. (1991). The Neck Disability Index: https://www.sralab.org/rehabilitation-measures/neck-disability-index. Journal of Manipulative and Physiological Therapeutics. 14, 409-415 Available from:https://www.sralab.org/rehabilitation-measures/neck-disability-index (last accessed 1.5.2020)
