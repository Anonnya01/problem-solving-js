// function sum(a, b) {
//   let result = a + b;
//   return result;
// }
// function multiply(a, b) {
//   let result = a * b;
//   return result;
// }

// const result = sum(2, 3);
// console.log(result);

// const result2 = multiply(2, 3);
// console.log(result2);

// console.log(result + result2);

// task-2 //

// function sumOfArray(input) {
//   if (Array.isArray(input) == false) {
//     return "invalid";
//   }

//   let sum = 0;
//   for (let num of input) {

//     if(typeof num !=="number"){
//         return 'invalid';
//     }
//     sum += num;
//   }
//   return sum;
// }
// let result = sumOfArray([2,2]);
// console.log(result);

// task-3 //

function countVowels(str) {
  if (typeof str !== "string") {
    return "Invalid";
  }
  let count = 0;

    str = str.toLowerCase();

  for (let i = 0; i < str.length; i++) {
    if (
      str[i] == "a" ||
      str[i] == "e" ||
      str[i] == "i" ||
      str[i] == "o" ||
      str[i] == "u"
    ) {
      count++;
    }
  }

  return count;
}

let result = countVowels("Sazid");
console.log(result);
