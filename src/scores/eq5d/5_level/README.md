# EQ-5D-5L

## Introduction

The EQ-5D five-level version (EQ-5D-5L) is an instrument developed by the EuroQol group with the aim to create a generic cardinal index of health, thus giving it considerable potential for use in health care evaluation. The five level version was developed in oder to improve its discriminatory power and reduce the ceiling effect [1].

## Questions and Scoring

The EQ-5D-5L consists of two aspects:
1. The descriptive system
2. The visual analog scale (VAS)

The descriptive system contains 5 dimensions describing different aspects of health with 5 levels of severity. The numeric labels are used as numeric description of the health state. Thereby the EQ-5D-5L describes (5^5 =) 3125 health states. 

**Dimensions:**
- Mobility
- Self-Care
- Usual activities
- Pain / Discomfort
- Anxiety / Depression

**Severity levels:**
1. no problems
2. slight problems
2. moderate problems
4. severe problems
5. extreme problems

The VAS records the patients self-rated health on a vertical VAS with a range of 0-100. The endpoints are labelled with "The best health you can imagine" (100) and "The worst health you can imagine" (0).

## Calculations

### Health State & VAS

There is no calculation as such in the EQ-5D-5L, however the descriptive part of the EQ-5D-5L produces a 5-digit health state profile by putting the values of the severity levels corresponding to the dimensions in the following order: Mobility, Self-Care, Usual activities, Pain / Discomfort, Anxiety / Depression

The score for the VAS is just presented EQ VAS.

### Utility values

#### Belgium

Utility values are determined based on the value set that can be found [here](https://drive.google.com/file/d/1UuJmIxTsoMtDqFrHMo_MRxLK7E-Ofldo/view?usp=sharing). More information on the value set and how it was determined can be found [here](https://drive.google.com/file/d/17I11ok2uhV5uUSGe076DGMhnslggLkZF/view?usp=sharing)

#### Poland

Utility values for the Polish population are computed using the official EQ-5D-5L value set published by Golicki et al. (2019) [3]. This is the first directly measured EQ-5D-5L value set in Central and Eastern Europe, derived from a representative sample of 1,252 Polish adults using a standardised EuroQol Valuation Technology (EQ-VT 2.0) protocol combining composite time trade-off (cTTO) and discrete choice experiment (DCE) methods (hybrid Bayesian model).

The coefficients are sourced from the official STATA syntax for the Polish value set and verified against Table 2 (Final model) of the paper. The calculation uses a pure additive disutility model with no constant term: `Utility = 1 - sum(disutilities for levels > 1)`. Level 1 (no problems) carries zero penalty. The disutility coefficients per dimension and level are:

| Dimension | Level 2 | Level 3 | Level 4 | Level 5 |
|-----------|---------|---------|---------|---------|
| Mobility (MO) | 0.025 | 0.034 | 0.126 | 0.314 |
| Self-care (SC) | 0.031 | 0.047 | 0.111 | 0.264 |
| Usual activities (UA) | 0.023 | 0.040 | 0.097 | 0.205 |
| Pain/Discomfort (PD) | 0.030 | 0.050 | 0.261 | 0.575 |
| Anxiety/Depression (AD) | 0.018 | 0.029 | 0.108 | 0.232 |

Pain/discomfort has the highest impact on utility (level 5 = 0.575), followed by mobility (0.314), self-care (0.264), anxiety/depression (0.232), and usual activities (0.205). The theoretical range is approximately -0.590 to 1.000, where u(55555) = -0.590, u(22222) = 0.873, u(33333) = 0.800.

Sources:
- Full paper: https://pmc.ncbi.nlm.nih.gov/articles/PMC6830402/
- Official EuroQol value sets: https://euroqol.org/information-and-support/resources/value-sets/

## Interpretation

The health state profile of 11111 indicates the best possible health 55555 the worst [2].

## References
[1] Herdman M, Gudex C, Lloyd A, Janssen M, Kind P, Parkin D, Bonsel G, Badia X. Development and preliminary testing of the new five-level version of EQ-5D (EQ-5D-5L). Qual Life Res. 2011 Dec;20(10):1727-36. doi: 10.1007/s11136-011-9903-x. Epub 2011 Apr 9. PMID: 21479777; PMCID: PMC3220807.
[2] Van Reenen, M., & Janssen, B. (2015). EQ-5D-5L User Guide. Basic Information on how to use the EQ-5D-5L instrument. Version 2.1. EuroQol Research Foundation.
[3] Golicki D, Jakubczyk M, Graczyk K, Niewada M. Valuation of EQ-5D-5L Health States in Poland: the First EQ-VT-Based Study in Central and Eastern Europe. Pharmacoeconomics. 2019;37(9):1165-1176. doi: 10.1007/s40273-019-00811-7. PMID: 31161586; PMCID: PMC6830402.
[4] Golicki D. General population reference values for the EQ-5D-5L index in Poland. Polish Archives of Internal Medicine. 2021.