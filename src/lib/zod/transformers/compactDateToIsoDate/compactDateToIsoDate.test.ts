import { compactDateToIsoDate } from './compactDateToIsoDate'

describe('compactDateToIsoDate', () => {
  describe('Compact format (YYYYMMDD)', () => {
    it('should convert compact format to ISO format', () => {
      expect(compactDateToIsoDate('19780415')).toBe('1978-04-15')
      expect(compactDateToIsoDate('20231231')).toBe('2023-12-31')
      expect(compactDateToIsoDate('20000101')).toBe('2000-01-01')
    })

    it('should handle the problematic Chirec date', () => {
      expect(compactDateToIsoDate('19780415')).toBe('1978-04-15')
    })

    it('should return original string for invalid months in compact format', () => {
      expect(compactDateToIsoDate('20231301')).toBe('20231301')
      expect(compactDateToIsoDate('20230001')).toBe('20230001')
    })

    it('should return original string for invalid days in compact format', () => {
      expect(compactDateToIsoDate('20230132')).toBe('20230132')
      expect(compactDateToIsoDate('20230100')).toBe('20230100')
    })

    it('should return original string for invalid dates like Feb 30', () => {
      expect(compactDateToIsoDate('20230230')).toBe('20230230')
    })

    it('should handle leap years correctly', () => {
      expect(compactDateToIsoDate('20200229')).toBe('2020-02-29')
      expect(compactDateToIsoDate('20210229')).toBe('20210229')
    })
  })

  describe('ISO format (YYYY-MM-DD)', () => {
    it('should accept and validate ISO format dates', () => {
      expect(compactDateToIsoDate('1978-04-15')).toBe('1978-04-15')
      expect(compactDateToIsoDate('2023-12-31')).toBe('2023-12-31')
      expect(compactDateToIsoDate('2000-01-01')).toBe('2000-01-01')
    })

    it('should return original string for invalid ISO dates', () => {
      expect(compactDateToIsoDate('2023-13-01')).toBe('2023-13-01')
      expect(compactDateToIsoDate('2023-02-30')).toBe('2023-02-30')
    })

    it('should handle leap years correctly in ISO format', () => {
      expect(compactDateToIsoDate('2020-02-29')).toBe('2020-02-29')
      expect(compactDateToIsoDate('2021-02-29')).toBe('2021-02-29')
    })
  })

  describe('Edge cases', () => {
    it('should trim whitespace', () => {
      expect(compactDateToIsoDate(' 19780415 ')).toBe('1978-04-15')
      expect(compactDateToIsoDate(' 1978-04-15 ')).toBe('1978-04-15')
    })

    it('should return original string for unrecognized formats', () => {
      expect(compactDateToIsoDate('1978/04/15')).toBe('1978/04/15')
      expect(compactDateToIsoDate('04/15/1978')).toBe('04/15/1978')
      expect(compactDateToIsoDate('15-04-1978')).toBe('15-04-1978')
      expect(compactDateToIsoDate('invalid')).toBe('invalid')
    })

    it('should return original trimmed string for empty strings', () => {
      expect(compactDateToIsoDate('')).toBe('')
      expect(compactDateToIsoDate('   ')).toBe('')
    })

    it('should return original string for partial dates', () => {
      expect(compactDateToIsoDate('202301')).toBe('202301')
      expect(compactDateToIsoDate('2023')).toBe('2023')
    })
  })

  describe('Historical and future dates', () => {
    it('should handle old dates', () => {
      expect(compactDateToIsoDate('19000101')).toBe('1900-01-01')
      expect(compactDateToIsoDate('1900-01-01')).toBe('1900-01-01')
    })

    it('should handle future dates', () => {
      expect(compactDateToIsoDate('20990101')).toBe('2099-01-01')
      expect(compactDateToIsoDate('2099-01-01')).toBe('2099-01-01')
    })
  })
})
