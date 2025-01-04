import { IBD_CONTROL_INPUTS, IBD_CONTROL_OUTPUT } from './definition'
import { ScoreType } from '../../types'
import { sum } from 'lodash'

export const IBD_control: ScoreType<
  typeof IBD_CONTROL_INPUTS,
  typeof IBD_CONTROL_OUTPUT
> = {
  name: 'IBD-Control',
  readmeLocation: __dirname,
  inputSchema: IBD_CONTROL_INPUTS,
  outputSchema: IBD_CONTROL_OUTPUT,
  calculate: ({ data }) => {
    const recoded_ibd_control_1b =
      data.ibd_control_1b === 999 ? 1 : data.ibd_control_1b

    const ibdControlValues = [
      data.ibd_control_1a,
      recoded_ibd_control_1b,
      data.ibd_control_3a,
      data.ibd_control_3b,
      data.ibd_control_3c,
      data.ibd_control_3d,
      data.ibd_control_3e,
      data.ibd_control_3f,
    ]

    const ibdControl8Score = sum(ibdControlValues)

    return {
      IBD_CONTROL_8: ibdControl8Score,
      IBD_CONTROL_VAS: data.ibd_control_5,
    }
  },
}
