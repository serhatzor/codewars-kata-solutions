/*
Problem URL
https://www.codewars.com/kata/554b4ac871d6813a03000035
*/

function highAndLow(numbers) {
  numbers = numbers.split(" ");
  let high = +numbers[0];
  let low = +numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    let tempNumber = +numbers[i];
    if (tempNumber > high) high = tempNumber;
    if (tempNumber < low) low = tempNumber;
  }
  return high + " " + low;
}