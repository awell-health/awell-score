# Hospital Anxiety And Depression Scale (HADS)

## Introduction 
Hospital Anxiety and Depression Scale (HADS) is a screening tool that quickly and effectively identifies patients that show symptoms of depression and/or anxiety. It was was developed by Zigmond and Snaith in 1983 [1]. Its use in the health-care setting increased over time, since it evaluates cognitive, emotional, and behavioral symptoms, excluding physical symptoms. Thus, it avoids possible false positives, and excludes symptoms associated with severe mental disorders. Once patients are identified as having possible symptoms of depression and/or anxiety, they can be selected for a diagnostic confirmation.

## Questions and Scoring

The HADS has fourteen item scale that generates of which seven items relate to anxiety and the other 7 relate to depression. 

The items on the questionnaire that relate to anxiety are:

| Questions | Answers | Score |
| -------- | ------- | ------- |
| I feel tense or wound up | Most of the time; A lot of the time; From time to time, occasionally; Not at all | 3-0 |
| I get a sort of frightened feeling as if something awful is about to happen | Very definitely and quite badly; Yes, but not too badly; A little, but it doesn't worry me; Not at all | 3-0 |
| Worrying thoughts go through my mind | A great deal of the time; A lot of the time; From time to time, but not too often; Only occasionally | 3-0 |
| I can sit at ease and feel relaxed | Definitely; Usually; Not often; Not at all | 0-3 | 
| I get a sort of frightened feeling like 'butterflies' in the stomach | Not at all; occasionally; Quite often; Very often | 0-3 |
| I feel restless as I have to be on the move | Very much indeed; Quite a lot; Not very much; Not at all | 3-0 |
| I get sudden feelings of panic | Very often indeed; Quite often; Not very often; Not at all | 3-0 |

The items that relate to depression are:

| Questions | Answers | Score |
| -------- | ------- | ------- |
| I still enjoy the things I used to enjoy | Definitely as much; Not quite so much; Only a little; Hardly at all | 0-3 | 
| I can laugh and see the funny side of things | As much as I always could; Not quite so much now; Definitely not so much now; Not at all | 0-3 |
| I feel cheerful | Not at all; Not often; Sometimes; Most of the time | 3-0 | 
| I feel as if I am slowed down | Nearly all the time; Very often; Sometimes; Not at all | 3-0 |
| I have lost interest in my appearance | Definitly; I don't take as much care as I should; I may not take quite as much care ; I take just as much care as ever | 3-0 |
| I look forward with enjoyment to things | As much as I ever did; Rather less than I used to; Definitely less than I used to; Hardly at all |0-3 |
| I can enjoy a good book or radio or TV program | Often; Sometimes; Not often; Very seldom | 0-3 |

### Important

As you can see in the tables above some items are reverse scored. This logic is not handled in the calculation itself so we expect that the HADS form has the correct answer values set for each question (i.e. some question will have answer values set to [0,3] and others from [3,0]).

## Calculations
The scores coresponding to depression and anxiety, respectivly, are summed up and from a total score for each of this catagory. 

## Interpretation

0-7    = Normal
8-10   = Borderline abnormal (borderline case)
11-21  = Abnormal (case)

## References

[1] Zigmond AS, Snaith RP. The hospital anxiety and depression scale. Acta Psychiatr Scand. 1983;67(6):361-370. doi:10.1111/j.1600-0447.1983.tb09716.x

