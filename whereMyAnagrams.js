/*
Problem URL
https://www.codewars.com/kata/523a86aa4230ebb5420001e1
*/

function anagrams(word, words) {
    let analizedArray = analysWord(word);
    let returnedArray = [];
    for (let i = 0; i < words.length; i++) {
      let currentAnalizedArray = analysWord(words[i]);
      let isAnagram = false;
      if (currentAnalizedArray.length == analizedArray.length) {
        isAnagram = true;
        for (let j = 0; j < analizedArray.length; j++) {
          let filteredAnalyze = currentAnalizedArray.filter((item) => {
            if (item.charecter == analizedArray[j].charecter) {
              return item;
            }
          });
          if(filteredAnalyze==null||filteredAnalyze.length<=0||filteredAnalyze[0].count!=analizedArray[j].count)
          {
            isAnagram = false;
            break;
          }
        }

        if (isAnagram) {
          returnedArray.push(words[i]);
        }
      }
    }
    return returnedArray;
  }
  function analysWord(w) {
    let analizedArray = [];
    for (let i = 0; i < w.length; i++) {
      let analizedChar = w[i];
      let existingItem = analizedArray.filter((item) => {
        if (item.charecter == analizedChar) {
          return item;
        }
      });
      if (existingItem == null||existingItem.length<=0) {
        analizedArray.push({ charecter: analizedChar, count: 1 });

      }
      else {
        existingItem[0].count++;
      }

    }
    return analizedArray;
  }