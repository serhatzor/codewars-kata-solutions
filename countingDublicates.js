/*
Problem URL
https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1
 */

function duplicateCount(text) {
  let filteredArray = [];
  for (let i = 0; i < text.length; i++) {
    var result = filteredArray.filter((item) => {
      if (item.val === text[i].toLowerCase()) {
        return item;
      }
    });
    if (result && result.length > 0) {
      result[0].count++;
    } else filteredArray.push({ val: text[i].toLowerCase(), count: 1 });
  }
  return filteredArray.filter((item) => {
    if (item.count > 1) {
      return item;
    }
  }).length;
}
