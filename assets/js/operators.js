// оператори

// typeof - оператор визначення типу даних
typeof 10;

let data = 'test';

console.log(typeof data);

let bug = null;
console.log(typeof bug); // object

// Математичні оператори
// +, -, *, /

console.log('2 + 2');
console.log(2 + 2); // нормальна математика
console.log(true + true + true); // 3
// конкаткенація (склеювання) рядків
console.log('_____' + 10 + 25 + 30);
console.log('' + null);

console.log('5 - 2');
console.log(5 - 2);

console.log('2 * 10');
console.log(2 * 10);

console.log('100 / 4');
console.log(100 / 4);

// зведення в ступінь
console.log('5 ** 3');
console.log(5 ** 3);

console.log('-5 ** 2');
console.log((-5) ** 2);

// залишок від ділення 
console.log('10 % 3');
console.log(10 % 3);
console.log(10 % -3);

// інкрементатори / декрементатори
let counter = 0;

console.log(counter);

counter++; // +1 

console.log(counter);

counter++; // +1
counter++; // +1
counter++; // +1

console.log(counter);

counter--; // 4 - 1 = 3

console.log(counter);

counter--; // 3 - 1 = 2

console.log(counter);

// counter++ / counter-- - постфіксний
// ++counter / ++counter - префіксні

let counter1 = 10;

console.log(++counter1); // 11

console.log(counter1); // 11

console.log(++counter1); // 12

let counter2 = 10;

console.log(counter2++); // 10

console.log(counter2); // 11

console.log(counter2++); // 11


// унарні оператори
// + , -

console.log(-10);
console.log(+500);
// перетворення типу на числовий
console.log(+null);

// let test = num1 + num1;

// 50 - test;

// Логічні оператори

console.log('================ Логічні оператори ===================');

// Порівняння 
/*
  > - більше
  < - меньше
  >= - більше або дорівнює
  <= - меньше або дорівнює
*/
console.log(10 > 5); // true

console.log(5 > 10); // false

console.log(5 < 10); // true

console.log(10 > 10); // false
console.log(10 < 10); // false

console.log(10 >= 10); // true
console.log(10 <= 10); // true

console.log('cat' > 'm'); // false
