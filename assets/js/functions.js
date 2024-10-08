// Функції - блоки коду які можно повторно використовувати
'use strict';
/*
  параметри функції - речі які передаємо всередину 
                      як додаткову інформацію 
*/
// let text = 'test';
// console.log(text, 123);

// let userName;

// alert(userName);

// const userName = prompt('Enter your name');

// const greetingText = 'Hello ' + userName + '!';

// alert(greetingText);

// const num1 = prompt("Enter first number");
// const num2 = prompt("Enter second number");

// alert(+num1 + +num2);

// const num1 = +prompt("Enter first number");
// const num2 = +prompt("Enter second number");

// alert(num1 + num2);
// alert(num1 + 50);
// alert(num2 + 40005465);

// const input1 = prompt("Enter first number");
// const input2 = prompt("Enter second number");

// const num1 = +input1;
// const num2 = +input2;

// alert(num1 + num2);

// const result = prompt();

// console.log(result);

// Створення функцій

// functional expression (функціональний вираз)
const getSumOfTwoNumbers = function (firstNumber, secondNumber) {
  // тіло функції - блок коду який буде виконано
  // коли функція запуститься

  // завершити функцію якщо параметри не є нормальними числами
  if (typeof firstNumber !== 'number' || typeof secondNumber !== 'number') {
    return null;
  }

  // if(firstNumber !== firstNumber || secondNumber !== secondNumber) {

  // правда = NaN, брехня - нормальне значення
  // const isNaNResult = isNaN(firstNumber - secondNumber);

  // if(isNaNResult) {
  //   return null;
  // }

  if (isNaN(firstNumber - secondNumber)) {
    return null;
  }

  // if(typeof secondNumber !== 'number') {
  //   return null;
  // }

  // const firstNumber = +prompt("Enter first number");
  // const secondNumber = +prompt("Enter second number");

  const sumResult = firstNumber + secondNumber;

  // return каже функції її підсумковий результат роботи
  // після першого виконаного рядка з return функція зупиняє свою роботу
  // return firstNumber + secondNumber;
  return sumResult;

  // це недосяжний блок коду
  console.log(sumResult);
};

// const firstNumber = prompt("Enter first number");
// const secondNumber = prompt("Enter second number");

// const result = getSumOfTwoNumbers(1000, 500);

// console.log('Result is: ' + result);

// const num1 = +prompt("Enter first number");
// const num2 = +prompt("Enter second number");

const result2 = getSumOfTwoNumbers(NaN, 10);

// console.log('Result2 is: ' + result2);

// alert('Result is: ' + result);
// const result1 = myFirstFunction(10);
// myFirstFunction('this is firstParam');
// myFirstFunction();

// console.log(result1);

// const consoleLogRes = console.log();
// const alertRes = alert();

// console.log(consoleLogRes);
// console.log(alertRes);

// func1(); // error

// func2(); // result 2

const func1 = function (param1) {
  console.log('func1');
  return 'result 1';
};

// function declaration (об'явлення функції)
function func2(param1) {
  console.log('func2');
  return 'result 2';
}

// func1(); // result 1

// func2() // result 2

// Чисті функції
/*
  чиста функція - це функція яка задовільняє двом вимогам:
    1. При однакових вхідних аргументах функція завжди повертає однаковий результат (детермінованість функції)
    2. У функції мають бути відсутні побічні впливи/ефекти
*/
function sum(num1, num2) {
  return num1 + num2;
}

// sum - детермінована функція
const res1 = sum(0.1, 0.2);

let someNumber = 0;
// badSum - недетермінована функція
function badSum(num1, num2) {
  return num1 + num2 + someNumber;
}

const res2 = badSum(2, 2);

// функції з побічними ефектами

function badSum2(num1, num2) {
  num1 = +num1; // побічний ефект - зміна аргумента
  // console.log(num1 + num2); // побічний ефект потоку виведеня
  someNumber++; // побічний ефект - зміна зовнішніх даних
  return num1 + num2;
}

//
function multiply(num1, num2 = 2) {
  // console.log('test');
  return num1 * num2;
}

function getSquare(num) {
  return multiply(num, num);
}

// функції вищого порядку ( HOF - high order function )
/*
  функція вищого порядку - функція яка або:
    1. приймає як аргумент іншу функцію
    2. повертає як результат іншу функцію
*/

const array = [1, 10, 100];

// forEach - функція вищого порядку тому що приймає іншу функцію
array.forEach(function (num) {
  // console.log(num);
});

// hofExample2 - функція вищого порядку тому що повертає функцію як результат
function hofExample2() {
  const innerFunction = function () {
    console.log('some text');
  };

  return innerFunction;
}

const result = hofExample2();

// result();

// значення параметрів за замовчанням
function sayHello(userName = 'Guest') {
  return `Hello ${userName}`;
}

const hello1 = sayHello('John');
// console.log(hello1);

const hello2 = sayHello();
// console.log(hello2);

// функція, яка приймає рядок та повертає його варіант, де кожна літера випадково буде у врехньому або нижньому регістрі
function toRandomCase1(str) {
  let resultString = '';

  // цикл проходить по рядку і кладе в результуючу змінну літеру або в верхньому або в нижньому регістрі
  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    if (Math.random() > 0.5) {
      resultString += letter.toUpperCase();
    } else {
      resultString += letter.toLowerCase();
    }
  }

  return resultString;
}

/**
 * функція, яка приймає рядок та повертає його варіант, де кожна літера випадково буде у врехньому або нижньому регістрі
 * @param {string} str - рядок який буде перетворено
 * @returns {string} змінений рядок
 */
function toRandomCase2(str) {
  let resultString = '';

  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    if (Math.random() > 0.5) {
      resultString += letter.toUpperCase();
    } else {
      resultString += letter.toLowerCase();
    }
  }

  return resultString;
}

/**
 * @param {number} num1
 * @param {number} num2
 * @returns {number}
 */
function declarationSum(num1, num2) {
  return num1 + num2;
}
/**
 * @param {number} num1
 * @param {number} num2
 * @returns {number}
 */
const expressionSum = function (num1, num2) {
  return num1 + num2;
};

// arrow function (функції - стрілки)

// arrowSum(); // error!

/**
 * @param {number} num1
 * @param {number} num2
 * @returns {number}
 */
const arrowSum = (num1 = 2, num2 = 4) => {
  return num1 + num2;
};

// 1. У них існує скорочена версія
const arrowSumCompact = (num1 = 2, num2 = 4) => num1 + num2;

const arr = ['test', 120, null, false, '123545', -15, true, {}];

const numbers1 = arr.filter(function (elem) {
  return typeof elem === 'number';
});

const numbers2 = arr.filter((elem) => typeof elem === 'number');

// 1.5 особливості запису дужок параметрів

const arrow1 = param => console.log(param); // ok

// const arrow2 = param, param2 => console.log(param); // error

// const arrow3 =  => console.log(param); // error

// 2. відсутній arguments
function test () {
  // console.log(arguments); // об'єкт
}

const arrowTest = () => {
  // console.log(arguments); // error
}

// 3. Не можуть використовуватися як конструктори
// const obj1 = new declarationSum();

// const obj2 = new arrowSum(); // error

// 4. У стрілок відсутній власний this
// стрілки беруть значення this з батьківськго контексту виконання

// console.log(this); // Window

const arrowThis = () => {
  console.log(this); // Window
}

const eShopObject = {
  name: 'єШоп',
  email: 'admin@eshop.com',
  products: [
    { name: 'Prod 1', price: 1000, quantity: 5},
    { name: 'Prod 2', price: 269.99, quantity: 5000},
    { name: 'Prod 3', price: 53.74, quantity: 1500000},
    { name: 'Prod 4', price: 9999.99, quantity: 51575},
    { name: 'Prod 5', price: 824.5, quantity: 115},
  ],
  logAllProducts: function () {
    debugger;
    this.products.forEach(function (product) {
      // Магазин єШоп продає на розетці товар з назвою Prod 1 і ціною 1000
      // вттрата контексту виконання this === undefined
      console.log(`Магазин ${this.name} продає на розетці товар з назвою ${product.name} і ціною ${product.price} `);
    });
  },
  logAllProductsFix1: function () {

    let that = this;

    this.products.forEach(function (product) {
      // Магазин єШоп продає на розетці товар з назвою Prod 1 і ціною 1000
      console.log(`Магазин ${that.name} продає на розетці товар з назвою ${product.name} і ціною ${product.price} `);
    });
  },
  logAllProductsFix2: function () {

    const callbackWithBadThis = function (product) {
      // console.log(this);
      // Магазин єШоп продає на розетці товар з назвою Prod 1 і ціною 1000
      console.log(`Магазин ${this.name} продає на розетці товар з назвою ${product.name} і ціною ${product.price} `);
    }

    const callback = callbackWithBadThis.bind(this);

    // this.products.forEach(callback);
    this.products.forEach(callbackWithBadThis.bind(this));
  },
  logAllProductsFix3: function () {
    this.products.forEach((product) => {
      // Магазин єШоп продає на розетці товар з назвою Prod 1 і ціною 1000
      console.log(`Магазин ${this.name} продає на розетці товар з назвою ${product.name} і ціною ${product.price} `);
    });
  },
  testMethod : () => {
    console.log(this); // Window
  }
}
