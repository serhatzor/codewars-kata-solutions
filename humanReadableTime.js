/*
Problem URL
https://www.codewars.com/kata/52685f7382004e774f0001f7
*/

const secondsInAHour = 3600;
const secondsInAMinute = 60;

function humanReadable(seconds) {
  let h = Math.floor(seconds / secondsInAHour);
  let m = Math.floor((seconds - h * secondsInAHour) / secondsInAMinute);
  let s = seconds - (h * secondsInAHour) - (m * secondsInAMinute);
  h = h.toString().padStart(2, "0");
  m = m.toString().padStart(2, "0");
  s = s.toString().padStart(2, "0");
  return [h, m, s].join(":");
}
