// const hero = {
//     name: 'Sakib Khan',
//     id: 121,
//     address: 'movie cinema',
//     isSingle: true,
//     friends: ['Apu', 'Raaz', 'Salman', 'aamir'],
//     movies: [{name: 'no. 1', year: 2015}, {name: 'king khan', year: 2018}],
//     act: function(){
//         console.log('acting like Sakib khan');
//     },
//     car: {
//         brand: 'tesla',
//         price: 50000000,
//         made: 2025,
//         manufacturer: {
//             name: 'tesla',
//             ceo: 'Elon Mask',
//             country: 'USA'
//         }
//     }
// }

// console.log(student.car);
// console.log(hero.act);
// nayok.act();

// --------//
// const products = [
//     {name: 'phone', price: 12000},
//     {name: 'laptop', price: 32000},
// ]

// products[0];
// products[1];

// const products = [15, 56, 87]
// const products = {
//     '0': 15,
//     '1': 56,
//     '2': 87
// }

// ------argument--------//
// function add(num1, num2){
//     console.log(num1, num2);
//     // Array like object//
//     console.log(arguments[4]);
// }

// add(12, 13, 45, 89, 78);


// -------factorial--------//
// let factorial = 1;
// for(let i = 5; i>=1; i--){
//     factorial = factorial * i;
// }
// console.log(factorial);

// function factorial(i){
//     if(i == 1){
//         return 1;
//     }
//     return i * factorial(i-1);
// }

// const result = factorial(5);
/* 
    5 * factorial(4)
    5 * 4 * factorial(3)
    5 * 4 * 3 * factorial(2)
    5 * 4 * 3 * 2 * factorial(1)
    5 * 4 * 3 * 2 * 1
*/

// --------simple-------//
// let sum = 0;
// for(let i = 1; i <= 5; i++){
//     sum = sum + i;
// }
// console.log(sum);
// let sum = 0;
// for(let i = 5; i >= 1; i--){
//     sum = sum + i;
// }
// console.log(sum);

// function sum(i){
//     if( i == 1 ){
//         return 1;
//     }
//     return i + sum(i-1);
// }
// const result = sum(5);
// console.log(result);

/* 
    5 + sum(4)
    5 + 4 + sum (3)
    5 + 4 + 3 + sum (2)
    5 + 4 + 3 + 2 + sum(1)
    5 + 4 + 3 + 2 + 1
*/