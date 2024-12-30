// import R from 'ramda'

// import type { StringInputType } from '../../../types/calculations/inputs/calculation-inputs.types'
// import { get_random_answer_from_an_array_of_allowed_answers } from './helpers'

// export const simulate_string_answer = (input_type: StringInputType): string => {
//   const { allowed_answers } = input_type

//   /**
//    * Is there a list of discrete allowed answers?
//    * If yes: get an answer from that list
//    */
//   if (!R.isNil(allowed_answers)) {
//     const random_answer =
//       get_random_answer_from_an_array_of_allowed_answers(allowed_answers)

//     if (typeof random_answer === 'string') {
//       return random_answer
//     }

//     return ''
//   }

//   const DEFAULT_SIMULATION = [
//     { value: 'Toby the turtle tried tap-dancing' },
//     { value: 'Tina talks to tulips, thinking they’re turtles' },
//     { value: 'Timmy turtle wears tiny top hats' },
//     { value: 'Tabitha turtle tutors in turtle trigonometry' },
//     { value: 'Tony’s turtle told tall tales' },
//   ]

//   const random_answer =
//     get_random_answer_from_an_array_of_allowed_answers(DEFAULT_SIMULATION)

//   if (typeof random_answer === 'string') {
//     return random_answer
//   }

//   return ''
// }
