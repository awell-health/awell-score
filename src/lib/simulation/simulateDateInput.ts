const generateRandomDate = (start: Date, end: Date) =>
  new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))

export const simulateDateInput = (): string =>
  generateRandomDate(new Date(2010, 1, 1), new Date())
    .toISOString()
    .split('T')[0]
