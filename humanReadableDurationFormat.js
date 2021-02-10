/*
Problem URL 
https://www.codewars.com/kata/52742f58faf5485cae000b9a
*/

const secondsInAYear = 31536000;
const secondsInADay = 86400;
const secondsInAHour = 3600;
const secondsInAMinute = 60;

function formatDuration(seconds) {
  seconds = +seconds;
  if (seconds <= 0) return "now";

  let spentTime = 0;

  let years = Math.floor(seconds / secondsInAYear);
  spentTime += years * secondsInAYear;

  let days = Math.floor((seconds - spentTime) / secondsInADay);
  spentTime += days * secondsInADay;

  let hours = Math.floor((seconds - spentTime) / secondsInAHour);
  spentTime += hours * secondsInAHour;

  let minutes = Math.floor((seconds - spentTime) / secondsInAMinute);
  spentTime += minutes * secondsInAMinute;

  let sec = seconds - spentTime;
  
  let result = "";
  result = getFormattedText(result,sec, "second");
  result = getFormattedText(result,minutes, "minute", getSeperator([sec]));
  result = getFormattedText(result,hours,"hour",getSeperator([minutes, sec]));
  result = getFormattedText(result,days,"day",getSeperator([hours, minutes, sec]));
  result = getFormattedText(result,years,"year",getSeperator([days, hours, minutes, sec]));
  return result;
}

function getFormattedText(text, time, timeExpression, seperator="") {
    if (time <= 0) return text;
    if (text) {
      text = seperator + text;
    }
    text = time + " " + timeExpression + getPostFix(time) + text;
    return text;
  }

function getSeperator(values) {
  for (let i = 0; i < values.length; i++) {
    if (values[i] > 0) {
      let hasAnotherPart = false;
      for (let j = i + 1; j < values.length; j++) {
        if (values[j] > 0) {
          hasAnotherPart = true;
          break;
        }
      }
      if (hasAnotherPart) return ", ";
      else return " and ";
    }
  }
  return " and ";
}
function getPostFix(value) {
  if (value > 1) return "s";
  return "";
}

