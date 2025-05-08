# KOOS (Knee Injury and Osteoarthritis Outcome Score)

## Introduction 

The Knee Injury and Osteoarthritis Outcome Score (KOOS) is a comprehensive questionnaire designed to assess both short and long-term patient-relevant outcomes following knee injury. The KOOS is self-administered and assesses five separate patient-relevant dimensions: Pain (9 items), Symptoms (7 items), Activities of Daily Living (ADL) Function (17 items), Sport and Recreation Function (5 items), and knee-related Quality of Life (4 items). The questionnaire takes approximately 10 minutes to complete [1].

## Questions and Scoring

**Each item is scored from 0 to 4:**
- 0 = No problems
- 1 = Mild problems
- 2 = Moderate problems
- 3 = Severe problems
- 4 = Extreme problems

### Missing data

Each question must have a response (i.e. no missing data).

## Calculation

The KOOS consists of 5 subscales. The scores for each subscale are calculated separately. A normalized score (100 indicating no symptoms and 0 indicating extreme symptoms) is calculated for each subscale.

The normalized score is transformed to meet this format using the following formula:
```
KOOS subscale = 100 - (actual raw score × 100) / (possible raw score range)
```

## Interpretation

Scores are transformed to a 0-100 scale, where:
- 0 represents extreme knee problems
- 100 represents no knee problems

This scoring aligns with common orthopedic scales and generic measures. Scores between 0 and 100 represent the percentage of total possible score achieved.

Each subscale is interpreted separately:
- Pain (9 items)
- Symptoms (7 items)
- ADL Function (17 items)
- Sport/Recreation Function (5 items)
- Quality of Life (4 items)

## References
[1] Roos EM, Roos HP, Lohmander LS, Ekdahl C, Beynnon BD. Knee Injury and Osteoarthritis Outcome Score (KOOS)--development of a self-administered outcome measure. J Orthop Sports Phys Ther. 1998 Aug;28(2):88-96.
