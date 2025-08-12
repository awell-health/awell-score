# NAFLD Fibrosis Score (NFS)

## Overview
The NAFLD Fibrosis Score estimates the risk of advanced liver fibrosis in patients with non-alcoholic fatty liver disease using clinical and laboratory parameters.

## Inputs
- Age (years)
- BMI (kg/m²)
- IFG/Diabetes (yes/no)
- AST (U/L) [> 0]
- ALT (U/L) [> 0]
- Platelet count (×10⁹/L)
- Albumin (g/dL)

## Outputs
- NFS_SCORE (number, rounded to 3 decimals)
- NFS_CATEGORY (low / indeterminate / high)
- NFS_LOW_CUTOFF_USED
- NFS_HIGH_CUTOFF_USED

## Interpretation
- Age < 65: low if < −1.455; high if > 0.675; otherwise indeterminate
- Age ≥ 65: low if < −0.12; high if > 0.675; otherwise indeterminate

## Reference
Angulo P et al., "The NAFLD fibrosis score: A noninvasive system that identifies liver fibrosis in patients with NAFLD", Hepatology, 2007.
