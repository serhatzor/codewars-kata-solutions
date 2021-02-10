/*
Problem URL
https://www.codewars.com/kata/5264d2b162488dc400000001
*/

function spinWords(sentence) {
  let words = sentence.split(" ");
  let reservedSentence = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i].length >= 5) {
      let reservedWord = "";
      for (let j = words[i].length - 1; j >= 0; j--) {
        reservedWord += words[i][j];
      }

      reservedSentence += reservedWord;
    } else {
      reservedSentence += words[i];
    }
    if (i !== words.length - 1) {
      reservedSentence += " ";
    }
  }
  return reservedSentence;
}