// @flow
export type Section =
  | 'dressing'
  | 'arising'
  | 'eating'
  | 'walking'
  | 'hygiene'
  | 'reach'
  | 'grip'
  | 'activities'

export const SECTIONS_TO_AIDS_MAPPING: {|
  [Section]: string[]
|} = {
  dressing: ['devices_used_for_dressing'],
  arising: ['special_or_built_up_chair'],
  eating: ['built_up_or_special_utensils'],
  walking: ['cane', 'walker', 'crutches', 'wheelchair'],
  hygiene: [
    'bathtub_bar',
    'long_handled_appliances_in_bathroom',
    'raised_toilet_seat'
  ],
  reach: ['long_handled_appliances_for_reach'],
  grip: ['jar_opener'],
  activities: []
}

export const SECTION_INPUT_IDS_MAPPING: {|
  [Section]: string[]
|} = {
  dressing: ['DRESSING_1', 'DRESSING_2'],
  arising: ['ARISING_1', 'ARISING_2'],
  eating: ['EATING_1', 'EATING_2', 'EATING_3'],
  walking: ['WALKING_1', 'WALKING_2'],
  hygiene: ['HYGIENE_1', 'HYGIENE_2', 'HYGIENE_3'],
  reach: ['REACH_1', 'REACH_2'],
  grip: ['GRIP_1', 'GRIP_2', 'GRIP_3'],
  activities: ['ACTIVITIES_1', 'ACTIVITIES_2', 'ACTIVITIES_3']
}
