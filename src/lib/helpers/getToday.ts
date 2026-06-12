import { createDate } from '@flightlesslabs/time-utils';

export function getToday() {
  const today = createDate().format('YYYY-MM-DD');

  return today;
}

export function getCurrentTime() {
  const now = createDate().format('YYYY-MM-DD:HH:mm:ss');

  return now;
}

export function getFormattedToday() {
  const today = createDate().format('DD/MM/YYYY');

  return today;
}
