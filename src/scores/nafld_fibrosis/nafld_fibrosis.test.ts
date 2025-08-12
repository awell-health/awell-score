import { ZodError } from 'zod'
import { Score } from '../../classes'
import { ScoreLibrary } from '../library'
import { nafld_fibrosis } from './nafld_fibrosis'

const calculation = new Score(nafld_fibrosis)

describe('NAFLD Fibrosis Score (NFS)', () => {
  it('is registered in the ScoreLibrary', () => {
    expect(ScoreLibrary).toHaveProperty('nafld_fibrosis')
  })

  it('calculates High case (platelets=176)', () => {
    const out = calculation.calculate({
      payload: {
        age: 55,
        bmi: 31.5,
        ifg_or_diabetes: true,
        ast: 60,
        alt: 50,
        platelet: 176,
        albumin: 3.8,
      },
    })
    expect(out.NFS_SCORE).toBeCloseTo(0.843, 3)
    expect(out.NFS_CATEGORY).toBe('high')
  })

  it('calculates Indeterminate case (platelets=210)', () => {
    const out = calculation.calculate({
      payload: {
        age: 55,
        bmi: 31.5,
        ifg_or_diabetes: true,
        ast: 60,
        alt: 50,
        platelet: 210,
        albumin: 3.8,
      },
    })
    expect(out.NFS_SCORE).toBeCloseTo(0.401, 3)
    expect(out.NFS_CATEGORY).toBe('indeterminate')
  })

  it('calculates Low bucket example', () => {
    const out = calculation.calculate({
      payload: {
        age: 40,
        bmi: 22,
        ifg_or_diabetes: false,
        ast: 25,
        alt: 40,
        platelet: 300,
        albumin: 4.6,
      },
    })
    expect(out.NFS_SCORE).toBeLessThan(-1.455)
    expect(out.NFS_CATEGORY).toBe('low')
  })

  it('uses age ≥65 low cutoff −0.12', () => {
    const base = {
      bmi: 28,
      ifg_or_diabetes: false,
      ast: 30,
      alt: 30,
      platelet: 250,
      albumin: 4.0,
    }
    const outUnder65 = calculation.calculate({ payload: { age: 64, ...base } })
    const out65AndOver = calculation.calculate({ payload: { age: 65, ...base } })
    expect(outUnder65.NFS_LOW_CUTOFF_USED).toBe(-1.455)
    expect(out65AndOver.NFS_LOW_CUTOFF_USED).toBe(-0.12)
  })

  it('enforces AST/ALT > 0 via schema', () => {
    expect(() =>
      calculation.calculate({
        payload: {
          age: 40,
          bmi: 22,
          ifg_or_diabetes: false,
          ast: 0,
          alt: 30,
          platelet: 200,
          albumin: 4,
        } as any,
      }),
    ).toThrow(ZodError)
    expect(() =>
      calculation.calculate({
        payload: {
          age: 40,
          bmi: 22,
          ifg_or_diabetes: false,
          ast: 30,
          alt: 0,
          platelet: 200,
          albumin: 4,
        } as any,
      }),
    ).toThrow(ZodError)
  })
})
