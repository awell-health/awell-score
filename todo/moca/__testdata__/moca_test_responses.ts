export const best_response = {
  ALTERNATING_TRAIL_MARKING: 1,
  VISUOCONSTRUCTIONAL_SKILLS_CUBE: 1,
  VISUOCONSTRUCTIONAL_SKILLS_CLOCK: [0, 1, 2],
  NAMING: [0, 1, 2],
  FORWARD_DIGIT_SPAN: 1,
  BACKWARD_DIGIT_SPAN: 1,
  VIGILANCE: 1,
  SERIAL_7S: 3,
  SENTENCE_REPETITION: 2,
  VERBAL_FLUENCY: 1,
  ABSTRACTION: 2,
  DELAYED_RECALL: [0, 1, 2, 3, 4],
  ORIENTATION: [0, 1, 2, 3, 4, 5],
}

export const median_response = {
  ALTERNATING_TRAIL_MARKING: 1,
  VISUOCONSTRUCTIONAL_SKILLS_CUBE: 1,
  VISUOCONSTRUCTIONAL_SKILLS_CLOCK: [0],
  NAMING: [1],
  FORWARD_DIGIT_SPAN: 0,
  BACKWARD_DIGIT_SPAN: 1,
  VIGILANCE: 0,
  SERIAL_7S: 1,
  SENTENCE_REPETITION: 1,
  VERBAL_FLUENCY: 0,
  ABSTRACTION: 1,
  DELAYED_RECALL: [0, 1, 2],
  ORIENTATION: [0, 1, 2, 3],
}

export const worst_response = {
  ALTERNATING_TRAIL_MARKING: 0,
  VISUOCONSTRUCTIONAL_SKILLS_CUBE: 0,
  VISUOCONSTRUCTIONAL_SKILLS_CLOCK: [],
  NAMING: [],
  FORWARD_DIGIT_SPAN: 0,
  BACKWARD_DIGIT_SPAN: 0,
  VIGILANCE: 0,
  SERIAL_7S: 0,
  SENTENCE_REPETITION: 0,
  VERBAL_FLUENCY: 0,
  ABSTRACTION: 0,
  DELAYED_RECALL: [],
  ORIENTATION: [],
}

/**
 * Expected score = 18
 */
export const random_response = {
  ALTERNATING_TRAIL_MARKING: 1,
  VISUOCONSTRUCTIONAL_SKILLS_CUBE: 0,
  VISUOCONSTRUCTIONAL_SKILLS_CLOCK: [0, 1],
  NAMING: [0],
  FORWARD_DIGIT_SPAN: 1,
  BACKWARD_DIGIT_SPAN: 0,
  VIGILANCE: 1,
  SERIAL_7S: 2,
  SENTENCE_REPETITION: 2,
  VERBAL_FLUENCY: 0,
  ABSTRACTION: 2,
  DELAYED_RECALL: [1, 2],
  ORIENTATION: [0, 1, 2, 3],
}