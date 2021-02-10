/*
Problem URL
https://www.codewars.com/kata/513e08acc600c94f01000001
*/

function rgb(r, g, b) {
  return convertChannel(r) + convertChannel(g) + convertChannel(b);
}
function convertChannel(val) {
  if (val <= 0) return "00";
  else if (val >= 255) return "FF";
  return val.toString(16).toUpperCase().padStart(2, "0");
}
