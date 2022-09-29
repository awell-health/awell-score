import R from 'ramda'

import { Path as notApplicableIfPath } from './notApplicableIfLens'

export const Path = [...notApplicableIfPath, 'subscale']


export const notApplicableSubscaleLens = R.lensPath(Path)
