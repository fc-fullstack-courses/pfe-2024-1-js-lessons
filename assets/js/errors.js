'use strict';

// console.log(1);

// console.log(2);

// console.log(user1);

// console.log(3);

// if () {}

// const test = 1;
// test = 2;

try {
  // початок небезпечного коду
  console.log(1);

  // const err1 = new TypeError('Приклад опису помилки');

  // err1.status = 500;

  // throw err1;

  // throw new TypeError('Приклад опису помилки');

  console.log(2);
  // кінець небезпечного коду
} catch (err) {
  // блок коду який виконається якщо у блоці try відбулася помилка
  console.log('помилка сталася');

  console.dir(err);

  if(err.message === 'Приклад опису помилки') {
    console.log('обробив помилку');
  }
} finally {
  // блок коду який виконується або після catch або після повного виконання try
  console.log('finally');
}

console.log('весь код виконано');
