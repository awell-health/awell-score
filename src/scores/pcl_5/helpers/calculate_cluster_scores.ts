import { z } from 'zod'
import { PCL5_INPUTS, CLUSTERS, type ClusterType } from '../definition'
import { pick, sum } from 'lodash'

export const calculateClusterScores = (
  data: z.infer<
    z.ZodObject<{
      [K in keyof typeof PCL5_INPUTS]: (typeof PCL5_INPUTS)[K]['type']
    }>
  >,
  cluster: ClusterType,
): number | null => {
  const clusterInputs = pick(data, CLUSTERS[cluster])

  const validClusterInputs = Object.values(clusterInputs).filter(
    value => value !== undefined,
  )

  if (validClusterInputs.length === 0) return null

  return sum(validClusterInputs)
}
