'use strict';

// console.log('test text');
// console.log('test text'.length);

// const textFromServer = 'test text';

// console.log(textFromServer);
// console.log(textFromServer.length);

// const str1 = 'test';
// console.log(str1);

// const str2 = new String('test');
// console.log(str2);

// const arr1 = ['t', 'e', 's', 't'];
// console.log(arr1);

// const bool1 = false;

// if(bool1) {
//   console.log(1);
// } else {
//   console.log(2);
// }

// const bool2 = new Boolean(false);

// if (bool2) {
//   console.log(1);
// } else {
//   console.log(2);
// }

// Використання функцій Boolean, String, Number
// const test1 = Number(10);
// console.log(test1);

// const test2 = Number('10');
// console.log(test2);

// const data = [];

// +data
// const test3 = Number('eteasfdfdfd');
// const test3 = +data;
// console.log(test3);

// console.log(+'eteasfdfdfd');

// !!data
// const bool1 = Boolean({
// });
// console.log(bool1);

// '' + data
// const str1 = String(null);
// console.log(str1);

// // Об'єкт Math

// console.log(Math);

// console.log(Math.PI);

// // const SOME_CONSTANT_VALUE = 'test';

// // повератє абсолютне значення числа
// console.log(Math.abs(10)); // 10
// console.log(Math.abs(0)); // 0
// console.log(Math.abs(-20)); // 20

// // округленя до більшого цілого числа
// console.log(Math.ceil(5.6)); // 6
// console.log(Math.ceil(2.1)); // 3

// // округленя до меньшого цілого числа
// console.log(Math.floor(5.6)); // 5
// console.log(Math.floor(5.99)); // 5
// console.log(Math.floor(2.1)); // 2

// // округленя до ближчого цілого числа
// console.log(Math.round(5.6)); // 6
// console.log(Math.round(2.1)); // 2
// console.log(Math.round(2.5)); // 3

// // знаходження мінімального / максимального числа
// console.log(Math.min(10, 2, 5, -7, -10, 10000, 12, -63, 0)); // -63
// console.log(Math.max(10, 2, 5, -7, -10, 10000, 12, -63, 0)); // 10000

// // зведення в ступінь
// // 5 ** 3 
// console.log(Math.pow(5, 3)); // 125
// console.log(Math.pow(-5, -3)); // -0.008

// // повертає випадкове значення у діапазоні 
// // від 0 до 1 (але одиниця не вхоить у діапазон)
// console.log(Math.random()); // 0 - 0.99999999999999

// // повертає випадкове значення у діапазоні 
// function getRandomArbitrary(min, max) {
//   return Math.random() * (max - min) + min;
// }

// // Методи примітивів
// // Boolean
// console.log(true);
// const boolValue = true;

// console.log(true.toString());
// console.log(boolValue.toString());

// Number
// const num1 = 15.51;
// console.log(num1.toExponential()); // '1.551e+1'
// console.log(num1.toExponential(1)); // '1.6e+1'

// console.log(num1.toFixed()); // '16'
// console.log(num1.toFixed(1)); // '15.5'

// console.log(num1.toPrecision()); // '15.51'
// console.log(num1.toPrecision(1)); // '2e+1'

// String

const objStr = new String('this is test string');

const str = 'this is test string';

console.log(str.length); // 19
console.log(str[2]); // 'i'

// str[2] = 'I'; // error

// charAt - повертає символ на вказаному інексу в рядку
const symbol1 = str.charAt(2); // 'i'

// charCodeAt - повертає Юнікодівське значення символа на вказаному інексу в рядку
const unicodeNum1 = str.charCodeAt(2); // 105

// concat - повертає новий рядок, в якому до старого 
// приєднються (конкатенуються) аргументи конкату (зазвичай рядки)
// str + ' CONCAT ' + 10 + '!!!';
const concatStr = str.concat(' CONCAT ', 10, '!!!');

// includes - відповідає чи входить рядок-аргумент у склад ряда у якого викликаємо метод
const includes1 = str.includes('test'); // true
const includes2 = str.includes('szkjhgbfdsiluvhivb'); // false
const includes3 = str.includes('TEST'); // false

// indexOf - повертає індекс першого входження рядока-аргумента у рядку, у якого метод викликали
const testIndex = str.indexOf('test'); // 8
const testIndex2 = str.indexOf('szkjhgbfdsiluvhivb'); // -1
const testIndex3 = str.indexOf('test', testIndex + 1); // -1

// slice - робить копію частини рядка
const copy1 = str.slice(0,5);
const copy2 = str.slice(0,-5);

// trim - створює новий рядок в якому пробіли з початку та кінця видаляються
const untrimmedStr = '                               John       Doe          ';
const trimmedStr = untrimmedStr.trim();

// toLowerCase / toUpperCase - створюють новий рядок який буде повністю 
// в нижньому / верхньому регістрі

const str2 = 'Test StrING';

const lowerCase = str2.toLowerCase(); // 'test string'
const upperCase = str2.toUpperCase(); // 'TEST STRING'
