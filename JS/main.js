"use strict";
console.log("Roziqov"+" Bobojon"); // Roziqov Bobojon
console.log("6"+9); //69
console.log(6+9); //15

//incr , decr
let incr = 10;
let decr = 10;
console.log(incr++); //10 
console.log(decr--); //10 

console.log(incr); // 11 keyinchalik o'zgardi
console.log(decr); // 9 keyinchalik o'zgardi

console.log(++incr); //
console.log(--decr); //

console.log(5 % 3); // 2 qoldiqni ko'rsatadi

console.log(5*5 == "25"); //true
console.log(5*5 === "25"); // false

const isAge = true;
const isClose = false;
const isCheked = true;

console.log(isAge && isCheked); // true
console.log(isAge && isClose); // false
console.log(isAge || isClose); // true

console.log(!isAge); // !true - false

console.log (2 + 2 * 2 == 8); // 6 == 8 false
console.log (2 + 2 * 2 !== 8); // 6 !== 8 true