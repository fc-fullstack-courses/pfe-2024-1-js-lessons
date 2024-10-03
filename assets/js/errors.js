'use strict';

// console.log(1);

// console.log(2);

// console.log(user1);

// console.log(3);

// if () {}

// const test = 1;
// test = 2;

// try {
//   // початок небезпечного коду
//   console.log(1);

//   // const err1 = new TypeError('Приклад опису помилки');

//   // err1.status = 500;

//   // throw err1;

//   // throw new TypeError('Приклад опису помилки');

//   console.log(2);
//   // кінець небезпечного коду
// } catch (err) {
//   // блок коду який виконається якщо у блоці try відбулася помилка
//   console.log('помилка сталася');

//   console.dir(err);

//   if(err.message === 'Приклад опису помилки') {
//     console.log('обробив помилку');
//   }
// } finally {
//   // блок коду який виконується або після catch або після повного виконання try
//   console.log('finally');
// }

// console.log('весь код виконано');

function getSumOfTwoNumbers(num1, num2) {
  if (typeof num1 !== 'number' || isNaN(num1)) {
    throw new TypeError('num1 має бути корректним числом');
  }

  if (typeof num2 !== 'number' || isNaN(num2)) {
    throw new TypeError('num2 має бути корректним числом');
  }

  return num1 + num2;
}

try {
  const res = getSumOfTwoNumbers('2', 2);

  console.log(res);
  
} catch (err) {
  console.log(err.message);
}

console.log('весь код виконано');
