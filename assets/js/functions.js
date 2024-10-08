// Функції - блоки коду які можно повторно використовувати

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
