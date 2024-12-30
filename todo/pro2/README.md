# PRO2

## Introduction 

The PRO2 is a Patient-reported outcome derived from the Crohn's Disease Activity Index (CDAI) and determines the current severity of Crohn’s disease[1,2].

Calculation of the PRO2 was implemented as agreed upon by AZ Delta, AZ Maria Middelares and Imelda. Specifications can be found in [this file](https://drive.google.com/file/d/1tW4zhvh-JPUYgieUXehiIYDTCqPI5mJS/view?usp=sharing)

## Questions and Scoring

| Category               | Question                                                                                                                                      | Possible answers                                                                  | Weight |
|------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|--------|
| Stool frequency        | In de laatste week had ik gemiddeld ...... keer per dag stoelgang.                                                                            | [0, 20]                                                                           | 2      |
| Abdominal pain         | Hoeveel last van buikpijn had je gemiddeld per dag gedurende de laatste week?                                                                 | 0 = None; 1 = Mild; 2 = Moderate; 3 = Severe                                      | 5      |
| General health         | In de laatste week voelde ik mij dagelijks in het algemeen...                                                                                 | 0 = Generally well; 1 = Slightly under par; 2 = Poor; 3 = Very poor; 4 = Terrible | 7      |
| Extraintestinal compl. | Had je in de laatste weken gewrichtsklachten (langdurige klachten op verschillende gewrichten)?                                               | 0 = No; 1 = Yes;                                                                  | 1      |
| Extraintestinal compl. | Had je in de laatste weken huidklachten (bv. warme, gevoelige of rode plekken)?                                                               | 0 = No; 1 = Yes;                                                                  | 1      |
| Extraintestinal compl. | Had je in de laatste weken oogproblemen (bv. pijnlijke, rode en/of gezwollen ogen, wazig zicht, lichtgevoeligheid, verhoogde traanproductie)? | 0 = No; 1 = Yes;                                                                  | 1      |
| Extraintestinal compl. | Had je in de laatste weken aften in de mond?                                                                                                  | 0 = No; 1 = Yes;                                                                  | 1      |

## Calculation

### SF & AP Subscore

A subscore for Stool Frequency (SF) and Abdominal Pain (AP) is calculated by summing the weighted scores for these categories.

### Total score

The total score is the sum of all weighted scores.

## Remission outcome

**Remission is determined as follows:**
1. SF & AP subscore <= 11 AND
2. Raw SF score (unweighted) <= 3 AND
3. Raw AP score (unweighted) <= 1

**Result is a "0" or a "1" and can be interpreted as follows:**

| Result | Interpretation |
|--------|----------------|
| 0      | No remission   |
| 1      | Remission      |

## References

[1] Jairath V, Khanna R, Zou GY, Stitt L, Mosli M, Vandervoort MK, D'Haens G, Sandborn WJ, Feagan BG, Levesque BG. Development of interim patient-reported outcome measures for the assessment of ulcerative colitis disease activity in clinical trials. Aliment Pharmacol Ther. 2015 Nov;42(10):1200-10. doi: 10.1111/apt.13408. Epub 2015 Sep 21. PMID: 26388424.\
[2] Marin J. de Jong et al. Patient-Reported Outcome Measures for Use in Clinical Trials and Clinical Practice in Inflammatory Bowel Diseases: A
Systematic Review. Clinical Gastroenterology and Hepatology 2018;16:648–663.\
[3] Best WR, Becktel JM, Singleton JW, Kern F Jr. Development of a Crohn's disease activity index. National Cooperative Crohn's Disease Study. Gastroenterology. 1976 Mar;70(3):439-44.
