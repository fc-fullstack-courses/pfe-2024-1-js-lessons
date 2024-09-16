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

// Рівність значень
/*
  == - оператор рівності
  === - оператор жорсткої рівності

  != - оператор нерівності
  !== -  оператор жорсткої нерівності
*/ 
console.log('================ Рівність значень ===================');
console.log(10 === 15); // false
console.log(15 === 15); // true
console.log("Anton" === "Anton"); // true

console.log(1000 === '1000'); // false
console.log(1000 == '1000'); // true

console.log(50 !== 100); // true

// Логічне заперечення
console.log(!true); // false
console.log(!false); // true

console.log(!10); // false
console.log(!''); // true
console.log(!' '); // false
console.log(!0); // true
console.log(!null); // true
console.log(!undefined); // true
console.log(!NaN); // true

// перетворення значення на буевий еквівалент
console.log(!!10); // true

// Логічне "І" та логічне "АБО"
/*
  && - Логічне "І"
    повертає правдиве значення якщо і ліва і права частина правдива
    (повертає або перше брехливе значення або останне правдиве значення)

  || - Логічне "АБО"
    повертає правдиве значення якщо або ліва або права частина є правдивою
    (повертає або перше правдиве значення або останне брехливе значення)
*/

const testNumber = 17.5;

// console.log(100 > testNumber > 0);
console.log(testNumber > 0); // true
console.log(testNumber < 100); // true

console.log(testNumber > 0 && testNumber < 100); // true

console.log(null && NaN); // null
console.log(100 && undefined); // undefined
console.log('test' && -57); // -57

// Присвоєення
/*
  +=
  -=
  *=
  /=
  **=
*/
let age = 13;

// age = age + 5;
age += 5;
age -= 3;

age += 1;

console.log(age);
