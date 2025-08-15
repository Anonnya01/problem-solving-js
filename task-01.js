// Task-1:
// Write a function to convert temperature from Celsius to Fahrenheit.

// function celsiusToFahrenheit(celsius) {
//   if (typeof celsius !== "number") {
//     return "Invalid input";
//   }

//   const fahrenheit = (celsius * 9) / 5 + 32;
//   return fahrenheit;
// }

// console.log(celsiusToFahrenheit(0));
// console.log(celsiusToFahrenheit(100));

//  Task-2:
// You are given an array of numbers. Count how many times the a number is repeated in the array.

// -----Using for of--------//
// function findNum(input, find) {
//   if (!Array.isArray(input) || typeof find !== "number") {
//     return "Invalid";
//   }
//   let count = 0;
//   for (let num of input) {
//     if (num === find) {
//       count++;
//     }
//   }
//   return count;
// }
// const number = [ 6, 11, 12, 98 ];
// const find = 5;
// console.log(findNum(number, find));

// ------Using for --------//

// function findNum(input, num1) {
// if (!Array.isArray(input) || typeof find !== "number") {
//     return "Invalid";
//   }
//   let count = 0;
//   for (let i = 0; i < input.length; i++) {
//     if (input[i] == num1) {
//       count++;
//     }
//   }
//   return count;
// }
// const number = [5, 6, 11, 12, 98, 5];
// const find = 5;
// console.log(findNum(number, find));

// Task-3:
// Write a function to count the number of vowels in a string.

// function countVowels(str) {
//   if (typeof str !== "string") {
//     return "Invalid";
//   }

//   const vowels = "aeiouAEIOU";
//   let count = [];

//   for (let chr of str) {
//     if (vowels.includes(chr)) {
//       count.push(chr);
//     }
//   }
//   return [ count ,count.length];
// }
// console.log(countVowels("Allah"));

// Task-4:
// Write a function to find the longest word in a given string.

// function longestStr(str) {
//   if (typeof str !== "string") {
//     return "Invalid input";
//   }
//   const words = str.split(" ");
//   let longest = "";
//   for (let word of words) {
//     if (word.length > longest.length) {
//       longest = word;
//     }
//   }
//   return longest;
// }
// console.log(longestStr("I love JavaScript programming"));
// console.log(longestStr("Hello world"));

// Task-5:
// Generate a random number between 10 to 20.

function randomNum(min, max) {
  if (typeof min !== "number" || typeof max !== "number") {
    return "Invalid input";
  }
  const num = Math.random() * (max - min) + min;
  return Math.round(num * 100) / 100;
}

const random = randomNum(10, 20);
console.log(random);
