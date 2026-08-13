# WHO-5 (World Health Organization-Five Well-Being Index)

## Introduction

The WHO-5 is a five-item questionnaire measuring subjective psychological
well-being over the preceding two weeks. It was developed in the 1990s by Per
Bech at the Psychiatric Centre North Zealand (Copenhagen, Denmark), a WHO
Collaborating Centre for Mental Health, and derives from scales and studies of
the WHO Regional Office for Europe (the DepCare project). In 2024 copyright was
assigned to WHO, which republished the instrument as an open access product [1].

Higher numbers mean better well-being throughout.

## Questionnaire structure

Five statements, each answered on a 0-5 frequency scale describing the last two
weeks [1]:

| Value | Answer |
| --- | --- |
| 5 | All of the time |
| 4 | Most of the time |
| 3 | More than half of the time |
| 2 | Less than half of the time |
| 1 | Some of the time |
| 0 | At no time |

## Scoring

**Raw score** — the sum of the five item scores, ranging from 0 to 25, where 0
represents worst possible and 25 best possible mental well-being [1].

**Percentage score** — the raw score multiplied by 4, ranging from 0 to 100,
where 0 represents worst possible and 100 best possible mental well-being [1].

```
RAW_SCORE        = WHO5_Q01 + WHO5_Q02 + WHO5_Q03 + WHO5_Q04 + WHO5_Q05
PERCENTAGE_SCORE = RAW_SCORE × 4
```

All five items are required; an incomplete questionnaire does not produce a
score.

## Interpretation

Higher scores indicate better mental well-being.

A percentage score below 50, equivalently a raw score below 13, has been
suggested as a cut-off for poor mental well-being and as an indication for
further assessment for the possible presence of a mental health condition such
as a depressive disorder [1][2].

The WHO-5 is a screening measure of well-being, not a diagnostic instrument. A
score below the cut-off warrants further assessment; it does not establish a
diagnosis.

## Licensing

The WHO-5 is © World Health Organization 2024, published under the Creative
Commons Attribution-NonCommercial-ShareAlike 3.0 IGO licence
([CC BY-NC-SA 3.0 IGO](https://creativecommons.org/licenses/by-nc-sa/3.0/igo)).
That licence permits copying, redistribution and adaptation **for
non-commercial purposes only**, with appropriate citation, and requires
derivative works to carry the same or an equivalent licence. Commercial use
requires permission from WHO — see [WHO copyright](https://www.who.int/copyright).

Accordingly this score is marked `license_required`. Determining whether a
licence is required for your use of the instrument, and obtaining it, is your
responsibility; see the repository [NOTICE](../../../NOTICE).

Suggested citation: World Health Organization. The World Health
Organization-Five Well-Being Index (WHO-5). Geneva: World Health Organization;
2024. Licence: CC BY-NC-SA 3.0 IGO.

## References

[1] World Health Organization. *The World Health Organization-Five Well-Being Index (WHO-5)*. Geneva: World Health Organization; 2024. WHO/UCN/MSD/MHE/2024.1. Licence: CC BY-NC-SA 3.0 IGO. [https://cdn.who.int/media/docs/default-source/mental-health/who-5_english-original4da539d6ed4b49389e3afe47cda2326a.pdf](https://cdn.who.int/media/docs/default-source/mental-health/who-5_english-original4da539d6ed4b49389e3afe47cda2326a.pdf)

[2] Topp CW, Østergaard SD, Søndergaard S, Bech P. The WHO-5 Well-Being Index: a systematic review of the literature. *Psychother Psychosom*. 2015;84(3):167–176. doi:10.1159/000376585.

[3] World Health Organization Regional Office for Europe. *Wellbeing measures in primary health care / the DepCare Project: report on a WHO meeting, Stockholm, Sweden, 12–13 February 1998*. Copenhagen: WHO Regional Office for Europe; 1998. [https://iris.who.int/handle/10665/349766](https://iris.who.int/handle/10665/349766)
