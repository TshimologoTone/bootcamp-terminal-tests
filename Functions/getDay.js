export function getDay(dateString) {
    const date = new Date(dateString);
    const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return weekDays[date.getDay()];
  }