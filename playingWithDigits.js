/*
Problem URL
https://www.codewars.com/kata/5552101f47fc5178b1000050
*/

function digPow(n, p){
    let nString = n.toString();
    let sum = 0;
    for(let i=0;i<nString.length;i++){
      let currentNumber = +nString[i];
      sum+=Math.pow(currentNumber,p);
      p++;
    }
    if(sum%n>0)
      return -1;
    else
      return sum/n;
}