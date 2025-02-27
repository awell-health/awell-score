import { z } from 'zod'
import { PCL5_INPUTS, CLUSTERS } from '../definition'
import { mapValues, pick } from 'lodash'
import { MODERATELY_ANSWER } from '../definition/pcl_5_inputs'

/**
 * A provisional PTSD diagnosis can be made by treating each item rated as
 * 2 = "Moderately" or higher as a symptom endorsed, then following the DSM-5 diagnostic rule which
 * requires at least: 1 B item (questions 1-5), 1 C item (questions 6-7), 2 D items (questions 8-14), 2 E items (questions 15-20).
 */
export const determinePTSSIndication = (
  data: z.infer<
    z.ZodObject<{
      [K in keyof typeof PCL5_INPUTS]: (typeof PCL5_INPUTS)[K]['type']
    }>
  >,
): 0 | 1 | null => {
  const nbrOfModerateOrHigherAnswersPerCluster = mapValues(
    CLUSTERS,
    cluster => {
      const validInputsInCluster = Object.values(pick(data, cluster)).filter(
        value => value !== undefined,
      )

      const nbrOfModerateOrHigherAnswers = validInputsInCluster.filter(
        value => value >= MODERATELY_ANSWER,
      ).length

      return nbrOfModerateOrHigherAnswers
    },
  )

  if (
    nbrOfModerateOrHigherAnswersPerCluster.B >= 1 &&
    nbrOfModerateOrHigherAnswersPerCluster.C >= 1 &&
    nbrOfModerateOrHigherAnswersPerCluster.D >= 2 &&
    nbrOfModerateOrHigherAnswersPerCluster.E >= 2
  )
    return 1

  return 0
}
