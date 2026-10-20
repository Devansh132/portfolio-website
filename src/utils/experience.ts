const experiencePeriods = [
  { start: new Date(2023, 10, 1), end: new Date(2024, 7, 1) },
  { start: new Date(2024, 8, 1) }
];

export const getExperienceYears = (asOf = new Date()) => {
  const asOfTime = asOf.getTime();
  const totalMilliseconds = experiencePeriods.reduce((total, period) => {
    const periodEnd = Math.min(period.end?.getTime() ?? asOfTime, asOfTime);
    return total + Math.max(0, periodEnd - period.start.getTime());
  }, 0);

  return (totalMilliseconds / (1000 * 60 * 60 * 24 * 365.2425)).toFixed(1);
};