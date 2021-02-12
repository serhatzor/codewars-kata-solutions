/*
Problem URL
https://www.codewars.com/kata/5659c6d896bc135c4c00021e
*/
function nextSmaller(n) {
  let arr = n.toString().split("");
  if (arr.length <= 1) return -1;
  for (let i = arr.length - 1; i > 0; i--) {
    let firstNumber = +arr[i-1];
    let secondNumber = +arr[i];
    if (secondNumber >= firstNumber) {
      continue;
    }
    let zeroHead = secondNumber==0&&((i-1)==0);
    if(!zeroHead){
      arr.splice(i-1,2);
      arr.splice(i-1,0,secondNumber,firstNumber);
      let newNumber = +(arr.join(""));
      if(newNumber<n){
        return newNumber;
      }
      else{
        arr.splice(i-1,2);
        arr.splice(i-1,0,firstNumber,secondNumber);
      }
    }

    let largest = biggest(firstNumber, i - 1, arr.slice(i));
    if (largest === -1) {
      return-1;
    }
    else{
      return +(arr.slice(0, i - 1).join("") + largest);
    } 
  }
  return -1;
}

function biggest(num, index, arr) {
  arr.sort((a, b) =>{
    return b - a;
  });
  for (let j = 0; j < arr.length; j++) {
    if (num > arr[j]) {
      if (arr[j] == 0 && index == 0) return -1;
      else {
        var temp = arr[j];
        arr[j] = num;
        num = temp;
        break;
      }
    }
  }
  arr.unshift(num);
  return +(arr.join(""));
}
