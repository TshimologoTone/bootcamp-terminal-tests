export function isDayName(day) {
    // List of days of the week
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
    // Check if the input string is included in the daysOfWeek array
    return daysOfWeek.includes(day);
  }