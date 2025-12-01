# Beck Anxiety Inventory (BAI)

## Introduction

The Beck Anxiety Inventory (BAI) is a 21-item self-report measure of anxiety developed by Aaron T. Beck and his associates at the Center for Cognitive Therapy, University of Pennsylvania School of Medicine, Department of Psychiatry. The BAI was constructed to measure symptoms of anxiety which are minimally shared with those of depression.

The scale measures the severity of anxiety in adults and adolescents, focusing on symptoms experienced during the past week, including today.

## Questions

The BAI consists of 21 descriptive statements of anxiety symptoms, each rated on a 4-point scale:

- **0**: Not at all
- **1**: Mildly, but it didn't bother me much
- **2**: Moderately - it wasn't pleasant at times
- **3**: Severely - it bothered me a lot

The 21 items include: Numbness or tingling, Feeling hot, Wobbliness in legs, Unable to relax, Fear of the worst happening, Dizzy or lightheaded, Heart pounding or racing, Unsteady, Terrified or afraid, Nervous, Feeling of choking, Hands trembling, Shaky/unsteady, Fear of losing control, Difficulty in breathing, Fear of dying, Scared, Indigestion, Faint/lightheaded, Face flushed, and Hot/cold sweats.

## Calculation

The total score is calculated by finding the sum of the 21 items. The maximum possible score is 63 points.

## Interpretation

### Primary Scoring (Used in this **Implementation**)

This implementation uses the following interpretation guidelines:

| Score | Anxiety Level |
|-------|--------------|
| 0-21  | Low anxiety |
| 22-35 | Moderate anxiety |
| 36-63 | Potentially concerning levels of anxiety |

### Alternative Scoring: 1993 Edition Guidelines **NOT IMPLEMENTED**

The 1993 Edition of the BAI Manual recommends the following scoring guidelines, which are based on extensive experience with outpatients with anxiety disorders at the Center for Cognitive Therapy:

| Score | Anxiety Level |
|-------|--------------|
| 0-7   | Minimal |
| 8-15  | Mild |
| 16-25 | Moderate |
| 26-63 | Severe |

**Note:** These diagnostic ranges and associated descriptive labels were revised by Dr. Beck based on his extensive clinical experience. Previous editions used slightly different ranges. Clinicians should consider using these ranges as guidelines and adjust interpretation based on the clinical context and patient population.

## Reliability

- **Internal consistency**: Cronbach's α = 0.92 (Beck, Epstein, Brown, & Steer, 1988)
- **Test-retest reliability** (1 week): 0.75 (Beck et al., 1988)

## Validity

- The BAI was moderately correlated with the revised Hamilton Anxiety Rating Scale (0.51)
- Mildly correlated with the Hamilton Depression Rating Scale (0.25) (Beck et al., 1988)
- The BAI successfully discriminates anxiety symptoms from depressive symptoms

## Clinical Considerations

- The BAI was developed with adult psychiatric outpatients and should be used cautiously with other clinical populations
- Most appropriate for use with adult psychiatric outpatients over the age of 17 years
- Some data suggest that BAI total scores for women with anxiety disorders may be an average of 4 points higher than those for men with anxiety disorders
- BAI total scores may be inversely related to age, with younger patients reporting more anxiety than older patients
- Patients with predominantly somatic complaints may be suffering from an undetected medical condition and should be evaluated accordingly
- Patients with anxiety symptoms frequently complain of depressive symptoms, and clinicians should assess for co-morbid mood disorders and suicidal ideation

## References

1. Beck, A.T., Epstein, N., Brown, G., & Steer, R.A. (1988). An inventory for measuring clinical anxiety: Psychometric properties. Journal of Consulting and Clinical Psychology, 56, 893-897.

2. Beck, A.T., & Steer, R.A. (1993). Beck Anxiety Inventory Manual. San Antonio, TX: Psychological Corporation.

