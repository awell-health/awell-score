# Weekly Urticaria Activity Score (UAS7)

## Introduction

The UAS7 is the gold-standard patient-reported outcome measure for assessing chronic spontaneous urticaria (CSU) disease activity. Patients record the severity of their two primary symptoms — wheals (hives) and itch (pruritus) — once daily for 7 consecutive days. The weekly total guides treatment decisions and is widely used in clinical trials.

## Questions and Scoring

Each day, patients evaluate the previous 24 hours and assign two scores:

### Wheals (hives) score

| Score | Description |
| --- | --- |
| 0 | None |
| 1 | Mild (fewer than 20 wheals/24h) |
| 2 | Moderate (20–50 wheals/24h) |
| 3 | Intense (more than 50 wheals/24h or large confluent areas) |

### Itch (pruritus) score

| Score | Description |
| --- | --- |
| 0 | None |
| 1 | Mild (present but not annoying or troublesome) |
| 2 | Moderate (troublesome but does not interfere with normal daily activity or sleep) |
| 3 | Intense (severe itch, sufficiently troublesome to interfere with normal daily activity or sleep) |

## Calculation

1. **Daily UAS** = Wheals score + Itch score (range: 0–6)
2. **UAS7** = Sum of 7 daily UAS scores (range: 0–42)

## Missing Data Handling (4/7 Rule)

When fewer than 7 days of data are available, the 4/7 rule is applied:

- **4–6 days present**: The weekly total is estimated using mean imputation. The mean of the available daily UAS scores is calculated and extrapolated to a full 7-day week:

  `UAS7 = round( (sum of available daily scores / number of available days) × 7 )`

- **0–3 days present**: The weekly total cannot be reliably estimated and is returned as `null`.

Daily UAS scores are always returned for any day that has both a wheals and itch value, regardless of how many other days are missing.

### Additional Outputs

| Output | Description |
| --- | --- |
| `UAS7_MISSING_DAYS_NUMBER` | Count of days with incomplete data (0–7) |
| `UAS7_MISSING_DAYS` | Comma-separated list of missing day numbers (e.g. `"2, 5"`) |

### Reference

Griffiths P, Williams A, Brohan E. How do the number of missing daily diary days impact the psychometric properties and meaningful change thresholds arising from a weekly average summary score? Qual Life Res. 2022;31(12):3433-3445. doi:10.1007/s11136-022-03198-9. PMID: 35930136.

## Interpretation

| UAS7 score | Disease activity | Rationale |
| --- | --- | --- |
| 0 | Urticaria-free | Itch and hive free — indicative of no symptoms of CSU and considered a full treatment response |
| 1–6 | Well-controlled | Indicates a good response to treatment |
| 7–15 | Mild | Indicates also a lower response level |
| 16–27 | Moderate | Entry criteria for clinical trials in CSU |
| 28–42 | Severe | Severe activity urticaria |

## References

[1] Hollis K, Proctor C, McBride D, et al. Comparison of Urticaria Activity Score Over 7 Days (UAS7) Values Obtained from Once-Daily and Twice-Daily Versions: Results from the ASSURE-CSU Study. Am J Clin Dermatol. 2018;19(2):267-274. https://pmc.ncbi.nlm.nih.gov/articles/PMC5978890/

[2] UAS7 Weekly Urticaria Activity Score Sheet (Imperial College Healthcare NHS Trust): https://www.imperial.nhs.uk/~/media/website/services/dermatology/patient-forms/uas7-weekly-urticaria-activity-score-sheet.pdf
