import { z } from 'zod'
import {
  type ScoreInputSchemaType,
  type EnumNumberInputType,
} from '../../../types'

const type = {
  type: z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4)]),
} satisfies EnumNumberInputType

export const PCI_INPUTS = {
  PCI_Q01: { ...type },
  PCI_Q02: { ...type },
  PCI_Q03: { ...type },
  PCI_Q04: { ...type },
  PCI_Q05: { ...type },
  PCI_Q06: { ...type },
  PCI_Q07: { ...type },
  PCI_Q08: { ...type },
  PCI_Q09: { ...type },
  PCI_Q10: { ...type },
  PCI_Q11: { ...type },
  PCI_Q12: { ...type },
  PCI_Q13: { ...type },
  PCI_Q14: { ...type },
  PCI_Q15: { ...type },
  PCI_Q16: { ...type },
  PCI_Q17: { ...type },
  PCI_Q18: { ...type },
  PCI_Q19: { ...type },
  PCI_Q20: { ...type },
  PCI_Q21: { ...type },
  PCI_Q22: { ...type },
  PCI_Q23: { ...type },
  PCI_Q24: { ...type },
  PCI_Q25: { ...type },
  PCI_Q26: { ...type },
  PCI_Q27: { ...type },
  PCI_Q28: { ...type },
  PCI_Q29: { ...type },
  PCI_Q30: { ...type },
  PCI_Q31: { ...type },
  PCI_Q32: { ...type },
  PCI_Q33: { ...type },
} satisfies ScoreInputSchemaType
