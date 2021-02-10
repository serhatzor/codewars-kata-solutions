/*
Problem URL
https://www.codewars.com/kata/556deca17c58da83c00002db
*/

function tribonacci(signature,n){
    let initialLength = signature.length;
    if(n<initialLength)
      return signature.slice(0, n);
    let result = signature;
    let windowArray = [signature[initialLength-3],signature[initialLength-2],signature[initialLength-1]]
    for(let i=0;i<(n-initialLength);i++)
    {
        let sumOfWindow = windowArray.reduce(function(f, s){
         return f + s;
        }, 0);
        result.push(sumOfWindow);
        windowArray.shift();
        windowArray.push(sumOfWindow);
 
    }
    return result;
 }