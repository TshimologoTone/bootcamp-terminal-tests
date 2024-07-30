export function sameWeekday(date1, date2) {
    // Convert input strings to Date objects
    const date1Obj = new Date(date1);
    const date2Obj = new Date(date2);

    // Get the weekday of each date (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
    const weekdayDate1 = date1Obj.getDay();
    const weekdayDate2 = date2Obj.getDay();

    // Compare if the weekdays are the same
    return weekdayDate1 === weekdayDate2;
}