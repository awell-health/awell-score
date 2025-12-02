# WHOQOL-BREF (World Health Organization Quality of Life Assessment)

## Introduction

WHOQOL-BREF is an implementation of the World Health Organization Quality of Life - Brief questionnaire. This is a shortened version of the WHOQOL-100, providing a comprehensive assessment of quality of life across four domains: physical health, psychological health, social relationships, and environment.

The questionnaire consists of 26 questions assessing quality of life over the last four weeks.

**Note:** This implementation assumes that certain WHOQOL-BREF items that require reverse scoring (e.g., Q3, Q4, Q26) are already reversed in the questionnaire itself.

## Questionnaire Structure

### Outputs (6 Scores)

1. **Quality of Life** (Q1) - Overall quality of life rating (scale 1-5)
2. **Health Satisfaction** (Q2) - Overall health satisfaction (scale 1-5)
3. **Physical Health** (Domain 1: Somatic) - Score 0-100
4. **Psychological Health** (Domain 2: Psychological) - Score 0-100
5. **Social Relationships** (Domain 3: Social) - Score 0-100
6. **Environment** (Domain 4: Environmental) - Score 0-100

### Health Domains

**Domain 1 - Somatic (Physical Health)**
- Pain and discomfort
- Energy and fatigue
- Sleep and rest
- Mobility
- Activities of daily living
- Work capacity

**Domain 2 - Psychological (Psychological Health)**
- Positive feelings
- Thinking, learning, memory, and concentration
- Self-esteem
- Body image and appearance
- Negative feelings
- Spirituality / religion / personal beliefs

**Domain 3 - Social (Social Relationships)**
- Personal relationships
- Social support
- Sexual activity

**Domain 4 - Environmental (Environment)**
- Physical safety
- Home environment
- Financial resources
- Health and social care
- Access to information
- Opportunities for recreation and leisure
- Physical environment (pollution, noise, transport, climate)

## Scoring Methodology

### Step 1: Question Scoring

Questions Q1 and Q2 are general questions and return **raw scores (1-5)** without transformation.

The remaining questions (Q3-Q26) are used to calculate domain scores. Most questions are scored so that 1 = worst health state and 5 = best health state.

**Pre-reversed scale questions** (values already reversed in questionnaire design):
- Question 3: Physical pain preventing activities (5 = not at all = best, 1 = extreme amount = worst)
- Question 4: Need for medical treatment (5 = not at all = best, 1 = extreme amount = worst)
- Question 26: Negative feelings (5 = never = best, 1 = always = worst)

### Step 2: Calculating Domain Scores

Each domain score is calculated using the formula:

```
Domain Score = 4 × (Sum of responses / Number of questions in domain)
```

**Formulas for each domain:**

- **Domain 1 (Somatic)** = 4 × (Q3 + Q4 + Q10 + Q15 + Q16 + Q17 + Q18) / 7
- **Domain 2 (Psychological)** = 4 × (Q5 + Q6 + Q7 + Q11 + Q19 + Q26) / 6
- **Domain 3 (Social)** = 4 × (Q20 + Q21 + Q22) / 3
- **Domain 4 (Environmental)** = 4 × (Q8 + Q9 + Q12 + Q13 + Q14 + Q23 + Q24 + Q25) / 8

### Step 3: Transformation to 0-100 Scale

Each domain score is then transformed to a 0-100 scale using the formula:

```
Transformed Score = (Domain Score - 4) × 6.25
```

Where:
- **0** represents the worst possible health state
- **100** represents the best possible health state for that domain

## Missing Data Handling

WHOQOL-BREF-PL uses a two-tier validation system for missing data:

### Tier 1: Overall Data Quality (20% Rule)

**If more than 20% of all questions (>5 out of 26) are missing**, the entire questionnaire is considered invalid and **all outputs (Q1, Q2, and all 4 domains) return `null`**.

This is a data quality threshold - if too much data is missing, the questionnaire's reliability cannot be trusted.

### Tier 2: Individual Output Evaluation (only when ≤20% overall missing)

When overall data quality is good (≤20% missing questions), each output is evaluated independently:

**Questions Q1 and Q2:**
- Return raw value (1-5) if answered
- Return `null` if the question was not answered

**Domains (Scores 0-100):**

Each domain is evaluated independently based on its own missing data limits:

- **Somatic Domain**: Maximum 2 missing questions (out of 7)
- **Psychological Domain**: Maximum 2 missing questions (out of 6)
- **Social Domain**: Maximum 1 missing question (out of 3)
- **Environmental Domain**: Maximum 2 missing questions (out of 8)

**Missing Value Substitution**: 

When the number of missing questions in a domain is within the allowed limit, missing values are replaced with the mean of the answered questions in that domain before calculation. This allows the domain score to be calculated despite some missing data.

If a domain exceeds its missing question limit, only that domain returns `null` - other domains and Q1/Q2 can still return values (provided the 20% rule is met).

## Interpretation

**Questions Q1 and Q2** (raw scores 1-5):
- **1** = Very poor quality of life / Very dissatisfied
- **5** = Very good quality of life / Very satisfied

**Domain Scores** (scale 0-100):
- **0** = Worst possible quality of life in this domain
- **100** = Best possible quality of life in this domain

Higher scores indicate better quality of life in the given domain. Each domain is assessed separately, providing a multidimensional profile of quality of life.

## Strengths

1. **Validated and Established**: The WHOQOL-BREF has demonstrated strong validity and good to excellent psychometric properties in numerous studies
2. **Efficient**: With 26 questions, it's short enough for use in clinical trials and patient care while maintaining comprehensive assessment
3. **Comprehensive**: Includes an environmental domain that examines life circumstances, unlike many other quality of life assessment tools
4. **International**: Developed by WHO for cross-cultural use with validated translations in multiple languages
5. **Bilingual Support**: This implementation supports both English and Polish languages

## Limitations

1. **Item-Domain Correlation**: Some studies have shown that certain items may have stronger correlations with domains other than their assigned domain
2. **Cultural Sensitivity**: Although designed for cross-cultural use, some items may perform differently across cultures
3. **Pre-reversed Questions**: The Polish version uses pre-reversed value scales for Q3, Q4, and Q26, which differs from some other implementations that apply mathematical transformation

## References

1. World Health Organization. (1998). *WHOQOL User Manual*. Programme on Mental Health. [https://iris.who.int/server/api/core/bitstreams/4c5cd94a-599e-450f-9141-4a21a7b74849/content](https://iris.who.int/server/api/core/bitstreams/4c5cd94a-599e-450f-9141-4a21a7b74849/content)
2. World Health Organization. (1998). Development of the World Health Organization WHOQOL-BREF quality of life assessment. *Psychological Medicine*, 28(3), 551-558.
3. Skevington, S. M., Lotfy, M., & O'Connell, K. A. (2004). The World Health Organization's WHOQOL-BREF quality of life assessment: Psychometric properties and results of the international field trial. *Quality of Life Research*, 13(2), 299-310.
4. The WHOQOL Group. (1998). The World Health Organization quality of life assessment (WHOQOL): Development and general psychometric properties. *Social Science & Medicine*, 46(12), 1569-1585.
