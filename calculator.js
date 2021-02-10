/*
Problem URL
https://www.codewars.com/kata/5235c913397cbf2508000048
*/

const Calculator = function () {
  this.evaluate = (string) => {
    string = string.replace(/\s/g, "");
    return +lexialParserForMath(string);
  };
};
function lexialParserForMath(string) {
  let first = string.lastIndexOf("(");
  let last = string.indexOf(")",first);

  let proceedExpression =
    first < 0 ? string : string.substring(first + 1, last);
  let returned = first < 0;

  let proceedValue = "";
  let lexials = [];
  for (let i = 0; i < proceedExpression.length; i++) {
    let currentChar = proceedExpression[i];
    if (
      currentChar == "*" ||
      currentChar == "/" ||
      currentChar == "+" ||
      currentChar == "-"
    ) {
      if (currentChar == "-" && (!proceedValue||(proceedValue[0]=="-"&&proceedValue[proceedValue.length-1]=="-"))) {
        proceedValue = proceedValue + currentChar;
      } else {
        lexials.push(getMultipiedNumber(proceedValue));
        lexials.push(currentChar);
        proceedValue = "";
      }
    } else {
      proceedValue = proceedValue + currentChar;
      if (i === proceedExpression.length - 1) {
        lexials.push(getMultipiedNumber(proceedValue));
      }
    }
  }

  if (lexials.length > 0) {
    proceedValue = processLexials(lexials);
  }

  if (returned) {
    return proceedValue;
  } else {
    string = string.slice(0, first) + proceedValue + string.slice(last + 1);

    return lexialParserForMath(string);
  }
}

function getMultipiedNumber(number){
    let negative = false;
    let newNumber = '';
    for(let i=0;i<number.length;i++){
        if(number[i]=="-"){
            negative = !negative;
        }
        else{
            newNumber = newNumber+number[i];
        }
    }
    return negative? -1*(+newNumber) : (+newNumber);
}

function processLexials(lexials) {
  let multiplyIndexOf = lexials.indexOf("*");
  let divisionIndexOf = lexials.indexOf("/");
  let plusIndexOf = lexials.indexOf("+");
  let minusIndexOf = lexials.indexOf("-");

  let isMultiply = true;
  let isDivision = false;
  let isPlus = false;

  let proceedIndex = multiplyIndexOf;
  if (
    multiplyIndexOf < 0 ||
    (multiplyIndexOf > divisionIndexOf && divisionIndexOf >= 0)
  ) {
    proceedIndex = divisionIndexOf;
    isMultiply = false;
    isDivision = true;
  }

  if (proceedIndex < 0) {
    isMultiply = false;
    isDivision = false;
    isPlus = true;
    proceedIndex = plusIndexOf;
    if (
      plusIndexOf < 0 ||
      (plusIndexOf > minusIndexOf && minusIndexOf >= 0)
    ) {
      proceedIndex = minusIndexOf;
      isPlus = false;
    }
  }

  if (proceedIndex > 0) {
    let proceedValue = 0;

    let val1 = lexials[proceedIndex - 1];
    let val2 = lexials[proceedIndex + 1];
    if (isMultiply) proceedValue = val1 * val2;
    else if (isDivision) proceedValue = val1 / val2;
    else if (isPlus) proceedValue = val1 + val2;
    else proceedValue = val1 - val2;

    lexials.splice(proceedIndex, 0, proceedValue);
    lexials.splice(proceedIndex - 1, 1);
    lexials.splice(proceedIndex, 2);
    return processLexials(lexials);
  } else {
    if(lexials.length>=2)
        return lexials[0]-lexials[1];
    else
        return lexials.join('');
  }
}