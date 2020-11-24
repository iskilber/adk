import { TimeRange } from './time-range';

export function setDateDay(weekday: number, date: Date = new Date()) {
  const currentDay = date.getDay();
  const delta = weekday - currentDay;
  const newDate = new Date(date);
  newDate.setDate(date.getDate() + delta);

  return newDate;
}

export function setDateToMonthFirstDay(date: Date = new Date()): Date {
  const newDate = new Date(date);
  newDate.setDate(1);

  return newDate;
}

export function getMonthDayCount(month: number, year: number): number {
  return new Date(year, month + 1, 0).getDate();
}

export function setDateToMonthLastDay(date: Date = new Date()): Date {
  const dayCount = getMonthDayCount(date.getMonth(), date.getFullYear());
  const newDate = new Date(date);
  newDate.setDate(dayCount);

  return newDate;
}

/**
 * Gets next closest weekday date like get date of next monday
 */
export function getNextWeekdayDate(dayInWeek: number, date: Date = new Date()): Date {
  const currentWeekDay = date.getDay();
  const delta = dayInWeek - currentWeekDay;
  const increment = delta > 0 ? 
      delta : 
      7 + delta; // delta is negative number here
  const nextWeekdayDate = new Date(date);
  nextWeekdayDate.setDate(date.getDate() + increment);

  return nextWeekdayDate;
}

export function getPrevWeekdayDate(dayInWeek: number, date: Date = new Date()): Date {
  const currentWeekDay = date.getDay();
  const delta = dayInWeek - currentWeekDay;
  const decrement = delta < 0 ? delta : delta - 7;
  const prevWeekdayDate = new Date(date);
  prevWeekdayDate.setDate(date.getDate() + decrement);

  return prevWeekdayDate;
}

export function findWeekdayDateBeforeMonthStart(
  dayInWeek: number, 
  monthInYear: number,
  year: number = new Date().getFullYear()
): Date {
  const date = new Date(year, monthInYear);
  date.setMonth(monthInYear);
  const monthStartDate = setDateToMonthFirstDay(date);
  const weekdayDate = dayInWeek !== monthStartDate.getDay() ? 
      getPrevWeekdayDate(dayInWeek, monthStartDate) :
      monthStartDate;

  return weekdayDate;
}

export function findWeekdayDateAfterMonthEnd(
  dayInWeek: number, 
  montInYear: number, 
  year: number = new Date().getFullYear()
) {
  const date = new Date(year, montInYear);
  const monthEndDate = setDateToMonthLastDay(date);
  const weekdayDate = dayInWeek !== monthEndDate.getDay() ?
      getNextWeekdayDate(dayInWeek, monthEndDate) :
      monthEndDate;

  return weekdayDate;
}

export function getDayCount(startDate: Date, endDate: Date) {
  const durationMs = Math.abs(endDate.getTime() - startDate.getTime());

  return Math.ceil(durationMs / TimeRange.DAY);
}

/**
 * Get start of the day
 * @param date 
 */
export function getDateSOD(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

export function getDateEOD(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59, 999);
}

export function getWeekEndEOD(date: Date) {
  const delta = 7 - date.getDay();
  const weekEndEOD = new Date(date);
  weekEndEOD.setDate(date.getDate() + delta);
  weekEndEOD.setHours(23, 59, 59, 999);

  return weekEndEOD;
}

export function getWeekStartSOD(date: Date) {
  const weekEndEOD = new Date(date);
  weekEndEOD.setDate((date.getDate() - date.getDay()) + 1);
  weekEndEOD.setHours(0, 0, 0, 0);

  return weekEndEOD;
}

export function getCurrentWeekEndEOD() {
  const date = new Date();

  return getWeekEndEOD(date);
}

export function getCurrentWeekStartSOD() {
  const date = new Date();

  return getWeekStartSOD(date);
}

export function isCurrentDay(date: Date): boolean {
  const current = new Date();

  return isDatesEqual(date, current, 'day');
}

export function isDatesEqual(a: Date, b: Date, precision?: 'year' | 'month' | 'day') {
  const isYearEqual = a.getFullYear() === b.getFullYear();

  if (precision === 'year') {
    return isYearEqual;
  }

  const isMonthEqual = a.getMonth() === b.getMonth();

  if (precision === 'month') {
    return isYearEqual && isMonthEqual;
  }

  const isDayEqual = a.getDate() === b.getDate();

  if (precision === 'day') {
    return isYearEqual && isMonthEqual && isDayEqual;
  }

  return a.getTime() === b.getTime();
}

export interface DateRange {
  start: Date;
  end: Date;
}

export function isDateRange(value: any): value is DateRange {
  return value && 
      (value.start instanceof Date || value.start === null) &&
      (value.end instanceof Date || value.end === null);
}

export function isInDateRange(range: DateRange, date: Date, precision?: 'year' | 'month' | 'day') {
  const datePrecised = new Date(date.getUTCFullYear(), 0, 0, 0, 0, 0, 0);
  const startDatePrecised = new Date(range.start.getUTCFullYear(), 0, 0, 0, 0, 0);
  const endDatePrecised = new Date(range.end.getUTCFullYear(), 0, 0, 0, 0, 0);

  if (precision === 'year') {
    return startDatePrecised.getTime() <= datePrecised.getTime() &&
        endDatePrecised.getTime() >= datePrecised.getTime();
  }

  datePrecised.setUTCMonth(date.getUTCMonth());
  datePrecised.setUTCMonth(date.getUTCMonth());
  startDatePrecised.setUTCMonth(range.start.getUTCMonth());
  startDatePrecised.setUTCMonth(range.start.getUTCMonth());
  endDatePrecised.setUTCMonth(range.end.getUTCMonth());
  endDatePrecised.setUTCMonth(range.end.getUTCMonth());

  if (precision === 'month') {
    return startDatePrecised.getTime() <= datePrecised.getTime() &&
      endDatePrecised.getTime() >= datePrecised.getTime();
  }

  datePrecised.setUTCDate(date.getUTCDate());
  startDatePrecised.setUTCDate(range.start.getUTCDate());
  endDatePrecised.setUTCDate(range.end.getUTCDate());

  if (precision === 'day') {
    return startDatePrecised.getTime() <= datePrecised.getTime() &&
          endDatePrecised.getTime() >= datePrecised.getTime();
  }
}

