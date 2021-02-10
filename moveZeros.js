/*
Problem URL 
https://www.codewars.com/kata/52597aa56021e91c93000cb0
*/

var moveZeros = function (arr) {
  let insertedIndex = 0;
  for (let i = 0; i < arr.length - insertedIndex; i++) {
    if (arr[i] === 0) {
      arr.splice(i, 1);
      arr.push(0);
      i--;
      insertedIndex++;
    }
  }
  return arr;
};
