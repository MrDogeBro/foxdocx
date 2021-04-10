export const from24Hour = (hours: number, mins: number, secs?: number) => {
  let newHours = hours;
  let period = 'AM';
  if (hours > 12) {
    newHours = hours - 12;
    period = 'PM';
  }

  if (secs) return `${newHours}:${mins}:${secs} ${period}`;
  return `${newHours}:${mins} ${period}`;
};
