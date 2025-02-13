import { type ZodError, ZodIssue } from 'zod'

export const deduplicateZodIssues = (issues: ZodIssue[]): ZodIssue[] => {
  const issueMap = new Map<string, ZodIssue>()

  for (const issue of issues) {
    const pathKey = issue.path.join('.') // Create a unique key based on the path

    if (!issueMap.has(pathKey)) {
      issueMap.set(pathKey, issue)
    } else {
      const existingIssue = issueMap.get(pathKey)!

      // Prioritize 'Required' errors over other issues
      if (
        existingIssue.message !== 'Required' &&
        issue.message === 'Required'
      ) {
        issueMap.set(pathKey, issue)
      }
    }
  }

  return Array.from(issueMap.values())
}
