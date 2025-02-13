// @flow
export const min_response = {
  DRESSING_1: 0,
  DRESSING_2: 0,
  ARISING_1: 0,
  ARISING_2: 0,
  EATING_1: 0,
  EATING_2: 0,
  EATING_3: 0,
  WALKING_1: 0,
  WALKING_2: 0,
  AIDS_OR_DEVICES_PART_1: [],
  NEED_HELP_PART_1: [],
  HYGIENE_1: 0,
  HYGIENE_2: 0,
  HYGIENE_3: 0,
  REACH_1: 0,
  REACH_2: 0,
  GRIP_1: 0,
  GRIP_2: 0,
  GRIP_3: 0,
  ACTIVITIES_1: 0,
  ACTIVITIES_2: 0,
  ACTIVITIES_3: 0,
  AIDS_OR_DEVICES_PART_2: [],
  NEED_HELP_PART_2: []
}

export const max_response = {
  DRESSING_1: 3,
  DRESSING_2: 3,
  ARISING_1: 3,
  ARISING_2: 3,
  EATING_1: 3,
  EATING_2: 3,
  EATING_3: 3,
  WALKING_1: 3,
  WALKING_2: 3,
  AIDS_OR_DEVICES_PART_1: [
    'cane',
    'walker',
    'crutches',
    'wheelchair',
    'devices_used_for_dressing',
    'built_up_or_special_utensils',
    'special_or_built_up_chair',
    'other'
  ],
  NEED_HELP_PART_1: ['dressing', 'arising', 'eating', 'walking'],
  HYGIENE_1: 3,
  HYGIENE_2: 3,
  HYGIENE_3: 3,
  REACH_1: 3,
  REACH_2: 3,
  GRIP_1: 3,
  GRIP_2: 3,
  GRIP_3: 3,
  ACTIVITIES_1: 3,
  ACTIVITIES_2: 3,
  ACTIVITIES_3: 3,
  AIDS_OR_DEVICES_PART_2: [
    'raised_toilet_seat',
    'bathtub_seat',
    'jar_opener',
    'long_handled_appliances_for_reach',
    'long_handled_appliances_in_bathroom',
    'bathtub_bar',
    'other'
  ],
  NEED_HELP_PART_2: ['hygiene', 'reach', 'grip', 'activities']
}

/**
 * Expected = 2.25
 */
export const random_response = {
  DRESSING_1: 2,
  DRESSING_2: 1, // 2
  ARISING_1: 0,
  ARISING_2: 3, // 3
  EATING_1: 1,
  EATING_2: 0,
  EATING_3: 2, // 2
  WALKING_1: 0,
  WALKING_2: 1, // 2 because help is needed with walking
  AIDS_OR_DEVICES_PART_1: [
    'devices_used_for_dressing',
    'special_or_built_up_chair'
  ],
  NEED_HELP_PART_1: ['dressing', 'arising', 'walking'],
  HYGIENE_1: 0,
  HYGIENE_2: 1,
  HYGIENE_3: 1, // 2 because used aid device (raised toilet seat)
  REACH_1: 3,
  REACH_2: 3, // 3
  GRIP_1: 1,
  GRIP_2: 1,
  GRIP_3: 3, // 3
  ACTIVITIES_1: 0,
  ACTIVITIES_2: 0,
  ACTIVITIES_3: 1, // 1
  AIDS_OR_DEVICES_PART_2: ['raised_toilet_seat'],
  NEED_HELP_PART_2: ['hygiene']
}
