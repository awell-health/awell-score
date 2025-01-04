import { IBD_DISK_INPUTS, IBD_DISK_OUTPUT } from './definition'
import { ScoreType } from '../../types'
import { sum } from 'lodash'

export const ibd_disk_total_score: ScoreType<
  typeof IBD_DISK_INPUTS,
  typeof IBD_DISK_OUTPUT
> = {
  name: 'IBD Disk total score',
  readmeLocation: __dirname,
  inputSchema: IBD_DISK_INPUTS,
  outputSchema: IBD_DISK_OUTPUT,
  calculate: ({ data }) => {
    return {
      IBD_DISK_TOTAL: sum(Object.values(data)),
    }
  },
}
