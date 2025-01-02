# Packyears

## Introduction 

Standard clinical measure of quantifying smoking history.

Correlates with survival, particularly in patients with diagnosed lung cancer. In one study of patients with advanced lung cancer (stage IIIB/IV NSCLC), median overall survival was 10.8 months in patients with >15 pack year history, compared to 14.6 months in those with ≤15 pack year history [1].

## Questions and Scoring

| Calculation input id | Question                           | Answer options |
|----------------------|------------------------------------|----------------|
| packs_per_day        | Packs of cigarettes smoked per day | Number         |
| number_years_smoking | Years the patient has smoked       | Number         |

## Calculation

Multiply packs of cigarettes smoked per day with the years the patient has smoked.

## Validation

| Calculation input id | Validation                         |
|----------------------|------------------------------------|
| packs_per_day        | Should be a number between [0, 10] |
| number_years_smoking | Should be a number between [0, 100]|

## References

[1] Janjigian YY, McDonnell K, Kris MG, Shen R, Sima CS, Bach PB, Rizvi NA, Riely GJ. Pack-years of cigarette smoking as a prognostic factor in patients with stage IIIB/IV nonsmall cell lung cancer. Cancer. 2010 Feb 1;116(3):670-5. doi: 10.1002/cncr.24813. PMID: 20029977; PMCID: PMC2815173.
