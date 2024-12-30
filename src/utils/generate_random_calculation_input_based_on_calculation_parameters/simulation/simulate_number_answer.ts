// import R from 'ramda'

// import type { NumberInputType } from '../../../types/calculations/inputs/calculation-inputs.types'
// import {
//   generate_random_number,
//   generate_random_number_based_on_range,
//   get_random_answer_from_an_array_of_allowed_answers,
// } from './helpers'

// export const simulate_number_answer = (input_type: NumberInputType): number => {
//   const { allowed_answers, range } = input_type

//   /**
//    * Is there a list of discrete allowed answers?
//    * If yes: get an answer from that list
//    */
//   if (!R.isNil(allowed_answers)) {
//     return Number(
//       get_random_answer_from_an_array_of_allowed_answers(allowed_answers)
//     )
//   }

//   /**
//    * Is there a range (min, max) defined?
//    * If yes: simulate an answer between that range
//    */
//   if (!R.isNil(range)) {
//     const { min, max } = range

//     return generate_random_number_based_on_range(min.value, max.value)
//   }

//   const MIN = 0
//   const MAX = 100

//   return generate_random_number(MIN, MAX)
// }
