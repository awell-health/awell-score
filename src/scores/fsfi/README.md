# Female Sexual Function Index (FSFI)

## Introduction

The Female Sexual Function Index (FSFI) is a clinically validated, multidimensional self-report instrument for the assessment of female sexual function. It was developed by Rosen et al. (2000) and is widely used in research and clinical practice to evaluate sexual dysfunction in women.

The FSFI provides a comprehensive assessment of female sexual functioning across six key domains, making it an essential tool for understanding and treating female sexual health issues.

## Questions and Scoring

The FSFI consists of **19 questions** organized into **6 domains**:

### Domain Structure

| Domain | Questions | Factor | Score Range | Description |
|--------|-----------|--------|-------------|-------------|
| **Desire** | Q1, Q2 | 0.6 | 1.2 - 6.0 | Sexual desire and interest |
| **Arousal** | Q3, Q4, Q5, Q6 | 0.3 | 0 - 6.0 | Sexual arousal and excitement |
| **Lubrication** | Q7, Q8, Q9, Q10 | 0.3 | 0 - 6.0 | Vaginal lubrication |
| **Orgasm** | Q11, Q12, Q13 | 0.4 | 0 - 6.0 | Ability to reach orgasm |
| **Satisfaction** | Q14, Q15, Q16 | 0.4 | 0 - 6.0 | Sexual satisfaction |
| **Pain** | Q17, Q18, Q19 | 0.4 | 0 - 6.0 | Pain during sexual activity |

### Response Options

All questions use a scale where **5 represents the best/most positive response** and **1 represents the worst/most negative response**:

- **Questions 1-2 (Desire)**: 5-point scale (1-5)
  - 5 = Almost always, Very high
  - 1 = Almost never, Very low
- **Questions 3-14**: 6-point scale (0-5)
  - 0 = No sexual activity
  - 5 = Best (Almost always, Very high, etc.)
  - 1 = Worst (Almost never, Very low, etc.)
- **Questions 15-16 (Satisfaction)**: 5-point scale (1-5)
  - 5 = Very satisfied
  - 1 = Very dissatisfied
- **Questions 17-19 (Pain)**: 6-point scale (0-5)
  - 0 = Did not attempt intercourse
  - 5 = No pain (Almost never, Very low pain)
  - 1 = Severe pain (Almost always, Very high pain)

### Special Considerations

1. **"No Sexual Activity" Responses**: When a respondent selects "no sexual activity" (value 0) for all questions in a domain, the domain score is 0.
2. **Mixed Responses**: If some questions in a domain have "no sexual activity" responses and others have values, the calculation proceeds normally.
3. **Desire Domain**: Questions 1-2 do not include a "no sexual activity" option.

## Calculation

### Domain Scores

Each domain score is calculated as:
```
Domain Score = (Sum of domain questions) × Domain Factor
```

### Total Score

The total FSFI score is the sum of all six domain scores:
```
Total Score = Desire + Arousal + Lubrication + Orgasm + Satisfaction + Pain
```

**Total Score Range**: 2.0 - 36.0

### Example Calculation

For a woman who answers all questions with the highest possible scores:
- Desire: (5 + 5) × 0.6 = 6.0
- Arousal: (5 + 5 + 5 + 5) × 0.3 = 6.0
- Lubrication: (5 + 5 + 5 + 5) × 0.3 = 6.0
- Orgasm: (5 + 5 + 5) × 0.4 = 6.0
- Satisfaction: (5 + 5 + 5) × 0.4 = 6.0
- Pain: (5 + 5 + 5) × 0.4 = 6.0

**Total Score**: 36.0

## Clinical Interpretation

The FSFI includes a clinically validated cutoff score for identifying sexual dysfunction:

- **≤ 26**: Clinically significant sexual dysfunction indicated
- **> 26**: No clinically significant sexual dysfunction

*Cutoff based on Wiegel et al. (2005) validation study and the official FSFI documentation.*

## Missing Data

**All questions are optional**, but domain and total scores follow these rules:

- If **any question within a domain is missing**, the domain score returns **null**
- If **any domain score is null**, the total score returns **null**
- If **all questions in a domain = 0** (no sexual activity), the domain score is **0** (valid score)
- Clinical interpretation returns **"Insufficient data for interpretation"** when total score is null

## Output

The calculation returns:

1. **Domain Scores**: Individual scores for each of the 6 domains
2. **Total Score**: Sum of all domain scores
3. **Clinical Interpretation**: Text indicating presence or absence of clinically significant sexual dysfunction

## Clinical Use

### Applications
- Assessment of sexual dysfunction in clinical practice
- Research on female sexual health
- Monitoring treatment outcomes
- Screening for sexual health issues

### Considerations
- Should be administered by trained healthcare professionals
- Requires sensitive and confidential handling
- May be supplemented with clinical interview
- Cultural factors should be considered in interpretation

## References

**This implementation uses the English FSFI scoring from:**

**Reed, SD, Mitchell CM, Joffe H, Cohen L, Shifren JL, Newton KM, et al.** (2014). Sexual function in women on estradiol or venlafaxine for hot flushes: a randomized controlled trial. *Obstetrics & Gynecology*, 124.

📄 **[FSFI Scoring Appendix (PDF)](https://cdn-links.lww.com/permalink/aog/a/aog_124_2_2014_06_02_reed_14-218_sdc1.pdf)**

**Key scoring rules from this documentation:**
- Response values: **5 = best answer**, **1 = worst answer** (except 0 = no sexual activity)
- Full scale score range: **2.0 to 36.0**
- Clinical cutoff: **≤26** indicates sexual dysfunction

### Additional References

1. **Rosen, R., Brown, C., Heiman, J., et al.** (2000). The Female Sexual Function Index (FSFI): a multidimensional self-report instrument for the assessment of female sexual function. *Journal of Sex & Marital Therapy*, 26, 191-208.

2. **Wiegel, M., Meston, C., & Rosen, R.** (2005). The Female Sexual Function Index (FSFI): Cross-validation and development of clinical cutoff scores. *Journal of Sex & Marital Therapy*, 31, 1-20.

3. **Drosdzol, A.** (2010). Skale oceny jakości życia i seksualności. In Z. Lew-Starowicz & V. Skrzypulec (Eds.), *Podstawy seksuologii* (pp. 363-370). Warszawa: PZWL. [Polish translation reference]

