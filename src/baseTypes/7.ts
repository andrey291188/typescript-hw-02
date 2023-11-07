/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Weekday {
  monday = "monday",
  tuesday = "tuesday",
  wednesday= "wednesday",
  thursday = "thursday",
  friday = "friday",
  saturday = "saturday",
  sunday = "sunday"
}

function isWeekend(day: Weekday): boolean {
  return day === Weekday.saturday || day === Weekday.sunday;
}