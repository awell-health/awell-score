// @flow
import type { InputType } from '../../../../types/calculations.types'

export const OAS_INPUTS: Array<InputType> = [
  {
    input_id: 'OAS_Q01',
    input_label: {
      en: 'I can lead a productive and fulfilling life despite my ostomy.'
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          label: { en: 'Strongly agree' },
          value: 1
        },
        {
          label: { en: 'Agree' },
          value: 2
        },
        {
          label: {
            en: 'Somewhat agree'
          },
          value: 3
        },
        {
          label: { en: 'Somewhat disagree' },
          value: 4
        },
        {
          label: { en: 'Disagree' },
          value: 5
        },
        {
          label: { en: 'Strongly disagree' },
          value: 6
        }
      ]
    }
  },
  {
    input_id: 'OAS_Q02',
    input_label: {
      en: 'I think I am leading quite a normal life despite my ostomy.'
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          label: { en: 'Strongly agree' },
          value: 1
        },
        {
          label: { en: 'Agree' },
          value: 2
        },
        {
          label: {
            en: 'Somewhat agree'
          },
          value: 3
        },
        {
          label: { en: 'Somewhat disagree' },
          value: 4
        },
        {
          label: { en: 'Disagree' },
          value: 5
        },
        {
          label: { en: 'Strongly disagree' },
          value: 6
        }
      ]
    }
  },
  {
    input_id: 'OAS_Q03',
    input_label: {
      en: 'There are many things I would do if I did not have an ostomy.'
    },
    inverse: true,
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          label: { en: 'Strongly agree' },
          value: 1
        },
        {
          label: { en: 'Agree' },
          value: 2
        },
        {
          label: {
            en: 'Somewhat agree'
          },
          value: 3
        },
        {
          label: { en: 'Somewhat disagree' },
          value: 4
        },
        {
          label: { en: 'Disagree' },
          value: 5
        },
        {
          label: { en: 'Strongly disagree' },
          value: 6
        }
      ]
    }
  },
  {
    input_id: 'OAS_Q04',
    input_label: {
      en: 'I feel free to travel where I want despite my ostomy.'
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          label: { en: 'Strongly agree' },
          value: 1
        },
        {
          label: { en: 'Agree' },
          value: 2
        },
        {
          label: {
            en: 'Somewhat agree'
          },
          value: 3
        },
        {
          label: { en: 'Somewhat disagree' },
          value: 4
        },
        {
          label: { en: 'Disagree' },
          value: 5
        },
        {
          label: { en: 'Strongly disagree' },
          value: 6
        }
      ]
    }
  },
  {
    input_id: 'OAS_Q05',
    input_label: {
      en: 'I have felt comfortable participating in sports and physical exercise since my ostomy surgery.'
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          label: { en: 'Strongly agree' },
          value: 1
        },
        {
          label: { en: 'Agree' },
          value: 2
        },
        {
          label: {
            en: 'Somewhat agree'
          },
          value: 3
        },
        {
          label: { en: 'Somewhat disagree' },
          value: 4
        },
        {
          label: { en: 'Disagree' },
          value: 5
        },
        {
          label: { en: 'Strongly disagree' },
          value: 6
        }
      ]
    }
  },
  {
    input_id: 'OAS_Q06',
    input_label: {
      en: 'I find that I unnecessarily restrict the range of my activities because of my ostomy.'
    },
    inverse: true,
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          label: { en: 'Strongly agree' },
          value: 1
        },
        {
          label: { en: 'Agree' },
          value: 2
        },
        {
          label: {
            en: 'Somewhat agree'
          },
          value: 3
        },
        {
          label: { en: 'Somewhat disagree' },
          value: 4
        },
        {
          label: { en: 'Disagree' },
          value: 5
        },
        {
          label: { en: 'Strongly disagree' },
          value: 6
        }
      ]
    }
  },
  {
    input_id: 'OAS_Q07',
    input_label: {
      en: 'I have been better able to work since I had my ostomy surgery.'
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          label: { en: 'Strongly agree' },
          value: 1
        },
        {
          label: { en: 'Agree' },
          value: 2
        },
        {
          label: {
            en: 'Somewhat agree'
          },
          value: 3
        },
        {
          label: { en: 'Somewhat disagree' },
          value: 4
        },
        {
          label: { en: 'Disagree' },
          value: 5
        },
        {
          label: { en: 'Strongly disagree' },
          value: 6
        }
      ]
    }
  },
  {
    input_id: 'OAS_Q08',
    input_label: {
      en: 'I am more able to enjoy sexual activities because of improved health since having ostomy surgery.'
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          label: { en: 'Strongly agree' },
          value: 1
        },
        {
          label: { en: 'Agree' },
          value: 2
        },
        {
          label: {
            en: 'Somewhat agree'
          },
          value: 3
        },
        {
          label: { en: 'Somewhat disagree' },
          value: 4
        },
        {
          label: { en: 'Disagree' },
          value: 5
        },
        {
          label: { en: 'Strongly disagree' },
          value: 6
        }
      ]
    }
  },
  {
    input_id: 'OAS_Q09',
    input_label: {
      en: 'At times I lack self-confidence because of my ostomy.'
    },
    inverse: true,
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          label: { en: 'Strongly agree' },
          value: 1
        },
        {
          label: { en: 'Agree' },
          value: 2
        },
        {
          label: {
            en: 'Somewhat agree'
          },
          value: 3
        },
        {
          label: { en: 'Somewhat disagree' },
          value: 4
        },
        {
          label: { en: 'Disagree' },
          value: 5
        },
        {
          label: { en: 'Strongly disagree' },
          value: 6
        }
      ]
    }
  },
  {
    input_id: 'OAS_Q10',
    input_label: {
      en: 'I feel ashamed of my ostomy, as if it were a sign of my own physical or emotional weakness.'
    },
    inverse: true,
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          label: { en: 'Strongly agree' },
          value: 1
        },
        {
          label: { en: 'Agree' },
          value: 2
        },
        {
          label: {
            en: 'Somewhat agree'
          },
          value: 3
        },
        {
          label: { en: 'Somewhat disagree' },
          value: 4
        },
        {
          label: { en: 'Disagree' },
          value: 5
        },
        {
          label: { en: 'Strongly disagree' },
          value: 6
        }
      ]
    }
  },
  {
    input_id: 'OAS_Q11',
    input_label: {
      en: 'At times I resent my friends who do not have ostomies or the health problems that lead to ostomy surgery.'
    },
    inverse: true,
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          label: { en: 'Strongly agree' },
          value: 1
        },
        {
          label: { en: 'Agree' },
          value: 2
        },
        {
          label: {
            en: 'Somewhat agree'
          },
          value: 3
        },
        {
          label: { en: 'Somewhat disagree' },
          value: 4
        },
        {
          label: { en: 'Disagree' },
          value: 5
        },
        {
          label: { en: 'Strongly disagree' },
          value: 6
        }
      ]
    }
  },
  {
    input_id: 'OAS_Q12',
    input_label: {
      en: 'My self-respect has not suffered because of my ostomy.'
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          label: { en: 'Strongly agree' },
          value: 1
        },
        {
          label: { en: 'Agree' },
          value: 2
        },
        {
          label: {
            en: 'Somewhat agree'
          },
          value: 3
        },
        {
          label: { en: 'Somewhat disagree' },
          value: 4
        },
        {
          label: { en: 'Disagree' },
          value: 5
        },
        {
          label: { en: 'Strongly disagree' },
          value: 6
        }
      ]
    }
  },
  {
    input_id: 'OAS_Q13',
    input_label: {
      en: 'I feel somehow "dirty" and "unclean" because of my ostomy.'
    },
    inverse: true,
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          label: { en: 'Strongly agree' },
          value: 1
        },
        {
          label: { en: 'Agree' },
          value: 2
        },
        {
          label: {
            en: 'Somewhat agree'
          },
          value: 3
        },
        {
          label: { en: 'Somewhat disagree' },
          value: 4
        },
        {
          label: { en: 'Disagree' },
          value: 5
        },
        {
          label: { en: 'Strongly disagree' },
          value: 6
        }
      ]
    }
  },
  {
    input_id: 'OAS_Q14',
    input_label: {
      en: 'I leave places early to avoid producing embarrassing odors in the bathroom.'
    },
    inverse: true,
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          label: { en: 'Strongly agree' },
          value: 1
        },
        {
          label: { en: 'Agree' },
          value: 2
        },
        {
          label: {
            en: 'Somewhat agree'
          },
          value: 3
        },
        {
          label: { en: 'Somewhat disagree' },
          value: 4
        },
        {
          label: { en: 'Disagree' },
          value: 5
        },
        {
          label: { en: 'Strongly disagree' },
          value: 6
        }
      ]
    }
  },
  {
    input_id: 'OAS_Q15',
    input_label: {
      en: 'I feel comfortable with my body, including my stoma.'
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          label: { en: 'Strongly agree' },
          value: 1
        },
        {
          label: { en: 'Agree' },
          value: 2
        },
        {
          label: {
            en: 'Somewhat agree'
          },
          value: 3
        },
        {
          label: { en: 'Somewhat disagree' },
          value: 4
        },
        {
          label: { en: 'Disagree' },
          value: 5
        },
        {
          label: { en: 'Strongly disagree' },
          value: 6
        }
      ]
    }
  },
  {
    input_id: 'OAS_Q16',
    input_label: {
      en: 'I feel that I am somehow being punished for something by having this ostomy.'
    },
    inverse: true,
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          label: { en: 'Strongly agree' },
          value: 1
        },
        {
          label: { en: 'Agree' },
          value: 2
        },
        {
          label: {
            en: 'Somewhat agree'
          },
          value: 3
        },
        {
          label: { en: 'Somewhat disagree' },
          value: 4
        },
        {
          label: { en: 'Disagree' },
          value: 5
        },
        {
          label: { en: 'Strongly disagree' },
          value: 6
        }
      ]
    }
  },
  {
    input_id: 'OAS_Q17',
    input_label: {
      en: 'I get depressed when I realize that I will have this ostomy for the rest of my life.'
    },
    inverse: true,
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          label: { en: 'Strongly agree' },
          value: 1
        },
        {
          label: { en: 'Agree' },
          value: 2
        },
        {
          label: {
            en: 'Somewhat agree'
          },
          value: 3
        },
        {
          label: { en: 'Somewhat disagree' },
          value: 4
        },
        {
          label: { en: 'Disagree' },
          value: 5
        },
        {
          label: { en: 'Strongly disagree' },
          value: 6
        }
      ]
    }
  },
  {
    input_id: 'OAS_Q18',
    input_label: {
      en: 'I can discuss even the most embarrassing aspects of my ostomy with my doctor.'
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          label: { en: 'Strongly agree' },
          value: 1
        },
        {
          label: { en: 'Agree' },
          value: 2
        },
        {
          label: {
            en: 'Somewhat agree'
          },
          value: 3
        },
        {
          label: { en: 'Somewhat disagree' },
          value: 4
        },
        {
          label: { en: 'Disagree' },
          value: 5
        },
        {
          label: { en: 'Strongly disagree' },
          value: 6
        }
      ]
    }
  },
  {
    input_id: 'OAS_Q19',
    input_label: {
      en: 'I feel like a complainer when I have to contact my doctor or ET0 about my ostomy.'
    },
    inverse: true,
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          label: { en: 'Strongly agree' },
          value: 1
        },
        {
          label: { en: 'Agree' },
          value: 2
        },
        {
          label: {
            en: 'Somewhat agree'
          },
          value: 3
        },
        {
          label: { en: 'Somewhat disagree' },
          value: 4
        },
        {
          label: { en: 'Disagree' },
          value: 5
        },
        {
          label: { en: 'Strongly disagree' },
          value: 6
        }
      ]
    }
  },
  {
    input_id: 'OAS_Q20',
    input_label: {
      en: 'I avoid telling my doctor about changes in my stoma and its functioning.'
    },
    inverse: true,
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          label: { en: 'Strongly agree' },
          value: 1
        },
        {
          label: { en: 'Agree' },
          value: 2
        },
        {
          label: {
            en: 'Somewhat agree'
          },
          value: 3
        },
        {
          label: { en: 'Somewhat disagree' },
          value: 4
        },
        {
          label: { en: 'Disagree' },
          value: 5
        },
        {
          label: { en: 'Strongly disagree' },
          value: 6
        }
      ]
    }
  },
  {
    input_id: 'OAS_Q21',
    input_label: {
      en: 'I feel that I am well educated about my stoma and caring for it.'
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          label: { en: 'Strongly agree' },
          value: 1
        },
        {
          label: { en: 'Agree' },
          value: 2
        },
        {
          label: {
            en: 'Somewhat agree'
          },
          value: 3
        },
        {
          label: { en: 'Somewhat disagree' },
          value: 4
        },
        {
          label: { en: 'Disagree' },
          value: 5
        },
        {
          label: { en: 'Strongly disagree' },
          value: 6
        }
      ]
    }
  },
  {
    input_id: 'OAS_Q22',
    input_label: {
      en: 'I am confident that I know the proper methods for managing my ostomy.'
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          label: { en: 'Strongly agree' },
          value: 1
        },
        {
          label: { en: 'Agree' },
          value: 2
        },
        {
          label: {
            en: 'Somewhat agree'
          },
          value: 3
        },
        {
          label: { en: 'Somewhat disagree' },
          value: 4
        },
        {
          label: { en: 'Disagree' },
          value: 5
        },
        {
          label: { en: 'Strongly disagree' },
          value: 6
        }
      ]
    }
  },
  {
    input_id: 'OAS_Q23',
    input_label: {
      en: "Since I've had my surgery, I feel I'm more likely to get sick than other people."
    },
    inverse: true,
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          label: { en: 'Strongly agree' },
          value: 1
        },
        {
          label: { en: 'Agree' },
          value: 2
        },
        {
          label: {
            en: 'Somewhat agree'
          },
          value: 3
        },
        {
          label: { en: 'Somewhat disagree' },
          value: 4
        },
        {
          label: { en: 'Disagree' },
          value: 5
        },
        {
          label: { en: 'Strongly disagree' },
          value: 6
        }
      ]
    }
  },
  {
    input_id: 'OAS_Q24',
    input_label: {
      en: 'I find myself worrying that my surgery did not really cure my health problems.'
    },
    inverse: true,
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          label: { en: 'Strongly agree' },
          value: 1
        },
        {
          label: { en: 'Agree' },
          value: 2
        },
        {
          label: {
            en: 'Somewhat agree'
          },
          value: 3
        },
        {
          label: { en: 'Somewhat disagree' },
          value: 4
        },
        {
          label: { en: 'Disagree' },
          value: 5
        },
        {
          label: { en: 'Strongly disagree' },
          value: 6
        }
      ]
    }
  },
  {
    input_id: 'OAS_Q25',
    input_label: {
      en: 'I worry more than I used to about being left alone.'
    },
    inverse: true,
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          label: { en: 'Strongly agree' },
          value: 1
        },
        {
          label: { en: 'Agree' },
          value: 2
        },
        {
          label: {
            en: 'Somewhat agree'
          },
          value: 3
        },
        {
          label: { en: 'Somewhat disagree' },
          value: 4
        },
        {
          label: { en: 'Disagree' },
          value: 5
        },
        {
          label: { en: 'Strongly disagree' },
          value: 6
        }
      ]
    }
  },
  {
    input_id: 'OAS_Q26',
    input_label: {
      en: 'I feel embarrassed by my ostomy, as though it were something to hide.'
    },
    inverse: true,
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          label: { en: 'Strongly agree' },
          value: 1
        },
        {
          label: { en: 'Agree' },
          value: 2
        },
        {
          label: {
            en: 'Somewhat agree'
          },
          value: 3
        },
        {
          label: { en: 'Somewhat disagree' },
          value: 4
        },
        {
          label: { en: 'Disagree' },
          value: 5
        },
        {
          label: { en: 'Strongly disagree' },
          value: 6
        }
      ]
    }
  },
  {
    input_id: 'OAS_Q27',
    input_label: {
      en: 'I feel that I am not as sexually attractive as I used to be because of my stoma.'
    },
    inverse: true,
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          label: { en: 'Strongly agree' },
          value: 1
        },
        {
          label: { en: 'Agree' },
          value: 2
        },
        {
          label: {
            en: 'Somewhat agree'
          },
          value: 3
        },
        {
          label: { en: 'Somewhat disagree' },
          value: 4
        },
        {
          label: { en: 'Disagree' },
          value: 5
        },
        {
          label: { en: 'Strongly disagree' },
          value: 6
        }
      ]
    }
  },
  {
    input_id: 'OAS_Q28',
    input_label: {
      en: 'I can laugh afterwards about awkward situations that happen because of my ostomy.'
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          label: { en: 'Strongly agree' },
          value: 1
        },
        {
          label: { en: 'Agree' },
          value: 2
        },
        {
          label: {
            en: 'Somewhat agree'
          },
          value: 3
        },
        {
          label: { en: 'Somewhat disagree' },
          value: 4
        },
        {
          label: { en: 'Disagree' },
          value: 5
        },
        {
          label: { en: 'Strongly disagree' },
          value: 6
        }
      ]
    }
  },
  {
    input_id: 'OAS_Q29',
    input_label: {
      en: 'Most of the time, I forget about my ostomy and am not aware of it.'
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          label: { en: 'Strongly agree' },
          value: 1
        },
        {
          label: { en: 'Agree' },
          value: 2
        },
        {
          label: {
            en: 'Somewhat agree'
          },
          value: 3
        },
        {
          label: { en: 'Somewhat disagree' },
          value: 4
        },
        {
          label: { en: 'Disagree' },
          value: 5
        },
        {
          label: { en: 'Strongly disagree' },
          value: 6
        }
      ]
    }
  },
  {
    input_id: 'OAS_Q30',
    input_label: {
      en: 'I worry about embarrassing accidents happening in the course of normal sexual ativity.'
    },
    inverse: true,
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          label: { en: 'Strongly agree' },
          value: 1
        },
        {
          label: { en: 'Agree' },
          value: 2
        },
        {
          label: {
            en: 'Somewhat agree'
          },
          value: 3
        },
        {
          label: { en: 'Somewhat disagree' },
          value: 4
        },
        {
          label: { en: 'Disagree' },
          value: 5
        },
        {
          label: { en: 'Strongly disagree' },
          value: 6
        }
      ]
    }
  },
  {
    input_id: 'OAS_Q31',
    input_label: {
      en: 'I think other people would be uncomfortable around me if they knew about my stoma.'
    },
    inverse: true,
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          label: { en: 'Strongly agree' },
          value: 1
        },
        {
          label: { en: 'Agree' },
          value: 2
        },
        {
          label: {
            en: 'Somewhat agree'
          },
          value: 3
        },
        {
          label: { en: 'Somewhat disagree' },
          value: 4
        },
        {
          label: { en: 'Disagree' },
          value: 5
        },
        {
          label: { en: 'Strongly disagree' },
          value: 6
        }
      ]
    }
  },
  {
    input_id: 'OAS_Q32',
    input_label: {
      en: 'I feel confident that I can trust my appliance when I am in public places.'
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          label: { en: 'Strongly agree' },
          value: 1
        },
        {
          label: { en: 'Agree' },
          value: 2
        },
        {
          label: {
            en: 'Somewhat agree'
          },
          value: 3
        },
        {
          label: { en: 'Somewhat disagree' },
          value: 4
        },
        {
          label: { en: 'Disagree' },
          value: 5
        },
        {
          label: { en: 'Strongly disagree' },
          value: 6
        }
      ]
    }
  },
  {
    input_id: 'OAS_Q33',
    input_label: {
      en: 'My ostomy surgery helped me decide what things are most important in my life.'
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          label: { en: 'Strongly agree' },
          value: 1
        },
        {
          label: { en: 'Agree' },
          value: 2
        },
        {
          label: {
            en: 'Somewhat agree'
          },
          value: 3
        },
        {
          label: { en: 'Somewhat disagree' },
          value: 4
        },
        {
          label: { en: 'Disagree' },
          value: 5
        },
        {
          label: { en: 'Strongly disagree' },
          value: 6
        }
      ]
    }
  },
  {
    input_id: 'OAS_Q34',
    input_label: {
      en: 'My ostomy reminds me how fortunate I am to have received good medical care.'
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          label: { en: 'Strongly agree' },
          value: 1
        },
        {
          label: { en: 'Agree' },
          value: 2
        },
        {
          label: {
            en: 'Somewhat agree'
          },
          value: 3
        },
        {
          label: { en: 'Somewhat disagree' },
          value: 4
        },
        {
          label: { en: 'Disagree' },
          value: 5
        },
        {
          label: { en: 'Strongly disagree' },
          value: 6
        }
      ]
    }
  }
]
