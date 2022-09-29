# Calculation pipeline

```
                              Input
                                |
                                |
                                v
                    specific calculation steps
                                |
                                |
                                |
                                | WIPCalculationResultType
                                |
                                |
                                v
                  standardize_calculation_results
                                |
                                |
                                v
                       CalculationOutputType
```

## What is it?
### Specific steps

Specific steps of each individual calculation. This input of this function is always a single ResponseResponseType object.

### standardize_calculation_results

Makes sure that the output of the calculation is standardized.


