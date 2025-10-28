import { parse, isValid, format } from 'date-fns'

/**
 * Transforms a date string from compact format (YYYYMMDD) to ISO8601 date format (YYYY-MM-DD)
 *
 * If the date string is not in a recognized format or is invalid, it returns the original string as-is.
 * This allows Zod's date validation to handle the final validation.
 *
 * @param dateString
 * @returns ISO8601 formatted date string (YYYY-MM-DD) if valid compact format, otherwise the original string
 *
 * @example
 * compactDateToIsoDate("19780415") // "1978-04-15"
 * compactDateToIsoDate("1978-04-15") // "1978-04-15"
 * compactDateToIsoDate("invalid") // "invalid"
 */
export const compactDateToIsoDate = (dateString: string): string => {
  const trimmed = dateString.trim()

  // Only attempt parsing for strict compact format YYYYMMDD
  if (/^\d{8}$/.test(trimmed)) {
    const parsed = parse(trimmed, 'yyyyMMdd', new Date())
    if (isValid(parsed)) return format(parsed, 'yyyy-MM-dd')
  }

  return trimmed
}
