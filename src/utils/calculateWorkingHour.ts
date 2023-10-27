export function calculateWorkingHour(
  startDay: IntRange<1, 7>,
  endDay: IntRange<1, 7>,
  startTime: string,
  endTime: string
) {
  const dayEnum = {
    1: 'شنبه',
    2: 'یکشنبه',
    3: 'دوشنبه',
    4: 'سه‌شنبه',
    5: 'چهارشنبه',
    6: 'پنجشنبه',
    7: 'جمعه'
  };

  // @ts-ignore
  return ` ${dayEnum[startDay]} تا ${dayEnum[endDay]} | ${startTime} الی ${endTime}`;
}
