/*
Problem URL
https://www.codewars.com/kata/546f922b54af40e1e90001da
*/

function alphabetPosition(text) {
  const minUpperCharAsciiCode = 65;
  const maxUpperCharAsciiCode = 90;

  let asciiNumbers = [];
  for (let i = 0; i < text.length; i++) {
    let asciiCode = +text[i].toUpperCase().charCodeAt(0);
    if (
      asciiCode >= minUpperCharAsciiCode &&
      asciiCode <= maxUpperCharAsciiCode
    ) {
      asciiCode = asciiCode - minUpperCharAsciiCode + 1;
      asciiNumbers.push(asciiCode);
    }
  }
  return asciiNumbers.join(" ");
}
