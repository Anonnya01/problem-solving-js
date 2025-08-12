// ---------Task-1---------//

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

// ---------End----------//

//-------------- task-2 ----------- //

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

// ---------End--------//

//---------- task-3---------//

// function countVowels(str) {
//   if (typeof str !== "string") {
//     return "Invalid";
//   }
//   let count = 0;

//     str = str.toLowerCase();

//   for (let i = 0; i < str.length; i++) {
//     if (
//       str[i] == "a" ||
//       str[i] == "e" ||
//       str[i] == "i" ||
//       str[i] == "o" ||
//       str[i] == "u"
//     ) {
//       count++;
//     }
//   }

//   return count;
// }

// let result = countVowels("Sazid");
// let result2 = countVowels("Simba");
// let result3 = countVowels("Anonnya");
// console.log(result);
// console.log(result2);
// console.log(result3);

// --------End-----------//

// --------problem-01-------//

// function cashOut(money) {
//   if (money < 0 || typeof money != "number") {
//     return "Invalid";
//   }
//   let change = money * (1.75 / 100);
//   let fixedChange = change.toFixed(4);
//   let finalChange = parseFloat(fixedChange);
//   return finalChange;
// }
// const money = cashOut('101');
// console.log(money);

// ---------End---------//

// ---------Problem-02---------//

// function validContact(contact) {
//   if (typeof contact !== "string") {
//     return "Invalid";
//   }
//   if (
//     contact.length == 11 &&
//     contact.startsWith("01") == true &&
//     contact.includes(" ") != true
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(validContact("01819834567"));

// exit//

// --------problem-03--------//

// function willSuccess(arr) {
//   if (Array.isArray(arr) == false) {
//     return "invalid";
//   }
//   let pass = 0;
//   let fail = 0;
//   for (let mark of arr) {
//     if (mark > 50) {
//       pass++;
//     }
//   }
//   for (let mark of arr) {
//     if (mark <= 50) {
//       fail++;
//     }
//   }
//   if (pass > fail) {
//     return true;
//   } else {
//     return false;
//   }
// }

// const result = willSuccess("100","100");
// console.log(result);

// ---------exit------- //