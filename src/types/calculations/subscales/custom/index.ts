import type { AuditScaleType } from './audit.types'
import type { BreastQScaleType } from './breastq.types'
import type { CDLQIScaleType } from './cdlqi.types'
import type { COMIDomainType } from './comi.types'
import type { EORTCScaleType } from './eortc.types'
import type { EPICDomainType } from './epic26.types'
import type { KCCQ12DomainType } from './KCCQ12.types'
import type { MiniBestSectionType } from './mini_best.types'
import type { PcsScaleType } from './pcs.types'

export type CustomSubscaleType =
  | AuditScaleType
  | BreastQScaleType
  | CDLQIScaleType
  | COMIDomainType
  | EORTCScaleType
  | EPICDomainType
  | KCCQ12DomainType
  | MiniBestSectionType
  | PcsScaleType

export type CustomSubscalesType =
  | AuditScaleType[]
  | BreastQScaleType[]
  | CDLQIScaleType[]
  | COMIDomainType[]
  | EORTCScaleType[]
  | EPICDomainType[]
  | KCCQ12DomainType[]
  | MiniBestSectionType[]
  | PcsScaleType[]
