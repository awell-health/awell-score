// @flow
import type { InputType } from '../../../../types/calculations.types'

export const CDR_INPUTS: Array<InputType> = [
  {
    input_id: 'MEMORY',
    input_label: {
      en: 'Memory'
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 0,
          label: { en: 'No memory loss or slight inconsistent forgetfulness' }
        },
        {
          value: 0.5,
          label: {
            en: 'Mild consistent forgetfulness; partial recollection of events; "benign" forgetfulness'
          }
        },
        {
          value: 1,
          label: {
            en: 'Moderate memory loss; more marked for recent events; interferes with everyday activities'
          }
        },
        {
          value: 2,
          label: {
            en: 'Severe memory loss; only highly learned material retained; new material rapidly lost'
          }
        },
        {
          value: 3,
          label: {
            en: 'Severe memory loss; only fragments remain'
          }
        }
      ]
    },
    required: true
  },
  {
    input_id: 'ORIENTATION',
    input_label: {
      en: 'Orientation'
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 0,
          label: { en: 'Fully oriented' }
        },
        {
          value: 0.5,
          label: {
            en: 'Fully oriented except for slight difficulty with time relationships'
          }
        },
        {
          value: 1,
          label: {
            en: 'Moderate difficulty with time relationships; oriented for place and person at examination but may have geographic disorientation'
          }
        },
        {
          value: 2,
          label: {
            en: 'Severe difficulty with time relationships; usually disoriented to time, often to place'
          }
        },
        {
          value: 3,
          label: {
            en: 'Oriented to person only'
          }
        }
      ]
    },
    required: true
  },
  {
    input_id: 'JUDGEMENT_AND_PROBLEM_SOLVING',
    input_label: {
      en: 'Judgement and problem solving'
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 0,
          label: {
            en: 'Solves everyday problems well; judgment good in relation to past performance'
          }
        },
        {
          value: 0.5,
          label: {
            en: 'Slight impairment in solving problems, similarities, and differences'
          }
        },
        {
          value: 1,
          label: {
            en: 'Moderate difficulty in handling complex problems; social judgment usually maintained'
          }
        },
        {
          value: 2,
          label: {
            en: 'Severely impaired in handling problems, similarities, and differences; social judgment usually impaired'
          }
        },
        {
          value: 3,
          label: {
            en: 'Unable to make judgments or solve problems'
          }
        }
      ]
    },
    required: true
  },
  {
    input_id: 'COMMUNITY_AFFAIRS',
    input_label: {
      en: 'Community affairs'
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 0,
          label: {
            en: 'Independent function at usual level in job, shopping, business, and financial affairs, volunteer and social groups'
          }
        },
        {
          value: 0.5,
          label: {
            en: 'Slight impairment in these activities'
          }
        },
        {
          value: 1,
          label: {
            en: 'Unable to function independently at these activities although may still be engaged in some; appears normal to casual inspection'
          }
        },
        {
          value: 2,
          label: {
            en: 'No pretense of independent function outside home; appears well enough to be taken to functions outside a family home'
          }
        },
        {
          value: 3,
          label: {
            en: 'No pretense of independent function outside home; appears too ill to be taken to functions outside a family home'
          }
        }
      ]
    },
    required: true
  },
  {
    input_id: 'HOME_AND_HOBBIES',
    input_label: {
      en: 'Home and hobbies'
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 0,
          label: {
            en: 'Life at home, hobbies, and intellectual interests well maintained'
          }
        },
        {
          value: 0.5,
          label: {
            en: 'Life at home, hobbies, and intellectual interests slightly impaired'
          }
        },
        {
          value: 1,
          label: {
            en: 'Mild but definite impairment of function at home; more difficult chores abandoned; more complicated hobbies and interests abandoned'
          }
        },
        {
          value: 2,
          label: {
            en: 'Only simple chores preserved; very restricted interests, poorly maintained'
          }
        },
        {
          value: 3,
          label: {
            en: 'No significant function in home'
          }
        }
      ]
    },
    required: true
  },
  {
    input_id: 'PERSONAL_CARE',
    input_label: {
      en: 'Personal care'
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 0,
          label: { en: 'Fully capable of self-care' }
        },
        {
          value: 1,
          label: {
            en: 'Needs prompting'
          }
        },
        {
          value: 2,
          label: {
            en: 'Requires assistance in dressing, hygiene, keeping of personal effects'
          }
        },
        {
          value: 3,
          label: {
            en: 'Requires much help with personal care; frequent incontinence'
          }
        }
      ]
    },
    required: true
  }
]
