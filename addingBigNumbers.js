/*
Problem URL 
https://www.codewars.com/kata/525f4206b73515bffb000b21
*/

function add(a, b) {
  return sumStrings(a, b);
}

function sumStrings(a, b) {
  let pad = a.length > b.length ? a.length : b.length;
  let sumString = "";
  a = a.padStart(pad, "0");
  b = b.padStart(pad, "0");

  let lastTransferor = 0;
  for (let i = pad - 1; i >= 0; i--) {
    let result = plus(a[i], b[i], lastTransferor);
    lastTransferor = result.trans;
    sumString = result.result + sumString;
  }
  if (lastTransferor != 0) sumString = lastTransferor + sumString;
  return sumString;
}
function plus(a, b, lt) {
  let sum = +a + +b + lt;
  let transferor = Math.floor(sum / 10);
  sum = sum - 10 * transferor;

  return { result: sum, trans: transferor };
}
