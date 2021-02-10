/*
Problem URL
https://www.codewars.com/kata/514a024011ea4fb54200004b
*/

function domainName(url) {
  let host = url
    .replace("http://", "")
    .replace("https://", "")
    .replace("www.", "");
  let endindex = host.indexOf(".");
  return host.substr(0, endindex);
}
